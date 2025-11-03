import { LanguageSelector } from './language.js'

window.onload = () => {
    const languageSelector = new LanguageSelector(document.querySelector('#LanguageSelector'))
    languageSelector.render()
}

