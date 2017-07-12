import { style, classes } from 'typestyle'

import { px, em, color } from 'csx'
import { flexRoot } from 'csstips'

export const article = style({
    marginTop: px(10),
    color: color('#d31b33').darken(0.15).toHexString()
})

export const child = style({})

export const link = style({
    color: '#666'
})

export const hide = style(flexRoot, {})

export const select = style({
    cursor: 'pointer',
    userSelect: 'none'
})

export const more = style({
    color: '#666',
    display: 'block',
    padding: `${em(0.3)} ${em(0.5)}`,
    borderRadius: px(4),
    backgroundColor: color('#d31b33').lighten(0.45).toHexString()
})

export const commentList = style({
    borderTop: `${px(1)} solid #eee`,
    marginTop: px(7),
    marginLeft: px(10)
})
