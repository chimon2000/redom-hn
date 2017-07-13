import { el } from 'redom'
import { article, index, detail, link, unstyled, unstyledLink } from 'hn-styles/lib/stories/story-item'

export default class StoryItem {
    el: Element
    constructor(story, idx) {
        this.el = el(`article.${article}`, [
            el(`.${index}`, idx + 1),
            el(`div`, [
                el(`a.${unstyledLink}`, { href: story.url }, story.title),
                el(`.${detail}`, [
                    el('span', `${story.points} points by `),
                    el(`a.${link}`, { href: `#/user/${story.user}` }, story.user),
                    el('span', ` ${story.time_ago} | `),
                    el(`a.${link}`, { href: `#/story/${story.id}` }, `${story.comments_count} comments`)
                ])
            ])
        ])
    }

    onunmount() {
        this.el = null
    }
}
