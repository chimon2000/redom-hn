import { router as createRouter, el } from 'redom'
import createHistory from 'history/createBrowserHistory'
import * as UrlPattern from 'url-pattern'

let router = createRouter(el('div'))

const history = createHistory()

history.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
    console.log(`The last navigation action was ${action}`)
})

export default {
    ...router,

    update(route, data?) {
        this._update(route, Object.assign({ location: history.location }, data))
    },
    _update: router.update
}

const pattern = new UrlPattern('#/:page(/:stuff)')
console.log(location.hash)
console.log(`${pattern.stringify({ page: 'jobs' })}`)
console.log(pattern.match(location.hash))

console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
console.log(`The current params are ${pattern.match(location.hash)}`)
