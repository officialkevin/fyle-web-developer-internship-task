//    form js code
$(document).ready(function() {
    $('.submit-button').click(function() {
        $('.form-container').hide();
    });
});




   $("#ajaxForm").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
    "Accept": "application/json"
    }
}).done(function() {
   
  
    alert('The form was submitted successfully.')
}).fail(function() {
    alert('An error occurred! Please try again later.')
});
});






// end of form js when user press submit form will close/
    






$(document).ready(function () {
    var owl = $(".owl-carousel").owlCarousel({
        items: 3, 
        // loop: true, // Infinite loop
        margin: 30,
        dots: true,
        autoplay: true, 
        autoplayTimeout: 1000, 
        autoplayHoverPause: true 
    });



    $('.owl-dot').css({
    'background-image': 'url("/images/carouselimages/carousel-navigation-button-images/2/2.png")',
    'width': '10px',
        'height': '10px'
});

$('.owl-dot.active').css({
        'background-image': 'url("/images/carouselimages/carousel-navigation-button-images/1/1@2x.png")',
        'background-size': 'cover',
        'background-position': 'center',
        'width':'30px',
        'height':'30px'

    });



    owl.on('changed.owl.carousel', function(event) {
    // Remove background image from all dots
    $('.owl-dot').css({
        'background-image': 'url("/images/carouselimages/carousel-navigation-button-images/2/2.png")',
        'width': '8px',
        'height': '8px'
    });


    let bool=true;
    

  

    // Add background image to the active dot
    $('.owl-dot.active').css({
        'background-image': 'url("/images/carouselimages/carousel-navigation-button-images/1/1@2x.png")',
        'background-size': 'cover',
        'background-position': 'center',
        'width':'30px',
        'height':'30px'

    });



});

// Trigger the event to set the initial active dot's background image
owl.trigger('changed.owl.carousel');
           
});





$(document).on('click', '.owl-dot.active', function() {
        // alert('Active dot clicked!');
      


        $('.owl-dot.active').css({
        'background-image': 'url("/images/carouselimages/carousel-navigation-button-images/1/1@2x.png")',
        'background-size': 'cover',
        'background-position': 'center',
        'width':'30px',
        'height':'30px'
    });


    });


    // hover functionality

    $(document).ready(function() {
$('.item').hover(
function() {
  
  $(this).find('.carouselinternalcomponent').show();
},
function() {

  $(this).find('.carouselinternalcomponent').hide();
}
);
});






const contactBtn = document.getElementById('contactBtn');
const formContainer = document.querySelector('.form-container');

contactBtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
});









$(document).ready(function() {
    // Get the current background image URL
    var initialBackgroundUrl = $('.ourprojectimage-1').css('background-image');

    $('.ourprojectrightsection-1, .ourprojectrightsection-2, .ourprojectrightsection-3').click(function() {

        $('.ourprojectrightsection-1, .ourprojectrightsection-2, .ourprojectrightsection-3').css('background-color', '#F6F6F6');
        var clickedSpanClass = $(this).attr('class'); // Get the class of the clicked span
        $(this).css('background-color', '#FF3147');

        if (clickedSpanClass === 'ourprojectrightsection-1') {
            $('.ourprojectimage-1').css(
                
          {'background-image': 'url(https://pbs.twimg.com/profile_images/937963393247461377/caTNUqSb_400x400.jpg)',
          'background-size': 'cover',
          'background-position': 'center'
          }           
        );



        } 
        
        
        
        else if (clickedSpanClass === 'ourprojectrightsection-2') {
            $('.ourprojectimage-1').css({'background-image': 'url(images/whywearebestimages/image/image.png)',
            'background-size': 'cover',
            'background-position': 'center'
            } );
        }
        
        
        else if (clickedSpanClass === 'ourprojectrightsection-3') {
            $('.ourprojectimage-1').css({'background-image': 'url(https://www.bialetti.com/media/magefan_blog/pausa-caffe-header.png)',
            'background-size': 'cover',
            'background-position': 'center'
            } );
        }
    });
});

