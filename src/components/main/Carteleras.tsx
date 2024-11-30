import React, { useState } from "react";
import { useEvents } from "../../logic/CarteleraContext";
import EventCard from "../../logic/EventCard";
import SearchBar from "./searchBar";
import FloatingActionButton from "./floatingActionButton";
import { Modal, Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const EventList: React.FC = () => {
    const { events, setEvents } = useEvents();
    const [filterText, setFilterText] = useState("");
    const [onlyFavourites, setOnlyFavourites] = useState(false);
    const [editEvent, setEditEvent] = useState<any | null>(null); // Estado para el evento que se va a editar

    // Función de filtro
    const filteredEvents = events.filter((event) => {
        const matchesText =
            event.name.toLowerCase().includes(filterText.toLowerCase()) ||
            event.description.toLowerCase().includes(filterText.toLowerCase());
        const matchesFavourite = onlyFavourites ? event.isFavourite : true;
        return matchesText && matchesFavourite;
    });

    // Función para manejar eliminación
    const handleDelete = (name: string) => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar "${name}"?`)) {
            setEvents((prevEvents) => prevEvents.filter((event) => event.name !== name));
            alert("Evento eliminado con éxito.");
        }
    };

    // Función para alternar favoritos
    const handleFavouriteToggle = (name: string) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.name === name
                    ? { ...event, isFavourite: !event.isFavourite }
                    : event
            )
        );
    };

    // Función para abrir el modal de edición
    const handleEdit = (event: any) => {
        setEditEvent(event); // Setear el evento en estado para edición
    };

    // Función para manejar el envío del formulario de edición
    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.name === editEvent.name ? { ...event, ...editEvent } : event
            )
        );
        setEditEvent(null); // Cerrar el modal después de editar
        alert("Evento editado con éxito");
    };

    // Función para manejar cambios en el formulario de edición
    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | { value: unknown }>) => {
        const { name, value } = e.target;
        setEditEvent((prevEvent: any) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    return (
        <div>
            {/* Barra de búsqueda */}
            <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />

            {/* Filtro de favoritos */}
            <label className="flex items-center space-x-2 mb-4">
                <input
                    type="checkbox"
                    checked={onlyFavourites}
                    onChange={(e) => setOnlyFavourites(e.target.checked)}
                />
                <span>Solo favoritos</span>
            </label>

            {/* Lista de eventos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                    <EventCard
                        key={event.name}
                        imageUrl={event.imageUrl}
                        name={event.name}
                        date={event.date}
                        description={event.description}
                        coordinates={event.coordinates}
                        isFavourite={event.isFavourite}
                        onFavouriteToggle={() => handleFavouriteToggle(event.name)}
                        onEdit={() => handleEdit(event)} // Abrir modal de edición
                        onDelete={() => handleDelete(event.name)}
                    />
                ))}
            </div>

            {/* Mensaje si no hay eventos */}
            {filteredEvents.length === 0 && (
                <p className="text-center text-gray-500 mt-6">
                    No se encontraron eventos con los filtros seleccionados.
                </p>
            )}

            {/* Modal de edición */}
            {editEvent && (
                <Modal open={!!editEvent} onClose={() => setEditEvent(null)}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                        }}
                    >
                        <Typography variant="h6" component="h2" gutterBottom>
                            Editar Evento
                        </Typography>
                        <form onSubmit={handleEditSubmit}>
                            <TextField
                                label="Nombre del Evento"
                                variant="outlined"
                                fullWidth
                                value={editEvent.name}
                                onChange={handleEditChange}
                                name="name"
                                required
                                margin="normal"
                            />
                            <TextField
                                label="Fecha del Evento"
                                type="date"
                                variant="outlined"
                                fullWidth
                                value={editEvent.date}
                                onChange={handleEditChange}
                                name="date"
                                required
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                label="Descripción"
                                variant="outlined"
                                fullWidth
                                value={editEvent.description}
                                onChange={handleEditChange}
                                name="description"
                                required
                                margin="normal"
                                multiline
                                rows={4}
                            />
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Selecciona el Barrio</InputLabel>
                                <Select
                                    value={editEvent.neighborhood}
                                    onChange={handleEditChange}
                                    label="Selecciona el Barrio"
                                    name="neighborhood"
                                >
                                    <MenuItem value="Bonavista">Bonavista</MenuItem>
                                    <MenuItem value="Campclar">Campclar</MenuItem>
                                    <MenuItem value="Torreforta">Torreforta</MenuItem>
                                    <MenuItem value="Nou Eixample Nord">Nou Eixample Nord</MenuItem>
                                    <MenuItem value="Eixample Sud">Eixample Sud</MenuItem>
                                    <MenuItem value="Sant Salvador">Sant Salvador</MenuItem>
                                    <MenuItem value="Eixample">Eixample</MenuItem>
                                    <MenuItem value="Sant Pere i Sant Pau">Sant Pere i Sant Pau</MenuItem>
                                    <MenuItem value="Llevant">Llevant</MenuItem>
                                </Select>
                            </FormControl>
                            <Box mt={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                >
                                    Guardar cambios
                                </Button>
                            </Box>
                            <Box mt={2}>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                    onClick={() => setEditEvent(null)} // Cerrar el modal
                                >
                                    Cancelar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Modal>
            )}

            {/* Botón flotante */}
            <FloatingActionButton />
        </div>
    );
};

export default EventList;
