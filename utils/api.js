import request from '@/utils/request';

export const post = (data) => {
    return request({
        url: 'xxxx',
        method: 'post',
        data
    });
};

export const get = (params) => {
    return request({
        url: 'xxxx',
        method: 'get',
        params
    });
};