# jq.weui 移动端 UI插件
移动端 提升用户体验 的ui插件 ，插件本身为原生js语法，无需依赖 jquery ，zepto等插件。但是如果你对代码有洁癖，这个插件可能不太适合你，因为 为了兼容微信最新样式库，插件里用到了style来定义部分CSS样式

jq.weui 2.1
废弃了自定义标题参数 ，但不影响之前的版本，升级直接覆盖即可
原因 已经是系统提示了，所以无需再告诉用户一次 这是系统提示

jq.weui 2.0 
用touchend 替换掉了  click  事件，使得用户体验更加流畅
由于是 移动端插件，没有兼容click，所以在pc端是无法使用的，体验可以用chrome的 模拟移动端功能 

文档示例

# jq.alert(); 

//简洁使用 无回调

jq.alert('你好');

//自定义提示 

jq.alert('你好',function(){

alert('回调');

});

 
# jq.loading();

jq.loading('加载中');

//一般 loading用在加载数据上， 加载数据完成后 用 jq.hideLoading 来销毁
jq.hideLoading();

#jq.msg();

jq.msg('支付成功',3000);

//3000 为 弹出层 消失时间

jq.msg('支付失败',2000,'error');

//弹出错误框 带抖动动画








#jq.confirm();

jq.confirm('你确定要删除吗？',function(){

   jq.alert('你选择了确定');

},function(){

    jq.alert('你选择了取消');

  });
  
  
# 下面是预览
http://mirkosir.github.io/jq.weui/demo.html


