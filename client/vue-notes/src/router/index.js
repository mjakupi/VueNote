import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import CreatePost from '@/components/CreatePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/post',
      name: 'post',
      component: Posts
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: CreatePost
    }
  ]
})
