


// 1、进度基本使用
$(document).ajaxStart(function(){
  NProgress.start();
})
$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },500)
})
 

$(function(){
  // 3个公共能
  // 1、左侧菜单栏切换
   $(".category").click(function(){
     $(this).next().stop().slideToggle();
   })
  //  2、左侧侧边栏隐藏和显示
   $(".ico_left").click(function(){
     $(".lt_aside").toggleClass("hidemenu");
     $(".lt_main").toggleClass("hidemenu");
     $(".lt_topbar").toggleClass("hidemenu");
   })

  //  3、退出功能 模态框（）
    //  (1)点击右上角的按钮显示模态框
     $(".ico_right").click(function(){
       $("#logoutModal").modal("show")  
     })
    //  (2)点击模态框退出按钮 完成退出功能(像后台发送ajax请求)
      $("#logoutBtn").click(function(){
        //  发送ajax请求让后台销毁当前用户的状态
        $.ajax({
            // 这个地址就是处理你要退出的数据
          url:"/employee/employeeLogout",
          dateType:"json",
          type:"get",
          success:function(info){
            // console.log(info);
            if(info.success){
              location.href="login.html";
            }
          }
        })
      })
})