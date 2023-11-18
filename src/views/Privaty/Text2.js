import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Text = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        mr: { xs: 1, sm: 10, md: 15 },
        ml: { xs: 1, sm: 10, md: 15 },
        p: 3,
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "bolder", mt: 3 }}
      >
        1. Aceptación de los términos y condiciones
      </Typography>
      <Typography variant="body1" component="p">
        Al acceder y utilizar CoffeeOnline, usted acepta estar sujeto a estos
        Términos y Condiciones, así como a todas las leyes y regulaciones
        aplicables. Si no está de acuerdo con alguno de estos términos, por
        favor, no utilice nuestro sitio.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "bolder", mt: 3 }}
        >
          2. Productos y categorías
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          <b>Café con Leche de Olla:</b> Descubre nuestra variedad de cafés
          con leche de olla, una experiencia única y deliciosa.
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          <b>Capuchino:</b> Disfruta de nuestro delicioso capuchino, una mezcla
          equilibrada de café y espuma de leche.
        </Typography>
        {/* Agrega más productos y categorías según sea necesario */}
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "bolder", mt: 3 }}
        >
          3. Proceso de compra
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          <b>Registro de Cuenta:</b> Al realizar una compra, puede optar por
          registrarse para obtener una cuenta. Sus datos personales estarán
          protegidos según nuestra Política de Privacidad.
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          <b>Pago:</b> Aceptamos varios métodos de pago seguros. La información
          de pago se procesa de forma segura y se utiliza solo para completar la
          transacción.
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          <b>Envío:</b> Detalles sobre costos de envío, plazos de entrega y
          opciones de seguimiento se proporcionan durante el proceso de compra.
        </Typography>
      </Box>

      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "bolder", mt: 3 }}
      >
        4. Devoluciones y reembolsos
      </Typography>
      <Typography variant="body1" component="p">
        Consulte nuestra política de devoluciones para obtener información
        detallada sobre cómo devolver productos y solicitar reembolsos.
        Garantizamos la calidad de nuestros productos y nos esforzamos por la
        satisfacción del cliente.
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "bolder", mt: 3 }}
      >
        5. Propiedad intelectual
      </Typography>
      <Typography variant="body1" component="p">
        <ArrowRightIcon />
        <b>Derechos de Autor:</b> Todo el contenido del sitio web, incluidos
        textos, imágenes y logotipos, está protegido por derechos de autor. No
        se permite la reproducción no autorizada.
      </Typography>
      <Typography variant="body1" component="p">
        <ArrowRightIcon />
        <b>Marcas Comerciales:</b> Todas las marcas comerciales utilizadas en el
        sitio son propiedad de CoffeeOnline o de terceros con licencia. No se
        permite su uso sin autorización.
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "bolder", mt: 3 }}
      >
        6. Responsabilidades y garantías
      </Typography>
      <Typography variant="body1" component="p">
        <ArrowRightIcon />
        <b>Limitación de Responsabilidad:</b> No nos hacemos responsables de
        daños indirectos, incidentales o consecuentes que puedan surgir del uso
        de nuestros productos o servicios.
      </Typography>
      <Typography variant="body1" component="p">
        <ArrowRightIcon />
        <b>Garantías:</b> Garantizamos que nuestros productos cumplen con los
        estándares de calidad. Consulte las garantías específicas proporcionadas
        con cada producto.
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "bolder", mt: 3 }}
      >
        7. Políticas de privacidad
      </Typography>
      <Typography variant="body1" component="p">
        Consulte nuestra Política de Privacidad para obtener información sobre
        cómo recopilamos, utilizamos y protegemos su información personal.
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "bolder", mt: 3 }}
      >
        8. Modificaciones y términos y condiciones
      </Typography>
      <Typography variant="body1" component="p">
        Nos reservamos el derecho de actualizar o modificar estos Términos y
        Condiciones en cualquier momento. Las modificaciones entrarán en
        vigencia tan pronto como se publiquen en el sitio.
      </Typography>
      <Typography variant="body1" component="p">
        Al utilizar nuestro sitio, usted acepta estar sujeto a la versión más
        reciente de estos Términos y Condiciones.
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "bolder", mt: 3 }}
      >
        9. Contacto
      </Typography>
      <Typography variant="body1" component="p">
        Para cualquier pregunta o inquietud relacionada con estos Términos y Condiciones, por favor contáctenos:
      </Typography>
      <Box>
        <Typography variant="body1" component="p">
          Página de Internet:{" "}
          <a href="https://coffeeonline.com">
            CoffeeOnline
          </a>
        </Typography>
        <Typography variant="body1" component="p">
          Correo electrónico para la atención del público en general:
          20200725@uthh.edu.mx
        </Typography>
        <Typography variant="body1" component="p">
          Número telefónico para la atención del público en general: 7711189815
        </Typography>
      </Box>
      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "bolder", mt: 3 }}
      >
      Fecha de entrada en vigencia: 16/11/2023
      </Typography>
    </Paper>
  );
};

export default Text;
