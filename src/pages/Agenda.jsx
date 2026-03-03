import { useEffect, useState, useRef } from "react";

import {
  listarContactos,
  crearContacto,
  eliminarContactoPorId,
  actualizarContacto
} from "../api/api.js";

import { APP_INFO } from "../config/config.js";

import FormularioContacto from "../components/FormularioContacto";
import ContactoCard from "../components/ContactoCard";

export default function Agenda() {

  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [contactoEditando, setContactoEditando] = useState(null);

  // 👇 Referencia al formulario
  const formularioRef = useRef(null);

  const [busqueda, setBusqueda] = useState(() => {
    return localStorage.getItem("busquedaAgenda") || "";
  });

  const [ordenAsc, setOrdenAsc] = useState(true);

  // Cargar contactos
  useEffect(() => {
    async function cargarContactos() {
      try {
        const data = await listarContactos();
        setContactos(data);
      } catch (error) {
        console.error(error);
        setError("No se pudo cargar la lista de contactos");
      } finally {
        setCargando(false);
      }
    }

    cargarContactos();
  }, []);

  // Guardar búsqueda en localStorage
  useEffect(() => {
    localStorage.setItem("busquedaAgenda", busqueda);
  }, [busqueda]);

  // 👇 Scroll automático al editar
  useEffect(() => {
    if (contactoEditando && formularioRef.current) {
      formularioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [contactoEditando]);

  const agregarContacto = async (nuevo) => {
    try {
      const creado = await crearContacto(nuevo);
      setContactos((prev) => [...prev, creado]);
    } catch (error) {
      console.error(error);
      setError("No se pudo agregar el contacto");
    }
  };

  const editarContacto = async (id, datosActualizados) => {
    try {
      const actualizado = await actualizarContacto(id, datosActualizados);

      setContactos((prev) =>
        prev.map((c) => (c.id === id ? actualizado : c))
      );

      setContactoEditando(null);
    } catch (error) {
      console.error(error);
      setError("No se pudo actualizar el contacto");
    }
  };

  const eliminarContacto = async (id) => {
    try {
      await eliminarContactoPorId(id);
      setContactos((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error(error);
      setError("No se pudo eliminar el contacto");
    }
  };

  // Filtrar contactos
  const contactosFiltrados = contactos.filter((c) => {
    const termino = busqueda.toLowerCase();

    return (
      c.nombre.toLowerCase().includes(termino) ||
      c.correo.toLowerCase().includes(termino) ||
      (c.etiqueta || "").toLowerCase().includes(termino) ||
      (c.telefono || "").toLowerCase().includes(termino)
    );
  });

  // Ordenar contactos
  const contactosOrdenados = [...contactosFiltrados].sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();

    if (nombreA < nombreB) return ordenAsc ? -1 : 1;
    if (nombreA > nombreB) return ordenAsc ? 1 : -1;
    return 0;
  });

  return (
    <main className="min-h-screen bg-gray-50">

      <header className="max-w-6xl mx-auto px-6 pt-8">
        <p className="text-sm font-semibold text-gray-400 tracking-[0.25em] uppercase">
          Desarrollo Web ReactJS Ficha {APP_INFO.ficha}
        </p>

        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
          {APP_INFO.titulo}
        </h1>

        <p className="text-gray-500 mt-1">
          {APP_INFO.subtitulo}
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-8 space-y-6">

        {error && (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {cargando && (
          <div className="rounded-xl bg-purple-50 border border-purple-200 px-4 py-3 text-sm text-purple-700">
            Cargando contactos desde la API...
          </div>
        )}

        {/* 👇 AQUÍ CONECTAMOS EL REF */}
        <div ref={formularioRef}>
          <FormularioContacto
            onAgregar={agregarContacto}
            onActualizar={editarContacto}
            contactoEditando={contactoEditando}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7 mb-4">
          <input
            type="text"
            placeholder="Buscar por nombre, correo o etiqueta..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full md:flex-1 rounded-xl border-gray-400 text-sm"
          />

          <button
            type="button"
            onClick={() => setOrdenAsc((prev) => !prev)}
            className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-xl border border-gray-200"
          >
            {ordenAsc ? "Ordenar Z-A" : "Ordenar A-Z"}
          </button>
        </div>

        <div className="space-y-4">
          {contactosOrdenados.map((c) => (
            <div
              key={c.id}
              className="transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
            >
              <ContactoCard
                {...c}
                busqueda={busqueda}
                onEliminar={() => eliminarContacto(c.id)}
                onEditar={() => setContactoEditando(c)}
              />
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}