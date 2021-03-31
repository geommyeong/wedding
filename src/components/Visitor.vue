<template>
  <div class="visitor">
    <p>댓글란</p>

    <div id="disqus_thread"></div>
  </div>
</template>
<script>
export default {
  created () {
    console.log('crated')
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
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