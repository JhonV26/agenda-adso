// Importamos el hook useState desde React
import { useState } from "react";

// Exportamos el componente para poder usarlo en otros archivos
// Recibe una prop llamada onAgregar (función que viene del componente padre)
export default function FormularioContacto({ onAgregar }) {

  // Creamos un estado llamado "form"
  // setForm es la función que actualiza ese estado
  // useState recibe el valor inicial (un objeto con los campos del formulario)
  const [form, setForm] = useState({
    nombre: "",     // Campo nombre inicialmente vacío
    correo: "",     // Campo correo inicialmente vacío
    telefono: "",   // Campo teléfono inicialmente vacío
    etiqueta: "",   // Campo etiqueta inicialmente vacío
  });

  // Función que se ejecuta cada vez que cambia un input
  const onChange = (e) => {

    // Extraemos el name y el value del input que disparó el evento
    const { name, value } = e.target;

    // Actualizamos el estado
    // (f) es el estado anterior
    setForm((f) => ({

      ...f, // Copiamos todos los valores anteriores del objeto

      // Actualizamos solo el campo que cambió
      // [name] significa que el nombre del campo es dinámico
      [name]: value
    }));
  };

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit = (e) => {

    // Evita que la página se recargue
    e.preventDefault();

    // Validamos que nombre y telefono no estén vacíos
    // trim() elimina espacios al inicio y final
    if (!form.nombre.trim() || !form.telefono.trim()) {

      // Mostramos un mensaje si falta información
      alert("Completa al menos Nombre y Teléfono");

      // Detenemos la ejecución
      return;
    }

    // Llamamos a la función que vino como prop
    // Le enviamos el objeto form con los datos
    onAgregar(form);

    // Limpiamos el formulario reiniciando el estado
    setForm({
      nombre: "",
      correo: "",
      telefono: "",
      etiqueta: "",
    });
  };

  // Lo que el componente renderiza en pantalla
  return (

    // Formulario HTML
    // Cuando se envía, ejecuta onSubmit
    <form onSubmit={onSubmit} className="form-contacto">

      {/* Input para nombre */}
      <input
        name="nombre"              // Nombre del campo (clave del objeto form)
        placeholder="Nombre"       // Texto guía
        value={form.nombre}        // Valor controlado por el estado
        onChange={onChange}        // Ejecuta la función cuando cambia
      />

      {/* Input para teléfono */}
      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={onChange}
      />

      {/* Input para correo */}
      <input
        name="correo"
        placeholder="Correo"
        value={form.correo}
        onChange={onChange}
      />

      {/* Input para etiqueta */}
      <input
        name="etiqueta"
        placeholder="Etiqueta"
        value={form.etiqueta}
        onChange={onChange}
      />

      {/* Botón para enviar el formulario */}
      <button type="submit">
        Agregar contacto
      </button>

    </form>
  );
}
