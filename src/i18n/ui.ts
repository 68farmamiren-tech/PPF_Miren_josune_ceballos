// src/i18n/ui.ts
// Diccionario central de textos traducibles de la landing.
// Textos de EJEMPLO coherentes con un restaurante (no definitivos).

export const defaultLang = "es" as const;

export const languages = {
	es: "Español",
	en: "English",
} as const;

const es = {
	meta: {
		title: "Casa Tomate — Restaurante en Bilbao",
		description:
			"Landing page de ejemplo para un restaurante: carta de temporada, ambiente acogedor y reserva online.",
	},
	nav: {
		home: "Inicio",
		menu: "Carta",
		about: "Nosotros",
		main: "Principal",
		skip: "Saltar al contenido principal",
		reserve: "Reservar",
		openMenu: "Abrir menú",
	},
	hero: {
		kicker: "Cocina de temporada",
		title: "Sabores que cuentan historias",
		subtitle:
			"Platos de ejemplo para practicar la maquetación: menú del día, carta y postres de la casa.",
		primaryCta: "Ver carta",
		secondaryCta: "Conócenos",
	},
	sections: {
		menu: {
			title: "Carta flexible",
			text: "Texto de ejemplo para presentar la carta: entrantes, principales y postres que cambian cada semana.",
			bullets: [
				"Menú del día de ejemplo",
				"Platos de temporada",
				"Opciones vegetarianas",
			],
			link: "Ver carta completa",
		},
		easy: {
			title: "Gestión sencilla",
			text: "Texto de ejemplo para explicar que la web es rápida de actualizar y fácil de mantener.",
			link: "Cómo funciona",
		},
		fast: {
			title: "Rápida y ligera",
			text: "Texto de ejemplo sobre rendimiento: carga veloz y buena experiencia en móvil.",
			bullets: [
				"Carga de ejemplo ultrarrápida",
				"Navegación fluida",
				"Buen posicionamiento",
			],
		},
		docs: {
			title: "Descubre la casa",
			subtitle: "Tres tarjetas de ejemplo: historia, equipo y filosofía de cocina.",
			cards: [
				{
					title: "Nuestra historia",
					text: "Texto de ejemplo sobre el origen del restaurante.",
					link: "Leer más",
				},
				{
					title: "El equipo",
					text: "Texto de ejemplo sobre cocineros y sala.",
					link: "Leer más",
				},
				{
					title: "Producto local",
					text: "Texto de ejemplo sobre proveedores cercanos.",
					link: "Leer más",
				},
			],
		},
		opensource: {
			title: "Gratis y de código abierto",
			text: "Texto de ejemplo sobre licencia abierta: úsalo en proyectos personales y comerciales.",
			bullets: [
				"Gratis para proyectos personales y comerciales",
				"Personalizable según tus necesidades",
				"Soporte de la comunidad y actualizaciones",
			],
			link: "Ver código",
		},
	},
	deals: {
		title: "Promos sabrosas",
		subtitle: "Texto de ejemplo para las ofertas semanales del restaurante.",
		items: [
			{
				title: "Menú para dos",
				promo: "Ejemplo: 25% en carta, cada domingo",
				price: "25€",
				schedule: "Domingos · 13:00–15:30",
			},
			{
				title: "Lunes de pintxos",
				promo: "Ejemplo: pintxo + caña a precio especial",
				price: "4€",
				schedule: "Lunes · 19:00–21:00",
			},
			{
				title: "Jueves de postre",
				promo: "Ejemplo: postre gratis con principal",
				price: "0€",
				schedule: "Jueves · 13:00–15:30",
			},
		],
	},
	footer: {
		tagline: "Texto de ejemplo: restaurante ficticio para practicar Astro y Tailwind.",
		address: "Calle Ejemplo 123, 48000 Bilbao",
		email: "hola@casatomate.ejemplo",
		phone: "+34 600 000 000",
		infoTitle: "Información",
		foodTitle: "Carta",
		hoursTitle: "Horario",
		infoLinks: ["Inicio", "Nosotros", "Promos", "Contacto"],
		foodLinks: ["Carta completa"],
		hours: [
			{ day: "Dom", time: "08:00 – 00:00" },
			{ day: "Lun", time: "Cerrado" },
			{ day: "Mar", time: "08:00 – 00:00" },
			{ day: "Mié", time: "08:00 – 00:00" },
			{ day: "Jue", time: "08:00 – 00:00" },
			{ day: "Vie", time: "Cerrado" },
			{ day: "Sáb", time: "08:00 – 00:00" },
		],
		copyright: "© 2026 Casa Tomate (ejemplo educativo)",
	},
	langSwitcher: {
		label: "Idioma",
	},
};

