import { el } from 'redom'
import { article, index, detail, link, unstyled, unstyledLink } from './story-item.style'

export default class StoryItem {
    el: Element
    constructor(story, idx) {
        this.el = el(`article.${article}`, [
            el(`.${index}`, idx + 1),
            el(`div`, [
                el(`a.${unstyledLink}`, { href: story.url }, story.title),
                el(`.${detail}`, [
                    el('span', `${story.points} points by `),
                    el(`a.${link}`, { onclick: () => this.onUserSelected(story.user) }, story.user),
                    el('span', ` ${story.time_ago} | `),
                    el(`a.${link}`, { onclick: () => this.onItemSelected(story) }, `${story.comments_count} comments`)
                ])
            ])
        ])
    }

    onunmount() {
        this.el = null
    }

    onUserSelected(user) {
        const event = new CustomEvent('user-selected', { detail: user, bubbles: true })
        this.el.dispatchEvent(event)
    }

    onItemSelected(story) {
        const event = new CustomEvent('story-selected', { detail: story, bubbles: true })
        this.el.dispatchEvent(event)
    }
}