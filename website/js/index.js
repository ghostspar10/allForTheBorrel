
var visible = true;
var paused = false;
var buttons = true;

function changeVisibility() {
    if (visible) {
        visible = false;
        $('#backVid').fadeTo(0, 0);
        if (paused == false) {
            $('#backVid').get(0).pause()
        }
        $('#videoButton').html("Show Video");
    }
    else if (visible == false) {
        visible = true;
        $("#backVid").fadeTo(0, 1);
        if (paused == false) {
            $('#backVid').get(0).play()
        }
        $("#videoButton").html("Hide Video");
    }
}

function changeAudio() {
    if ($('#backVid').prop('muted')) {
        $('#backVid').prop('muted', false)
        $('#audioButton').html("Sound Off");
    }
    else if ($('#backVid').prop('muted') == false) {
        $('#backVid').prop('muted', true)
        $('#audioButton').html("Sound On");
    }
}

function changePause() {
    if (visible) {
        if (paused) {
            paused = false;
            $('#backVid').get(0).play()
            $('#pauseButton').html("Pause")
        }
        else if (paused == false) {
            paused = true;
            $('#backVid').get(0).pause()
            $('#pauseButton').html("Resume")
        }
    }
}

function hideButtons() {
    if (buttons) {
        $('#vidButtons').hide();
        $('#hideButton').css('opacity', 0.1)
        $('#hideButton').html("Show Buttons")
        buttons = false;
    }
    else if (buttons == false) {
        $('#vidButtons').show();
        $('#hideButton').css('opacity', 1)
        $('#hideButton').html("Hide Buttons")
        buttons = true;
    }
}

$('#hideButton').hover(function() {
        $('#hideButton').css('opacity', 1)
},
function () {
    if (buttons == false) {
        $('#hideButton').css('opacity', 0.1)
    }
});