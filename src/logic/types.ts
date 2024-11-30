export interface Event {
	imageUrl: string;
	name: string;
	description: string;
	date: string; // Formato ISO 8601 (YYYY-MM-DD)
	postalCode: string;
	coordinates: [number, number];
	isFavourite: boolean;
	neighborhood: string;
}