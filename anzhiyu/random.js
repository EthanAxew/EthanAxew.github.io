var posts=["2024/05/04/hello-world/","2024/05/04/如何利用Hexi搭建个人博客？/","2024/05/04/#我是一级标题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };