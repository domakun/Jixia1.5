<template>
    <div>
      <el-form label-position="left" label-width="80px" :model="jdObj">
        <el-form-item label="名称">
          <el-input v-model="jdObj.jd_name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-cascader
            size="large"
            :options="options"
            v-model="area"
            @change="addrChange">
          </el-cascader>
        </el-form-item>
        <el-form-item label="景点信息" prop="desc">
          <el-input style="resize:none"  type="textarea" v-model="jdObj.jd_info"></el-input>
        </el-form-item>
        <!--图片上传-->
        选择图片：<input class="upPic" type="file" id="videoFile"  @change="tirggerFile($event)"/>
        <el-form-item>
          <el-button type="primary" @click="submiEvent()">添加景点</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import { regionData,CodeToText } from 'element-china-area-data'
  import COS from 'cos-js-sdk-v5'
    export default {
      name: "AddJd",
      methods:{
        tirggerFile:function(event){
          console.log(event)
          this.file = event.target.files
        },
        upImag:function () {
          var that = this
          //上传图片到云平台
          var cos = new COS({
            SecretId: 'AKIDJSRo088AzdEgR3xwBHC2hCWSM9nJ7eps', //密钥id
            SecretKey: 'Xt66yfDf9gAaxAB4rZ7hAHD086wxrSuA'//密钥的key
          });
          var file = this.file[0];
          const Key = this.GetTimeString() + '.jpg' ;
          var url = 'https://pic-up-1258367528.cos.ap-chengdu.myqcloud.com/'+ Key
          cos.putObject({
            Bucket: 'pic-up-1258367528', // 桶名-APPID  必须
            Region: 'ap-chengdu', //区域 必须
            Key: Key, //文件名必须
            StorageClass: 'STANDARD',
            Body: file, // 上传文件对象
            onProgress: function (progressData) {
              that.jdObj.jd_imgs = url
              console.log('that.jdObj.imgs>>',that.jdObj.jd_imgs)
            },
          }, function (err, data) {
            console.log(err || data);//上传失败的返回值
          })
        },
        submiEvent:function () {
          this.upImag()
          //检查提交数据
          for(var item in this.jdObj){
            console.log(this.jdObj[item]) ;
            if(this.jdObj[item].trim() == ''){
              this.$message({
                message: '任意信息不可为空！',
                type: 'warning'
              });
              return ;
            }
          }
          //提交表格
          console.log(this.jdObj);
          var params = new URLSearchParams();
          params.append('jd_name', this.jdObj.jd_name);       //你要传给后台的参数值 key/value
          params.append('jd_addr', this.jdObj.jd_addr);
          params.append('jd_info', this.jdObj.jd_info);
          params.append('imgs', this.jdObj.jd_imgs);
          this.$axios({
            method: 'post',
            url:this.url+'/addJd',
            data:params
          }).then((res)=>{
            if(res.data == 'success'){
              this.$message({
                message: '景点添加成功',
                type: 'success'
              });
            }else {
              this.$message({
                message: '景点已经存在了，请修改景点名字吧',
                type: 'warning'
              });
            }
          });
        },
        resetForm:function () {
          //重置表格
          this.jdObj = {}
        },
        addrChange:function () {
          //地址改变
          var array = [] ;
          this.area.forEach(function (item,index,arr) {
            array[index] = CodeToText[item] ;
          })
          this.jdObj.jd_addr = array.join(',') ;
        },
        check:function () {
          for(var item in this.jdObj){
            if(item.trim() == ''){
              console.log(item);
              return true ;
            }
            return false ;
          }
        },
        GetTimeString: function () {
          var date = new Date();
          var yy = date.getFullYear().toString();
          var mm = (date.getMonth() + 1).toString();
          var dd = date.getDate().toString();
          var hh = date.getHours().toString();
          var nn = date.getMinutes().toString();
          var ss = date.getSeconds().toString();
          var mi = date.getMilliseconds().toString();

          var ret = yy + mm + dd + hh + nn + ss + mi;
          return ret;
        }
      },
      data(){
          return{
            file:'',
            url:'http://192.168.2.110:9999',
            jdObj:{
              jd_name:'',
              jd_addr:'',
              jd_info:'',
              jd_imgs:''
            },
            options: regionData,
            area:[]

          }
      }
    }
</script>

<style scoped>
.upPic {
  margin: 30px;
}
</style>
