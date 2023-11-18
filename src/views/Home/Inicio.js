import * as React from "react";
import ProductHero from "./ProductHero";
import ProductValues from "./ProductValues";
import ProductHowItWorks from "./ProductHowItWorks";
import Typography from "@mui/material/Typography"; // Add this import
import { WavyDivider } from "../../components/customs/WavyDivider";
import {
  ArrowForward,
  Directions,
  LocalFlorist,
  Pets,
} from "@mui/icons-material";
import {
  Paper,
  Button,
  Box,
  useMediaQuery,
  Grid,
  useTheme,
  Container,
  Divider,
} from "@mui/material";
import imagenLateral from "../Home/png/cafe2.jpg";
import olla from "../Home/png/olla.jpg";
import capuchino from "../Home/png/capuchino.jpg";
import moka from "../Home/png/moka.jpg";
import moka2 from "../Home/png/moka2.jpg";

import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
export const Inicio = () => {
  const theme = useTheme();

  // Check if theme is defined
  if (!theme) {
    console.error("Theme is undefined");
    return null; // or render a fallback component
  }

  // Check if palette is defined
  if (!theme.palette) {
    console.error("Palette is undefined in the theme");
    return null; // or render a fallback component
  }

  // Check if background is defined
  const backgroundColor = theme.palette.background?.paper || "defaultColor";

  return (
    <React.Fragment>
      <ProductHero />

      <Box
        sx={{
          background: backgroundColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <WavyDivider invertColors />

        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
            {/* SECTION TWO -- FUNDACIÓN */}
            <Grid container columnSpacing={2} py={5} my={{ xs: 0, md: 5 }}>
              <Grid
                item
                container
                xs={12}
                lg={4}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                {/* Removed unused Typography color prop */}
                <Typography
                  gutterBottom
                  variant="h4"
                  component="p"
                  fontWeight={700}
                >
                  Un Viaje por Culturas Milenarias en Cada Sorbo
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                {/* Removed unused Typography color prop */}
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="text.secondary"
                >
                  El café, más que una bebida, es un viaje que nos conecta con
                  culturas milenarias. Desde sus orígenes en las tierras altas
                  de Etiopía, el café ha viajado por el mundo, tejiendo
                  historias y creando momentos inolvidables. En cada grano,
                  llevamos consigo el legado de generaciones que han compartido
                  este brebaje, transformándolo en una experiencia única que une
                  a personas de todos los rincones del planeta.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
            {/* SECTION THREE -- COLABORADORES */}
            <Grid container columnSpacing={2} py={5} my={5}>
              <Grid item xs={12} lg={12}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="p"
                  color="#886750"
                  fontWeight="400"
                  textAlign="center"
                >
                  Café: Un Paseo por el Mundo en Tres Sabores Únicos
                </Typography>
              </Grid>

              <Grid item container alignItems="center" xs={12} sm={6} md={4}>
                <Img alt="img-intro-colaboradores" src={imagenLateral} />
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={6}
                md={8}
                direction="column"
                justifyContent="center"
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="p"
                  color="text.secondary"
                >
                  Sabías que el café es la segunda mercancía más comercializada
                  en el mundo, solo superada por el petróleo. Esta pequeña
                  semilla ha desencadenado un fenómeno global que va más allá de
                  su sabor: es un símbolo de encuentros, conversaciones y
                  momentos compartidos.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
            <Divider />
            {/* SECTION FOUR -- FLORA */}
            <Grid
              container
              columnSpacing={2}
              rowSpacing={2}
              py={5}
              my={5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                item
                container
                xs={12}
                sm={6}
                md={5}
                direction="column"
                justifyContent="center"
                alignItems="center"
                order={{ xs: 2, sm: 1 }}
              >
                <Typography
                  variant="overline"
                  component="p"
                  color="text.secondary"
                  textAlign="center"
                >
                  Café de Olla
                </Typography>
                <Typography
                  variant="h4"
                  component="p"
                  color="#886750"
                  fontWeight={700}
                  textAlign="center"
                >
                  Calidez Mexicana en Cada Taza
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="p"
                  color="text.secondary"
                  textAlign="center"
                >
                  El café de olla, arraigado en la tradición mexicana, no solo
                  es una deliciosa mezcla de café, canela y piloncillo, sino que
                  también representa la calidez de la cultura y la hospitalidad.
                  Cada sorbo es como un abrazo reconfortante que te transporta a
                  los rincones más acogedores de México
                </Typography>
                <Button
                 aria-label="Comprar Café de Olla"
                 variant="outlined"
                 component={Link}
                 to="/tienda"
                 endIcon={<LocalCafeIcon />}
                 sx={{
                   borderRadius: 5,
                   color: "#886750", // Color de las letras (café)
                   borderColor: "#886750", // Contorno inicial de color café
                   "&:hover": {
                     backgroundColor: "#886750", // Color de fondo durante hover (café)
                     color: "#ffffff", // Color de las letras durante hover (blanco)
                   },
                   transition: "background-color 0.3s, color 0.3s", // Agregar una transición suave para el cambio de color
                 }}
               >
                  comprar
                </Button>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                xs={12}
                sm={6}
                md={7}
                order={{ xs: 1, sm: 2 }}
              >
                <Img alt="img-coffee" src={olla} />
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
            {/* SECTION FIVE -- FAUNA */}
            <Grid container columnSpacing={2} rowSpacing={2} py={5} my={5}>
              <Grid
                item
                container
                alignItems="center"
                xs={12}
                sm={6}
                md={7}
                order={{ xs: 1, sm: 1 }}
              >
                <Img alt="img-fauna" src={capuchino} />
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={6}
                md={5}
                direction="column"
                justifyContent="center"
                order={{ xs: 2, sm: 2 }}
              >
                <Typography
                  variant="overline"
                  component="p"
                  color="text.secondary"
                  textAlign="center"
                >
                  Café Capuchino
                </Typography>
                <Typography
                  variant="h4"
                  component="p"
                  color="#886750"
                  fontWeight={700}
                  textAlign="center"
                >
                  Armonía Italiana en una Taza
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="p"
                  color="text.secondary"
                  textAlign="center"
                >
                  El café capuchino, con su combinación perfecta de espresso,
                  leche vaporizada y espuma de leche, debe su nombre a los
                  monjes capuchinos, cuyos hábitos marrones se asemejaban al
                  color de esta bebida. Disfrutar de un capuchino es sumergirse
                  en la tradición italiana y en una experiencia que celebra la
                  armonía de los ingredientes más simples.
                </Typography>
                <Button
                 aria-label="Comprar Café de Olla"
                 variant="outlined"
                 component={Link}
                 to="/tienda"
                 endIcon={<LocalCafeIcon />}
                 sx={{
                   borderRadius: 5,
                   color: "#886750", // Color de las letras (café)
                   borderColor: "#886750", // Contorno inicial de color café
                   "&:hover": {
                     backgroundColor: "#886750", // Color de fondo durante hover (café)
                     color: "#ffffff", // Color de las letras durante hover (blanco)
                   },
                   transition: "background-color 0.3s, color 0.3s", // Agregar una transición suave para el cambio de color
                 }}
               >
                  comprar
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
            <Divider />
            {/* SECTION FOUR -- FLORA */}
            <Grid
              container
              columnSpacing={2}
              rowSpacing={2}
              py={5}
              my={5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                item
                container
                xs={12}
                sm={6}
                md={5}
                direction="column"
                justifyContent="center"
                alignItems="center"
                order={{ xs: 2, sm: 1 }}
              >
                <Typography
                  variant="overline"
                  component="p"
                  color="text.secondary"
                  textAlign="center"
                >
                 Café Moka
                </Typography>
                <Typography
                  variant="h4"
                  component="p"
                  color="#886750"
                  fontWeight={700}
                  textAlign="center"
                >
                  Fusión Global de Intensidad y Dulzura
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="p"
                  color="text.secondary"
                  textAlign="center"
                >
                  El café moka, con su mezcla irresistible de café, chocolate y
                  leche, toma su nombre del puerto yemení de Mocha, famoso por
                  su café de alta calidad. Esta deliciosa fusión de sabores ha
                  conquistado paladares en todo el mundo, ofreciendo una
                  experiencia que combina la intensidad del café con la dulzura
                  del chocolate en cada sorbo.
                </Typography>
                <Button
                  aria-label="Comprar Café de Olla"
                  variant="outlined"
                  component={Link}
                  to="/tienda"
                  endIcon={<LocalCafeIcon />}
                  sx={{
                    borderRadius: 5,
                    color: "#886750", // Color de las letras (café)
                    borderColor: "#886750", // Contorno inicial de color café
                    "&:hover": {
                      backgroundColor: "#886750", // Color de fondo durante hover (café)
                      color: "#ffffff", // Color de las letras durante hover (blanco)
                    },
                    transition: "background-color 0.3s, color 0.3s", // Agregar una transición suave para el cambio de color
                  }}
                >
                  comprar
                </Button>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                xs={12}
                sm={6}
                md={7}
                order={{ xs: 1, sm: 2 }}
              >
                <Img alt="img-coffee" src={moka2} />
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Box>
    </React.Fragment>
  );
};
const Img = styled("img")({
  maxWidth: "100%",
  height: "auto",
});