export type UiSchema = typeof es;

const en: UiSchema = {
	meta: {
		title: "Casa Tomate — Restaurant in Bilbao",
		description:
			"Sample landing page for a restaurant: seasonal menu, cozy atmosphere and online booking.",
	},
	nav: {
		home: "Home",
		menu: "Menu",
		about: "About",
		main: "Main",
		skip: "Skip to main content",
		reserve: "Book a table",
		openMenu: "Open menu",
	},
	hero: {
		kicker: "Seasonal cooking",
		title: "Flavours that tell stories",
		subtitle:
			"Sample copy to practise the layout: daily menu, à la carte and house desserts.",
		primaryCta: "View menu",
		secondaryCta: "About us",
	},
	sections: {
		menu: {
			title: "Flexible menu",
			text: "Sample copy to introduce the menu: starters, mains and desserts changing every week.",
			bullets: [
				"Sample daily menu",
				"Seasonal dishes",
				"Vegetarian options",
			],
			link: "View full menu",
		},
		easy: {
			title: "Easy management",
			text: "Sample copy to explain the site is quick to update and easy to maintain.",
			link: "How it works",
		},
		fast: {
			title: "Fast and lightweight",
			text: "Sample copy about performance: quick loading and great mobile experience.",
			bullets: [
				"Sample ultra-fast loading",
				"Smooth navigation",
				"Good search ranking",
			],
		},
		docs: {
			title: "Discover the house",
			subtitle: "Three sample cards: story, team and cooking philosophy.",
			cards: [
				{
					title: "Our story",
					text: "Sample copy about the origin of the restaurant.",
					link: "Read more",
				},
				{
					title: "The team",
					text: "Sample copy about chefs and staff.",
					link: "Read more",
				},
				{
					title: "Local produce",
					text: "Sample copy about nearby suppliers.",
					link: "Read more",
				},
			],
		},
		opensource: {
			title: "Free and Open Source",
			text: "Sample copy about open licensing: use it for personal and commercial projects.",
			bullets: [
				"Free for personal and commercial projects",
				"Customizable to your needs",
				"Community support and updates",
			],
			link: "View code",
		},
	},
	deals: {
		title: "Tasty deals",
		subtitle: "Sample copy for the weekly restaurant offers.",
		items: [
			{
				title: "Menu for two",
				promo: "Sample: 25% off menu, every Sunday",
				price: "€25",
				schedule: "Sundays · 1:00–3:30 PM",
			},
			{
				title: "Pintxo Monday",
				promo: "Sample: pintxo + beer at special price",
				price: "€4",
				schedule: "Mondays · 7:00–9:00 PM",
			},
			{
				title: "Dessert Thursday",
				promo: "Sample: free dessert with main course",
				price: "€0",
				schedule: "Thursdays · 1:00–3:30 PM",
			},
		],
	},
	footer: {
		tagline: "Sample copy: fictional restaurant to practise Astro and Tailwind.",
		address: "123 Example Street, 48000 Bilbao",
		email: "hello@casatomate.example",
		phone: "+34 600 000 000",
		infoTitle: "Information",
		foodTitle: "Menu",
		hoursTitle: "Opening hours",
		infoLinks: ["Home", "About", "Deals", "Contact"],
		foodLinks: ["Full menu"],
		hours: [
			{ day: "Sun", time: "08:00 AM – 12:00 AM" },
			{ day: "Mon", time: "Closed" },
			{ day: "Tue", time: "08:00 AM – 12:00 AM" },
			{ day: "Wed", time: "08:00 AM – 12:00 AM" },
			{ day: "Thu", time: "08:00 AM – 12:00 AM" },
			{ day: "Fri", time: "Closed" },
			{ day: "Sat", time: "08:00 AM – 12:00 AM" },
		],
		copyright: "© 2026 Casa Tomate (educational sample)",
	},
	langSwitcher: {
		label: "Language",
	},
};

export const ui = { es, en };

export type Lang = keyof typeof ui;
export type UIText = UiSchema;
