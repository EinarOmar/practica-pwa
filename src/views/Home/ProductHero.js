import React, { useState, useEffect } from "react";
import ProductHeroLayout from './ProductHeroLayout';
import Typography from '../../components/items/Typography';
import { Link } from 'react-router-dom';
import backgroundImage from "./png/fondo2.jpg";
import { Button } from '@mui/material';

import { db } from "../../config/firebase";
import { useAuth } from "../../context/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
const ProductHero = () => {
  const { logout, user } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, `usuarios/${user.uid}`);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            setData(userDocSnap.data());
          }
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
        }
      }
    };

    fetchData();
  }, [user]);

  const buttonText = user ? 'Perfil' : 'Registro';
  // Verificar si data existe y tiene la propiedad tipo_Usuario
  const buttonLink = user && data && data.tipo_Usuario ? `/${data.tipo_Usuario}` : '/registro';

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#A5A7AC',
        backgroundPosition: 'center',
      }}
    >
      {/* Aumentar la prioridad de carga de la imagen de fondo. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
        color="inherit"
      />
      <Typography color="inherit" align="center" variant="h2">
        Despierta tus sentidos con cada sorbo, vive el aroma inigualable del auténtico sabor en cada taza.
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        No te quedes con las ganas, ¡compralo ya y vive la experiencia única del auténtico café en cada taza!
      </Typography>
      <Button
        variant="contained"
        size="large"
        component={Link}
        to={buttonLink}
        sx={{
          minWidth: 200,
          backgroundColor: "#886750",
          ':hover': {
            backgroundColor: "#886750",
          },
          transition: "background-color 0.3s",
        }}
      >
        {buttonText}
      </Button>
    </ProductHeroLayout>
  );
}

export default ProductHero;