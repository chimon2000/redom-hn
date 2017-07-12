import { el, setChildren } from 'redom'

import { article, child, link, hide, select, more, commentList } from './comment-item.style'
import { classes } from 'typestyle'

const children = (comments, onclick) => {
    if (comments.length > 0) {
        return el('div', { className: hide }, [
            el('span', { className: select, onclick }, '[-]'),
            el('div', { className: commentList }, comments.map(row => new CommentItem(row, true)))
        ])
    }
}

const showMore = (comment, onclick) => {
    return el('span', { className: classes(more, select), onclick }, `[+] ${comment.comments.length} replies collapsed`)
}

export default class CommentItem {
    el: Element
    showComments = true

    constructor(private comment, private isChild = false) {
        this.el = el(
            'article',
            { className: this.isChild ? classes(child, article) : article },
            this.create(this.showComments)
        )
    }

    toggleShowComments() {
        this.showComments = !this.showComments
        this.update()
    }

    create(showComments: boolean) {
        return [
            el('header', [
                el('a', { className: link, href: `/#/user/${this.comment.user}` }, this.comment.user),
                el('span', ` ${this.comment.time_ago}`)
            ]),
            el('div', { innerHTML: this.comment.content }),
            showComments
                ? children(this.comment.comments, () => this.toggleShowComments())
                : showMore(this.comment, () => this.toggleShowComments())
        ]
    }

    update() {
        setChildren(this.el, this.create(this.showComments))
    }
}
