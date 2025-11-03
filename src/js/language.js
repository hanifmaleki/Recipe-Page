export class LanguageSelector {
    constructor(container) {
        this.container = container
        this.languages = container.querySelectorAll('li')
        this.currentLanguageCode = document.documentElement.lang

        this.languages.forEach(languageItem => {
            if (languageItem.id === this.currentLanguageCode) {
                languageItem.classList.add('selected')
                this.currentLanguageItem = languageItem
            }

            languageItem.addEventListener('click', event => this.onChangeLanguage(event, languageItem))
        })
    }

    trans(key, parameters) {
        const lang = document.documentElement.lang || 'en'
        let text = window.translations[lang][key] || key
        for (const [p, v] of Object.entries(parameters)) {
            text = text.replace(`{${p}}`, v)
        }

        return text
    }

    render() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const params = {}
            for (const [name, value] of Object.entries(el.dataset)) {
                if (name.startsWith('i18nParam')) {
                    const paramName = name.replace('i18nParam', '').toLowerCase()
                    params[paramName] = value
                }
            }
            const translated = this.trans(el.dataset.i18n, params)
            el.innerHTML = translated
        })
    }

    onChangeLanguage(event, languageItem) {
        if (languageItem.id === this.currentLanguageCode) {
            return
        }

        this.currentLanguageItem.classList.remove('selected')
        this.currentLanguageItem = languageItem
        this.currentLanguageCode = languageItem.id
        languageItem.classList.add('selected')
        document.documentElement.lang = languageItem.id

        console.log(languageItem, window.languages)
        if (languageItem.dataset.rtl === '1') {
            document.documentElement.dir = 'rtl'
        } else {
            document.documentElement.dir = 'ltr'
        }

        this.render()
    }
}
