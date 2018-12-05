// import axios from '../services/axios';
import axios from 'axios'
const server = {
  uploadingFile (data) {
    // return axios('https://upload.jxxhy.cn/common/UploadFile?FormFile=FormFiles', {
    //   method: 'post',
    //   data: data,
    //   // 修改请求头才能传文件
    //   headers: {'Content-Type': 'multipart/form-data'},
    //   timeout: 10000,
    //   dataType: 'json'
    // })
    // axios.post("http://upload.dledc.com/common/UploadFile?FormFile=FormFiles",data,{headers:{'Content-Type': 'multipart/form-data'}}).then(res => {
    //       //响应数据处理
    //     console.log(res);
    // });
    axios({
      url: 'http://upload.dledc.com/common/UploadFile?FormFile=FormFiles',
      method: 'post',
      data: data,
      headers: {'Content-Type': 'multipart/form-data'}
  }).then(function (re) {
      console.log(re);
      })
      .catch(function (err) {
          console.log(err);
      })
  }
}
export default server;
