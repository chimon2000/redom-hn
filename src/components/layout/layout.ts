import { layout, main } from './layout.style'
import { el } from 'redom'

import Header from './header'

export default content => el(`.${layout}`, [new Header(), el(`.${main}`, content)])
