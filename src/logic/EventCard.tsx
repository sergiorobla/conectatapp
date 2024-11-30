import React from "react";

interface EventCardProps {
    imageUrl: string;
    name: string;
    date: string;
    description: string;
    coordinates: [number, number];
    isFavourite: boolean;
    onFavouriteToggle: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
    imageUrl,
    name,
    date,
    description,
    coordinates,
    isFavourite,
    onFavouriteToggle,
    onEdit,
    onDelete,
}) => {
    return (
        <div className="w-full max-w-sm mx-auto p-4">
            <div
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
                {/* Imagen del evento */}
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-48 object-cover"
                />

                {/* Contenido de la tarjeta */}
                <div className="p-4">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">{date}</p>
                    <p className="text-sm mt-2 text-gray-700">{description}</p>

                    {/* Botón de favorito */}
                    <button
                        onClick={onFavouriteToggle}
                        className={`mt-3 px-4 py-2 rounded-lg transition-colors ${isFavourite ? "bg-yellow-500" : "bg-gray-300"
                            } hover:bg-yellow-400 focus:outline-none`}
                    >
                        {isFavourite ? "Favorito" : "Añadir a favoritos"}
                    </button>

                    {/* Botones de editar y eliminar */}
                    <div className="mt-3 flex justify-between">
                        <button
                            onClick={onEdit}
                            className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
                        >
                            Editar
                        </button>
                        <button
                            onClick={onDelete}
                            className="text-sm text-red-500 hover:text-red-700 focus:outline-none"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;