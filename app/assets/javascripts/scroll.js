$(function(){
  $(window).on('load', function(){
    $('.header, .content, .content__home, .content__box, .content__box__right__top__image, .works_text').removeClass('loading');
    $('.loading_image').fadeOut();	
  });

  $('.header__left').click(function(){
    setTimeout(function(){
      $('.content__home').fadeIn(700);
    },720);
    $('#box_1').fadeOut(700);
    $('#box_2').fadeOut(700);
    $('#box_3').fadeOut(700);
    $('#box_4').fadeOut(700);
  });

  $('.menu_1').click(function(){
    setTimeout(function(){
      $('#box_1').fadeIn(700);
    },720);
    $('#box_2').fadeOut(700);
    $('#box_3').fadeOut(700);
    $('#box_4').fadeOut(700);
    $('.content__home').fadeOut(700);
  });

  $('.menu_2').click(function(){
    setTimeout(function(){
      $('#box_2').fadeIn(700);
    },720);
    $('#box_1').fadeOut(700);
    $('#box_3').fadeOut(700);
    $('#box_4').fadeOut(700);
    $('.content__home').fadeOut(700);
  });

  $('.menu_3').click(function(){
    setTimeout(function(){
      $('#box_3').fadeIn(700);
    },720);
    $('#box_1').fadeOut(700);
    $('#box_2').fadeOut(700);
    $('#box_4').fadeOut(700);
    $('.content__home').fadeOut(700);
  });

  $('.menu_4').click(function(){
    setTimeout(function(){
      $('#box_4').fadeIn(700);
    },720);
    $('#box_1').fadeOut(700);
    $('#box_2').fadeOut(700);
    $('#box_3').fadeOut(700);
    $('.content__home').fadeOut(700);
  });

  $('#title_1').click(function(){
    $('#title_1').css('opacity', 0.5);
    $('#title_2,#title_3,#title_4,#title_5').css('opacity', 1);
    $('#skill_text_1').css('display', 'block');
    $('#skill_text_2,#skill_text_3,#skill_text_4,#skill_text_5').css('display', 'none');
  });

  $('#title_2').click(function(){
    $('#title_2').css('opacity', 0.5);
    $('#title_1,#title_3,#title_4,#title_5').css('opacity', 1);
    $('#skill_text_2').css('display', 'block');
    $('#skill_text_1,#skill_text_3,#skill_text_4,#skill_text_5').css('display', 'none');
  });

  $('#title_3').click(function(){
    $('#title_3').css('opacity', 0.5);
    $('#title_1,#title_2,#title_4,#title_5').css('opacity', 1);
    $('#skill_text_3').css('display', 'block');
    $('#skill_text_1,#skill_text_2,#skill_text_4,#skill_text_5').css('display', 'none');
  });

  $('#title_4').click(function(){
    $('#title_4').css('opacity', 0.5);
    $('#title_1,#title_2,#title_3,#title_5').css('opacity', 1);
    $('#skill_text_4').css('display', 'block');
    $('#skill_text_1,#skill_text_2,#skill_text_3,#skill_text_5').css('display', 'none');
  });

  $('#title_5').click(function(){
    $('#title_5').css('opacity', 0.5);
    $('#title_1,#title_2,#title_3,#title_4').css('opacity', 1);
    $('#skill_text_5').css('display', 'block');
    $('#skill_text_1,#skill_text_2,#skill_text_3,#skill_text_4').css('display', 'none');
  });
  
  $('#title_6').click(function(){
    $('#title_6').css('opacity', 0.5);
    $('#title_7,#title_8').css('opacity', 1);
    $('#works_text_1').css('display', 'block');
    $('#works_text_2,#works_text_3').css('display', 'none');
  });

  $('#title_7').click(function(){
    $('#title_7').css('opacity', 0.5);
    $('#title_6,#title_8').css('opacity', 1);
    $('#works_text_2').css('display', 'block');
    $('#works_text_1,#works_text_3').css('display', 'none');
  });

  $('#title_8').click(function(){
    $('#title_8').css('opacity', 0.5);
    $('#title_6,#title_7').css('opacity', 1);
    $('#works_text_3').css('display', 'block');
    $('#works_text_1,#works_text_2').css('display', 'none');
  });

  $('#mail').hover(
    function(){
      $("#f_mail").css('opacity', 1);
    },
    
    function(){
      $("#f_mail").css('opacity', 0);
    }
  );

  $('#github').hover(
    function(){
      $("#f_github").css('opacity', 1);
    },
    
    function(){
      $("#f_github").css('opacity', 0);
    }
  );

  $('#mail').click(function(){
    window.open('https://mail.google.com/mail/?view=cm&to=f66.nakashima.daisuke@gmail.com&cc=&bcc=&su=&body=');
  });
  
  $('#github').click(function(){
    window.open('https://github.com/codingnooooob');
  });

  $('#github_works_1').click(function(){
    window.open('https://github.com/codingnooooob/portfolio');
  });

  $('#github_works_2').click(function(){
    window.open('https://github.com/codingnooooob/chat-space');
  });

  $('#github_works_3').click(function(){
    window.open('https://github.com/codingnooooob/freemarket_sample_66c');
  });

  $('#link_2').click(function(){
    window.open('http://54.238.141.97/');
  });

  $('#link_3').click(function(){
    window.open('http://18.176.104.76/');
  });
});