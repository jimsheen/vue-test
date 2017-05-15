<template>
	<div class="comment comment--reply">
            <!-- <div class="comment__meta">
                <a class="comment__user" href="#">John Thomas</a>
                <span class="comment__date">Yesterday</span>
            </div> -->
            <div class="comment__body">
                <p>{{reply.content}}</p>
            </div>
            <!--  <div class="social-like">
                <button class="btn social-like__btn">Like</button>
                <span>You and 5 other people like this</span>
            </div> -->
            
        </div>
</template>
<script>
export default {
  name: 'Comment',
  props: {
    reply: Object,
  },
};
</script>
