import { style } from 'typestyle'
import { white, percent, px } from 'csx'
import { flexRoot, vertical, centerJustified } from 'csstips'

export const header = style(flexRoot, {
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    backgroundColor: white.toHexString(),
    padding: '0 16px',
    height: px(48),
    minHeight: px(48),
    zIndex: 1,
    borderBottom: '#d31b33 1px solid'
})

export const nav = style(flexRoot, {
    alignItems: 'center',
    width: '90%',
    margin: '0 auto'
})

export const logoStyle = style({
    height: '38px'
})

export const link = style(flexRoot, vertical, centerJustified, {
    margin: '0 .4rem',
    color: '#d31b33',
    textDecoration: 'none',
    height: percent(100)
})

export const activeLink = style({
    fontWeight: 'bold'
})
