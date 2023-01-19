// 헤더 네비 액티브
// document.querySelectorAll(".nav").forEach((link) => {
//     if (link.href === window.location.href) {
//         link.classList.add("active");
//         link.setAttribute("aria-current", "page");
//     }
// });

var pageUrl = window.location.href; //창의 url을 가져온다.
$(window).on('load', function(){ //load가 되었을때 실행
    $('.nav').siblings('a').removeClass('active'); //다른 active가 있으면 지워준다.

    if (pageUrl.indexOf('pro') > -1) { //url에 about이라는 글자가 있으면 실행
        $('.nav').eq(0).addClass('active');
    } else if (pageUrl.indexOf('faq') > -1) { //url에 contact라는 글자가 있으면 실행
        $('.nav').eq(1).addClass('active');
    // } else if (pageUrl.indexOf('forum') > -1) { //url에 contact라는 글자가 있으면 실행
    //     $('.nav').eq(2).addClass('active');
    // } else if (pageUrl.indexOf('contest') > -1) { //url에 contact라는 글자가 있으면 실행
    //     $('.nav').eq(3).addClass('active');
    // } else if (pageUrl.indexOf('cont') > -1) { //url에 contact라는 글자가 있으면 실행
    //     $('.nav').eq(4).addClass('active');
    // } else if (pageUrl.indexOf('icc') > -1) { //url에 contact라는 글자가 있으면 실행
    //     $('.nav').eq(5).addClass('active');
    // } else if (pageUrl.indexOf('rcc') > -1) { //url에 contact라는 글자가 있으면 실행
    //     $('.nav').eq(6).addClass('active');
    }
});

// 헤더 네비
$('body').on('mouseover', 'nav > ul > li', function(){
    $(this).children(".sub").stop().fadeIn(300);
});
$('body').on('mouseleave', 'nav > ul > li', function(){
    $(this).children(".sub").stop().fadeOut(300);
});
$('body').on('mouseover', 'aside', function(){
    $(".logout").stop().fadeIn(300);
});
$('body').on('mouseleave', 'aside', function(){
    $(".logout").stop().fadeOut(300);
});

// lnb 아코디언, 액티브
$("body").on('click', '.dep1-wrap', function(){
    $(this).next(".dep2-wrap").stop().slideToggle(300);
    $(this).next(".dep2-wrap").siblings(".dep2-wrap").slideUp(300); // 1개씩 펼치기
    $(this).children('.arrow').toggleClass('active');
    if(!$(this).hasClass('active')){
        $(this).addClass('active').siblings().removeClass('active');
    }
});
$("body").on('click', '.dep1-wrap', function(){
    if(!$(this).children(".arrow").hasClass('active')){
        $(".arrow").siblings().toggleClass('active');
    }
});
$("body").on('click', '.dep2 > li', function(){
    if(!$(this).hasClass('active')){
        $(this).addClass('active').siblings().removeClass('active');
    }
});

// 관리자 셀렉트박스
function chn_sltColor(){
    var color = $("#status option:checked").css("color");
    $("#status").css("color",color);
}

// 데이트피커
$(function(){
    $('.datepicker').datepicker({
        dateFormat: 'yy-mm-dd',
        showOn:"both",
        buttonImage:"/img/Icon awesome-calendar-alt.webp",
        buttonImageOnly:false
    });
})

// 진행여부 셀렉트 박스
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr());
});
