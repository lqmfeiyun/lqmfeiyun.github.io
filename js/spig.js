/* spig.js */
//右键菜单
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
            showMessage("神秘花园:<br /><a href=\"http://www.qdfuns.com/notes/41996/9969c4f53d2e6fa06fd7c088ae00b8fc.html\" title=\"\">秘密通道</a>    <a href=\"http://www.baidu.com\" title=\"\">辉煌大厅</a>",10000);
        }
    });
    $("#spig").bind("contextmenu", function(e) {
        return false;
    });
});

//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
     $("#message").fadeTo("100", 1);
 });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
     $(".mumu").fadeTo("300", 0.3);
     msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开，我才出来！"];
     var i = Math.floor(Math.random() * msgs.length);
     showMessage(msgs[i]);
 });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function ($) {
    let visitor="master";
    if (isindex) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + '你是夜猫子呀？还不睡觉，明天起的来么？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + '早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + '中午了，吃饭了么？不要饿着了，饿死了谁来陪我呀！', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + '下午的时光真难熬！还好有你在！', 6000);
        } else {
            showMessage(visitor + '快来逗我玩吧！', 6000);
        }
    }
    else {
        showMessage('欢迎' + visitor + '来到代码笔记《' + title + '》', 6000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    },
    {
       queue: false,
       duration: 1000
   });
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//标题被点击时
        showMessage('正在用吃奶的劲加载《<span style="color:#0099cc;">' + $(this).text() + '</span>》请稍候');
    });
    $('h2 a').mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》这篇文章么？');
    });
    $('#prev-page').mouseover(function(){
        showMessage('要翻到上一页吗?');
    });
    $('#next-page').mouseover(function(){
        showMessage('要翻到下一页吗?');
    });
    $('#index-links li a').mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.comments').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
    });
    $('#submit').mouseover(function () {
        showMessage('确认提交了么？');
    });
    $('#s').mouseover(function () {
        showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
    });
    $('#go-prev').mouseover(function () {
        showMessage('点它可以后退哦！');
    });
    $('#go-next').mouseover(function () {
        showMessage('点它可以前进哦！');
    });
    $('#refresh').mouseover(function () {
        showMessage('点它可以重新载入此页哦！');
    });
    $('#go-home').mouseover(function () {
        showMessage('点它就可以回到首页啦！');
    });
    $('#addfav').mouseover(function () {
        showMessage('点它可以把此页加入书签哦！');
    });
    $('#nav-two a').mouseover(function () {
        showMessage('嘘，从这里可以进入控制面板的哦！');
    });
    $('.post-category a').mouseover(function () {
        showMessage('点击查看此分类下得所有文章');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('点它可以直接跳到评论列表处.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('你知道吗?点它可以分享本文到'+$(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function(){
        showMessage('点击可以切换到手机版博客版面');
    });
});


//无聊讲点什么
jQuery(document).ready(function ($) {

    window.setInterval(function () {
        msgs = ["播报天气<iframe name=\"xidie\" src=\"http://i.tianqi.com/index.php?c=code&a=getcode&id=8&h=80&w=230\"frameborder=\“0\” scrolling=\"no\" height=\"70px\"  width=\"240px\"  margin-left=\"100px\" allowtransparency=\"true\" ></iframe>", "来陪我聊天吧！", "好无聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可爱吧！嘻嘻!~^_^!~~","谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});

//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["~不得了啦~","你在时你是一切，你不在时一切是你。","完了，你也不理我了，我成狗不理了！","人家有的是背景，而我有的只是背影。","我又不是人民币，怎么能让人人都喜欢我？","我不是广场上算卦的，唠不出那么多你爱听的嗑。","何必太认真，何必太执着。虚妄的追逐，最后徒留伤悲。","是金子总要发光的，但当满地都是金子的时候，我自己也不知道自己是哪颗了。","我一个人在这里，一个人在这里反反复复的工作，就像在这里反复的生活。无聊而乏味，唯一改变的是时间的流逝。","我就是巴黎欧莱雅，你值得拥有！","世上只有妈妈好,爸爸也不错。"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,0.8,0.85,0.9,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75,-0.7,-0.75,-0.8,-0.85,-0.9];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
        $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
        },
        {
         duration: 2000,
         complete: showMessage(msgs[i])
     });
    }, 45000);
});

//评论资料
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("和我签订契约，成为马猴烧酒吧。");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
        {
          queue: false,
          duration: 1000
      });
    });
    $("#email").click(function () {
        showMessage("尼酱，留下你的邮箱，不然就是无头像人士了！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
        {
          queue: false,
          duration: 1000
      });
    });
    $("#url").click(function () {

        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
        {
          queue: false,
          duration: 1000
      });
    });
    $("#comment").click(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
        {
          queue: false,
          duration: 1000
      });
    });
});

var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +300
        },
        {
          queue: false,
          duration: 1000
      });
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 5) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
            else if(stat_click==1) {
                msgs =["我哭啦！"];
                var i = Math.floor(Math.random() * msgs.length);
                setTimeout(function () {
                   $(".mumu").css("backgroundImage","url(images/kn.jpg)");
                   $(".mumu").css("background-size","100px 200px ");
               }, 3000);
                $(".mumu").css("backgroundImage","url(images/kn1.jpg) ");
                $(".mumu").css("background-size","100px 100px ");
            }
            else if(stat_click==2){
             showMessage("嘿嘿!",10000);
             setTimeout(function () {
               $(".mumu").css("backgroundImage","url(images/kn.jpg)");
           }, 3000);
             $(".mumu").css("backgroundImage","url(images/kn3.jpg)");
         }else if(stat_click==3){
             showMessage("变态!",10000);
             setTimeout(function () {
               $(".mumu").css("backgroundImage","url(images/kn.jpg)");
               $(".mumu").css("background-size","100px 200px ");
           }, 3000);
             $(".mumu").css("backgroundImage","url(images/knbt.jpg)");
             $(".mumu").css("background-size","100px 150px ");
         }
         else {
            msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，讨厌，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
            var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
            var i1 = Math.floor(Math.random() * s.length);
            var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
                left: document.body.offsetWidth/2*(1+s[i1]),
                top:  document.body.offsetHeight/2*(1+s[i1])
            },
            {
             duration: 500,
             complete: showMessage(msgs[i])
         });
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
    });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
                ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});