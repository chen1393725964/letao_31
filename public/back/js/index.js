$(function(){
  // 基于准备好的dom，初始化echarts实例
  var echarts_left = echarts.init(document.querySelector(".echarts_left"));

  // 指定图表的配置项和数据
  var option1 = {
      // 标题
      title: {
          text: '2018年注册人数'
      },
      // 提示项
      tooltip: {},
        // 图例
      legend: {
          data:['人数','销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '人数', 
          type: 'bar',
          data: [5, 20, 36, 40, 10, 20]
      },{
        name: '销量',
        type: 'line',
        data: [50, 20, 35, 10, 10, 20]
    }
    ] 
  };
  // 使用刚指定的配置项和数据显示图表。
  echarts_left.setOption(option1); 
  
  


   // 基于准备好的dom，初始化echarts实例
   var echarts_right = echarts.init(document.querySelector(".echarts_right"));

   // 指定图表的配置项和数据
   var  option2= {
    title : {
      //  主标题文本
        text: '热门销售产品',
        // 副标题
        subtext: '2018年11月',
        //  左中有对齐方式
        x:'center',
        textStyle:{
          fontSize:30,
          color:"#e92322" 
        }

    },
    tooltip : {
        // 鼠标悬停时触发项
        trigger: 'item',
        // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 图例
    legend: {
        // 垂直 vertical  
        orient: 'vertical',   //水平horizontal
        left: 'left',
        data: ['耐克','阿迪','老太太','老北京','回力']
    }, 
    // 系列列表
    series : [
        {
            name: '热门品牌',  //系列名称
            // 饼状图
            type: 'pie',
            //   圆直径大小
            radius : '55%',
            // 圆心位置
            center: ['50%', '60%'],
            data:[
                {value:335, name:'耐克'},  //数据项名称
                {value:310, name:'阿迪'},
                {value:234, name:'老太太'},
                {value:135, name:'老北京'},
                {value:1548, name:'回力'}
            ],
            // 阴影效果
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
   // 使用刚指定的配置项和数据显示图表。
   echarts_right.setOption(option2);  

  
})