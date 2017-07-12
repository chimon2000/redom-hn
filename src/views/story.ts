import { el, setChildren } from 'redom'
import { style, classes } from 'typestyle'
import { px, white, em, blue, color } from 'csx'

import StoryList from '../components/story/story-list/story-list'
import Loading from '../components/loading/loading'
import model from '../models/stories'
import CommentItem from '../components/comments/comment-item'

const article = style({
    backgroundColor: white.toHexString(),
    padding: em(1.2)
})

const detail = style({
    paddingBottom: px(10),
    color: '#666',
    marginTop: em(0.5),
    fontSize: em(0.8),
    borderBottom: `${px(1)} solid #eee`
})

const comment = style({
    fontSize: em(0.85)
})

const link = style({
    color: '#666'
})

const unstyled = style({
    textDecoration: 'none'
})

const noComments = style({
    marginTop: px(10)
})

const unstyledLink = classes(link, unstyled)

const comments = comments => {
    return comments.length > 0
        ? comments.map(comment => new CommentItem(comment))
        : el('div', { className: noComments }, 'No comments yet')
}

class Story {
    el: Element
    storyId: number

    constructor({ id: storyId }) {
        this.storyId = storyId
        this.el = el('div', new Loading())
    }

    async onmount() {
        await model.load({ id: this.storyId })
        let { current: story } = model
        let { current: loading } = model.loading

        this.update({ loading, story })
    }

    update({ story, loading }) {
        loading
            ? setChildren(this.el, new Loading())
            : setChildren(
                  this.el,
                  el(`.${article}`, [
                      el(`article.${article}`, [
                          el(`a.${unstyledLink}`, { href: story.url }, story.title),
                          el(`.${detail}`, { className: detail }, [
                              el('span', `${story.points} points by `),
                              el('a', { href: `/user/${story.user}` }, story.user),
                              el('span', ` ${story.time_ago} | `),
                              el('span', {}, `${story.comments_count} comments`)
                          ]),
                          el(`.${comment}`, { className: comment }, story.comments && comments(story.comments))
                      ])
                  ])
              )
    }
}

export default Story
