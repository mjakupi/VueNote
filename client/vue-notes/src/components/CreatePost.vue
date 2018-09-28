<template>
  <div >
    <h1 class="text-center">Create Post</h1>
    <br/>
    <div id="flex-container">
      <form >
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="title">
        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
        <div class="text-center">
          <button  type="button"  @click="create_post" class="button">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'

  export default {
    data () {
      return {
        title:'',
        description:''
      }
    },
    watch:{
//      title(value){
//        console.log(value);
//
//      },
//      description(value){
//        console.log(value);
//      },

    },
    mounted () {
    },
    methods: {
      async create_post () {
        try {
          const response = await PostsService.createPost({
            title: this.title,
            content: this.description
          });
//          console.log(response.data)
          this.$router.push({ name: 'post' })

        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>
