import axios from 'axios';
//import baseUrl from '../config';

export default function(url, {
  method = 'post',
  timeout = 10000,
  data = {},
  headers = {'Content-Type': 'application/json;charset=UTF-8;'},
  dataType = 'json'
}) {
  const config = {
    method: method,
    timeout: timeout,
    url: url,
    baseURL: "https://upload.jxxhy.cn/",
    data: data,
    headers: headers,
    dataType: dataType
  };
  return axios(config);
}