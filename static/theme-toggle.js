const STORAGE_KEY = 'theme'

// default to dark mode, because **I** like it more :-)
// you may want to look into the user's preference instead, with
// window.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = 'dark'

const getTheme = () => {
	if (typeof localStorage !== 'undefined') {
		if (localStorage.getItem(STORAGE_KEY)) {
			return localStorage.getItem(STORAGE_KEY)
		} else {
			return defaultTheme
		}
	}
	return defaultTheme
}

const setTheme = (theme) => {
	document.documentElement.dataset.theme = theme
}

// set eary so no page flasses / CSS is
setTheme(getTheme())

const themeObserver = new MutationObserver((mutations) => {
	for (const mutation of mutations) {
		if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
			if (typeof localStorage !== 'undefined') {
				localStorage.setItem(STORAGE_KEY, mutation.target.dataset.theme)
			}
		}
	}
})

themeObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ['data-theme'],
})

const toggleTheme = () => {
	const currentTheme = getTheme()
	const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
	setTheme(nextTheme)
}

window.toggleTheme = toggleTheme
