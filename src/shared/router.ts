import { router as createRouter, el } from 'redom'
import createHistory from 'history/createBrowserHistory'
import * as UrlPattern from 'url-pattern'

let router = createRouter(el('div'))

const history = createHistory()
const pattern = new UrlPattern('#/:category(/:page)')

history.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
    console.log(`The last navigation action was ${action}`)
})

export default {
    ...router,

    update(route, data?) {
        this._update(route, Object.assign({ location: history.location }, data))
    },
    _update: router.update,
    start() {
        let { category, page = 1 } = pattern.match(location.hash)
        this.update(category, { category, page })
    }
}
