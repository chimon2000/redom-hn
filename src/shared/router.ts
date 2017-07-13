import { el, setChildren } from 'redom'
import createHistory from 'history/createBrowserHistory'
import * as UrlPattern from 'url-pattern'

const history = createHistory()
const pattern = new UrlPattern('#/:category(/:pageOrId)')

export function router(parent, views?, initData?, route?) {
    return new Router(parent, views, { initData, route })
}

type RouterOptions = {
    views?
    initData?
    route?
}

class Router {
    el: Element
    route: string
    view
    data
    initData

    constructor(private parent, private views = [], private options: RouterOptions = {}) {
        this.el = parent
        this.route = options.route
        this.initData = options.initData
    }

    update(route, data?) {
        if (route !== this.options.route || data !== this.data) {
            const views = this.views
            const View = views[route]

            this.view = View && new View(this.initData, data)
            this.route = route

            setChildren(this.el, [this.view])
        }
        this.view && this.view.update && this.view.update(data, route)
    }

    push(route) {
        history.push(`/#/${route}`)
    }

    updateRoutes(views) {
        this.views = views
    }

    start() {
        let page = 1
        let params = {}

        try {
            let { category: route, pageOrId, ...otherParams } = pattern.match(location.hash)
            console.log(route)
            this.route = route
            params = {
                category: route,
                pageOrId,
                ...otherParams
            }
        } catch (error) {}

        this.update(this.route, params)

        history.listen((location, action) => {
            try {
                if (action === 'POP' || action === 'PUSH') {
                    let { category: route, pageOrId, ...params } = pattern.match(location.hash)

                    this.route = route
                    this.update(route, { category: route, pageOrId })
                }
            } catch (error) {}
        })
    }
}

export default router(el('div'), null, null)
