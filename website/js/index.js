
var visible = true;
var paused = false;
var buttons = true;
var table = true;

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
        $('#vidButtons2').hide();
        $('#tableButton').hide();
        $('#hideButton').html("Show Buttons")
        buttons = false;
    }
    else if (buttons == false) {
        $('#vidButtons').show();
        $('#vidButtons2').show();
        $('#tableButton').show();
        $('#hideButton').html("Hide Buttons")
        buttons = true;
    }
}

function hideTable() {
    if (table) {
        $('#main').hide();
        table = false;
        $('#tableButton').html("Show Table")
    }
    else if (table == false) {
        $('#main').show();
        table = true;
        $('#tableButton').html("Hide Table")
    }
}

$('#hideButton').hover(function() {
        $('#hideButton').css('opacity', 1);
},
function () {
        $('#hideButton').css('opacity', 0.5);
});

$('#vidButtons2').hover(function() {
    $('#changeButton').css('opacity', 1)
},
function () {
    $('#changeButton').css('opacity', 0.5)
});

(function localFileVideoPlayer() {
	'use strict'
  var URL = window.URL || window.webkitURL

  var playSelectedFile = function (event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL

    if (paused) {
        paused = false;
      $('#pauseButton').html("Pause")
    }
  }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)


  
})()