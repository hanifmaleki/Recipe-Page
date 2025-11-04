export class ThemeSelector {
    constructor(container) {
        this.element = container
        this.darkElement = container.querySelector('#dark')
        this.lightElement = container.querySelector('#light')
        this.selectedTheme = this.lightElement
        this.selectedTheme.classList.add('selected')

        this.darkElement.addEventListener('click', event => this.onChangeTheme(event, this.darkElement))
        this.lightElement.addEventListener('click', event => this.onChangeTheme(event, this.lightElement))
    }

    onChangeTheme(event, themeItem) {
        if (themeItem.id === this.selectedTheme.id) {
            return
        }

        this.selectedTheme.classList.remove('selected')
        this.selectedTheme = themeItem
        this.selectedTheme.classList.add('selected')
        console.log('on change theme', this.selectedTheme.id)
        document.documentElement.setAttribute('data-theme', this.selectedTheme.id)
    }
}
