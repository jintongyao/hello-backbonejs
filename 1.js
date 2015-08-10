// **这个例子阐述了一个最简单的View的声明与定义。**
//
// _运行效果: [1.html](../1.html)._
//
// _[跳转到例子 2](2.html)_

// 自执行闭包
(function($){
  // **ListView 类**: 应用的主视图。
  var ListView = Backbone.View.extend({
    el: $('body'), // 将 `this.el` 与一个已存在的元素绑定。
    // `initialize()`：在实例化时被自动调用。你可以在这里进行所有类型的绑定（除了界面UI事件以外），如单击事件等。
    initialize: function(){
      _.bindAll(this, 'render'); // 修复部分方法中的'this'上下文。

       this.render(); // 并非所有视图都需要自动渲染。在这里我们设定了自动渲染。
    },
    // `render()`：用于渲染`this.el`中所有视图的函数。需要手动调用。
    render: function(){
      $(this.el).append("<ul> <li>hello world</li> </ul>");
    }
  });

  // **listView 实例**: 实例化app的主视图。
  var listView = new ListView();
})(jQuery);