import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../config/firebase";
import { LoaderAnimation } from "./LoaderAnimation";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    const consultaDato = async () => {
      if (user) {
        try {
          const referencia = doc(db, `usuarios/${user.uid}`);
          const docSnap = await getDoc(referencia);

          if (docSnap.exists()) {
            setData(docSnap.data());
          } else {
            console.log("No se encontró el documento");
          }
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
        }
      }
    };

    // No necesitas verificar 'user' aquí, ya que este efecto se ejecutará si 'user' cambia
    consultaDato();
  }, [user]);

  if (loading) {
    return <LoaderAnimation />;
  }

  // Permitir el acceso si el usuario está logeado, incluso si no hay datos disponibles actualmente
  if (!user) {
    return <Navigate to="/acceso" />;
  } else {
    return <>{children}</>;
  }
}
