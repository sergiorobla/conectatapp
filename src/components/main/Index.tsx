import { useState } from "react";
import React from "react";
import PrimeraParteIndex from "./PrimeraParteIndex";
import { useEvents } from "../../logic/CarteleraContext";
import EventsPage from "./EventsPage";
import { useTheme } from "../../logic/ThemeContext";
import SearchBar from "./searchBar";

const Main: React.FC = () => {
  const { events } = useEvents();
  const [filterText, setFilterText] = useState("");
  const { theme } = useTheme();

  // Filtrar eventos
  const filteredEvents = events.filter((event) => {
    const matchesText =
      event.name.toLowerCase().includes(filterText.toLowerCase()) ||
      event.description.toLowerCase().includes(filterText.toLowerCase());
    return matchesText;
  });

  // Mostrar solo los 3 primeros eventos filtrados
  const limitedEvents = filteredEvents.slice(0, 3);

  return (
    <main>
      <div
        className={`inicio-busc ${
          theme === "light" ? "inicio-busc-light" : "inicio-busc-dark"
        }`}
      >
        <h1>Conecta't</h1>
        <p>Te damos la Bienvenida al Barrio Sant Salvador</p>
        {/* Barra de búsqueda */}
        <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      </div>
      {/* Pasar eventos filtrados a EventsPage */}
      <EventsPage events={limitedEvents} />
      <PrimeraParteIndex />
    </main>
  );
};

export default Main;
