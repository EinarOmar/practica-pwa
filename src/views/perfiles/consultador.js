import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { deleteObject } from "firebase/storage";
import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, firestore } from "../../config/firebase";

function Consultador() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [foto, setFoto] = useState(null);
  const [fotoURL, setFotoURL] = useState(null);
  const { logout, user, userInfo } = useAuth(); // Asumiendo que `userInfo` está disponible desde tu AuthContext
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // Intentar obtener la información del usuario desde el almacenamiento local
      const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (storedUserInfo) {
        setNombre(storedUserInfo.firstName || "");
        setApellido(storedUserInfo.lastName || "");
        setFotoURL(storedUserInfo.url || null);
        setData(storedUserInfo);
      } else if (user) {
        try {
          const userDocRef = doc(firestore, `usuarios/${user.uid}`);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setData(userData);

            setNombre(userData.firstName || "");
            setApellido(userData.lastName || "");
            setFotoURL(userData.url || null);

            // Almacenar la información del usuario en el almacenamiento local
            localStorage.setItem("userInfo", JSON.stringify(userData));
          }
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
        }
      }
    };

    fetchData();
  }, [user]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFotoURL(URL.createObjectURL(selectedFile));
      setFoto(selectedFile);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && allowedTypes.includes(file.type)) {
      setFoto(file);
    } else {
      // Mostrar mensaje de error si el archivo no es una imagen válida
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, selecciona una imagen válida (JPEG, PNG o GIF).",
      });
      // Limpiar el input de la imagen para evitar que el usuario intente volver a cargar el mismo archivo
      e.target.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (nombre.length < 2 || /\d/.test(nombre)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El nombre debe tener al menos 2 caracteres y no puede contener números.",
      });
      return;
    }
    
    if (apellido.length < 2 || /\d/.test(apellido)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El apellido debe tener al menos 2 caracteres y no puede contener números.",
      });
      return;
    }

    // Actualizar la información del usuario
    try {
        const userDocRef = doc(firestore, "usuarios", user.uid);
    
        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
    
        // Capitalizar la primera letra de nombre y apellido
        const nombreCapitalizado = capitalizeFirstLetter(nombre);
        const apellidoCapitalizado = capitalizeFirstLetter(apellido);
    
        // Objeto con los valores a actualizar
        const updatedValues = {
          firstName: nombreCapitalizado,
          lastName: apellidoCapitalizado,
        };
    
        // Actualizar el documento con los valores capitalizados
        await updateDoc(userDocRef, updatedValues);
    
        // Actualizar la imagen principal solo si se seleccionó una nueva imagen
        if (foto) {
          // Antes de subir la nueva imagen, eliminamos la anterior
          if (fotoURL) {
            const previousImageRef = ref(storage, `images/${user.uid}/`);
            deleteObject(previousImageRef).catch((error) => {
              console.error("Error al eliminar la imagen anterior:", error);
            });
          }
    
          // Subir la nueva imagen
          const storageRef = ref(storage, `images/${user.uid}/${foto.name}`);
          await uploadBytes(storageRef, foto);
          const downloadURL = await getDownloadURL(storageRef);
    
          // Actualizar el campo 'url' en la base de datos con la nueva URL de la imagen
          updatedValues.url = downloadURL;
          await updateDoc(userDocRef, updatedValues);
    
          // Actualizar el estado con la nueva URL
          setFotoURL(downloadURL);
        }
    
        // Mostrar mensaje de éxito
        Swal.fire({
          icon: "success",
          title: "¡Edición exitosa!",
          text: "Los datos se han actualizado correctamente.",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.error("Error al actualizar los datos:", error);
    
        // Mostrar mensaje de error
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Se produjo un error al intentar editar los datos.",
        });
      }
    };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Card style={{ maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Bienvenido {nombre}
          </Typography>
          {data ? (
            <Avatar
              alt="Imagen de perfil"
              src={fotoURL}
              sx={{ width: 120, height: 120, margin: "0 auto" }}
            />
          ) : (
            <Avatar sx={{ width: 100, height: 100, margin: "0 auto" }}>
              C
            </Avatar>
          )}
          <Typography variant="h6" align="center" gutterBottom>
            Consultor
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Apellido"
                  variant="outlined"
                  name="apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginBottom: 4 }}
                >
                  Seleccionar Imagen
                </Typography>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    {fotoURL ? (
                      <Avatar
                        alt="Imagen de perfil"
                        src={fotoURL}
                        sx={{ width: 36, height: 36 }}
                      />
                    ) : (
                      <EditIcon sx={{ fontSize: 36 }} />
                    )}
                  </IconButton>
                </label>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  name="foto"
                  onChange={handleImageChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#886750",
                    ":hover": {
                      backgroundColor: "#886750",
                    },
                    transition: "background-color 0.3s",
                  }}
                  fullWidth
                >
                  Editar
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Consultador;
