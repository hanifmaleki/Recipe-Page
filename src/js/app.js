import { LanguageSelector } from './language.js'
import { ThemeSelector } from './theme.js'

window.onload = () => {
    const languageSelector = new LanguageSelector(document.querySelector('#LanguageSelector'))
    languageSelector.render()

    const themeSelector = new ThemeSelector(document.querySelector('#ThemeSelector'))
}

