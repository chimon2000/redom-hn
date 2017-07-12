import { classes } from 'typestyle'
import { header, nav, logoStyle, link, activeLink } from './header.style'
import { el } from 'redom'
import router from '../../shared/router'
import * as logo from '../../images/logo.svg'

export const Nav = [
    {
        name: 'Top',
        route: 'top'
    },
    {
        name: 'New',
        route: 'new'
    },
    {
        name: 'Show',
        route: 'show'
    },
    {
        name: 'Ask',
        route: 'ask'
    },
    {
        name: 'Jobs',
        route: 'jobs'
    }
]

const navLink = ({ name, route }, active) => {
    let className = active ? classes(link, activeLink) : link

    let element = el(`a.${className}`, { href: `#/${route}` }, name)

    element.addEventListener('click', () => {
        router.update(route, { category: route })
    })

    return element
}

export default class Header {
    el: any
    constructor() {
        this.el = el(
            `.${header}`,
            el(`.${nav}`, [
                el('img', { className: logoStyle, src: logo, alt: 'logo' }),
                Nav.map(row => {
                    return navLink(row, false)
                })
            ])
        )
    }
}
