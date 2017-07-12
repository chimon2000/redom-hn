import { el, setChildren } from 'redom'
import { style, keyframes } from 'typestyle'
import { px, white, em, blue, color } from 'csx'

import StoryList from '../components/story/story-list/story-list'
import Loading from '../components/loading/loading'
import model from '../models/stories'
import router from '../shared/router'

let h1 = style({
    color: blue.toHexString()
})

const pageToListType = {
    top: 'news',
    new: 'newest',
    jobs: 'jobs',
    ask: 'ask',
    show: 'show'
}

const loadingAnimation = keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 1 }
})

const className = style({
    animationName: loadingAnimation,
    animationDuration: '2s',
    marginTop: px(1)
})

const pager = style({
    paddingLeft: em(3.2),
    paddingTop: em(1.5),
    backgroundColor: white.toHexString()
})

const link = style({
    color: color('#d31b33').darken(0.1).toHexString(),
    textDecoration: 'none',
    fontWeight: 600
})

class Stories {
    el: Element
    page: number
    listType
    category: string

    constructor({ category = '', pageOrId: page = 1 }) {
        this.category = category
        this.page = page
        this.listType = pageToListType[category]

        this.el = el('div', new Loading())

        this.el.addEventListener('user-selected', (e: CustomEvent) => router.update('user', e.detail.id))
    }

    async onmount() {
        await model.load({ listType: this.listType })
        const { list: loading } = model.loading
        const { list } = model

        this.update({ loading, list, page: this.page })
    }

    async loadMore(page) {
        await model.load({ listType: this.listType, page })

        const { list: loading } = model.loading
        const { list } = model

        this.update({ loading, list, page })
        document.body.scrollTop = 0
    }

    update({ loading, list: stories, page = 1 }) {
        loading
            ? setChildren(this.el, new Loading())
            : setChildren(
                  this.el,
                  el(`.${className}`, [
                      new StoryList({ stories, start: page }),
                      el(
                          `.${pager}`,
                          el(
                              `a.${link}`,
                              { href: `#/${this.category}/${++page}`, onclick: () => this.loadMore(page) },
                              'More...'
                          )
                      )
                  ])
              )
    }
}

export default Stories
