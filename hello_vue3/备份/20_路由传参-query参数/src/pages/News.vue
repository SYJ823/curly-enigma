<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 传参第一种写法 -->
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->

        <!-- 传参第二种写法 -->
        <RouterLink 
          :to="{
            name:'xijie',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
// 这里可以添加新闻相关的逻辑，比如获取新闻数据、处理点击事件等
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'
import { RouterView } from 'vue-router'

const newsList = reactive([
  { id: 'asfdtrfay01', title: '很好的抗癌食物', content: '西蓝花' },
  { id: 'asfdtrfay02', title: '如何一夜暴富', content: '学IT' },
  { id: 'asfdtrfay03', title: '震惊，万万没想到', content: '明天是周一' },
  { id: 'asfdtrfay04', title: '好消息！好消息！好消息！', content: '快过年了' }
])
</script>

<style scoped>
/* 整体容器：左右分栏 + 居中显示 */
.news {
  display: flex;
  justify-content: space-between;
  /* 整体水平居中 */
  padding: 0 20px;
  height: 100%;
}

/* 左侧导航栏样式 */
.news ul {
  /* list-style: none; */
  margin-top: 30px;
  padding-left: 10px;
}

.news li::marker {
  color: #64967E;
}

/* 导航列表项 */
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

/* 链接 hover 效果 */
.news a:hover {
  color: red;
}

/* 右侧详情展示区 */
.news-content {
  flex: 1;
  min-width: 0;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 详情内容垂直居中 */
}

/* 响应式适配：小屏下改为上下布局 */
@media (max-width: 768px) {
  .news {
    flex-direction: column;
    gap: 20px;
    margin: 20px auto;
    min-height: auto;
  }

  .news-nav {
    width: 100%;
  }

  .news-content {
    padding: 20px;
  }
}
</style>