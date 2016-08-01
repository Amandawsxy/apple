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
        //$('.da ul').slideToggle('footer-yingcang1');
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