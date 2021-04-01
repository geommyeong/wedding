<template>
  <div class="visitor">
    <p>댓글란</p>

    <div id="disqus_thread"></div>
  </div>
</template>
<script>
export default {
  created () {
    var disqus_config = function () {
    this.page.url = 'https://geommyeong.github.io/wedding';
    this.page.identifier = 'https://geommyeong.github.io/wedding';
    };

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://weddingcard-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
  }
}
</script>