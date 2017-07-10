import Home from './views/home'
import Stories from './views/stories'
import About from './views/about'
import Layout from './components/layout/layout'

export default {
    home: data => Layout(new Home()),
    about: data => Layout('About'),
    top: (initData, data) => Layout(new Stories(data)),
    new: (initData, data) => Layout(new Stories(data)),
    show: (initData, data) => Layout(new Stories(data)),
    ask: (initData, data) => Layout(new Stories(data)),
    jobs: (initData, data) => Layout(new Stories(data))
}
