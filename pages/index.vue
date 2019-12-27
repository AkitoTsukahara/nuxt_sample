<template>
  <div class="main-content-wrapper section-padding-100">
    <div class="container">
      <div class="row justify-content-center">
        <template>
          <div class="col-12 col-lg-8">
            <div class="post-content-area mb-50">
              <FirstPostBlock></FirstPostBlock>
              <SecondPostBlock></SecondPostBlock>
            </div>
          </div>
          <SideMenu></SideMenu>
        </template>
        <template>
          <div>
            <PostList :posts="posts" />
          </div>
        </template>
      </div>
      <AdPostBlock></AdPostBlock>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'
import PostList from '~/components/posts/PostList.vue'
import FirstPostBlock from '~/components/posts/FirstPostBlock.vue'
import wp from '~/lib/wp'
import SideMenu from "../components/SideMenu";
import SecondPostBlock from "../components/posts/SecondPostBlock";
import AdPostBlock from "../components/posts/AdPostBlock";

export default {
    asyncData ({ params }) {
        return wp.posts()
    },
    components: {
      AdPostBlock,
      SecondPostBlock,
      SideMenu,
      Logo,
      PostList,
      FirstPostBlock
    }
}

</script>
