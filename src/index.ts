import { text, mount, el } from 'redom'
import app from './app'

mount(document.body, app)

app.start()
app.push('top')
