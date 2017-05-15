/* ============
 * Home Index Page
 * ============
 *
 * The home index page
 */

export default {
  components: {
    VLayout: require('layouts/default/default.vue'),
    VBlogItem: require('components/blogItem/blogItem.vue'),
  },
  data () {
  	return {
  		title : 'Blog Single Page'
  	}
  }
};
