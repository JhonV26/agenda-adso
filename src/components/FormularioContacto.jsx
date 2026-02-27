import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  // Estado del formulario como objeto único controlado
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });
  

  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);

  const validarFormulario = () => {
    const nuevoErrores = {};

    // validar nombre
    if (!form.nombre.trim()) {
      nuevoErrores.nombre = "El nombre es obligatorio";
    }
    // validar telefono
    if (!form.telefono.trim()) {
      nuevoErrores.telefono = "El teléfono es obligatorio";
    } else if (form.telefono.trim().length < 10) {
      nuevoErrores.telefono = "El teléfono debe tener al menos 10 dígitos";
    }

    // validar correo
    if (!form.correo.trim()) {
      nuevoErrores.correo = "El correo es obligatorio";
    } else if (!form.correo.includes("@")) {
      nuevoErrores.correo = "El correo debe contener el símbolo @";
    }

    //guardar errores en el estado
    setErrores(nuevoErrores);

    // retomamos true si no hay errores, false si hay errores
    return Object.keys(nuevoErrores).length === 0;
  }



  // onChange genérico: actualiza el campo según "name" esto evita que el mensaje quede permamente al escribir
const onChange = (e) => {
  const { name, value } = e.target;

  // Actualiza el formulario
  setForm({ ...form, [name]: value });

  // Limpia el error solo del campo que el usuario está corrigiendo
  setErrores((prev) => ({
    ...prev,
    [name]: "",
  }));

  // Limpia mensaje de éxito cuando vuelve a escribir
  setExito("");
};

  // onSubmit: valida mínimos y llama al padre
  const onSubmit = async (e) => {
  e.preventDefault();

  const esValido = validarFormulario();

  if (!esValido) {
    return;
  }

  try {
    setEnviando(true);

    await onAgregar(form);

    setForm({
      nombre: "",
      telefono: "",
      correo: "",
      etiqueta: "",
    });

    setErrores({});
    setExito("El contacto fue guardado correctamente ✔️");
    setTimeout(() => {
      setExito("");
    }, 3000);

  } catch (error) {

    setErrores({
      api: "No se pudo guardar el contacto. Verifica tu conexión e intenta nuevamente.",
    });

  } finally {

    setEnviando(false);

  }
};

  return (
    <form onSubmit={onSubmit} className="space-y-6">

      {exito && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
          {exito}
        </div>
      )}

      {errores.api && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
          {errores.api}
        </div>
      )}
      {/* Grid: 1 columna en móvil, 2 en pantallas medianas+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Campo: Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>
          <input
            className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            name="nombre"
            placeholder="Ej: Camila Pérez"
            value={form.nombre}
            onChange={onChange}
          />
          {errores.nombre && (
            <p className="text-red-500 text-sm mt-1">
              {errores.nombre}
            </p>
          )}
        </div>

        {/* Campo: Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono *
          </label>
          <input
            className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            name="telefono"
            placeholder="Ej: 300 123 4567"
            value={form.telefono}
            onChange={onChange}
          />
          {errores.telefono && (
            <p className="text-red-500 text-sm mt-1">
              {errores.telefono}
            </p>
          )}

        </div>
      </div>

      {/* Campo: Correo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Correo *
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="correo"
          placeholder="Ej: camila@sena.edu.co"
          value={form.correo}
          onChange={onChange}
        />
        {errores.correo && (
          <p className="text-red-500 text-sm mt-1">
            {errores.correo}
          </p>
        )}
      </div>

      {/* Campo: Etiqueta opcional */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Etiqueta (opcional)
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="etiqueta"
          placeholder="Ej: Trabajo"
          value={form.etiqueta}
          onChange={onChange}
        />
      </div>

      {/* Botón principal con color morado y hover */}
     <button
        disabled={enviando}
        className={`flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-xl font-semibold shadow-sm text-white transition
          ${enviando
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700"
          }`}
      >
        {enviando && (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
        )}

        {enviando ? "Guardando..." : "Agregar contacto"}
      </button>
    </form>
  );
}
