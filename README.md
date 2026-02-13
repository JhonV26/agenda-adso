📘 Agenda ADSO – Ejercicios de JavaScript con React + Vite

Proyecto desarrollado como práctica de fundamentos de JavaScript dentro del entorno React + Vite.

Este repositorio contiene 6 ejercicios enfocados en reforzar:

Variables y operadores

Arreglos y métodos

Funciones

Objetos

Programación funcional

Inmutabilidad

Lógica tipo aplicación real (Mini Agenda)

🚀 Tecnologías Utilizadas

⚛️ React

⚡ Vite

🟨 JavaScript (ES6+)

🧹 ESLint

📂 Estructura del Proyecto
agenda-adso/
│
├── src/
│   ├── Ejercicios/
│   │   ├── Ejercicio1.js
│   │   ├── Ejercicio2.js
│   │   ├── Ejercicio3.js
│   │   ├── Gestion_aprendiz.js
│   │   ├── metodos.js
│   │   └── Mini_taller.js
│
├── App.jsx
├── main.jsx
└── vite.config.js

🧮 EJERCICIOS DESARROLLADOS
🧮 Ejercicio 1: Variables y Operaciones
📌 Objetivo

Calcular el promedio de tres notas y determinar si el aprendiz aprueba.

🧠 Conceptos Aplicados

Declaración de variables (const)

Operaciones matemáticas

Promedios

toFixed()

Operador ternario

Template strings

💻 Lógica

Se definen tres notas.

Se calcula el promedio.

Se valida si es mayor o igual a 3.0.

Se imprime el estado en consola.

📤 Salida esperada
Ficha: 3223874
Promedio: 4.10
Estado: APROBADO

📊 Ejercicio 2: Arreglos y Métodos
📌 Objetivo

Manipular un arreglo de aprendices usando métodos funcionales.

🧠 Métodos utilizados

filter() → Filtrar aprobados

reduce() → Calcular promedio general

map() → Obtener nombres

join() → Mostrar nombres en texto

📤 Salida esperada
Aprobados: 3
Promedio grupo: 3.75
Nombres: Ana, Luis, María, Pedro

🧩 Ejercicio 3: Funciones y Objetos
📌 Objetivo

Crear contactos dinámicamente usando funciones y objetos.

🧠 Conceptos aplicados

Función flecha

Retorno implícito de objeto

Date.now() para ID único

toLocaleDateString()

Desestructuración

📤 Ejemplo de salida
{
  id: 1700000000000,
  nombre: "Gustavo",
  telefono: "3001234567",
  fechaCreacion: "12/2/2026"
}

Contacto: Gustavo - 3001234567

👨‍🎓 Ejercicio 4: Gestión de Aprendices
📌 Objetivo

Crear funciones reutilizables para gestionar aprendices.

🔧 Funciones desarrolladas

obtenerAprobados()

calcularPromedio()

buscarPorNombre()

obtenerNombres()

🧠 Métodos usados

filter()

reduce()

find()

map()

📤 Ejemplo de salida
Aprobados: [...]
Promedio del grupo: 4.16
Buscar 'Luis': { ... }
Nombres: ["Ana", "Luis", "María"]

🛒 Ejercicio 5: Métodos de Array – Inventario
📌 Objetivo

Simular la gestión de productos en un inventario.

🔧 Funciones desarrolladas

obtenerDisponibles()

calcularInventario()

aplicarDescuento()

ordenarPorPrecio()

🧠 Conceptos aplicados

Inmutabilidad (slice())

Spread operator (...producto)

sort()

reduce()

map()

✅ Ejercicio 6: Mini Taller – Agenda ADSO (Lista de Tareas)
📌 Objetivo

Simular una aplicación básica de gestión de tareas en consola.

🔧 Funcionalidades

Mostrar tareas

Agregar tarea

Completar tarea

Eliminar tarea

Filtrar pendientes

Obtener estadísticas

🧠 Conceptos aplicados

Programación funcional

Inmutabilidad

map()

filter()

forEach()

Operador ternario

Spread operator

📊 Ejemplo de estadísticas
Total: 3 | Completadas: 1 | Pendientes: 2 | Progreso: 33.3%

🧠 Competencias Desarrolladas

✔ Manejo de arreglos y objetos
✔ Uso de métodos funcionales
✔ Creación de funciones reutilizables
✔ Buenas prácticas en JavaScript moderno (ES6+)
✔ Simulación de lógica tipo aplicación real
✔ Preparación para desarrollo en React

⚙️ Instalación y Ejecución

1️⃣ Clonar el repositorio:

git clone https://github.com/JhonV26/agenda-adso


2️⃣ Instalar dependencias:

npm install


3️⃣ Ejecutar proyecto:

npm run dev

👩‍💻 Autor

JhonV
Ficha: 3229207
Programa: ADSO

📌 Conclusión

Este proyecto fortalece las bases necesarias para avanzar hacia el desarrollo de aplicaciones completas en React, aplicando lógica real de negocio y buenas prácticas en JavaScript moderno.
