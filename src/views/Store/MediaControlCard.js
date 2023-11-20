import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import {
  ChevronRightRounded,
  LocalGroceryStoreRounded,
} from "@mui/icons-material";

const MediaControlCard = ({ proyecto, handleClickOpen }) => {
  return (
    <Card elevation={5} sx={{ transition: "0.2s", "&:hover": { transform: "scale(1.03)" }, display: "flex", flexDirection: { xs: "column", sm: "row", md: "row" }, minHeight: { xs: 100, sm: 150, md: 200, lg: 250, xl: "100%" }, borderRadius: 2 }}>
      <CardMedia onClick={() => handleClickOpen(proyecto)} component="img" sx={{ maxWidth: { xs: "100%", sm: 200, md: 350, lg: 180, xl: 180 }, height: { xs: 200, sm: 200, md: 200, lg: 250, xl: 250 }, objectFit: "cover", "&:hover": { cursor: "pointer" } }} image={proyecto.data.imageURL} alt={proyecto.data.nombre} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" color="text.secondary">
            {proyecto.data.nombre}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {`${proyecto.data.descripcion.slice(0, 100)}...`}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {`Precio: $${proyecto.data.precio}`}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <CardActions>
            <Button aria-label="ir a la vista amplia del producto" variant="contained" sx={{ backgroundColor: "#886750", "&:hover": { backgroundColor: "#886750" } }} size="small" endIcon={<ChevronRightRounded />}>
              Ver
            </Button>
            <Button aria-label="añadir producto al carrito de compras" variant="outlined" size="small" color="secondary" endIcon={<LocalGroceryStoreRounded />} sx={{ ml: 2,
                   color: "#886750", // Color de las letras (café)
                   borderColor: "#886750", // Contorno inicial de color café
                   "&:hover": {
                     backgroundColor: "#886750", // Color de fondo durante hover (café)
                     color: "#ffffff", // Color de las letras durante hover (blanco)
                   },
                   transition: "background-color 0.3s, color 0.3s",  }}>
              Añadir
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default MediaControlCard;
