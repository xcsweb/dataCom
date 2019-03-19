module.exports = {
  title: '前端技术文档', // 设置网站标题
  base: '/dataCom/',
  description: 'Just for xcsweb', //描述
  dest: './dist',   // 设置输出目录
  port: 2333, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/baseComponents/' }
      // {
      //   text: 'github',
      //   // 这里是下拉列表展现形式。
      //   items: [
      //     { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
      //     { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
      //   ]
      // }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/baseComponents/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: [
            'base/test1',
            'base/test2',
            'base/test5',
            'base/test6',
            'base/test7',
            'base/test8',
            'base/test9',
            'base/test10',
            'base/test12',
            'base/test13',
            'base/test14',
            'base/test15',
            'base/test16',
            'base/test17',
            'base/test22',
            'base/test24',
            'base/test25',
            'base/test26',
            'base/test27',
            'base/test28',
            'base/test29',
            'base/test30',
            'base/test31',
            'base/test32',
          ]
        },
        {
          title: '方法类',
          collapsable: false,
          children: [
            'base/test3',
            'base/test11',
            'base/test18',
            'base/test19',
            'base/test23',
            'base/test28',
            'base/test29',
          ]
        },
        {
          title:"样式类",
          collapsable: false,
          children:[
            'base/test21',
          ] 
        },
        {
          title: '函数类',
          collapsable: false,
          children: [
            'base/test20',
          ]
        }
      ],
    }
  }
}