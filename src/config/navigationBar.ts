// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'The tailwind astro theme',
		text: 'Fincas Trovador'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Servicios', link: '/#servicios' },
		{ name: 'FAQ', link: '/faq' },
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Lista de propiedades', link: 'https://www.idealista.com/pro/fincastrovador/', style: 'primary', size: 'lg' }]
}
