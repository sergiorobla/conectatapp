import React, { useState } from "react";
import { Fab, Modal, Box, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEvents } from "../../logic/CarteleraContext"; // Importar el hook del contexto

const FloatingActionButton: React.FC = () => {
    const { addEvent } = useEvents(); // Obtener la función addEvent desde el contexto
    const [open, setOpen] = useState(false);
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventImage, setEventImage] = useState<File | null>(null);
    const [eventNeighborhood, setEventNeighborhood] = useState(""); // Nuevo estado para el barrio
    const [eventLocation, setEventLocation] = useState(""); // Nuevo estado para la localización

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setEventImage(e.target.files[0]);
        }
    };

    const handleNeighborhoodChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        const selectedNeighborhood = e.target.value as string;
        setEventNeighborhood(selectedNeighborhood);

        // Calcular la localización en base al barrio
        const location = calculateLocation(selectedNeighborhood);
        setEventLocation(location);
    };

    // Función para calcular la localización según el barrio
    const calculateLocation = (neighborhood: string): [number, number] => {
        const locations = {
            "Bonavista": [41.121197, 1.189926],
            "Campclar": [41.1234, 1.2367],
            "Torreforta": [41.1270, 1.2543],
            "Nou Eixample Nord": [41.1372, 1.2445],
            "Eixample Sud": [41.1216, 1.2483],
            "Sant Salvador": [41.1076, 1.2365],
            "Eixample": [41.1210, 1.2450],
            "Sant Pere i Sant Pau": [41.1293, 1.2530],
            "Llevant": [41.1276, 1.2602],
        };

        return locations[neighborhood] || [0, 0]; // Si no hay coincidencia, devuelve una localización predeterminada (0, 0)
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newEvent = {
            name: eventName,
            date: eventDate,
            description: eventDescription,
            imageUrl: eventImage ? URL.createObjectURL(eventImage) : "", // Si hay imagen, la convertimos en URL, sino dejamos un string vacío
            coordinates: calculateLocation(eventNeighborhood), // Aquí usamos el par de coordenadas
            postalCode: "Tarragona", // Puedes añadir un código postal estático o lo que necesites
            neighborhood: eventNeighborhood, // Añadimos el barrio seleccionado
            isFavourite: false, // Valor predeterminado para favoritos
        };

        // Añadir el evento al contexto
        addEvent(newEvent);

        alert("Evento registrado exitosamente");
        setOpen(false); // Cerrar el modal después de enviar el formulario
    };

    // Función para mostrar vista previa de la imagen
    const renderImagePreview = () => {
        if (eventImage) {
            const objectUrl = URL.createObjectURL(eventImage);
            return <img src={objectUrl} alt="Vista previa" style={imagePreviewStyle} />;
        }
        return null;
    };

    // Estilo para la vista previa de la imagen (limitación de altura)
    const imagePreviewStyle = {
        width: "100%", // Mantiene el ancho del 100% del contenedor
        height: "auto", // Ajusta la altura proporcionalmente
        maxHeight: "200px", // Limita la altura máxima a 200px
        objectFit: "contain", // Asegura que la imagen mantenga su aspecto
        marginTop: "10px",
    };

    return (
        <>
            {/* Botón flotante */}
            <Fab
                color="primary"
                aria-label="add"
                onClick={handleOpen}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 1000,
                }}
            >
                <AddIcon />
            </Fab>

            {/* Modal para el formulario */}
            <Modal open={open} onClose={handleClose}>
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
                        Añadir un nuevo evento
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextField
                                label="Nombre del Evento"
                                variant="outlined"
                                fullWidth
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                                required
                                margin="normal"
                            />
                        </div>
                        <div>
                            <TextField
                                label="Fecha del Evento"
                                type="date"
                                variant="outlined"
                                fullWidth
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                                required
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Descripción"
                                variant="outlined"
                                fullWidth
                                value={eventDescription}
                                onChange={(e) => setEventDescription(e.target.value)}
                                required
                                margin="normal"
                                multiline
                                rows={4}
                            />
                        </div>

                        {/* Dropdown para seleccionar el barrio */}
                        <div>
                            <FormControl fullWidth margin="normal" required>
                                <InputLabel>Selecciona el Barrio</InputLabel>
                                <Select
                                    value={eventNeighborhood}
                                    onChange={handleNeighborhoodChange}
                                    label="Selecciona el Barrio"
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
                                    {/* Añadir más barrios aquí */}
                                </Select>
                            </FormControl>
                        </div>

                        {/* Campo para subir una imagen */}
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ marginTop: "10px" }}
                            />
                            {renderImagePreview()} {/* Vista previa de la imagen */}
                        </div>

                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                type="submit"
                            >
                                Registrar Evento
                            </Button>
                        </Box>
                        <Box mt={2}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                onClick={handleClose}
                            >
                                Cancelar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default FloatingActionButton;
