import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { storage, firestore } from "../../config/firebase";

export const colores = [
  { value: "SN", label: "SN" },
  { value: "Espresso", label: "Espresso" },
  { value: "Café filtrado", label: "Café filtrado" },
  { value: "Café con leche", label: "Café con leche" },
  { value: "Café helado", label: "Café helado" },
  { value: "Café con sabor", label: "Café con sabor" },
  { value: "Café tradicional", label: "Café tradicional" },
];

export const tallas = [
  { value: "SN", label: "SN" },
  { value: "Italia", label: "Italia" },
  { value: "México", label: "México" },
  { value: "Irlanda", label: "Irlanda" },
  { value: "Turquía", label: "Turquía" },
  { value: "Austria", label: "Austria" },
  { value: "Cuba", label: "Cuba" },
];

function Administrador() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [pais, setPais] = useState("");
  const [tipoCafe, setTipoCafe] = useState("");
  const [imagen, setImagen] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const { user } = useAuth();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);

      setImagen(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !descripcion || !precio || !pais || !tipoCafe || !imagen) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios.",
      });
      return;
    }

    try {
      const productosCollection = collection(firestore, "productos");

      const newProduct = {
        nombre,
        descripcion,
        precio: parseFloat(precio),
        pais,
        tipoCafe,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(productosCollection, newProduct);

      const storageRef = ref(storage, `productos/${docRef.id}/${imagen.name}`);
      await uploadBytes(storageRef, imagen);

      Swal.fire({
        icon: "success",
        title: "¡Producto agregado!",
        text: "El producto se ha agregado correctamente.",
        showConfirmButton: false,
        timer: 1500,
      });

      setNombre("");
      setDescripcion("");
      setPrecio("");
      setPais("");
      setTipoCafe("");
      setImagen(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error("Error al agregar el producto:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Se produjo un error al intentar agregar el producto.",
      });
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh", color: "#e1d9ce" }}
    >
      <Card sx={{ maxWidth: 400, marginBottom: 20, marginLeft: 'auto', marginRight: 'auto' }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Agregar Producto
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} justifyContent="center">
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
                  label="Descripción"
                  variant="outlined"
                  name="descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Precio"
                  variant="outlined"
                  name="precio"
                  type="number"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginBottom: 4 }}
                >
                  País
                </Typography>
                <Select
                  label="País"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                  fullWidth
                >
                  {tallas.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginBottom: 4 }}
                >
                  Tipo de Café
                </Typography>
                <Select
                  label="Tipo de Café"
                  value={tipoCafe}
                  onChange={(e) => setTipoCafe(e.target.value)}
                  fullWidth
                >
                  {colores.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Vista previa"
                    style={{
                      width: "auto",
                      height: "100px",
                      display: "block",
                      margin: "0 auto",
                      marginBottom: 8,
                    }}
                  />
                )}
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="icon-button-file">
                  <Button
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    fullWidth
                  >
                    {imagen ? "Cambiar Imagen" : "Seleccionar Imagen"}
                  </Button>
                </label>
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
                  Agregar Producto
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Administrador;
