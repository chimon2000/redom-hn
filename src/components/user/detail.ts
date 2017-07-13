import { className, link } from './detail.style'
import { el } from 'redom'

export default class User {
    el: Element

    constructor(private user) {
        this.el = el(`section.${className}`, [
            el('h2', `User: ${user.id}`),
            el('div', `Created: ${user.created}`),
            el('div', `Karma: ${user.karma}`),
            el('div', { innerHTML: user.about || '' }),
            el('div', [
                el(`a.${link}`, { href: `https://news.ycombinator.com/submitted?id=${user.id}` }, 'submissions'),
                el('span', ' | '),
                el(`a.${link}`, { href: `https://news.ycombinator.com/threads?id=${user.id}` }, 'comments'),
                el('span', ' | '),
                el(`a.${link}`, { href: `https://news.ycombinator.com/favorites?id=${user.id}` }, 'favorites')
            ])
        ])
    }
}
