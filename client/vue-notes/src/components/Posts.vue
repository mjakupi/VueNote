<template>
  <div >
    <h1 class="text-center">Posts</h1>
   <h5 class="text-center"> This file will list all the posts.</h5>
    <br>
    <div class="posts" v-for="post in posts">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
        <span>{{ post.createdAt | formatDate}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'
  import moment from 'moment';
  import Vue from 'vue'

  export default {
    name: 'posts',
    data () {
      return {
        posts: []
      }
    },
    mounted () {
      this.getPosts();
      Vue.filter('formatDate', function(value) {
        if (value) {
          return moment(String(value)).format('MM/DD/YYYY hh:mm')
        }
      });
    },
    computed: {

    },
    methods: {

      async getPosts () {
        const response = await PostsService.fetchPosts()
        this.posts = response.data;

//        console.log(response.data);
      }
    }
  }
</script>
