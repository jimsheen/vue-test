/* ============
 * Home Index Page
 * ============
 *
 * The home index page
 */

export default {
  components: {
    VLayout: require('layouts/default/default.vue'),
    VBlogList: require('components/blogList/blogList.vue'),
  },
  data () {
  	return {
  		title : 'Blog Listing Page'
  	}
  }
};
