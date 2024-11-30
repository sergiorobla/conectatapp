interface Neighborhood {
	name: string;
	positions: [number, number][]; // Array de coordenadas
	color: string; // Color para el barrio
	isFavorite: boolean; // Indica si es favorito
}

export const neighborhoods: Neighborhood[] = [
	{
		name: "Bonavista",
		positions: [
			[41.121197, 1.189926],
			[41.122419, 1.190751],
			[41.122972, 1.189369],
			[41.124721, 1.191456],
			[41.124538, 1.192342],
			[41.123229, 1.193273],
			[41.122531, 1.193981],
			[41.121729, 1.194793],
			[41.121061, 1.195312],
			[41.120139, 1.196176],
			[41.119788, 1.19628],
			[41.118673, 1.195642],
			[41.115579, 1.193768],
			[41.115682, 1.19155],
			[41.115988, 1.189954],
			[41.117068, 1.18939],
			[41.118004, 1.189256],
		],
		color: "#FF5733",
		isFavorite: false, // inicial
	},
	{
		name: "Campclar",
		positions: [
			[41.115379, 1.210463],
			[41.117205, 1.210519],
			[41.119232, 1.211497],
			[41.124855, 1.211229],
			[41.124577, 1.208829],
			[41.127577, 1.202112],
			[41.125467, 1.198956],
			[41.124534, 1.195853],
			[41.124518, 1.192466],
			[41.123589, 1.193192],
			[41.123051, 1.193608],
			[41.122581, 1.194137],
			[41.121034, 1.195463],
			[41.119885, 1.196522],
			[41.115519, 1.193766],
			[41.114936, 1.194715],
		],
		color: "blue",
		isFavorite: false, // inicial
	},
	{
		name: "Torreforta",
		positions: [
			[41.124852, 1.211423],
			[41.122618, 1.21991],
			[41.120207, 1.227552],
			[41.116132, 1.227158],
			[41.115582, 1.223792],
			[41.11551, 1.221657],
			[41.115093, 1.210788],
			[41.115435, 1.210688],
			[41.117092, 1.210609],
			[41.119157, 1.211598],
		],
		color: "#FF33F6",
		isFavorite: false, // inicial
	},
	{
		name: "Nou Eixample Nord",
		positions: [
			[41.123293, 1.252218],
			[41.124107, 1.248582],
			[41.124457, 1.245788],
			[41.125809, 1.243705],
			[41.126465, 1.242276],
			[41.123042, 1.243925],
			[41.119588, 1.245424],
			[41.1194, 1.245907],
			[41.118984, 1.246058],
			[41.117361, 1.249372],
			[41.118987, 1.250534],
			[41.119427, 1.250806],
			[41.123271, 1.252335],
		],
		color: "red",
		isFavorite: false, // inicial
	},
	{
		name: "Eixample Sud",
		positions: [
			[41.117193, 1.249114],
			[41.11796, 1.247557],
			[41.119041, 1.24535],
			[41.116081, 1.244174],
			[41.116117, 1.240258],
			[41.112664, 1.241754],
			[41.112268, 1.24393],
			[41.115026, 1.244847],
			[41.114744, 1.247026],
		],
		color: "olive",
		isFavorite: false, // inicial
	},
	{
		name: "Sant Salvador",
		positions: [
			[41.149582, 1.239812],
			[41.151812, 1.239726],
			[41.152038, 1.238224],
			[41.153848, 1.237495],
			[41.15556, 1.237624],
			[41.156465, 1.237023],
			[41.157456, 1.236828],
			[41.158148, 1.237364],
			[41.158972, 1.237892],
			[41.159433, 1.238566],
			[41.159846, 1.239918],
			[41.163613, 1.239753],
			[41.16393, 1.240875],
			[41.164521, 1.242059],
			[41.164638, 1.242514],
			[41.164207, 1.242795],
			[41.164164, 1.243589],
			[41.164164, 1.243589],
			[41.164994, 1.244561],
			[41.165217, 1.244843],
			[41.165804, 1.246065],
			[41.166375, 1.246737],
			[41.16691, 1.247755],
			[41.166696, 1.24785],
			[41.16504, 1.247486],
			[41.164594, 1.247835],
			[41.163578, 1.247228],
			[41.163715, 1.246287],
			[41.162572, 1.245422],
			[41.161846, 1.245203],
			[41.161523, 1.244721],
			[41.160676, 1.241921],
			[41.159764, 1.241505],
			[41.158839, 1.243447],
			[41.15871, 1.245641],
			[41.157506, 1.24828],
			[41.153521, 1.244471],
		],
		color: "#cd853f",
		isFavorite: false, // inicial
	},
	{
		name: "Eixample",
		positions: [
			[41.123114, 1.252465],
			[41.118587, 1.254568],
			[41.11753, 1.252743],
			[41.115203, 1.257427],
			[41.114265, 1.257604],
			[41.11407, 1.257919],
			[41.112462, 1.254716],
			[41.110443, 1.251339],
			[41.112269, 1.243981],
			[41.114957, 1.244867],
			[41.114622, 1.24728],
			[41.114714, 1.24737],
			[41.114966, 1.247376],
			[41.117188, 1.249326],
			[41.119221, 1.250884],
		],
		color: "orange",
		isFavorite: false, // inicial
	},
	{
		name: "Sant Pere i Sant Pau",
		positions: [
			[41.136021, 1.254392],
			[41.135343, 1.254113],
			[41.135294, 1.253041],
			[41.136312, 1.251839],
			[41.13615, 1.250898],
			[41.135633, 1.250373],
			[41.135932, 1.249353],
			[41.136902, 1.248624],
			[41.137831, 1.247551],
			[41.138591, 1.246938],
			[41.139277, 1.246701],
			[41.139832, 1.246239],
			[41.140627, 1.246051],
			[41.1407592, 1.2458939],
			[41.140534, 1.247789],
			[41.140996, 1.252368],
			[41.141673, 1.25221],
			[41.141948, 1.254073],
			[41.140323, 1.254204],
			[41.14038, 1.255362],
			[41.140081, 1.25606],
			[41.140574, 1.256661],
			[41.140727, 1.257111],
			[41.140315, 1.258227],
			[41.140364, 1.260105],
			[41.1402, 1.260324],
			[41.137093, 1.258113],
			[41.136676, 1.25743],
			[41.136021, 1.254392],
		],
		color: "blueviolet",
		isFavorite: false, // inicial
	},
	{
		name: "Llevant",
		positions: [
			[41.123388, 1.252462],
			[41.118629, 1.254634],
			[41.117561, 1.252875],
			[41.115367, 1.257458],
			[41.11431, 1.257759],
			[41.114136, 1.258136],
			[41.113574, 1.258175],
			[41.114457, 1.264456],
			[41.112878, 1.266212],
			[41.113842, 1.268564],
			[41.113738, 1.269312],
			[41.113124, 1.26975],
			[41.113778, 1.271569],
			[41.114785, 1.2719],
			[41.115248, 1.273554],
			[41.116232, 1.274953],
			[41.117513, 1.274188],
			[41.119762, 1.277352],
			[41.120513, 1.279393],
			[41.119989, 1.281322],
			[41.120415, 1.282253],
			[41.120896, 1.282237],
			[41.12102, 1.283077],
			[41.123727, 1.288681],
			[41.12519, 1.288358],
			[41.124924, 1.285383],
			[41.123064, 1.279321],
			[41.124693, 1.272658],
			[41.125141, 1.268755],
			[41.123256, 1.262178],
			[41.123545, 1.256861],
			[41.123352, 1.255041],
		],
		color: "black",
		isFavorite: false, // inicial
	},
];

