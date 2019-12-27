<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id" class="post-card">
        <article>
            <h2 class="subtitle">{{ post.title.rendered }}</h2>
            <div class="info" v-html="post.excerpt.rendered"></div>
        </article>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['posts'],
}
</script>

<style>
.post-list{
  padding: 0px;
  list-style: none;
}
.post-card {
  margin  : 10px;
  width   : 150px;
  display : inline-block;
  vertical-align: top;
  > article >.subtitle {
    font-size : 0.9em;
    background-color: #bbdff1;
  }
  > article > .info {
    background-color: #d7f2ff;
  }
  > article > .info > p {
    color     : #999;
    font-size : 0.5em;
  }
}
</style>
