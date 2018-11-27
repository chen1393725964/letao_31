
$(function(){
 /*
   * 1. 进行表单校验配置
   *    校验要求:
   *        (1) 用户名不能为空, 长度为2-6位
   *        (2) 密码不能为空, 长度为6-12位
   * */
      $("#form").bootstrapValidator({
        feedbackIcons:{
          valid: 'glyphicon glyphicon-ok',    // 校验成功
          invalid: 'glyphicon glyphicon-remove',   // 校验失败
           validating: 'glyphicon glyphicon-refresh'  // 校验中
        },
        //  配置校验字段
        fields:{
          // 用户名
          username:{
            // 校验规则
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
          password:{
            validators:{
              notEmpty:{
                message:"请输入密码"
              },
              stringLength:{
                min:6,
                max:12,
                message:"用户户名密码必须是6-12位"
              }
            }
          }
        }  

      })
      // 2、ajax提交
      $("#form").on("success.form.bv",function(e){
      // 阻止浏览器默认提交
        e.preventDefault();
         console.log("阻止跳转") 
         $.ajax({
           type:"post",
           url:"/employee/employeeLogin",
           data:$("#form").serialize(),
           dataType:"json",
           success:function(info){
            console.log(info);
            if(info.error===1000){
              alert("用户名不存在")
            }
            if(info.error===1001){
              alert("密码错误")
            }
            if(info.success){
              location.href="index.html";
            }
            
           }
            
         })  
      })
      // 3、重置功能
       $("[type=reset]").click(function(){
         $("#form").data("bootstrapValidator").resetForm()
       })
})