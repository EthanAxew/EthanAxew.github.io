var posts=["2024/05/04/如何利用Hexo搭建个人博客(完整版)/","2024/05/05/如何利用FRP搭建本地内网穿透/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };