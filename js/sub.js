// $("body").on('click', '.dep1-wrap', function(){
//     $(this).next(".dep2-wrap").stop().slideToggle(300);
//     $(this).next(".dep2-wrap").siblings(".dep2-wrap").slideUp(300); // 1개씩 펼치기
//     $(this).children('.arrow').toggleClass('active');
//     if(!$(this).hasClass('active')){
//         $(this).addClass('active').siblings().removeClass('active');
//     }
// });
// $("body").on('click', '.dep1-wrap', function(){
//     if(!$(this).children(".arrow").hasClass('active')){
//         $(".arrow").siblings().toggleClass('active');
//     }
// });
// $("body").on('click', '.dep2 > li', function(){
//     if(!$(this).hasClass('active')){
//         $(this).addClass('active').siblings().removeClass('active');
//     }
// });

// $('.dep1-wrap').click(function(){
//     $(this).next(".dep2-wrap").stop().slideToggle(300);
//     $(this).next(".dep2-wrap").siblings(".dep2-wrap").slideUp(300); // 1개씩 펼치기
//     $(this).children('.arrow').toggleClass('active');
//     if(!$(this).hasClass('active')){
//         $(this).addClass('active').siblings().removeClass('active');
//     }
//     if(!$(this).children(".arrow").hasClass('active')){
//         $(".arrow").siblings().toggleClass('active');
//     }
// });

// $(".dep2 > li").on('click', '.dep2 > li', function(){
//     if(!$(this).hasClass('active')){
//         $(this).addClass('active').siblings().removeClass('active');
//     }
// });