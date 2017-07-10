import { el } from 'redom'
import { blue } from 'csx'
import { classes, style } from 'typestyle'

let h1 = style({
    color: blue.toHexString()
})

class Home {
    el: any
    constructor() {
        this.el = el('h1', { className: h1 }, 'Home')
    }
    update() {}
}

export default Home
