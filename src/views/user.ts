import UserDetail from '../components/user/detail'
import Loading from '../components/loading/loading'
import model from '../models/user'

import { el, setChildren } from 'redom'

class Home {
    el: any
    userId

    constructor({ pageOrId: userId }) {
        this.userId = userId
        this.el = el('div', new Loading())
    }

    async onmount() {
        console.log(this.userId)
        await model.load(this.userId)
        let { current: user } = model
        let { current: loading } = model.loading

        this.update({ loading, user })
    }
    update({ user, loading }) {
        loading ? setChildren(this.el, new Loading()) : setChildren(this.el, new UserDetail(user))
    }
}

export default Home
