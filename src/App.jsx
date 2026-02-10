export default function App() {
  const fecha = new Date().toLocaleString();

  return (
    <main>
      <h1>Hola SENA</h1>
      <p>{fecha}</p>
    </main>
  );
}
