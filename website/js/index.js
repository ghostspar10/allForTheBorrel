
var visible = true;

function changeVisibility() {
    if (visible) {
        visible = false;
        $('#backVid').fadeTo(0, 0);
        $('#backVid').get(0).pause()
        $('#hideVid').html("Show Video");
    }
    else if (visible == false) {
        visible = true;
        $("#backVid").fadeTo(0, 1);
        $('#backVid').get(0).play()
        $("#hideVid").html("Hide Video");
    }
}

function changeAudio() {
    if ($('#backVid').prop('muted')) {
        $('#backVid').prop('muted', false)
        $('#vidAudio').html("Sound Off");
    }
    else if ($('#backVid').prop('muted') == false) {
        $('#backVid').prop('muted', true)
        $('#vidAudio').html("Sound On");
    }
}