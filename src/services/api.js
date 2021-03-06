import Axios from 'axios'

// export const BASE_URL = 'http://localhost:3001'
let BASE_URL = process.env.NODE_ENV === 'production' ? 'https://ratemypet-backend.herokuapp.com/' : 'http://localhost:3001'

const Client = Axios.create({ baseURL: BASE_URL })

//Intercepts every request axios makes
Client.interceptors.request.use(
    (config) => {
        // Reads the token in localStorage
        const token = localStorage.getItem('token')
        //if the token exsits, we set the auth header
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config //We return the new config if the token exsits or the default config if no token exists.
        // Provides the token to each request that passes through axious
    },
    (error) => Promise.reject(error)
)

export default Client