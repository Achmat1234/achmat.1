$(document).ready(function () {
    $currentImg = 1;
    checkImg();

    $("#bu1").click(function () {

        $(".img-container").animate({ left: '+=1000px' });
        $("#bac").animate({ right: '+=300px' });
        $currentImg--;
        checkImg();
    });

    $("#bu2").click(function () {

        $(".img-container").animate({ left: '-=1000px' });
        $("#bac").animate({ right: '-=300px' });
        $currentImg++;
        checkImg();
    });

    function checkImg() {
        if ($currentImg == 1) {
            $("#bu1").fadeOut();
        }
        else {
            $("#bu1").fadeIn();
        }

        if ($currentImg == 3) {
            $("#bu2").fadeOut();
        } else {
            $("#bu2").fadeIn();
        }
    }
});