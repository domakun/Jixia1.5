<template>
  <div>
    <topheader></topheader>
    <main class="main container-global">
      <div class="content-container">
        <!-- 从这里开始写-->
        <dl v-for="item in aboutInfo">
          <dt><i class="el-icon-caret-bottom">{{item.dt}}</i></dt>
          <dd>{{item.dd}}</dd>
        </dl>
      </div>
    </main>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import Header from '../Public/Header'
  import Footer from '../../components/Public/Footer'

  export default {
    name: "About",
    components: {
      'topheader': Header,
      'myfooter': Footer,

    },
    data() {
      return {
        aboutInfo: [
          {
            dt: '主题',
            dd: '爱极暇，爱生活，自在游天下。'
          },
          {
            dt: '极暇的来历',
            dd: '我们爱旅游。它扩大了人生,也就延长了寿命,多了好几种“活法”。人生曲折,常有受阻和困惑时,旅游思路就如流水般地打开,生活不再循环。再归来,你会以一种“俱往矣”的眼光看待往日困境,重新摆布你的生活。异地色彩,也会增添你人格中神秘的魅力。'
          },
          {
            dt: '极暇能帮你做什么',
            dd: '旅游之前，先上极暇，靠谱的旅游攻略,精选自由行攻略,自助游分享社区。你对这个世界的好奇，极暇都有答案。'
          },
          {
            dt: '参与极暇',
            dd: '只要你爱旅行，只要你有爱。这里的一切都是都由你和其他成员产生和决定。你的每一条话题都出现在"我的极暇"里，同时这些内容又由和你一样的成员分享着。'
          },
          {
            dt: '极暇网站的历程',
            dd: '极暇自半个月上线运营以来，极暇注册用户少而精确，其中大部分用户来自四川等一线大城市，也不乏海外旅居人士。极暇的用户热爱编程，钟情于改bug，拥有专业的代码天赋，因此，极暇凝聚的是一个高质量的旅游爱好者群体。凭借自身的优势，极暇正吸引着更多的网友源源不断地加入极暇旅游社区。'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .content-container {
    height: 700px;
  }

  dt {
    color: #ff6f61;
    font-size: 14px;
    font-weight: 600;
  }

  dd {
    font-size: 14px;
    color: #555555;
    text-indent: 2em;
  }

  dl {
    display: block;
    width: 80%;
    margin: 0 auto 40px;
    line-height: 30px;
  }

  img {
    margin: 0 auto;
    display: block;
    width: 100px;
  }
</style>
