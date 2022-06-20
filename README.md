# axios简单的防抖节流，防止多次提交的简单封装
基于 axios 封装+ vue域名测试环境+预发布+正式环境配置
封装axios是在目录utils/request下
utils/api是自己需要调用的api，在components下面有调用例子

1.关于request.js封装介绍
里面使用了拦截判断token的方法，还有前端节流的方案。
就是用时间差来判断如果是提交 post 的请求的话，小于300（具体时间可以自己调整也可以去掉）不会重复多次提交，防止多次提交，一般用于提交信息的时候返回页面。这里做一个统一封装，来终止请求
具体用到axios的cancelToken取消请求方法

2.环境配置具体看根目录的.env文件，每个文件对应不同的域名，具体指令定义在package.json中
在requset中的baseURL代表就是.env中的域名信息，可以自定义域名

在package.json中不同打包指令下获取的不同域名来区分具体的环境
npm run build:testing,来打包测试环境，具体可以自己配置

本案例简易易懂可扩展性强，就是一个简单的封装 axios的例子。
