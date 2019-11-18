import $http from '@/request/axios/index'

export const services = {
    getIndexBanner: () => { // 获取首页banner
        return $http.post("novel/i.php?do=is_novelrank&p=1&page=2&size=10&onlyCpBooks=1&gender=1&type=1&shuqi_h5");
    }
};
export default services;