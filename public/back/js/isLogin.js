// 登录拦截
$.ajax({
  url:"/employee/checkRootLogin",
  type:"get",
  dateType:"json", 
  success:function(info){
    // console.log(info);
    if(info.error==400){
      // 表示未登陆的 拦截跳转回到login页面
      location.href="login.html"
    }
     if(info.success){
       console.log("当前用户登录成功");
     }
  } 
})