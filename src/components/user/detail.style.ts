import { style, keyframes } from 'typestyle'
import { white, em, px } from 'csx'

const loadingAnimation = keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 1 }
})

export const className = style({
    animationName: loadingAnimation,
    animationDuration: '2s',
    backgroundColor: white.toHexString(),
    marginTop: px(1),
    padding: em(2)
})

export const link = style({ color: 'black' })
