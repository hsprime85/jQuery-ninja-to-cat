$(document).ready(function(){


    $("#ninja0").click(function(){
        $(this).attr('src','img/cat0.png'); 
    });
    
    $("#ninja1").click(function(){
        $(this).attr('src','img/cat1.png'); 
    });    
    
    $("#ninja2").click(function(){
        $(this).attr('src','img/cat2.png'); 
    });    
    
    $("#ninja3").click(function(){
        $(this).attr('src','img/cat3.png'); 
    });    
    
    $("#ninja4").click(function(){
        $(this).attr('src','img/cat4.png'); 
    });

    $('img').click(function() {
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
});

});