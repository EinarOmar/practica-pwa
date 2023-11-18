import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../../components/items/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://media.gq.com.mx/photos/622924b7a3cf727998b597c3/master/pass/ropa-interior-para-hombre-para-resaltar-el-pene-paquete.jpg',
    title: 'HOMBRE',
    width: '50%',
    path: '/tienda/hombre'
  },
  {
    url: 'https://imagenes.elpais.com/resizer/In2qgllaWZblEKLyKZBcz5dnhQU=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/PNZKRZEUI5DIDEPCLXJBRUBGXA.jpg',
    title: 'MUJER',
    width: '50%',
    path: '/tienda/mujer'
  },
  {
    url: 'https://m.media-amazon.com/images/S/aplus-media/sc/772205cd-0aa9-4674-9809-0b9b9ffcec64.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    title: 'NIÑO',
    width: '50%',
    path: '/tienda/niño'
  },
  {
    url: 'https://i.pinimg.com/474x/2f/67/78/2f677820433a8ae69662c0ac5fea9d81.jpg',
    title: 'NIÑA',
    width: '50%',
    path: '/tienda/niña'
  },
];

export default function ProductCategories() {
  const redirectToRoute = (route) => {
    window.location.href = route;
  };
  
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" >
        <Button variant='text' sx={{fontSize:  40, color: "text.primary" }} component={Link} to="/tienda">
          Secciones
        </Button>

      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
            component={Link}
            to={`${image.path}`}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
