import request from './request.js';

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