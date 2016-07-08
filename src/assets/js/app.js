$(document).ready(function () {
    
    setTimeout(function(){
        $('.field-input').focus(function(){
        console.log('field-input');
    })
    })
    
    

          $('.field-input').focus(function(){
      alert('field');
    $('.field-label').addClass('is-focused has-label');
  });

  $('.field-input').each(function(){
    if($(this).val() != ''){
      $(this).parent().addClass('has-label');
    }
  });

  $('.field-input').blur(function(){
    $parent = $(this).parent();
    if($(this).val() == ''){
      $parent.removeClass('has-label');
    }
    $parent.removeClass('is-focused');
  });
})
  /*-- Show Div JavaScript
     ================================================== --*/

  $(document).ready(function () {
      $("#sidebar").click(function () {
        console.log('test');
          $(".showSkill").hide("slow");
          $("#skill-up").hide();
          $(".sidebar ul li:first-child").addClass('sidebar-show');
      });
      $("#skill-down").click(function () {
          $(".showSkill").show("slow");
          $("#skill-down").hide();
          $("#skill-up").show();
      });
  });
;( function( window ) {
    "use strict";
   $('#sidebar').click(function () {
     console.log('hello_world')
   })
 })
/*
jQuery(function($) {
  $('.field-input').focus(function(){
    $(this).parent().addClass('is-focused has-label');
  });

  $('.field-input').each(function(){
    if($(this).val() != ''){
      $(this).parent().addClass('has-label');
    }
  });

  $('.field-input').blur(function(){
    $parent = $(this).parent();
    if($(this).val() == ''){
      $parent.removeClass('has-label');
    }
    $parent.removeClass('is-focused');
  });
})
 */  
 
