import ajax from './ajax'

// const BASE_URL = 'http://localhost:5000'
const BASE_URL = '/api1'
// 登录接口
export const reqLogin = (params) => ajax(`${BASE_URL}/login`,params,'POST')

export const reqWeather = (city) =>ajax(`/api2/data/sk/${city}.html`)

