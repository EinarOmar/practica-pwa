import { Avatar, Box, Button, Chip, Divider, Grid, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { ItemListCard } from '../../components/customs/ItemListCard'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HomeRounded, StoreRounded, LocalOfferRounded } from '@mui/icons-material';

const DetalleProduct = ({ productos }) => {
  const [datos, setDatos] = useState("");

  const params = useParams();

  useEffect(() => {
    console.log(productos);
    let p = productos.filter(producto => producto.id === params.id);
    setDatos(p[0].data());
    console.log(datos)
  }, []);

  const tematicaMayusculas = datos.categoria ? datos.categoria.toUpperCase() : '';
  const tematicaMinusculas = datos.categoria ? datos.categoria.toLowerCase() : '';

  return (
    <WrapperSingleRoute>
      {/* BREADCUMBS */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 3, md: 5 }}
      >
        <Grid item xs >
          <Bread migas={[{ miga: "INICIO", ruta: "/inicio", icono: <HomeRounded /> }, { miga: "TIENDA", ruta: "/tienda", icono: <StoreRounded /> },{miga: `${tematicaMayusculas}`, ruta: `/tienda/${tematicaMinusculas}`, icono: <LocalOfferRounded />}, { miga: `${datos.nombre}`, ruta: `/tienda/${params.id}`, icono: <LocalOfferRounded /> }]} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <ItemListCard
            img={datos.url}
            heightImg={500}
            showContent={false}
          />

          <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid item xs={6} md={4} >
              <ItemListCard
                img={datos.url}
                heightImg={150}
                showContent={false}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <ItemListCard
                img={datos.url}
                heightImg={150}
                showContent={false}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <ItemListCard
                img={datos.url}
                heightImg={150}
                showContent={false}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={5}>
                <Paper sx={{p:1, m:2}}>
                    <Typography variant='h3' textAlign="center" component="p" >
                        {datos.nombre}
                    </Typography>
                    <Typography variant='h5' textAlign="center" component="p" fontWeight="10" p={3}>
                        ${datos.costo} MXN
                    </Typography>
                    <Typography variant='body1' textAlign="center" component="p" fontWeight="10">
                        {datos.descripcion}
                    </Typography>
                    <Box textAlign="center" p={3}>
                        <Typography fontWeight="bold" textAlign="left">Categoria(s):</Typography>
                        <Chip label={datos.categoria} color="primary" variant="outlined" sx={{mr:1}} />
                    </Box>
                    <Divider variant='inset' light />
                    <Box textAlign="left" p={3}>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" startIcon={<AttachMoneyIcon/>}>Buy</Button>
                            <Button variant="outlined" startIcon={<ShoppingCartIcon/>}>Add car</Button>
                        </Stack>
                    </Box>
                </Paper>
            </Grid>

      </Grid>

      <Grid container >
        <Grid item xs>
          <Paper sx={{ ml: 5, mr: 5, p: 3, bgcolor: 'background.default' }} elevation={2}>
            <Typography variant='h5' textAlign="left" component="p" fontWeight="bold" p={1}>
              Productos relacionados
            </Typography>

            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} md={4}>
                <ItemListCard
                  img={datos.url}
                  heightImg={250}
                  showContent={false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ItemListCard
                  img={datos.url}
                  heightImg={250}
                  showContent={false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ItemListCard
                  img={datos.url}
                  heightImg={250}
                  showContent={false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ItemListCard
                  img={datos.url}
                  heightImg={250}
                  showContent={false}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </WrapperSingleRoute>

  )
}

export default DetalleProduct