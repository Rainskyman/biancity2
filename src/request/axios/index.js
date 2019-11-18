import axios from 'axios';

var BASE_URL = 'http://read.xiaoshuo1-sm.com/';

// 创建基请求
const $http = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

// 请求拦截器
$http.interceptors.request.use(config => {
    return config
},err=>{
	console.log(err)
})


// 添加响应拦截器
$http.interceptors.response.use(function (res) {
	return res.data;
}, function (error) {
    return Promise.reject(error);
});

export default $http;
