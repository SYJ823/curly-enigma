<template>
  <ul class="news-list">
    <li>编号：{{ id }}</li>
    <li>标题: {{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
defineProps(['id','title','content'])
</script>

<style scoped>
/* 列表整体样式 - 重点优化居中逻辑 */
.news-list {
  list-style: none;
  padding: 0;
  /* 核心居中：margin 上下 20px，左右 auto（水平居中） */
  margin: 20px auto;
  max-width: 600px;
  /* 限制最大宽度，大屏下不拉伸 */
  width: 100%;
  /* 小屏下占满可用宽度 */
  max-width: clamp(300px, 80vw, 600px);
  /* 进阶：适配不同屏幕的宽度（可选） */
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  /* 防止内容溢出圆角 */
  /* 可选：若需要垂直方向也居中（需父元素有高度） */
  /* margin: auto; */
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
}

/* 列表项样式 */
.news-list li {
  padding: 12px 20px;
  /* 内边距 */
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #f5f5f5;
  /* 分割线 */
  line-height: 1.6;
  /* 行高提升阅读体验 */
}

/* 最后一个列表项去掉底部边框 */
.news-list li:last-child {
  border-bottom: none;
}

/* 针对不同信息的差异化样式（可选，增强区分度） */
.news-list li:nth-child(1) {
  /* 编号行 */
  color: #999;
  font-size: 12px;
}

.news-list li:nth-child(2) {
  /* 标题行 */
  color: #2c3e50;
  font-weight: 500;
  font-size: 16px;
}

.news-list li:nth-child(3) {
  /* 内容行 */
  color: #666;
  padding-bottom: 16px;
  /* 最后一行增加底部内边距 */
}

/* 响应式适配（手机端） */
@media (max-width: 768px) {
  .news-list {
    margin: 10px auto;
    /* 移动端仍保持水平居中，仅调整上下间距 */
    max-width: none;
    width: calc(100% - 20px);
    /* 移动端左右留10px边距，更美观 */
  }

  .news-list li {
    padding: 10px 15px;
  }
}
</style>