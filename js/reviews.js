// $(document).ready(function() {
//     var slideNum = $('.page').length,
//       wrapperWidth = 100 * slideNum,
//       slideWidth = 100 / slideNum;
//     $('.wrapper').width(wrapperWidth + '%');
//     $('.page').width(slideWidth + '%');
  
//     $('a.scrollitem').click(function() {
//       $('a.scrollitem').removeClass('selected');
//       $(this).addClass('selected');
  
//       var slideNumber = $($(this).attr('href')).index('.page'),
//         margin = slideNumber * -100 + '%';
  
//       $('.wrapper').animate({
//         marginLeft: margin
//       }, 1000);
//       return false;
//     });
//   });

function onFunc(){
  window.alert("hello")
}



  // var destination = $(this).data("link");
  // $("body").fadeOut(1000,function(){
  //   window.location.replace(destination);
  // });
});