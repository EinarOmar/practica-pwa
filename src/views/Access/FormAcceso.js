import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Link as LinkRoute } from 'react-router-dom';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../../components/items/Typography';
import AppForm from '../Home/AppForm';
import { email, required } from '../../components/form/validation';
import RFTextField from '../../components/form/RFTextField';
import FormButton from '../../components/form/FormButton';
import FormFeedback from '../../components/form/FormFeedback';
import withRoot from '../../styles/withRoot';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { app } from "../../config/firebaseConnection";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from "../../context/AuthContext";
import { db } from "../../config/firebase";
import { doc,getDoc,setDoc} from "firebase/firestore";
function SignUp() {
  const { signup } = useAuth();
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const isPasswordValid = password.length > 0 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(password);
  const isSubmitDisabled = !firstName || !lastName || !email || !isPasswordValid;

  const key = "abcdefghijklmnñopqrstuvwxyz0123456789@$!%*?&";

  const encrypt = (text) => {
    const textLength = text.length;
    let encrypted = "";
    for (let i = 0; i < textLength; i++) {
      const char = text[i].toLowerCase();
      const index = key.indexOf(char);
      if (index !== -1) {
        const shift = textLength - i;
        const newIndex = (index + shift) % key.length;
        encrypted += key[newIndex];
      } else {
        encrypted += char;
      }
    }
    return encrypted;
  };

  const validate = (values) => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitDisabled) return;

    try {
      const info = await signup(email, password);
      console.log("Info:", info); // Imprime información en la consola

      const referencia = doc(db, "usuarios", info.user.uid); // Definir la referencia correcta
      const querySnapshot = await getDoc(referencia); // Obtener el documento existente (opcional)

      if (querySnapshot.exists()) {
        console.log('El correo ya está registrado');
        alert('Correo existente, prueba con otro');
        return;
      }

      await setDoc(referencia, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: encrypt(password),
        tipo_Usuario: 'consultador',
      });

      navigate('/inicio');
    } catch (error) {
      console.log("Error:", error); // Imprime información en la consola si hay algún error
    }
  };
  

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link component={LinkRoute} to="/sign-in" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First name"
                    name="firstName"
                    value={firstName || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      const regex = /^[a-zA-Z\s]*$/;
                      if (regex.test(value)) {
                        setFirstName(value);
                      }
                    }}
                    required
                    error={
                      firstName.length === 0 ||
                      firstName.length < 3 ||
                      firstName.length > 30
                    }
                    helperText={
                      firstName.length === 0
                        ? "El nombre no puede estar vacío"
                        : firstName.length < 3
                          ? "El nombre no puede tener menos de 3 caracteres"
                          : firstName.length > 30
                            ? "El nombre no puede tener más de 30 caracteres"
                            : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last name"
                    name="LastName"
                    value={lastName || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      const regex = /^[a-zA-Z\s]*$/;
                      if (regex.test(value)) {
                        setLastName(value);
                      }
                    }}
                    required
                    error={
                      lastName.length === 0 ||
                      lastName.length < 3 ||
                      lastName.length > 30
                    }
                    helperText={
                      lastName.length === 0
                        ? "El apellido no puede estar vacío"
                        : lastName.length < 3
                          ? "El apellido no puede tener menos de 3 caracteres"
                          : lastName.length > 30
                            ? "El apellido no puede tener más de 30 caracteres"
                            : ""
                    }
                  />
                </Grid>
              </Grid>
              <br />
              <TextField
                fullWidth
                label="Correo electrónico"
                name="email"
                type="email"
                value={email || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                }}
                required
                error={
                  email.length === 0 ||
                  !/\S+@\S+\.\S+/.test(email)
                }
                helperText={
                  email.length === 0
                    ? "El correo electrónico no puede estar vacío"
                    : !/\S+@\S+\.\S+/.test(email)
                      ? "Ingrese un correo electrónico válido"
                      : ""
                }
              />
              <br /><br />
              <TextField
                fullWidth
                label="Contraseña"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={!isPasswordValid}
                helperText={
                  !isPasswordValid
                    ? 'La contraseña debe tener al menos 5 caracteres, incluyendo al menos 1 letra minúscula, 1 letra mayúscula, 1 número y 1 carácter especial.'
                    : ''
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
                fullWidth
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
              >
                Registrar
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignUp);
