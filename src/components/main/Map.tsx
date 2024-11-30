import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { neighborhoods } from "../../data";
import { useEvents } from "../../logic/CarteleraContext";
import FloatingActionButton from "./floatingActionButton";

const Map: React.FC = () => {
  const { events, setEvents } = useEvents(); // Contexto de eventos
  const [filterText, setFilterText] = useState<string>(""); // Filtro por texto
  const [onlyFavourites, setOnlyFavourites] = useState<boolean>(false); // Filtro favoritos

  // Filtrar eventos según los criterios
  const filteredEvents = events.filter((event) => {
    const matchesText =
      event.name.toLowerCase().includes(filterText.toLowerCase()) ||
      event.description.toLowerCase().includes(filterText.toLowerCase());
    const matchesFavourite = onlyFavourites ? event.isFavourite : true;
    return matchesText && matchesFavourite;
  });

  // Manejo de eliminar evento
  const handleDelete = (name: string) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${name}"?`)) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.name !== name)
      );
      alert("Evento eliminado con éxito.");
    }
  };

  // Manejo de alternar favorito
  const handleFavouriteToggle = (name: string) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.name === name
          ? { ...event, isFavourite: !event.isFavourite }
          : event
      )
    );
  };

  const center: [number, number] = [41.133, 1.25];

  return (
    <div>
      {/* Controles de Filtro */}
      <div className="filtros-mapa">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Buscar por nombre o descripción"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            style={{ padding: "5px", flex: 1 }}
          />
          <label>
            <input
              type="checkbox"
              checked={onlyFavourites}
              onChange={(e) => setOnlyFavourites(e.target.checked)}
              style={{ marginRight: "5px" }}
            />
            Solo favoritos
          </label>
          <button
            onClick={() => {
              setFilterText("");
              setOnlyFavourites(false);
            }}
            style={{ padding: "5px 10px" }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Mapa */}
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className="content-map"
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {neighborhoods.map((neighborhood, index) => (
          <Polygon
            key={index}
            positions={neighborhood.positions}
            pathOptions={{ color: neighborhood.color }}
          >
            <Popup>
              <strong>{neighborhood.name}</strong>
              <br />
              {neighborhood.isFavorite ? "Favorito" : "No Favorito"}
            </Popup>
          </Polygon>
        ))}
        {filteredEvents.map((event, index) => (
          <Marker key={index} position={event.coordinates}>
            <Popup autoPan={true}>
              <img
                src={event.imageUrl}
                alt={event.name}
                style={{ width: "100%" }}
              />
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>
                <strong>Fecha:</strong> {event.date}
              </p>
              <p>
                <strong>Código Postal:</strong> {event.postalCode}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <button onClick={() => handleFavouriteToggle(event.name)}>
                  {event.isFavourite ? "❌" : "⭐"}
                </button>
                <button
                  onClick={() => handleDelete(event.name)}
                  style={{ color: "red" }}
                >
                  Eliminar
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Mensaje si no hay eventos */}
      {filteredEvents.length === 0 && (
        <p style={{ textAlign: "center", margin: "20px", color: "gray" }}>
          No se encontraron eventos con los filtros seleccionados.
        </p>
      )}
      <FloatingActionButton />
    </div>
  );
};

export default Map;
