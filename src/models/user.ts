import config from './config'

const User = {
    loading: {
        current: true
    },
    current: {},
    async load(id) {
        this.loading.current = true

        try {
            let response = await fetch(`${config.baseUrl}/user/${id}`)

            this.current = await response.json()
            this.loading.current = false
        } catch (error) {
            console.log('Something went horribly wrong', error)
        }
    }
}

export default User
