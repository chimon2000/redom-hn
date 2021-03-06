import * as loading from '../../images/loading.svg'
import { wrapper, image } from './loading.style'
import { el } from 'redom'

export default class Loading {
    el: any
    constructor() {
        this.el = el(`.${wrapper}`, el('img', { src: loading, className: image }))
    }
}
