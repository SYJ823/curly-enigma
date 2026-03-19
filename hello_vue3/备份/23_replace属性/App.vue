<template>
   <div class="app">
      <Header></Header>
     <!-- 导航区 -->
      <div class="navigate">
        <RouterLink to="/">首页</RouterLink>  
        <RouterLink :to="{name:'xinwen'}">新闻</RouterLink>
        <RouterLink replace :to="{path:'/about'}">关于</RouterLink>
        <!-- RouterLink 是 Vue Router 提供的声明式导航组件，
         专门用于替代原生的 <a> 标签实现路由跳转。 -->
      </div>
      <!-- 展示区 -->
       <div class="main-content">
           <RouterView></RouterView>
       </div>
    </div >
</template>

<script lang="ts" setup name="App">
    import { RouterView,RouterLink } from 'vue-router'
    import Header from '@/components/Header.vue'
</script>

<style scoped>
/* 全局容器样式 */
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: "Microsoft YaHei", sans-serif;
  color: #333;
}


/* 导航区样式 */
.navigate {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 30px 0;
}

.navigate a {
  text-decoration: none;
  color: #d64877; /* 深一点的粉色 */
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  background-color: #fef7fb; /* 极浅粉色背景 */
}

/* 导航链接 hover 效果 */
.navigate a:hover {
  background-color: #e86890;
  color: white;
  transform: translateY(-2px);
}

/* 激活的路由链接样式（新增：标记当前选中的导航） */
.navigate a.router-link-active {
  background-color: #e86890;
  color: white;
}

/* 展示区样式 */
.main-content {
  margin: 20px auto;
  padding: 40px;
  background-color: #fff5f8; /* 浅粉色背景 */
  border-radius: 12px;
  min-height: 300px;
  text-align: center;
  font-size: 16px;
  color: #666;
  box-shadow: 0 2px 10px rgba(232, 104, 144, 0.1);
}

/* 响应式适配 - 小屏幕下优化 */
@media (max-width: 768px) {
  .navigate {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .main-content {
    padding: 20px;
    min-height: 200px;
  }
}
</style>
