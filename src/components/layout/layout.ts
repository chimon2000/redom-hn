import { el } from 'redom'

import { layout, main } from 'hn-styles/lib/layout/layout'

import Header from './header'

export default content => el(`.${layout}`, [new Header(), el(`.${main}`, content)])
