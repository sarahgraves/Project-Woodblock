// Sliding Subnav

$(function() {
    $('.sub-menu').hide();

    $("li:has(ul)").click(function(){
        $('.sub-menu:not(:hidden)').slideUp('slow');
        $(this).find("ul").slideDown('slow');
    });
});

// Sticky Subnav

$(function() {

    // Do our DOM lookups beforehand
    var nav_container = $(".stickiness");
    var nav = $(".sidebar");

    nav_container.waypoint({
        handler: function(event, direction) {
            nav.toggleClass('sticky', direction=='down');
            if (direction == 'down')
                nav_container.css({ 'height':nav.outerHeight() });
            else
                nav_container.css({ 'height':'auto' });
        },
        offset: 30
    });

});
