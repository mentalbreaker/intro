$(function(){
    const $showBtn = $('.show-btn'),
    $item = $('.item');

    /*$showBtn.click(function(){
        $item.find('.item-text').css({opacity:1});
    });*/
    $showBtn.on({
        click : function(){
            $item.find('.item-text').addClass('show');
        } 
    });
    $item.on({
        click : function(){
           $(this).find('.item-text').toggleClass('show');
        }
    });
});