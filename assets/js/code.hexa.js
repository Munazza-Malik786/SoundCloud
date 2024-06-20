
$(document).on('click', '.service_btn', function () {
    $('.price_card').toggle('fade');
});

$(document).on('click', '#cloud_active', function () {
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('spotify_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('youtube_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('instagram_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('facebook_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('other_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').addClass('cloud_color');
    $('.price_card .btn-primary').removeClass('youtube_cart_btn');
    $('.price_card .btn-primary').removeClass('spotify_cart_btn');
    $('.price_card .btn-primary').removeClass('instagram_cart_btn');
    $('.price_card .btn-primary').removeClass('facebook_cart_btn');
    $('.price_card .btn-primary').removeClass('other_cart_btn');
    $('.price_card .btn-primary').addClass('cloud_cart_btn');
});

$(document).on('click', '#spotify_active', function () {
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('cloud_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('youtube_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('instagram_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('facebook_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('other_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').addClass('spotify_color');
    $('.price_card .btn-primary').removeClass('youtube_cart_btn');
    $('.price_card .btn-primary').removeClass('cloud_cart_btn');
    $('.price_card .btn-primary').removeClass('instagram_cart_btn');
    $('.price_card .btn-primary').removeClass('facebook_cart_btn');
    $('.price_card .btn-primary').removeClass('other_cart_btn');
    $('.price_card .btn-primary').addClass('spotify_cart_btn');
});
$(document).on('click', '#youtube_active', function () {
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('spotify_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('cloud_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('instagram_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('facebook_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('other_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').addClass('youtube_color');
    $('.price_card .btn-primary').removeClass('spotify_cart_btn');
    $('.price_card .btn-primary').removeClass('cloud_cart_btn');
    $('.price_card .btn-primary').removeClass('instagram_cart_btn');
    $('.price_card .btn-primary').removeClass('facebook_cart_btn');
    $('.price_card .btn-primary').removeClass('other_cart_btn');
    $('.price_card .btn-primary').addClass('youtube_cart_btn');
});

$(document).on('click', '#instagram_active', function () {
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('spotify_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('cloud_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('youtube_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('facebook_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('other_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').addClass('instagram_color');
    $('.price_card .btn-primary').removeClass('spotify_cart_btn');
    $('.price_card .btn-primary').removeClass('cloud_cart_btn');
    $('.price_card .btn-primary').removeClass('youtube_cart_btn');
    $('.price_card .btn-primary').removeClass('facebook_cart_btn');
    $('.price_card .btn-primary').removeClass('other_cart_btn');
    $('.price_card .btn-primary').addClass('instagram_cart_btn');
});


$(document).on('click', '#facebook_active', function () {
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('spotify_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('cloud_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('youtube_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('instagram_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('other_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').addClass('facebook_color');
    $('.price_card .btn-primary').removeClass('spotify_cart_btn');
    $('.price_card .btn-primary').removeClass('cloud_cart_btn');
    $('.price_card .btn-primary').removeClass('youtube_cart_btn');
    $('.price_card .btn-primary').removeClass('instagram_cart_btn');
    $('.price_card .btn-primary').removeClass('other_cart_btn');
    $('.price_card .btn-primary').addClass('facebook_cart_btn');
});

$(document).on('click', '#other_active', function () {
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('spotify_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('cloud_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('youtube_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('instagram_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').removeClass('facebook_color');
    $('.price_card h1,.price_card h4,.price_card h5,.price_card h6,.price_card h2,.service_btn, .price_card .ser_icon,.price_card .fa-check-circle, .price_card .btn-primary, .services_title').addClass('other_color');
    $('.price_card .btn-primary').removeClass('spotify_cart_btn');
    $('.price_card .btn-primary').removeClass('cloud_cart_btn');
    $('.price_card .btn-primary').removeClass('youtube_cart_btn');
    $('.price_card .btn-primary').removeClass('instagram_cart_btn');
    $('.price_card .btn-primary').removeClass('facebook_cart_btn');
    $('.price_card .btn-primary').addClass('other_cart_btn');
});