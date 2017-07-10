import config from './config'

type LoadProps = {
    id?: number
    page?: number
    listType?: 'news' | 'newest' | 'jobs' | 'ask'
}

export type Story = {
    id: number
    title: string
    points: number
    time_ago: string
    comments_count: number
    user: string
    url: string
    comments: any[]
}

const DefaultLoadProps: LoadProps = {
    page: 1,
    listType: 'news'
}

const Stories = {
    loading: {
        list: true,
        current: true
    },
    list: [],
    current: {} as Story,
    async load(props: LoadProps = DefaultLoadProps) {
        let { listType, id, page = 1 } = props
        try {
            if (id) {
                this.loading.current = true
                let response = await fetch(`${config.baseUrl}/item/${id}`)

                this.current = await response.json()
                this.loading.current = false
            } else {
                this.loading.list = true
                let response = await fetch(`${config.baseUrl}/${listType}?page=${page || 1}`)

                this.list = await response.json()
                this.loading.list = false
            }
        } catch (error) {
            console.log('Something went horribly wrong', error)
        }
    }
}

export default Stories
