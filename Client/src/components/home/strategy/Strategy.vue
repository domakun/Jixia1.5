<template>
  <section class="container-global-inner strategy">
    <h3 class="title"><router-link to="/strategy">Strategy<i class="el-icon-d-arrow-right"></i></router-link></h3>
    <div class="left-message">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label" style="display: inline-block; width: 75px;">最新</span>
          <new></new>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label" style="display: inline-block; width: 75px;">最热</span>
          <hot></hot>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label" style="display: inline-block; width: 75px;">最近</span>
          <all></all>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right-message">
      <el-card class="box-card" shadow="hover">
        <div class="nav-model">
          <h3 class="nav-strategy"><a href="">旅游攻略导航</a></h3>
          <el-input placeholder="请输入内容" v-model="input_msg" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="选择">
              <el-option label="国内" value="1"></el-option>
              <el-option label="国外" value="2"></el-option>
              <el-option label="主题" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <ul class="ranking nav-model">
          <li>
            <span class="num">1</span>
            <router-link to="" :title="rank_lead.name" target="_blank">{{rank_lead.name}}</router-link>
            <p class="update-time inline-show">更新时间: <span class="extra">{{rank_lead.update}}</span></p>
            <!--介绍--><p class="intro">{{rank_lead.intro}}</p>
            <div class="rank-lead-about">
              <a href="#"><i class="el-icon-download"></i></a>
              <p class="inline-show"><span class="extra">{{rank_lead.download}}</span>人下载</p>
            </div>
          </li>
          <li v-for="item in rank"><span class="num">{{item.num}}</span>
            <router-link to="" :title="item.name" target="_blank">{{item.name}}</router-link>
          </li>
        </ul>
      </el-card>
    </div>
  </section>
</template>

<script>
  import New from './New'
  import Hot from './Hot'
  import All from './All'

  export default {
    name: "strategy",
    components: {
      'new': New,
      'hot': Hot,
      'all': All
    },
    data() {
      return {
        input_msg: '',
        select: '',
        rank_lead: {
          name: '稻城',
          intro: '稻城县以亚丁为核心的稻城香格里拉生态旅游区，汇集雪山、冰川、湖泊、草原、瀑布等壮丽景观，被誉为“中国香格里拉之魂”、“蓝色星球上最后一片净土”',
          update: '2018-12-26',
          download: 13897
        },
        rank: [
          {name: '同仁', num: 2},
          {name: '扬州', num: 3},
          {name: '吴哥窟', num: 4},
          {name: '阿姆斯特丹', num: 5},
          {name: '北海道', num: 6},
          {name: '凤凰', num: 7},
          {name: '绵山', num: 8},
          {name: '厦门', num: 9},
          {name: '西塘', num: 10}
        ]
      }
    }
  }
</script>

<style>
  section.strategy {
    width: 1128px;
    height: auto;
    overflow: hidden;
    /*padding-bottom: 70px;*/
    white-space: nowrap;
    margin: 0 auto;
    padding-bottom: 64px;
    position: relative;
  }
  section.strategy h3.title {
    font-size: 36px;
    font-family: 'Pathway Gothic One', sans-serif;
    line-height: 44px;
    text-transform: uppercase;
    padding-top: 42px;
    padding-bottom: 24px;
  }

  div.left-message {
    position: relative;
    width: 744px;
    height: auto;
  }

  div.right-message {
    width: 360px;
    height: auto;
    /*border: 1px solid #000;*/
    position: absolute;
    top: 110px;
    right: 0;
  }

  .ranking {
    margin-top: 13px;
    position: relative;
  }

  .ranking li {
    padding: 4px 0;
    position: relative;
  }

  .ranking li .intro {
    padding: 8px 0 18px;
    text-indent: 1em;
    white-space: normal;
  }
  .ranking li a {
    color: #656565;
  }
  .ranking li .num {
    color: #bebebe;
    font-size: 18px;
    margin-right: 10px;
    float: left;
    zoom: 1;
  }

  ul.ranking > :first-child .num,
  ul.ranking > :first-child + li .num,
  ul.ranking > :first-child + li + li .num {
    color: #ff6f61;
  }

  .ranking li .num:after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both
  }

  .ranking li + li {
    border-top: 1px solid #f7f7f7;
    line-height: 24px;
  }

  .ranking .rank-lead-about {
    font-size: 12px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .ranking p.inline-show {
    display: inline-block;
  }

  .ranking p.inline-show span.extra {
    color: #ff6f61;
  }

  .ranking .update-time {
    position: absolute;
    top: 0;
    right: 0;
  }

  .box-card {
    padding: 5px 0;
    height: 500px;
    box-sizing: border-box;
  }

  .nav-model {
    width: 340px;
    height: auto;
    margin-left: 10px;
  }

  .nav-strategy {
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: left;
    padding-bottom: 10px;
    color: #000;
  }

  .nav-strategy a {
    color: #000;
    font-size: 16px;
  }

  .el-select .el-input {
    width: 80px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .el-card__body {
    width: 340px;
    padding: 0;
  }

  /*子组件公共样式*/
  .tab_cont img {
    width: 246px;
    height: 130px;
    display: inline-block;
    float: left;
    margin-top: 20px;
    margin-right: 24px;
    zoom: 1;
  }

  .tab_cont img::after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both
  }

  div.strategy {
    display: inline-block;
    width: 408px;
    /*float: left;*/
  }

  div.title { /* 标题样式 */
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding-top: 20px;
    color: #263555;
  }

  div.glb_info { /* 简介样式 */
    height: 100px;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    text-indent: 2em;
    margin-top: 15px;
    color: #666565;
    white-space: normal;
  }

  div.tab_cont a.btn { /* 详情按钮样式 */
    display: block;
    float: right;
    margin-right: 15px;
    margin-bottom: 2px;
    background-color: #fbf6f8;
    border: 1px solid #b1aaaa;
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    padding: 0px 10px;
  }

  div.tab_cont a.btn:hover {
    border-color: #ff6f61;
    color: #fff;
    background-color: #ff6f61;
  }

  a.load-more {
    background-color: #f5f7fa;
    border-radius: 4px;
    color: #666;
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 100%;
    margin-top: 15px;
  }

  i.el-icon-caret-bottom {
    font-size: 20px;
  }

  a.load-more:hover {
    color: #fff;
    background-color: #ff6f61;

  }
</style>
