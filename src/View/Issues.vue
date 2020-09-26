<template>
  <v-container>
    <v-row justify-lg="center">
      <!-- 头图以及标题 -->
      <v-col cols="12" lg="7">
        <v-skeleton-loader type="card-avatar" :loading="isLoading" :class="$vuetify.theme.dark ? 'black' : 'white'">
          <v-card elevation="10">
            <v-img class="white--text align-end" height="28vh"
                   :src="$Config.pageCardImgServers + '?tid=' + new Date().getTime() + Math.round(Math.random() * 1000)">
              <v-card-title class="bg-gray-blur">
                <span class="text-truncate d-inline-block">{{ issues.title }}</span>
              </v-card-title>
            </v-img>
            <v-card-title>
              <v-avatar color="#e9e9e9" class="mr-3">
                <v-img :src="$Config.userHeadImg"></v-img>
              </v-avatar>
              <div>
                <div class="">{{ $Config.nickname }}</div>
                <div class="body-2 font-weight-light">{{ issues.created_at }}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-skeleton-loader>
      </v-col>
      <!-- 头图以及标题 -->
      <!-- 文章内容 -->
      <v-col cols="12" lg="7">
        <v-skeleton-loader type="list-item-three-line" :loading="isLoading"
                           :class="$vuetify.theme.dark ? 'black' : 'white'">
          <v-card elevation="10" min-height="200px">
            <v-card-text class="markdown-body" v-html="mdtext"/>
            <v-card-text>
              <v-alert dense border="left" colored-border color="deep-purple">
                本文作者：{{ $Config.nickname }}
                <br/>
                本文链接：
                <a :href="pageHref" target="_blank">{{ pageHref }}</a>
                <br/>
                Issues链接：
                <a :href="'https://github.com/' + $Config.username + '/' + $Config.repo + '/issues/' + issues.number"
                   target="_blank">
                  {{ 'https://github.com/' + $Config.username + '/' + $Config.repo + '/issues/' + issues.number }}
                </a>
                <br/>
                最后修改时间：{{ issues.updated_at }}
                <br/>
                本站未注明转载的文章均为原创，并采用
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank">BY-NC-SA 4.0</a>
                授权协议，转载请注明来源，谢谢！
              </v-alert>
            </v-card-text>
          </v-card>
        </v-skeleton-loader>
      </v-col>
      <!-- 文章内容 -->
    </v-row>
  </v-container>
</template>

<script>
import Issues from '../api/Issues';

const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

export default {
  name: 'PaperPage',
  // 引用组件
  components: {},
  // 绑定数据
  data() {
    return {
      isLoading: true,
      mdtext: '',
      issues: {
        user: {
          login: ''
        }
      },
      pageHref: ''
    };
  },
  // 当路由改变
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      let that = this;
      await vm.getIssues(to.params.id);
      document.title = vm.$Config.nickname + '的博客-' + vm.issues.title;
      vm.pageHref = window.location.href;
    });
  },
  // 当页面开始渲染
  mounted() {
    let that = this;
    // 当渲染完毕
    that.$nextTick(async function () {
    });
  },
  // 其他方法
  methods: {
    // 获取文章详细内容
    async getIssues(id) {
      let that = this;
      that.isLoading = true;
      await Issues.getIssues(id).then(res => {
        that.issues = res;
        that.mdtext = md.render(res.body);
        that.isLoading = false;
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import '~github-markdown-css';

.bg-gray-blur {
  background-color: rgba(0, 0, 0, 0.4);
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