interface Event {
	imageUrl: string;
	name: string;
	description: string;
	date: string; // Formato ISO 8601 (YYYY-MM-DD)
	postalCode: string;
	coordinates: [number, number];
    isFavourite: boolean;
    neighborhood: string;
}

export const events: Event[] = [
	{
		imageUrl: "./santaTecla.jpg",
		name: "Santa Tecla Festival (Parte Alta)",
		description:
			"Celebración anual de la festividad de Santa Tecla, patrona de Tarragona.",
		date: "2025-01-21",
		postalCode: "43003", // Parte Alta
		coordinates: [41.1185, 1.2531],
		isFavourite: false,
        neighborhood: "Parte Alta" // Coordenadas de Parte Alta
	},
	{
		imageUrl: "./concursCastellers.jpg",
		name: "Concurs de Castells (Eixample)",
		description:
			"Competencia bienal de castells, un evento emblemático de la cultura catalana.",
		date: "2024-12-27",
		postalCode: "43001", // Eixample
		coordinates: [41.116, 1.229],
		isFavourite: false,
        neighborhood: "Eixample" // Coordenadas del Eixample
	},
	{
		imageUrl: "./cofradiaPescadoresSerrallo.png",
		name: "Fiesta del Serrallo (Serrallo)",
		description:
			"Fiesta del barrio marítimo del Serrallo, con actividades tradicionales y gastronomía local.",
		date: "2024-12-20",
		postalCode: "43004", // Serrallo
		coordinates: [41.12, 1.258],
		isFavourite: false,
        neighborhood: "Serrallo" // Coordenadas del Serrallo
	},
	{
		imageUrl: "./santSalvadorFestaMajor.png",
		name: "Fiesta mayor (Sant Salvador)",
		description:
			"Fiesta en honor a Sant Salvador con actividades populares, música en vivo y tradiciones locales que unen a la comunidad.",

		date: "2025-01-21",
		postalCode: "43003",
		coordinates: [41.161694, 1.241334],
		isFavourite: false,
        neighborhood: "Sant Salvador"
	},
	{
		imageUrl: "./santMagi.jpg",
		name: "Fira de Sant Magí (Campclar)",
		description:
			"Feria dedicada a Sant Magí, con eventos culturales y tradicionales en toda la región.",
		date: "2024-11-11",
		postalCode: "43007", // Campclar
		coordinates: [41.115, 1.233],
		isFavourite: false,
        neighborhood: "Campclar" // Coordenadas de Campclar
	},
	{
		imageUrl: "./correfocSantSalvador.jpg",
		name: "Correfoc infantil (Sant Salvador)",
		description:
			"Fiesta en honor a Sant Salvador con actividades populares, música en vivo y tradiciones locales que unen a la comunidad.",

		date: "2025-03-21",
		postalCode: "43003",
		coordinates: [41.161734, 1.24364],
		isFavourite: false,
        neighborhood: "Sant Salvador"
	},
];