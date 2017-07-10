import { percent } from 'csx'
import { media, style } from 'typestyle'
import { flexRoot, vertical, flex } from 'csstips'

export const layout = style(flexRoot, vertical, flex)

export const main = style(
    flex,
    {
        width: percent(80),
        margin: '0 auto',
        marginTop: '48px',
        flexBasis: 'auto',
        flexGrow: 1
    },
    media(
        {
            maxWidth: 600
        },
        { width: percent(100) }
    )
)
