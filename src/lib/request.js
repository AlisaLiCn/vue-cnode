import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
    baseURL: 'http://cnodejs.org/api/v1',
    timeout: 60000,
    paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
    },
})

const responseHandlerInterceptor = response => {
    if (!response.data.success) {
        const e = new Error(response.data.message)
        e.code = response.data.code
        e.extra = response.data.extra
        throw e
    }
    return response.data.data
}

instance.interceptors.response.use(responseHandlerInterceptor)

export { instance }
