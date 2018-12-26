<template>
  <div>
    <topheader></topheader>
    <main class="main container-global">
      <!--轮播+查询-->
      <div class="slide">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in slidePic" :key="item">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
        <div class="input_div">
          <el-form :inline="true" label-position="left" size="big" label-width="80px">
            <el-form-item >
              <el-input style="width: 600px"  placeholder="搜索更多... "></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
      <div>
        <!-- 三个面板切换-->
        <el-tabs type="border-card">
          <el-tab-pane label="热门问题">
            <Question :main_data="main_data1"></Question>
          </el-tab-pane>
          <el-tab-pane label="最新问题">
            <Question :main_data="main_data2"></Question>
          </el-tab-pane>
          <el-tab-pane label="待回答问题">
            <Question :main_data="main_data3"></Question>
          </el-tab-pane>
          <el-tab-pane label="我的问题">
            <Question :main_data="main_data4"></Question>
          </el-tab-pane>
        </el-tabs>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '../Public/Header'
import Question from './Question/Question'
  export default {
    name: "Community",
    components: {
      topheader:Header,
      Question:Question
    },
    data:function () {
      return {
        slidePic:[
          'https://images.pexels.com/photos/1688568/pexels-photo-1688568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'https://images.pexels.com/photos/1145357/pexels-photo-1145357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        ],
        main_data1:[
          {
            title:'在日本旅行，让你觉得最不适应或者不方便的事情是什么？',
            username:'小明',
            lv:12,
            addr:'日本',
            time:20,
            content:'说几个我深刻体会到的方面，同时也提供给大家一点解决方法吧~1.垃圾桶少，还需分类 习惯不同，\n' +
            '在国内很容易找到垃圾桶，丢弃垃圾，而在日本很难找到垃圾桶，除非便利店、月台、餐厅、交通枢纽里。对于垃圾都会有详细的分类，液体、纸类、容器等等，据说日本人都...'


          },
          {
            title:'在日本旅行，让你觉得最不适应或者不方便的事情是什么？',
            username:'小明',
            lv:12,
            addr:'日本',
            time:20,
            content:'说几个我深刻体会到的方面，同时也提供给大家一点解决方法吧~1.垃圾桶少，还需分类 习惯不同，\n' +
            '在国内很容易找到垃圾桶，丢弃垃圾，而在日本很难找到垃圾桶，除非便利店、月台、餐厅、交通枢纽里。对于垃圾都会有详细的分类，液体、纸类、容器等等，据说日本人都...'


          },
          {
            title:'在日本旅行，让你觉得最不适应或者不方便的事情是什么？',
            username:'小明',
            lv:12,
            addr:'日本',
            time:20,
            content:'说几个我深刻体会到的方面，同时也提供给大家一点解决方法吧~1.垃圾桶少，还需分类 习惯不同，\n' +
            '在国内很容易找到垃圾桶，丢弃垃圾，而在日本很难找到垃圾桶，除非便利店、月台、餐厅、交通枢纽里。对于垃圾都会有详细的分类，液体、纸类、容器等等，据说日本人都...'


          }
        ],
        main_data2:[
          {
            title:'樱花季去日本应该吃些什么？？',
            username:'小红',
            lv:12,
            addr:'日本',
            time:20,
            content:'嗯~遇到你之前，没曾想过结婚其实我们没有多么荡气回肠（长）的爱情故事，没有经历上天揽月下海捉鳖的浩瀚，没有年复一年岁岁日日的誓言，但~我们很勇敢！从前车马很慢，书信很远，如今节奏很快，' +
            '恋爱分分合合如闪电。也许是怕了、也许是疲惫了。城市的人都把自...'
          },
          {
            title:'在日本旅行，让你觉得最不适应或者不方便的事情是什么？',
            username:'小明',
            lv:12,
            addr:'日本',
            time:20,
            content:'说几个我深刻体会到的方面，同时也提供给大家一点解决方法吧~1.垃圾桶少，还需分类 习惯不同，\n' +
            '在国内很容易找到垃圾桶，丢弃垃圾，而在日本很难找到垃圾桶，除非便利店、月台、餐厅、交通枢纽里。对于垃圾都会有详细的分类，液体、纸类、容器等等，据说日本人都...'


          },
          {
            title:'在日本旅行，让你觉得最不适应或者不方便的事情是什么？',
            username:'小明',
            lv:12,
            addr:'日本',
            time:20,
            content:'说几个我深刻体会到的方面，同时也提供给大家一点解决方法吧~1.垃圾桶少，还需分类 习惯不同，\n' +
            '在国内很容易找到垃圾桶，丢弃垃圾，而在日本很难找到垃圾桶，除非便利店、月台、餐厅、交通枢纽里。对于垃圾都会有详细的分类，液体、纸类、容器等等，据说日本人都...'


          }
        ],
        main_data3:[
          {
            title:'在日本旅行，让你觉得最不适应或者不方便的事情是什么？',
            username:'小明',
            lv:12,
            addr:'日本',
            time:20,
            content:'说几个我深刻体会到的方面，同时也提供给大家一点解决方法吧~1.垃圾桶少，还需分类 习惯不同，\n' +
            '在国内很容易找到垃圾桶，丢弃垃圾，而在日本很难找到垃圾桶，除非便利店、月台、餐厅、交通枢纽里。对于垃圾都会有详细的分类，液体、纸类、容器等等，据说日本人都...'


          },
          {
            title:'在日本旅行，让你觉得最不适应或者不方便的事情是什么？',
            username:'小明',
            lv:12,
            addr:'日本',
            time:20,
            content:'说几个我深刻体会到的方面，同时也提供给大家一点解决方法吧~1.垃圾桶少，还需分类 习惯不同，\n' +
            '在国内很容易找到垃圾桶，丢弃垃圾，而在日本很难找到垃圾桶，除非便利店、月台、餐厅、交通枢纽里。对于垃圾都会有详细的分类，液体、纸类、容器等等，据说日本人都...'


          },
          {
            title:'在日本旅行，让你觉得最不适应或者不方便的事情是什么？',
            username:'小明',
            lv:12,
            addr:'日本',
            time:20,
            content:'说几个我深刻体会到的方面，同时也提供给大家一点解决方法吧~1.垃圾桶少，还需分类 习惯不同，\n' +
            '在国内很容易找到垃圾桶，丢弃垃圾，而在日本很难找到垃圾桶，除非便利店、月台、餐厅、交通枢纽里。对于垃圾都会有详细的分类，液体、纸类、容器等等，据说日本人都...'


          }
        ],
        main_data4:[
          {
            title:'樱花季去日本应该吃些什么？？',
            username:'小红',
            lv:12,
            addr:'日本',
            time:20,
            content:'嗯~遇到你之前，没曾想过结婚其实我们没有多么荡气回肠（长）的爱情故事，没有经历上天揽月下海捉鳖的浩瀚，没有年复一年岁岁日日的誓言，但~我们很勇敢！从前车马很慢，书信很远，如今节奏很快，' +
            '恋爱分分合合如闪电。也许是怕了、也许是疲惫了。城市的人都把自...'
          },
          {
            title:'樱花季去日本应该吃些什么？？',
            username:'小红',
            lv:12,
            addr:'日本',
            time:20,
            content:'嗯~遇到你之前，没曾想过结婚其实我们没有多么荡气回肠（长）的爱情故事，没有经历上天揽月下海捉鳖的浩瀚，没有年复一年岁岁日日的誓言，但~我们很勇敢！从前车马很慢，书信很远，如今节奏很快，' +
            '恋爱分分合合如闪电。也许是怕了、也许是疲惫了。城市的人都把自...'
          },
          {
            title:'樱花季去日本应该吃些什么？？',
            username:'小红',
            lv:12,
            addr:'日本',
            time:20,
            content:'嗯~遇到你之前，没曾想过结婚其实我们没有多么荡气回肠（长）的爱情故事，没有经历上天揽月下海捉鳖的浩瀚，没有年复一年岁岁日日的誓言，但~我们很勇敢！从前车马很慢，书信很远，如今节奏很快，' +
            '恋爱分分合合如闪电。也许是怕了、也许是疲惫了。城市的人都把自...'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.slide img{
  width: 100%;
}
.input_div {
  width: 750px;
  position: absolute;
  top: 340px ;
  left:300px ;
  z-index: 3;
  color: white;
}
</style>
