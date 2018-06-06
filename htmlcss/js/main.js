$(document).ready(function () {
    function showImage() {
        //left side image
        $('.ln-vertical1').css('display', 'block');
        $('.ln-vertical1').animate({ 'margin-top': '0px' }, 1000);
        setTimeout(function () {
            $('.middle-text').animate({ 'left': '45%' }, 1000);
            $('.ln-vertical2').css('display', 'block');
            $('.ln-vertical2').animate({ 'margin-top': '0px' }, 1000);
        }, 100);

        //show midle right image
        setTimeout(function () {
            //.rn-h2-nested-2-one
            $('.rn-h2-nested-2-one').css('display', 'block');
            $('.rn-h2-nested-2-one').animate({ 'margin-left': '0px' }, 1000);
            $('.rn-h2-nested-2-two').css('display', 'block');
            $('.rn-h2-nested-2-two').animate({ 'margin-left': '0px' }, 1000);
        }, 100);

        //leftlogo
        setTimeout(function () {
            $('.left-top-logo.header').css('display', 'block');
            $('.left-top-logo.header').animate({ 'top': '0px'}, 1500);

            $('ul.nav.navbar-nav.navbar-center.header').css('display', 'block');
            $('ul.nav.navbar-nav.navbar-center.header').animate({ 'margin-top': '0px' }, 1000);
        }, 100);

    }
    //get letters
    setTimeout(function () {
        $('.letterI').animate({ 'top': '20%', 'left': '20%' }, 1000);
        $('.letterH').animate({ 'top': '15%', 'left': '60%' }, 1000);
        $('.letterP').animate({ 'top': '25%', 'right': '20%' }, 1000);
        $('.letterB').animate({ 'bottom': '30%', 'left': '10%' }, 1000);
        $('.letterS').css('display', 'block');
        $('.letterS').animate({ 'bottom': '20%' }, 1000);
        $('.letterO').css('display', 'block');
        $('.letterO').animate({ 'bottom': '30%' }, 1000);
    }, 100);
    setTimeout(showImage, 1000);

   
    //change left image
    var changeLeftImage = new Promise(function(resolve, reject) {
        setTimeout((function() {
            $('#left_1').switchClass( "ln-vertical1", "ln-vertical1-bg-2", 0, "easeOutBounce" );
            $('#left_2').switchClass( "ln-vertical2", "ln-vertical2-bg-2", 0, "easeOutBounce" );
            setTimeout(resolve,4000);
         }), 4000);
         
    });
    //transition to move left image out 
    function removeLeftBgImage() {
       $('#left_1').switchClass( "ln-vertical1-bg-2", "ln-vertical1-bg-2-remove-animate ");
       $('#left_2').switchClass( "ln-vertical2-bg-2", "ln-vertical2-bg-2-remove-animate ");
       $('#middle-text-id').switchClass("middle-text", "middle-text-remove");
       $('#rn-h2-nested-2-one-id').removeClass("rn-h2-nested-2-one");
       $('#rn-h2-nested-2-two-id').switchClass("rn-h2-nested-2-two", "rn-h2-nested-2-two-move-left");
      $('#slider2-middle-bg-id').addClass('slider2-middle-bg');
      $('#slider2-right-bg-id').addClass('slider2-right-bg');
      $('#middle-img-text-id').switchClass('middle-img-text-pre','middle-img-text');
      $('#left-bottom-img-text-id').switchClass('left-bottom-img-text-pre','left-bottom-img-text');
      $('#right-bottom-img-text-id').switchClass('right-bottom-img-text-pre','right-bottom-img-text');
      
    }
     //calling promise- change left image and the remove it
    changeLeftImage.then(removeLeftBgImage);
    
    
});