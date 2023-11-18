import * as React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as LinkRoute } from "react-router-dom";
import Typography from "../../components/items/Typography";
import AppForm from "../Home/AppForm";
import { email, required } from "../../components/form/validation";
// import RFTextField from '../../components/form/RFTextField';
import FormButton from "../../components/form/FormButton";
import FormFeedback from "../../components/form/FormFeedback";
import withRoot from "../../styles/withRoot";
import { TextField } from "@mui/material";
import { app } from "../../config/firebaseConnection";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";
function SignIn() {
  const { login } = useAuth();

  const [sent, setSent] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = required(["email", "password"], values);
    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    if (!password) return;
    const coleccionRef = app.firestore().collection("usuarios");
    // Realizar la consulta para verificar si el correo ya existe
    const querySnapshot = await coleccionRef.where("email", "==", email).get();
    if (!querySnapshot.empty) {
      // El correo ya existe, validar la contraseña
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      const storedPassword = userData.password;
      await login(email, password);
      if (encrypt(password) !== storedPassword) {
        // Contraseña incorrecta
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Contraseña incorrecta",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      navigate("/inicio");
    } else {
      // El correo no existe
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Correo no registrado, por favor regístrate",
        showConfirmButton: false,
        timer: 3500,
      });
      return;
    }
  };
  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Iniciar sesion
          </Typography>
          <Typography variant="body2" align="center">
            {"¿No eres miembro? "}
            <Link
              component={LinkRoute}
              to="/registro"
              align="center"
              underline="always"
            >
              Registrarse
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit2}
              noValidate
              sx={{ mt: 6 }}
            >
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
                error={email.length === 0 || !/\S+@\S+\.\S+/.test(email)}
                helperText={
                  email.length === 0
                    ? "El correo electrónico no puede estar vacío"
                    : !/\S+@\S+\.\S+/.test(email)
                    ? "Ingrese un correo electrónico válido"
                    : ""
                }
              />
              <br />
              <br />

              <TextField
                fullWidth
                label="Contraseña"
                name="password"
                type="password"
                value={password || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setPassword(value);
                }}
                required
                error={
                  (password.length > 0 &&
                    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(
                      password
                    )) ||
                  password.length === 0
                }
                helperText={
                  password.length === 0 ? (
                    <span style={{ color: "red" }}>
                      La contraseña no puede estar vacía
                    </span>
                  ) : password.length > 0 &&
                    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(
                      password
                    ) ? (
                    "La contraseña debe tener al menos 5 caracteres, incluyendo al menos 1 letra minúscula, 1 letra mayúscula, 1 número y 1 carácter especial."
                  ) : (
                    ""
                  )
                }
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
                sx={{
                  mt: 3,
                  mb: 2,
                  minWidth: 200,
                  backgroundColor: "#886750", // Color de fondo inicial
                  ":hover": {
                    backgroundColor: "#886750", // Mismo color que el color normal durante hover
                  },
                  transition: "background-color 0.3s", // Agregar una transición suave para el cambio de color
                }}
                fullWidth
                type="submit"
                onClick={handleSubmit}
              >
                Iniciar sesión
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignIn);
