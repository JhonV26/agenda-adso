// Este componente muestra un contacto individual.
// Incluye nombre, teléfono, correo, etiqueta y el botón de eliminar.

export default function ContactoCard({
  nombre,
  correo,
  telefono,
  etiqueta,
  busqueda,
  onEliminar,
  onEditar
}){
    const resaltarTexto = (texto) => {
  if (!busqueda) return texto;

  const regex = new RegExp(`(${busqueda})`, "gi");
  return texto.replace(regex, "<mark>$1</mark>");
  };
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-6 flex items-start justify-between">
      {/* Información del contacto */}
      <div className="space-y-1">
        {/* Nombre */}
        <h3
            className="text-xl font-semibold text-gray-800"
            dangerouslySetInnerHTML={{
              __html: resaltarTexto(nombre),
            }}
          />

        {/* Teléfono */}
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-purple-500 text-lg">📞</span>
          <span
            dangerouslySetInnerHTML={{
              __html: resaltarTexto(telefono),
            }}
          />
        </p>

        {/* Correo */}
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-purple-500 text-lg">✉️</span>
          <span
            dangerouslySetInnerHTML={{
              __html: resaltarTexto(correo),
            }}
          />
        </p>

        {/* Etiqueta (si existe) */}
       {etiqueta && (
          <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mt-2">
            <span
              dangerouslySetInnerHTML={{
                __html: resaltarTexto(etiqueta),
              }}
            />
          </span>
        )}
        
      </div>
       {/* //Boton de actualizar datos */}
      <button
        onClick={() => onEditar()}
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow transition mr-2"
      >
        Editar
      </button>

      {/* Botón de eliminar */}
      <button
        onClick={onEliminar}
        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow transition"
      >
        Eliminar
      </button>
    </div>
  );
}

