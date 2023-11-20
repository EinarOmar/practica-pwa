import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Fade, Grow, Typography } from "@mui/material";

const TimelineUsSmall = ({ imgAus, imgMural,imgMural2 }) => {
  const [componentLoaded, setComponentLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 100);
  }, []);
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {/* QUIENES SOMOS */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box
            sx={{
              py: 3,
              display: "flex",
              justifyContent: "center",
              flexFlow: "column wrap",
            }}
          >
            <Typography variant="h4" color="text.primary">
            Quiénes Somos:
            </Typography>
            <Grow
              in={componentLoaded}
              style={{ transformOrigin: "0 0 0" }}
              {...(componentLoaded ? { timeout: 500 } : {})}
            >
              <Typography variant="subtitle1" color="text.secondary">
                En CaffeOnline, somos apasionados por ofrecer a nuestros
                clientes una experiencia única de café en línea. Nos enorgullece
                ser más que simplemente vendedores de café; somos amantes del
                café comprometidos con la calidad, la autenticidad y la
                satisfacción del cliente. Creemos que cada taza de café cuenta
                una historia, y queremos ser parte de la tuya.
              </Typography>
            </Grow>
            <Fade in={componentLoaded}>
              <Box
                component="img"
                src={imgAus}
                alt="sobrenosotros"
                preload="true"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  mt: 2,
                }}
              />
            </Fade>
          </Box>
        </TimelineContent>
      </TimelineItem>
      {/* MISIÓN Y VISIÓN */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box
            sx={{
              py: 3,
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
           
            <Box
              component="img"
              src={imgMural}
              alt="sobrenosotros2"
              preload="true"
              sx={{ width: "100%", height: "100%", objectFit: "cover", mt: 2 }}
            />
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box
            sx={{
              py: 3,
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
              sx={{ marginBottom: 1 }}
            >
                Nuestra misión en CaffeOnline es proporcionar a nuestros
                clientes el café más excepcional y auténtico, directamente a sus
                puertas. Nos esforzamos por curar una selección diversa de
                granos de alta calidad, provenientes de las mejores regiones
                cafetaleras del mundo. A través de nuestro servicio en línea,
                buscamos hacer que la experiencia de comprar café sea
                conveniente, educativa y profundamente gratificante.
            </Typography>
           
            <Box
              component="img"
              src={imgMural2}
              alt="sobrenosotros3"
              preload="true"
              sx={{ width: "100%", height: "100%", objectFit: "cover", mt: 2 }}
            />
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineUsSmall;
