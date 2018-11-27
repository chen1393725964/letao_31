
$(function(){
//  1、获取表单并用插件方法
 $("#form").bootstrapValidator({
    //  配置校验图标
    feedbackIcons:{
      valid:'glyphicon glyphicon-ok',
      invalid:"glyphicon glyphicon-remove",
      validating:"glyphicon glyphicon-refresh"
    },
  //  配置检验字段
   fields:{
    //  用户名
     username:{
      //  校验规则
      validators:{
        // 非空校验
        notEmpty:{
          message:"请输入用户名"
        },
        stringLength:{
          min:2,
          max:6,
          message:"用户名长度必须是2-6位"
        }
      }
     },
    //  密码校验
     password:{
      // 校验规则
      validators:{
        // 非空验证
        notEmpty:{
          message:"请输入密码"
        },
        stringLength:{
          min:6,
          max:12,
          message:"密码必须时6-12位"
        }
      }
     }
   }
 })
    // 2、ajax异步请求
  // 1、 校验成功后会触发一个事件 表单成功事件
  //  2、默认是会是提交的 页面跳转
      // 3、注册表单成功事件（获取表单  注册点击事件 事件对象e）  阻止页面跳转e.preventDefault()方法    发送sjax请求
          // ajax(请求地址  请求方式 传递数据  数据类型  成功和失败的回调函数)
 $("#form").on("success.form.bv",function(e){
    // 阻止跳转
   e.preventDefault();
    //  发送ajax请求
    $.ajax({
      url:"/employee/employeeLogin",
      type:"post",
      data:$("#form").serialize(),
      datatype:"json",
      success:function(info){
       console.log(info);
       if(info.error==1000){
         alert("用户名不存在")
       }if(info.error==1001){
         alert("用户密码错误")
       }if(info.success){
         location.href="index.html"
       }
      }
    })
 })
      // 3、重置功能
      // 通过属性选择器获取 按钮   注册点击事件
      //  事件里面执行  创建实例 $("#form").data("bootstrapValidator") 
      // 调用原型上的方法     
      $("[type=reset]").click(function(){
        $("#form").data("bootstrapValidator").resetForm()
      })
})