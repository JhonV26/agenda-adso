import { useState, useEffect } from "react";
import "./App.css";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {

  // 1. Leer contactos guardados en el navegador
  const contactosGuardados =
    JSON.parse(localStorage.getItem("contactos")) || [];

  // 2. Crear estado con los contactos guardados
  const [contactos, setContactos] = useState(contactosGuardados);

  // 3. Guardar automáticamente cuando cambie el estado
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  // 4. Agregar contacto
  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev, nuevo]);
  };

  // 5. Eliminar contacto por correo
  const eliminarContacto = (correo) => {
    setContactos((prev) =>
      prev.filter((c) => c.correo !== correo)
    );
  };

  return (
    <main className="app-container">

      <h1 className="app-title">Agenda ADSO v3</h1>

      <p className="subtitulo">
        Persistencia con localStorage + React
      </p>

      <FormularioContacto onAgregar={agregarContacto} />

      {contactos.map((contacto) => (
        <ContactoCard
          key={contacto.correo}
          {...contacto}
          onEliminar={eliminarContacto}
        />
      ))}

    </main>
  );
}
