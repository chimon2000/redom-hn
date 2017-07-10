import { style, classes } from 'typestyle'
import { em, px } from 'csx'
import { flexRoot } from 'csstips'

export const article = style(flexRoot, {
    paddingLeft: em(1),
    $nest: {
        '&:not(:last-child)': {
            marginBottom: em(1.5)
        }
    }
})

export const index = style({
    fontSize: em(1.6),
    width: px(50)
})

export const detail = style({
    marginTop: em(0.5),
    color: '#666',
    fontSize: em(0.8)
})

export const link = style({
    color: '#666'
})

export const unstyled = style({
    textDecoration: 'none'
})

export const unstyledLink = classes(link, unstyled)
