// var character1 = document.getElementById("character");
// var characterImgNo = 0;
// var characterAnimationNo = 0;
//
// characterAnimationStart();
//
// function characterAnimation() {
//     characterImgNo = characterImgNo + 1;
//     if (characterImgNo == 10) {
//         characterImgNo = 1;
//     }
//     character1.src="assets/image/png/Idle("+characterImgNo+").png";
// }
//
// function characterAnimationStart() {
//     // alert("start");
//     characterAnimationNo = setInterval(characterAnimation, 200);
// }


$(document).ready(function () {
    var character1 = $("#character");
    var characterImgNo = 1;
    var characterAnimationNo;

    characterAnimationStart();

    function characterAnimation() {

        $("#character").css({
            width: '130px',
            marginTop: '54vh',
            position: 'absolute'
        });

        characterImgNo = characterImgNo + 1;
        if (characterImgNo === 10) {
            characterImgNo = 1;
        }
        character1.attr("src", "assets/image/png/Idle(" + characterImgNo + ").png");
    }

    function characterAnimationStart() {
        characterAnimationNo = setInterval(characterAnimation, 100);
    }

    var characterRunImgNo = 1;
    var characterRunAnimationNo = 0;


    function characterRunAnimation() {

        $("#character").css({
            width: '206px',
            marginTop: '54vh',
            position: 'absolute'
        });

        characterRunImgNo = characterRunImgNo + 1;
        if (characterRunImgNo === 10) {
            characterRunImgNo = 1;
        }
        character1.attr("src", "assets/image/png/Run(" + characterRunImgNo + ").png");

    }


    function characterRunAnimationStart() {
        characterRunAnimationNo = setInterval(characterRunAnimation, 100);
        clearInterval(characterAnimationNo);
        // alert(event.which);
    }


    $(document).keydown(function (event) {
        if (event.keyCode == 13) {
            if (characterRunAnimationNo == 0) {
                characterRunAnimationStart();
            }
            if (moveBackgroundAnimationId == 0) {
                moveBackgroundAnimationId = setInterval(moveBackground, 100);
            }
        }

        if (event.keyCode ==32){
            if (charactorJumpAniationNo == 0){
                characterJumpAnimationStart();
            }
            if (moveBackgroundAnimationId == 0) {
                moveBackgroundAnimationId = setInterval(moveBackground, 100);
            }
        }

    });

    var backgroundImagePositionX = 0;
    var moveBackgroundAnimationId = 0;

    function moveBackground() {
        backgroundImagePositionX = backgroundImagePositionX - 20;
        $("#backgroundID").css("background-position-x", backgroundImagePositionX + "px");
    }


    var charactorJumpAniationNo = 0;
    var characterJumpImgNo = 0;
    // var charactorMarginTop = 54; not use

    function characterJumpAnimation() {

        $("#character").css({
            width: '206px',
            marginTop: '45vh',
            position: 'absolute'
        });

       /*
       if (characterJumpImgNo <= 5 ){
            charactorMarginTop = charactorMarginTop - 2;
            character1.css("margin-top", charactorMarginTop +"px");
        }

        if (characterJumpImgNo >= 6 ){
            charactorMarginTop = charactorMarginTop + 2;
            character1.css("margin-top", charactorMarginTop +"px");
        }*/

        characterJumpImgNo = characterJumpImgNo + 1;
        if (characterJumpImgNo == 10){
            characterJumpImgNo = 0;
            clearInterval(charactorJumpAniationNo);
            charactorJumpAniationNo = 0;
            characterRunImgNo = 0;
            characterRunAnimationStart();
        }

        character1.attr("src", "assets/image/png/Jump__00" + characterJumpImgNo + ".png");

    }

    function characterJumpAnimationStart() {
        clearInterval(characterAnimationNo);
        characterRunImgNo = 0;
        clearInterval(characterRunAnimationNo);
        
        charactorJumpAniationNo = setInterval(characterJumpAnimation,100);
    }


});

