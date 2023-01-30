





const nightMode = {
   tumblrWrapper : document.querySelector('.tumbler__wrapper'),
   tumblr : document.querySelector('.tumbler'),
   posts : document.querySelectorAll('.post'),

  jsEnabled(){
    document.documentElement.classList.add('js-enabled');
  },

  addEventListener(){
    this.tumblrWrapper.addEventListener('click', ()=>{
      document.body.classList.toggle('body--night-mode');
      this.tumblr.classList.toggle('.tumbler');
      this.posts.forEach(post =>{
        post.classList.toggle('post-night-mode');
      });
    })
  },

  init(){
    this.jsEnabled();
    this.addEventListener();
  }
}

nightMode.init();