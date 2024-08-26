import { useEffect, useState } from "react";

function App () {
  const [contacto, setContacto] = useState('');
  const [numero, setNumero] = useState('');
  const [agenda, setAgenda] = useState([]);
  

  const updateCon = (event) => {
    setContacto(event.target.value);
  };

  const updateNum = (event) => {
    setNumero(event.target.value);
  };

  const saveContact = () => {
    if (contacto && numero) {
      const newContact = { contacto, numero };
      setAgenda([...agenda, newContact]);  // Agrega el nuevo contacto a la lista
      setContacto('');  // Limpia el campo de contacto
      setNumero('');
    }
  }

  return (
    <div>
      <h1>Agenda telefonica</h1>
      <input
        className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={updateCon}
        value={contacto}
        placeholder="Nombre"
        type="text"
      />
      <input
        className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={updateNum}
        value={numero}
        placeholder="Número"
        type="tel"
      />
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors" onClick={saveContact}> Guardar </button>
    {/* Tabla para mostrar los contactos guardados */}
    <table>
        <thead>
          <tr>
            <th className="border px-4 py-2">-Contacto</th>
            <th className="border px-4 py-2">-Número</th>
          </tr>
        </thead>
        <tbody>
          {agenda.map((item, index) => (
            <tr key={index}>
              <td>-{item.contacto}</td>
              <td>-{item.numero}</td>
            </tr>
          ))}
        </tbody>
      </table>

</div>
  );
  }
  export default App;
