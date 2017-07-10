import className from './story-list.style'
import { el } from 'redom'
import StoryItem from '../story-item/story-item'

const getIndex = (start, index) => {
    return index + 30 * (start - 1)
}

export default class StoryList {
    el: Element
    constructor({ stories, start = 1 }) {
        this.el = el(`.${className}`, stories.map((story, idx) => new StoryItem(story, getIndex(start, idx))))
    }

    onunmount() {
        this.el = null
    }
}
