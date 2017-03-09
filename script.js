<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript">

 $("document").ready(function(){

    function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }

    $("#om").click(function() {
        scrollToAnchor('about');
    });


});

 </script>
