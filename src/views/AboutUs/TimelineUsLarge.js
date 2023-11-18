import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import { Card, CardMedia, Box, Typography, Fade, Grow } from "@mui/material";

const TimelineUsLarge = ({ imgAus, imgMural, imgMural2 }) => {
  const [componentLoaded, setComponentLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 100);
  }, []);

  return (
    <Timeline position="alternate">
      {/* PRIMERO - QUIENES SOMOS */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Fade in={componentLoaded}>
            <Card
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <CardMedia
                component="img"
                height={"100%"}
                image={imgAus}
                alt="img-casa-de-la-cultura"
                preload="true"
              />
            </Card>
          </Fade>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <Grow
            in={componentLoaded}
            style={{ transformOrigin: "0 0 0" }}
            {...(componentLoaded ? { timeout: 500 } : {})}
          >
            <Box
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexFlow: "column wrap",
              }}
            >
              <Typography variant="h4" color="text.primary">
              Quiénes Somos:
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ marginBottom: 2 }}
              >
                En CaffeOnline, somos apasionados por ofrecer a nuestros
                clientes una experiencia única de café en línea. Nos enorgullece
                ser más que simplemente vendedores de café; somos amantes del
                café comprometidos con la calidad, la autenticidad y la
                satisfacción del cliente. Creemos que cada taza de café cuenta
                una historia, y queremos ser parte de la tuya.
              </Typography>
            </Box>
          </Grow>
        </TimelineContent>
      </TimelineItem>

      {/* Segundo - MISIÓN Y VISIÓN */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Fade in={componentLoaded}>
            <Card
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <CardMedia
                component="img"
                height={"100%"}
                image={imgMural2}
                alt="img-mural"
                preload="true"
              />
            </Card>
          </Fade>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Grow
            in={componentLoaded}
            style={{ transformOrigin: "0 0 0" }}
            {...(componentLoaded ? { timeout: 500 } : {})}
          >
            <Box
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexFlow: "column wrap",
              }}
            >
              <Typography variant="h4" color="text.primary">
                Visión:
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ marginBottom: 1 }}
              >
                Nos visualizamos como el destino en línea preferido para los
                amantes del café, donde la calidad y la conveniencia se
                encuentran de manera armoniosa. Aspiramos a ser reconocidos no
                solo por la excelencia de nuestro café, sino también por la
                pasión y el compromiso con la sostenibilidad en toda nuestra
                cadena de suministro. En CaffeOnline, buscamos convertir cada
                taza en un momento especial, llevando la riqueza de las
                tradiciones del café directamente a los hogares de nuestros
                clientes.
              </Typography>
            </Box>
          </Grow>
        </TimelineContent>
      </TimelineItem>
      {/* PRIMERO - QUIENES SOMOS */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Fade in={componentLoaded}>
            <Card
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <CardMedia
                component="img"
                height={"100%"}
                image={imgMural}
                alt="img-casa-de-la-cultura"
                preload="true"
              />
            </Card>
          </Fade>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <Grow
            in={componentLoaded}
            style={{ transformOrigin: "0 0 0" }}
            {...(componentLoaded ? { timeout: 500 } : {})}
          >
            <Box
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexFlow: "column wrap",
              }}
            >
              <Typography variant="h4" color="text.primary">
                Misión:
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ marginBottom: 2 }}
              >
                Nuestra misión en CaffeOnline es proporcionar a nuestros
                clientes el café más excepcional y auténtico, directamente a sus
                puertas. Nos esforzamos por curar una selección diversa de
                granos de alta calidad, provenientes de las mejores regiones
                cafetaleras del mundo. A través de nuestro servicio en línea,
                buscamos hacer que la experiencia de comprar café sea
                conveniente, educativa y profundamente gratificante.
              </Typography>
            </Box>
          </Grow>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineUsLarge;
