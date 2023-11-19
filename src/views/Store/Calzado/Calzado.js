import React, { useState, useEffect } from "react";
// import { WrapperSingleRoute } from "../../../components/customs/WrapperSingleRoute";
import { Grid, Toolbar, TextField, MenuItem, Box, Button } from "@mui/material";
import { Bread } from "../../../components/customs/Bread";
import { Form } from "semantic-ui-react";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import RollerSkatingOutlinedIcon from "@mui/icons-material/RollerSkatingOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../elements/Elements.Tienda";
import { colores, tallas, marcas, generos } from "./optionList";
import GroupSkeleton from "../GroupSkeleton";
import { app } from "../../../config/firebaseConnection";
import MediaControlCard from '../MediaControlCard';

const Calzado = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const [color, setColor] = useState("");
  const [talla, setTalla] = useState("");
  const [proyectos, setProyectos] = useState([]);

  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("productos").get();
    if (!docList.empty) {
      const proyectosArray = docList.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      }));
      setProyectos(proyectosArray);
    }
  };

  useEffect(() => {
    obtenerInfo();
  }, []);


  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Grid container>
        <Grid item xs={12}>
          <Bread
            migas={[
              { miga: "INICIO", ruta: "/inicio", icono: <HomeIcon /> },
              { miga: "TIENDA", ruta: "/tienda", icono: <StoreIcon /> },
             
            ]}
          />
        </Grid>
      </Grid>
      {/* Contenido */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{ bgcolor: "background.paper", p: 1 }}
      >
        {/* B U S C A D O R 1 */}
        <Grid item xs={12}>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search" }}
                // value={busqueda}
                // onChange={handleChange}
              />
            </Search>
          </Toolbar>
        </Grid>

        {/* B U S C A D O R 2 -- FIltros*/}
        <Grid item md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Tipo Café"
            type="text"
            name="color"
            color="secondary"
            onChange={(e) => setColor(e.target.value)}
            value={color || ""}
            autoComplete="off"
          >
            {colores.map((color) => (
              <MenuItem key={color.value} value={color.value}>
                {color.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Pais"
            type="text"
            color="secondary"
            name="talla"
            onChange={(e) => setTalla(e.target.value)}
            value={talla || ""}
            autoComplete="off"
          >
            {tallas.map((talla) => (
              <MenuItem key={talla.value} value={talla.value}>
                {talla.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* BUSCADOR */}
        <Grid item md={4} sm={12} xs={12}>
          <Box display="flex" height="100%">
            <Button fullWidth variant="contained" sx={{
        minWidth: 200,
        backgroundColor: "#886750",
        ':hover': {
          backgroundColor: "#886750", // Mismo color que el color normal
        },
        transition: "background-color 0.3s", // Agregar una transición suave para el cambio de color
      }}>
              {" "}
              {/* onClick={handleSearch} */}
              Buscar
            </Button>
          </Box>
        </Grid>

      </Grid>
      <Box sx={{ p: { xs: 1, md: 3 }, flexGrow: 1 }}>
        <Grid container spacing={{ xs: 3, sm: 2, md: 2 }}>
          {proyectos.length === 0 ? (
            <GroupSkeleton />
          ) : (
            proyectos.map((proyecto, index) => {
              return (
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4} key={index}>
                  <MediaControlCard
                    proyecto={proyecto}
                    handleClickOpen={handleClickOpen}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Calzado;
