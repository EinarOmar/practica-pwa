import React, { useState, useEffect } from "react";
import { Box, Grid, Toolbar, TextField, MenuItem, Button } from "@mui/material";
import { Bread } from "../../../components/customs/Bread";
import { Form } from "semantic-ui-react";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../elements/Elements.Tienda";
import MediaControlCard from "../MediaControlCard";
import GroupSkeleton from "../GroupSkeleton";
import { colores, tallas } from "./optionList";
import { app } from "../../../config/firebaseConnection";
const Calzado = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filters, setFilters] = useState({
    color: "",
    talla: "",
  });

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleFilterChange = (field, value) => {
    setBusqueda(""); // Borrar la búsqueda al cambiar los filtros
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    // Convertir la primera letra a mayúscula
    const capitalizedInput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setFilters({ color: "", talla: "" }); // Borrar los filtros al cambiar la búsqueda
    setBusqueda(capitalizedInput);
  };
  const obtenerInfo = async () => {
    let query = app.firestore().collection("productos");
  
    // Apply filters if color is selected
    if (filters.color && filters.color !== "Todos") {
      query = query.where("tipoCafe", "==", filters.color);
    }
  
    // Apply filters if size is selected
    if (filters.talla && filters.talla !== "Todos") {
      query = query.where("pais", "==", filters.talla);
    }
  
    // Apply search term if provided
    if (busqueda.trim() !== "") {
      query = query
        .where("nombre", ">=", busqueda.trim())
        .where("nombre", "<=", busqueda.trim() + "\uf8ff");
    }
  
    try {
      const response = await caches.match(query); // Intentar obtener la respuesta del caché
  
      if (response) {
        // Si la respuesta está en el caché, usarla
        const data = await response.json();
        setProyectos(data);
      } else {
        // Si la respuesta no está en el caché, obtenerla de Firebase
        const docList = await query.get();
  
        if (!docList.empty) {
          const proyectosArray = docList.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
  
          // Guardar en el caché para futuras solicitudes
          const cacheResponse = new Response(JSON.stringify(proyectosArray));
          caches.open("coffe-online-cache-v1").then((cache) => {
            cache.put(query, cacheResponse);
          });
  
          setProyectos(proyectosArray);
        }
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  
  useEffect(() => {
    obtenerInfo();
  }, [filters, busqueda]);

  const handleSearch = () => {
    obtenerInfo();
  };

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
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{ bgcolor: "background.paper", p: 1 }}
      >
        <Grid item xs={12}>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search" }}
                value={busqueda}
                onChange={handleSearchChange}
              />
            </Search>
          </Toolbar>
        </Grid>

        <Grid item md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Tipo Café"
            type="text"
            name="color"
            color="secondary"
            onChange={(e) => handleFilterChange("color", e.target.value)}
            value={filters.color || ""}
            autoComplete="off"
            sx={{
              borderColor: "#886750", // Color del contorno
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#886750", // Color del contorno cuando no está enfocado
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#886750", // Color del contorno durante hover
              },
            }}
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
            onChange={(e) => handleFilterChange("talla", e.target.value)}
            value={filters.talla || ""}
            autoComplete="off"
            sx={{
              borderColor: "#886750", // Color del contorno
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#886750", // Color del contorno cuando no está enfocado
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#886750", // Color del contorno durante hover
              },
            }}
          >
            {tallas.map((talla) => (
              <MenuItem key={talla.value} value={talla.value}>
                {talla.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <Box display="flex" height="100%">
            <Button
              fullWidth
              variant="contained"
              onClick={handleSearch}
              sx={{
                ml: 2,
                backgroundColor: "#886750", // Color de fondo (café)
                color: "#ffffff", // Color de las letras (blanco)
                borderColor: "#886750",
                "&:hover": {
                  backgroundColor: "#886750",
                  color: "#ffffff",
                },
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
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
            proyectos.map((proyecto, index) => (
              <Grid item xs={12} sm={12} md={12} lg={6} xl={4} key={index}>
                <MediaControlCard
                  proyecto={proyecto}
                  handleClickOpen={handleClickOpen}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Calzado;
