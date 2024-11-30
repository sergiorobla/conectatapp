import { useState } from "react";

function EventForm({ onClose }: { onClose: () => void }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ eventName, eventDate, eventDescription });
    alert("Evento registrado exitosamente");
    // Aquí puedes enviar los datos a una API o gestionarlos como prefieras
    onClose(); // Cerrar el modal después de enviar el formulario
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Registrar Nuevo Evento</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Evento:
            </label>
            <input
              id="name"
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Fecha del Evento:
            </label>
            <input
              id="date"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Descripción:
            </label>
            <textarea
              id="description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventForm;
