var pageUrl = window.location.href; 
$(window).on('load', function(){ 
    $('.nav').siblings('a').removeClass('active');

    if (pageUrl.indexOf('pro') > -1) {
        $('.nav').eq(0).addClass('active');
    } else if (pageUrl.indexOf('faq') > -1) {
        $('.nav').eq(1).addClass('active');
    } else if (pageUrl.indexOf('notice') > -1) {
        $('.nav').eq(2).addClass('active');
    } else if (pageUrl.indexOf('account') > -1) {
        $('.nav').eq(3).addClass('active');
    } else if (pageUrl.indexOf('noti') > -1) {
        $('.nav').eq(4).addClass('active');
    };
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
    $(this).children('.arrow').toggleClass('active');
    if(!$(this).hasClass('active')){
        $(this).addClass('active').siblings().removeClass('active');
    };
});
$("body").on('click', '.dep1-wrap', function(){
    if(!$(this).children(".arrow").hasClass('active')){
        $(".arrow").siblings().toggleClass('active');
    };
});
$("body").on('click', '.dep2 > li', function(){
    if(!$(this).hasClass('active')){
        $(this).addClass('active').siblings().removeClass('active');
    };
});

// 관리자 셀렉트박스
function chn_sltColor(){
    var color = $("#status option:checked").css("color");
    $("#status").css("color",color);
};

// 데이트피커
$(function(){
    $('.datepicker').datepicker({
        dateFormat: 'yy-mm-dd',
        showOn:"both",
        buttonImage:"/img/Icon awesome-calendar-alt.webp",
        buttonImageOnly:false
    });
});

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

// input file
$(document).ready(function(){
    var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
            } else { 
                var filename = $(this).val().split('/').pop().split('\\').pop();
            }
        $(this).siblings('.upload-name').val(filename);
    });
}); 


// 메세지 전송 얼럿창
$('.msg').click(function(){
    confirm("도메인 만료 예정 메세지를 보내시겠습니까?");
});

// faq 아코디언
$(".faq-cont").hide();
$(".bd-desc.faq-desc > li:nth-child(3)").click(function() {
    $(".faq-cont").stop().slideToggle(300);
    $(".faq-cont").siblings(".faq-cont").slideUp(300); // 1개씩 펼치기
});

// notice 아코디언
$(".notice-cont").hide();
$(".bd-desc > li:nth-child(2)").click(function() {
    $(".notice-cont").stop().slideToggle(300);
    $(".notice-cont").siblings(".notice-cont").slideUp(300); // 1개씩 펼치기
});
