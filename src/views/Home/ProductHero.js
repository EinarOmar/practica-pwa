import * as React from 'react';
import ProductHeroLayout from './ProductHeroLayout';
import Typography from '../../components/items/Typography';
import { Link } from 'react-router-dom';
import backgroundImage from "./png/fondo2.jpg";
import { Button } from '@mui/material';


const ProductHero = () => {
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
      <Typography color="inherit" align="center" variant="h2" >
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
        to="/registro"
        sx={{
          minWidth: 200,
          backgroundColor: "#886750",
          ':hover': {
            backgroundColor: "#886750", // Mismo color que el color normal
          },
          transition: "background-color 0.3s", // Agregar una transición suave para el cambio de color
        }}
      >
        Registro
      </Button>
    
    </ProductHeroLayout>
  )
}

export default ProductHero
