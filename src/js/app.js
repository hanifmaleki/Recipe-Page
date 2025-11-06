import { LanguageSelector } from './language.js'
import { ThemeSelector } from './theme.js'

window.onload = () => {
    new ThemeSelector(document.querySelector('#ThemeSelector'))
    const languageSelector = new LanguageSelector(document.querySelector('#LanguageSelector'))
    languageSelector.render()
}

