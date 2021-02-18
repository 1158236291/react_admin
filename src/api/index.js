import ajax from './ajax'

// const BASE_URL = 'http://localhost:5000'
const BASE_URL = ''
// 登录接口
export const reqLogin = (params) => ajax(`${BASE_URL}/login`,params,'POST')