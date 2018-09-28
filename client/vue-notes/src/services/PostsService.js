import Api from '@/services/Api' // jshint ignore:line

export default {
  fetchPosts () {
    return Api().get('notes')
  },
  createPost (creadentials) {
    return Api().post('notes',creadentials)
  }
}
