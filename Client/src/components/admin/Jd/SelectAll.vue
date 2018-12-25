<template>
  <div>
    <el-button type="primary" @click="refresh" plain style="float: left;margin: 10px ">刷新景点</el-button>
    <el-table
      :data="jdData"
      border
      style="width: 100%">
      <el-table-column
        :show-overflow-tooltip="true"
        fixed
        prop="jd_name"
        label="景点名称"
        width="100">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="jd_id"
        label="景点编号"
        width="100">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="jd_addr"
        label="地址"
        width="120">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="jd_addr"
        label="简介"
        width="290">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="jd_info"
        label="简介"
        width="150">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button @click="updateJd(scope.row)" type="text" size="small">修改</el-button>
          <el-button  @click="showJd(scope.row)" type="text" size="small"><a :href="'http://localhost:9999/jump2showJd?jd_id='+scope.row.jd_id">查看</a></el-button>
          <el-button @click="deleteJd(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--弹出框-->
    <div>
      <el-dialog title="修改景点" :visible.sync="dialogFormVisible">
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
          <el-form-item label="图片url">
            <el-input v-model="jdObj.jd_imgs"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="postUpdate">确 定</el-button>
        </div>
      </el-dialog>
    </div>
<!--分页-->
    <div class="pageInation">
      <el-pagination
        :page-size="5"
        :pager-count="5"
        layout="prev, pager, next"
        :total="totalRows"
        @current-change="current_change">
      </el-pagination>
    </div>

  </div>

</template>

<script>
  import { regionData,CodeToText ,TextToCode} from 'element-china-area-data'
    export default {
        name: "SelectAll",
        data(){
          return {
            url:'http://192.168.2.110:9999',
            jdData:[],
            pageNow:1,
            totalPages:1,
            totalRows:1,
            current:1,
            dialogFormVisible: false,
            jdObj: {
              jd_id:'',
              jd_name:'',
              jd_addr:'',
              jd_info:'',
              jd_imgs:''
            },
            area:[],
            formLabelWidth: '120px',
            options: regionData
          }
        },
        methods:{
          postUpdate:function () {
            console.log(this.jdObj);
            var params = new URLSearchParams();
            params.append('jd_name', this.jdObj.jd_name);       //你要传给后台的参数值 key/value
            params.append('jd_addr', this.jdObj.jd_addr);
            params.append('jd_info', this.jdObj.jd_info);
            params.append('imgs', this.jdObj.jd_imgs);
            params.append('jd_id', this.jdObj.jd_id);
            this.$axios({
              method: 'post',
              url:this.url+'/updateJd',
              data:params
            }).then((res)=>{
              if(res.data == 'success'){
                this.$message({
                  message: '景点修改成功',
                  type: 'success'
                });
                this.dialogFormVisible = false
                this.refresh()
              }else {
                this.$message({
                  message: '景点已经存在了，请修改景点名字吧',
                  type: 'warning'
                });
              }

            });
          },
          addrChange:function () {
            //地址改变
            var array = [] ;
            this.area.forEach(function (item,index,arr) {
              array[index] = CodeToText[item] ;
            })
            this.jdObj.jd_addr = array.join(',') ;
          },
          handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
          },
          updateJd:function (jdObj) {
            this.dialogFormVisible = true
            this.jdObj.jd_id = jdObj.jd_id
            this.jdObj.jd_name = jdObj.jd_name
            this.jdObj.jd_addr = jdObj.jd_addr
            this.jdObj.jd_info = jdObj.jd_info
            this.jdObj.jd_imgs = jdObj.imgs
            var array = jdObj.jd_addr.split(',')

            this.area[0] = TextToCode[array[0]].code
            this.area[1] = TextToCode[array[0]][array[1]].code
            this.area[2] = TextToCode[array[0]][array[1]][array[2]].code
          },
          showJd:function (jdObj) {
            console.log('oh...')
            var jd_id = jdObj.jd_id
            this.$axios.get("http://192.168.2.110:9999/showJd?jd_id="+jd_id, {}).then(response => {
              console.log("get发送Ajax请求成功", response.data);
            }).catch(response=> {
              console.log('false_2_send_msg')
            })
          },
          deleteJd:function (jdObj) {
            console.log(jdObj);
            var jd_name = jdObj.jd_name ;
            var jd_id = jdObj.jd_id ;
          //  删除
            this.$confirm('此操作将永久删除景点: '+jd_name+' ,是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消'
            }).then(() => {
              this.$axios.get("http://192.168.2.101:9999/deleteJd?jd_id="+jd_id, {}).then(response => {
                console.log("get发送Ajax请求成功", response.data);
                if(response.data == 'success'){
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
                  this.refresh() ;
                }else{
                  this.$message({
                    type: 'info',
                    message: '删除失败!'
                  });
                }
              }).catch(response=> {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              })

            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          },
          refresh:function () {
            this.$axios.get(this.url+"/getAllJd?pageNow="+this.pageNow, {}).then(response => {
              console.log("get发送Ajax请求成功", response.data);
              this.jdData = response.data.jdData;
              this.totalPage = response.data.totalPages;
              this.totalRows = response.data.totalRows;
            }).catch(response=> {
              console.log("get发送Ajax请求失败",response);
            })
          },
          current_change:function (pageNow) {
            this.pageNow = pageNow ;
            this.refresh()
          }
      },
        created: function () {
          this.$axios.get("http://192.168.2.110:9999/getAllJd?pageNow="+this.pageNow, {}).then(response => {
            console.log("get发送Ajax请求成功", response.data);
            this.jdData = response.data.jdData;
            this.totalPage = response.data.totalPages;
            this.totalRows = response.data.totalRows;
          }).catch(response=> {
            console.log("get发送Ajax请求失败",response);
          })
        },
    }
</script>

<style scoped>
  .block {
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -250px;
  }
  .pageInation {
    position: absolute;
    bottom: 30px;
    left: 350px ;
  }
</style>
