import React from 'react';

interface Event {
    name: string;
    date: string;
    coordinates: {
        lat: number;
        lon: number;
    };
    author: string;
    description: string;
}

interface EventDetailsPopupProps {
    event: Event;
    onClose: () => void;
}

// Event Details Popup Component
const EventDetailsPopup: React.FC<EventDetailsPopupProps> = ({ event, onClose }) => {
    const openGoogleMaps = () => {
        const mapsUrl = `https://www.google.com/maps?q=${event.coordinates.lat},${event.coordinates.lon}`;
        window.open(mapsUrl, '_blank');
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={onClose}>×</button>

                <h2>{event.name}</h2>

                <div className="event-details">
                    <p>
                        <strong>Date:</strong> {event.date}
                    </p>

                    <p>
                        <strong>Location:</strong>
                        <button onClick={openGoogleMaps}>
                            View on Google Maps
                        </button>
                    </p>

                    <p>
                        <strong>Author:</strong> {event.author}
                    </p>

                    <div className="event-description">
                        <h3>Description</h3>
                        <p>{event.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPopup;