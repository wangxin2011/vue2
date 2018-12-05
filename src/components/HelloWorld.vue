<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update($event)"/>

   <uploader :options="options" class="uploader-example">
      <uploader-unsupport></uploader-unsupport>
      <uploader-drop>
        <p>Drop files here to upload or</p>
        <uploader-btn>select files</uploader-btn>
        <uploader-btn :attrs="attrs">select images</uploader-btn>
        <uploader-btn :directory="true">select folder</uploader-btn>
      </uploader-drop>
      <uploader-list></uploader-list>
    </uploader>
  </div>
</template>

<script>
import server from '@/services/service'

export default {
  name: 'HelloWorld',
  data () {
    return {
      file:[],
      msg: 'Welcome to Upload File',
      options: {
        // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
        // target: 'https://upload.jxxhy.cn/common/UploadFile?FormFile=FormFiles',
        target: 'http://upload.dledc.com/common/UploadFile?FormFile=FormFiles',
        testChunks: false
      },
      attrs: {
        accept: 'image/*'
      }
    }
  },
  methods: {
    getFile: function (event) {
      // 获取input里的文件
      this.file.push(event.target.files[0])
    },
    update: function (event) {
      event.preventDefault()
      this.file.push(event.target.files[0])
      // 创建form对象
      let formData = new FormData()
      // 通过append向form对象添加数据
      formData.append('file',this.file)
      formData.append('fileKey',"FormFiles")
      formData.append('fileName', "image.jpg")
      server.uploadingFile(formData);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
