/* ============
 * Comments Component
 * ============
 *
 * Comments list component
 *
 * lists comments for single blog post
 */

import Comment from './comment/comment.vue'

// should come from ajax call
const comments = [{
  _id: '1982843',
  parent_id: '1928483',
  content: 'Comment body 1',
  replies: [{
    content: 'Reply 1'
  }, {
    content: 'Reply 2'
  }]
}, {
  _id: '872937',
  parent_id: '1928483',
  content: 'Comment body 2',
  replies: []
}];

comments.map(function(comment) {
  comment.toggleEnterSend = true;
  return comment;
})

// helper function from somewhere maybe
function randomId() {
  return Math.random().toString(36).substring(7);
}


export default {
  components: {
    Comment: Comment,
  },
  methods: {
    addComment(content) {
      console.log(content);
      let comment = {
        content: content,
        _id: randomId(),
        replies: [],
        toggleEnterSend: true
      }

      this.comments.push(comment);
      this.newComment = '';


    },
    addReply(content, parent_id) {
      console.log(content, parent_id);
      let reply = {
        content: content,
        _id: randomId()
      }
      this.comments.filter(function(comment) {
        if (comment._id === parent_id) {
          comment.replies.push(reply);
          comment.newReply = '';
        }
      })
    },
  },
  data() {
    return {
      comments: comments,
      newComment: '',
      toggleEnterSend: true,
    }
  },
};
