$(function(){
    $('.search').on('click',function(){
        $('body').addClass('searching');
        //e.preventDefault();
        $('.sousuo').addClass('fanhui');
        $('.menu').addClass('xiaoshi');
        $('.tishi').addClass('chuxian');
        $('.tishi .List').addClass('yichu');
        $('.tishi h3').addClass('yiru');
        $('.header').addClass('guding');
        $('.xiangxi').addClass('delete');
        $('.footer').addClass('ShanChu');
        $('.footer-small').addClass('shan');
        $('.zhezhao').addClass('liang');
    })
    $('.close').on('click',function(){
        //$('body').removeClass('searching');
        $('.sousuo').removeClass('fanhui');
        $('.menu').removeClass('xiaoshi');
        $('.tishi').removeClass('chuxian');
        $('.tishi .List').removeClass('yichu');
        $('.tishi h3').removeClass('yiru');
        $('.zhezhao').removeClass('liang');
        $('.header').removeClass('guding');
        $('.xiangxi').removeClass('delete');
        $('.footer').removeClass('ShanChu');
        $('.footer-small').removeClass('shan');
        $('.zhezhao').removeClass('liang');
    })
    $('.menu').on('click',function(){
        $('body').toggleClass('searching');
        $('.heng-shang').toggleClass('Dzhuan');
        $('.heng-xia').toggleClass('Szhuan');
        $('.bag-big').toggleClass('youru');
        $('.menuZhankai').toggleClass('Zhankai');
        $('.menuZhankai li').toggleClass('feiru');
        $('.menuZhankai ul').toggleClass('shanchu');
        $('.Search').toggleClass('feiru2');
        //$('.footer-small').toggleClass('shan');
        //$('.footer').toggleClass('ShanChu');
        $('.xiangxi').toggleClass('shanChu');
        //$('.banner').toggleClass('Shan');
    })
    //var banner=$('.banner');
    //var imgs=$('.banner-img');
    //var Button=$('.Button');
    //var buttonL=$('.button-left',Button);
    //var buttonR=$('.button-right',Button);
    //banner.on("mouseenter",function(){
    //    clearInterval(t);
    //    buttonL.css({
    //        opacity:1,
    //    })
    //    buttonR.css({
    //        opacity:1,
    //    })
    //})
    //banner.on("mouseleave",function(){
    //    t=setInterval(mover,2000);
    //    buttonL.css({
    //        opacity:0,
    //    })
    //   buttonR.css({
    //        opacity:0,
    //    })
    //})
    //var w=imgs.width();
    //imgs.css({left:w}).eq(0).css({left:0});
    //var banner=$('.banner');
    //var lis=$('li',banner);
    //console.log(lis);
    //for(var j=0;j<lis.length;j++){
    //    lis.eq(j).click(function(){
    //        //alert(1);
    //        $(this).addClass("active");
    //        imgs.eq(j).animate({left:0});
    //    })
    //
    //}
    //lis.click(function(){
    //    $(this).toggleClass("active");
    //})
    //var as=$('a',lis);
    //as.eq(0).css({background:"#fff",border:"1px solid #1491d0"});
    //
    //buttonL.click(function(){
    //    clearInterval(t);
    //    mover();
    //})
    //
    //buttonR.click(function(){
    //    clearInterval(t);
    //    movel();
    //})
    //
    //
    //var index=0;//当前的图片
    //var next=0;//下一张图片
    //var t=setInterval(mover,2000);
    //function mover(){
    //    next++;
    //    if(next>=4){
    //        next=0;
    //    }
    //    as.css({background:"#999",border:"none"});
    //    as.eq(next).css({background:"#fff",border:"1px solid #1491d0"});
    //    imgs.eq(next).css({left:w});
    //    imgs.eq(index).animate({left:-w},300);
    //    imgs.eq(next).animate({left:0},300);
    //    index=next;
    //}
    //function movel(){
    //    next--;
    //    if(next<0){
    //        next=3;
    //    }
    //    as.css({background:"#999",border:"none"});
    //    as.eq(next).css({background:"#fff",border:"1px solid #1491d0"});
    //    imgs.eq(next).css({left:-w});
    //    imgs.eq(index).animate({left:w},300);
    //    imgs.eq(next).animate({left:0},300);
    //    index=next;
    //}


    var flag=false;
    var transitionTime=600;
    var magicMove = function(n,dir){
        flag=true;
        var active=$('.banner .content .active');
        active.addClass(dir)
            .delay(transitionTime)
            .queue(function(){
                flag=false;
                $(this)
                    .removeClass('active')
                    .removeClass(dir)
                    .dequeue();
            })
        var op=(dir=='left')?'right':'left';
        $(n).addClass(op);
        $(n).get(0).offsetWidth;
        $(n).removeClass(op)
            .addClass('active');
        $('.banner .pagegation li').removeClass('active').eq(items.index(n)).addClass('active');
    }
    var btnRight=$(".banner .moveright");
    var btnLeft=$(".banner .moveleft");
    var items=$(".banner .content li");
    btnRight.on('click',function(){
        if(flag){return;}
        var active=$('.banner .content .active');
        if(active.next().length){
            var n=active.next();
        }else {
            var n=items.eq(0)
        }
        magicMove(n,'left');
    })
    btnLeft.on('click',function(){
        if(flag){
            return
        }
        var active=$('.banner .content .active');
        if(active.prev().length){
            var n=active.prev();
        }else {
            var n=items.eq(-1)
        }
        magicMove(n,'right');
    })
    $('.banner .pagegation li').on('click',function(){
        if($(this).index()>items.index($('.banner .content .active'))){
            var dir='left';
        }else {
            var dir='right';
        }
        var n=items.eq($(this).index());
        magicMove(n,d);
    })

    var t=setInterval(function(){
        btnRight.trigger('click');
    },2000)

    $('.banner').on('mousemove',function(){
        clearInterval(t);
        btnLeft.css({opacity:1,});
        btnRight.css({opacity:1});
    })
    $('.banner').on('mouseout',function(){
        t=setInterval(function(){
            btnRight.trigger('click');
        },2000)
        btnLeft.css({opacity:0,});
        btnRight.css({opacity:0});
    })
    $(document).on('mousewheel',function(e){
        var ee= e.originalEvent.deltaY;
        if(ee>0){
            btnRight.trigger('click');
        }
        if(ee<0){
            btnLeft.trigger('click');
        }
    })













//    加号点击
    $('.fa').on('click',function(){
        $('.da').toggleClass('gaodu');
        $('.footer-list').toggleClass('one');
        $('.footer-listX ul li a').toggleClass('feiru');
    })
    $('.fb').on('click',function(){
        $('.db').toggleClass('gaodu1');
        $('.footer-list').toggleClass('one');
        $('.footer-listX ul li a').toggleClass('feiru');
    })
    $('.fc').on('click',function(){
        $('.dc').toggleClass('gaodu2');
        $('.footer-list').toggleClass('one');
        $('.footer-listX ul li a').toggleClass('feiru');
    })
    $('.fd').on('click',function(){
        $('.dd').toggleClass('gaodu3');
        $('.footer-list').toggleClass('one');
        $('.footer-listX ul li a').toggleClass('feiru');
    })
    $('.fe').on('click',function(){
        $('.de').toggleClass('gaodu4');
        $('.footer-list').toggleClass('one');
        $('.footer-listX ul li a').toggleClass('feiru');
    })
    $('.ff').on('click',function(){
        $('.df').toggleClass('gaodu5');
        $('.footer-list').toggleClass('one');
        $('.footer-listX ul li a').toggleClass('feiru');
    })
    $('.fg').on('click',function(){
        $('.dg').toggleClass('gaodu6');
        $('.footer-list').toggleClass('one');
        $('.footer-listX ul li a').toggleClass('feiru');
    })
})