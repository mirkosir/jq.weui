//创建匿名函数 防止污染全局
;! function(window, undefined) {


    window.jq = {
        ver: '2.0',
        author: 'jianqi',
        level:2016001,

        //level 就是插件 在页面中 z-index, 由于是2016年第一个插件，所以为2016001

        init: function() {
            //初始化插件
            //获取js所在目录
            var js = document.scripts,
                script = js[js.length - 1],
                jsPath = script.src;
            if (script.getAttribute('merge')) return;
            var path = jsPath.substring(0, jsPath.lastIndexOf("/") + 1);

            var link = document.createElement("link");

            link.rel = "stylesheet";

            link.type = "text/css";

            //拼接起来 追加css到当前文档中
            link.href = path + 'weui.min.css';

            document.getElementsByTagName("head")[0].appendChild(link);



        },
        

        //msg方法 传两个参数，一个是标题，一个是自动关闭的时间 单位为毫秒，默认3秒关闭
        msg: function(title, time, type) {

            title = title ? title : '操作成功';
            if (time) {
                //防止乱搞判断了下时间的格式
                time = time;
                if (isNaN(time)) {
                    return false;
                }
            } else {
                time = 3000
            };

            var html = '<div class="weui_mask_transparent"></div>' + ' <div class="weui_toast error_msg">' + '     <i class="weui_icon_toast"></i>' + '     <p class="weui_toast_content">' + title + '</p>' + '</div>';
             
             //新增错误样式 
             if(type=="error"){

                var strs='<style> .weui_icon_toast:before{ content:"\\EA0D";} .weui_toast_content{ margin-top:6px}  @-webkit-keyframes shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(10px);transform:translateX(10px)}}@keyframes shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(10px);transform:translateX(10px)}}.error_msg{-webkit-animation-name:shake;animation-name:shake;animation-duration:.3s} </style>';
                html+=strs;
               
                }




            jq._addDom('toast', 'toast', html);

            function hide() {

                jq._removeDom('toast')

            };

            setTimeout(hide, time);

        },

        //alert传三个参数，第一个msg为必须的 为提示内容， 第二个和第三个为可选
        alert: function(msg, title, yes) {
            
             if(title){


                title= (typeof(title)=="function")?"系统提示":title;   


             }else{

                title="系统提示";
             }


            var html = '<div class="weui_mask" style="z-index:'+jq.level+'"></div>' + '<div class="weui_dialog" style="z-index:'+(jq.level+1)+'">' + '<div class="weui_dialog_hd"><strong class="weui_dialog_title">' + title + '</strong></div>' + '<div class="weui_dialog_bd">' + msg + '</div>' + '<div class="weui_dialog_ft">' + '    <a href="javascript:;" class="weui_btn_dialog primary alertbtn" id="alertbtn">确定</a>' + '</div>' + '</div>';

            jq._addDom('dialog2', 'weui_dialog_alert', html);



            document.getElementById('alertbtn').addEventListener('touchend', function() {

                jq._removeDom('dialog2');


                if (typeof(yes) == 'function') {
                    yes();
                }

                if (typeof(title) == 'function') {
                    title();
                }


            });


        },


        confirm: function(msg, yes, cancer) {


            var html = '<div class="weui_mask" style="z-index:'+jq.level+'"></div>' + '<div class="weui_dialog" style="z-index:'+(jq.level+1)+'">' + '<div class="weui_dialog_hd"><strong class="weui_dialog_title">提示</strong></div>' + '<div class="weui_dialog_bd">' + msg + '</div>' + '<div class="weui_dialog_ft">' + '<a href="javascript:;" class="weui_btn_dialog default" id="confirmno">取消</a>' + '<a href="javascript:;" class="weui_btn_dialog primary" id="confirmyes">确定</a>' + '</div>' + '</div>';



            jq._addDom('dialog1', 'weui_dialog_confirm', html);



            document.getElementById('confirmyes').addEventListener('touchend', function() {

                jq._removeDom('dialog1');


                if (typeof(yes) == 'function') {
                    yes();
                }


            });


            document.getElementById('confirmno').addEventListener('touchend', function() {

                jq._removeDom('dialog1');


                if (typeof(cancer) == 'function') {
                    cancer();
                }


            });






        },

        /* 

            下个版本开发吧
            page:function(img,title,msg,yes,cancer){

             title=title?title:"操作成功";
             msg=msg?msg:"内容已提交";
             img=img?img:1;





            },

            */

        loading: function(title) {

            title = title ? title : "数据加载中";

            var html = '<div class="weui_mask_transparent" style="z-index:'+jq.leve+'"></div>' + ' <div class="weui_toast">' + '<div class="weui_loading">' + ' <div class="weui_loading_leaf weui_loading_leaf_0"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_1"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_2"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_3"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_4"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_5"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_6"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_7"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_8"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_9"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_10"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_11"></div>' + ' </div>' + '<p class="weui_toast_content">' + title + '</p>' + '</div>';



            jq._addDom('loadingToast', 'weui_loading_toast', html);



        },


        hideLoading: function() {
            //销毁loading


            jq._removeDom('loadingToast');





        },


        _addDom: function(domid, domclass, html) {


            /*
                       
                       1，遇到的第一个问题  给body下追加内容，用原生js 报错 Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

                         问题解决，是js权限问题，想给body下追加节点 必须是先创建一个div 然后把字符串插进这个div，无法把字符串直接 查到body下
                       */
            var winDiv = document.createElement('div');
            winDiv.id = domid;
            winDiv.className = domclass;
            winDiv.innerHTML = html;
            document.body.appendChild(winDiv);


             //处理穿透事件
             //原理是 在整个屏幕铺一个 透明的 div  ，等插件弹出层被销毁后  过350ms 再把这个层销毁，
             //这样就避免了 插件弹出层消失太快，而触发 其他元素 touchend 事件

            var layDiv=document.createElement('div');
                layDiv.id = "layDiv";
                layDiv.style.width="100%";
                layDiv.style.height="100%";
                layDiv.style.position="fixed";
                layDiv.style.top=0;
                layDiv.style.left=0;
                layDiv.style.zIndex=jq.level-3;
                document.body.appendChild(layDiv);







        },


        _removeDom: function(id) {

            //删除dom
            var dom = document.getElementById(id);
            document.body.removeChild(dom);
            
            function clLayDiv(){
            document.body.removeChild(document.getElementById('layDiv'));
              }

             setTimeout(clLayDiv,350); 



        },



        _yes: function(yes) {
            //处理回调
            yes();


        }


    }

    //初始化插件
    jq.init();

}(window)