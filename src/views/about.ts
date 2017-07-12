import { el } from 'redom'

export default class About {
    el: any
    constructor() {
        this.el = el('h1.about', 'About')
    }
    update() {}
}
