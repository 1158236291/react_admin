import ajax from "./ajax";

// const BASE_URL = 'http://localhost:5000'
const BASE_URL = "/api1";
// 登录接口
export const reqLogin = (params) => ajax(`${BASE_URL}/login`, params, "POST");
// 获取天气
export const reqWeather = (city) => ajax(`/api2/data/sk/${city}.html`);
// 获取一级或某个二级分类列表
export const reqCategorys = (parentId) =>
  ajax("/manage/category/list", { parentId });
// 添加分类
export const reqAddCategory = (parentId, categoryName) =>
  ajax("/manage/category/add", { parentId, categoryName }, "POST");
// 更新品类名称
export const reqUpdateCategory = ({ categoryId, categoryName }) =>
  ajax("/manage/category/update", { categoryId, categoryName }, "POST");
