import Home from './views/home'
import Stories from './views/stories'
import Story from './views/story'
import About from './views/about'
import Layout from './components/layout/layout'
import User from './views/user'

export default {
    home: data => Layout(new Home()),
    about: data => Layout('About'),
    top: (initData, data) => Layout(new Stories(data)),
    user: (initData, data) => Layout(new User(data)),
    story: (initData, data) => Layout(new Story(data)),
    new: (initData, data) => Layout(new Stories(data)),
    show: (initData, data) => Layout(new Stories(data)),
    ask: (initData, data) => Layout(new Stories(data)),
    jobs: (initData, data) => Layout(new Stories(data))
}
