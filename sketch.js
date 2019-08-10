

/*footer responsive*/

$(window).resize (function() {
    if($(window).width() < 400) {
        $('#contact').addClass('detres');
        $('#cont').addClass('detares');
        $('#con').addClass('detalres');
  
        $('#contact').removeClass('det');
        $('#cont').removeClass('deta');
        $('#con').removeClass('detal');
       
        
        
      
        
    }else{
    	  $('#contact').removeClass('detres');
          $('#cont').removeClass('detares');
          $('#con').removeClass('detalres');
          $('#contact').addClass('det');
          $('#cont').addClass('deta');
          $('#con').addClass('detal');
        
    }
});

$(window).resize(function() {
    if($(window).width() < 400) {
        $('#offer').removeClass('marquee');
        $(".re").css("display", "none"); 
        $(".img1").css("width", "17%"); 
        
        $(".dropdown").css("display", "inline"); 
        
       
    }else{
    	  $('#mar').addClass('marquee');
    	 
      
    }
    
});
