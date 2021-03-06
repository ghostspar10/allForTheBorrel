var timestampOld;
var timestamp;

var varArray = 
["#s1", "#m1", "#r1", "#s1p1", "#s1p2", 
"#s2", "#m2", "#r2", "#s2p1", "#s2p2", 
"#s3", "#m3", "#r3", "#s3p1", "#s3p2", 
"#s4", "#m4", "#r4", "#s4p1", "#s4p2", 
"#s5", "#m5", "#r5", "#s5p1", "#s5p2", 
"#s6", "#m6", "#r6", "#s6p1", "#s6p2", 
"#s7", "#m7", "#r7", "#s7p1", "#s7p2", 
"#s8", "#m8", "#r8", "#s8p1", "#s8p2", 
"#s9", "#m9", "#r9", "#s9p1", "#s9p2"];
var stringArray = 
              ["1", "2", "3", "4", "5", "6", "7", "8", "9", 
"10", "11", "12", "13", "14", "15", "16", "17", "18", "19", 
"20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
"30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
"40", "41", "42", "43", "44", "45"];

var thirdArray = 
              ["1", "2", "3", "4", "5", "6", "7", "8", "9", 
"10", "11", "12", "13", "14", "15", "16", "17", "18", "19", 
"20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
"30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
"40", "41", "42", "43", "44", "45"];

var xmlDoc;

var xhr;
var url = "streamcontrol.xml";

var animating = false;
var doUpdate = false;

window.onload = function init() {

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}

	xhr.overrideMimeType('text/xml');

	var timeout = this.window.setInterval(function () {
		pollHandler();
	}, 250);

	$('s1').html('');
	$('s2').html('');
	$('s3').html('');
	$('s4').html('');
	$('s5').html('');
	$('s6').html('');
	$('s7').html('');
	$('s8').html('');
	$('s9').html('');

	$('#m1').html('');
	$('#m2').html('');
	$('#m3').html('');
	$('#m4').html('');
	$('#m5').html('');
	$('#m6').html('');
	$('#m7').html('');
	$('#m8').html('');
	$('#m9').html('');

	$('#r1').html('');
	$('#r2').html('');
	$('#r3').html('');
	$('#r4').html('');
	$('#r5').html('');
	$('#r6').html('');
	$('#r7').html('');
	$('#r8').html('');
	$('#r9').html('');

	$('#s1p1').html('');
	$('#s1p2').html('');
	$('#s2p1').html('');
	$('#s2p2').html('');
	$('#s3p1').html('');
	$('#s3p2').html('');
	$('#s4p1').html('');
	$('#s4p2').html('');
	$('#s5p1').html('');
	$('#s5p2').html('');
	$('#s6p1').html('');
	$('#s6p2').html('');
	$('#s7p1').html('');
	$('#s7p2').html('');
	$('#s8p1').html('');
	$('#s8p2').html('');
	$('#s9p1').html('');
	$('#s9p2').html('');
}

function pollHandler() {
	loadData();
	if (timestamp != timestampOld) {
		doUpdate = true;
	}
	if (!animating && doUpdate) {
		updateBoard();
	}

}

function loadData() {
	xhr.open('GET', 'xml/streamcontrol.xml', true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			xmlDoc = xhr.responseXML;

			stringArray[0] = getValueFromTag(xmlDoc, "s1");
			stringArray[1] = getValueFromTag(xmlDoc, "m1");
			stringArray[2] = getValueFromTag(xmlDoc, "r1");
			stringArray[3] = getValueFromTag(xmlDoc, "s1p1");
			stringArray[4] = getValueFromTag(xmlDoc, "s1p2");
			stringArray[5] = getValueFromTag(xmlDoc, "s2");
			stringArray[6] = getValueFromTag(xmlDoc, "m2");
			stringArray[7] = getValueFromTag(xmlDoc, "r2");
			stringArray[8] = getValueFromTag(xmlDoc, "s2p1");
			stringArray[9] = getValueFromTag(xmlDoc, "s2p2");
			stringArray[10] = getValueFromTag(xmlDoc, "s3");
			stringArray[11] = getValueFromTag(xmlDoc, "m3");
			stringArray[12] = getValueFromTag(xmlDoc, "r3");
			stringArray[13] = getValueFromTag(xmlDoc, "s3p1");
			stringArray[14] = getValueFromTag(xmlDoc, "s3p2");
			stringArray[15] = getValueFromTag(xmlDoc, "s4");
			stringArray[16] = getValueFromTag(xmlDoc, "m4");
			stringArray[17] = getValueFromTag(xmlDoc, "r4");
			stringArray[18] = getValueFromTag(xmlDoc, "s4p1");
			stringArray[19] = getValueFromTag(xmlDoc, "s4p2");
			stringArray[20] = getValueFromTag(xmlDoc, "s5");
			stringArray[21] = getValueFromTag(xmlDoc, "m5");
			stringArray[22] = getValueFromTag(xmlDoc, "r5");
			stringArray[23] = getValueFromTag(xmlDoc, "s5p1");
			stringArray[24] = getValueFromTag(xmlDoc, "s5p2");
			stringArray[25] = getValueFromTag(xmlDoc, "s6");
			stringArray[26] = getValueFromTag(xmlDoc, "m6");
			stringArray[27] = getValueFromTag(xmlDoc, "r6");
			stringArray[28] = getValueFromTag(xmlDoc, "s6p1");
			stringArray[29] = getValueFromTag(xmlDoc, "s6p2");
			stringArray[30] = getValueFromTag(xmlDoc, "s7");
			stringArray[31] = getValueFromTag(xmlDoc, "m7");
			stringArray[32] = getValueFromTag(xmlDoc, "r7");
			stringArray[33] = getValueFromTag(xmlDoc, "s7p1");
			stringArray[34] = getValueFromTag(xmlDoc, "s7p2");
			stringArray[35] = getValueFromTag(xmlDoc, "s8");
			stringArray[36] = getValueFromTag(xmlDoc, "m8");
			stringArray[37] = getValueFromTag(xmlDoc, "r8");
			stringArray[38] = getValueFromTag(xmlDoc, "s8p1");
			stringArray[39] = getValueFromTag(xmlDoc, "s8p2");
			stringArray[40] = getValueFromTag(xmlDoc, "s9");
			stringArray[41] = getValueFromTag(xmlDoc, "m9");
			stringArray[42] = getValueFromTag(xmlDoc, "r9");
			stringArray[43] = getValueFromTag(xmlDoc, "s9p1");
			stringArray[44] = getValueFromTag(xmlDoc, "s9p2");
			

			timestampOld = timestamp;
			timestamp = getValueFromTag(xmlDoc, "timestamp");

			for (var i = 0; i < 45; i++) {
				if (stringArray[i] == '') {
					stringArray[i] = ' ';
				}
			}
		}
	}
	
}

function updateBoard() {

	

	for (var i = 0; i < 45; i++) {
		if ($(varArray[i]).val() != stringArray[i] && stringArray[i] != thirdArray[i]) {
			animationHandler(i);
		}
	}


	

	doUpdate = false;
}

function getValueFromTag(xmlDoc, tag) {


	if (xmlDoc.getElementsByTagName(tag).length != 0) {
		if (xmlDoc.getElementsByTagName(tag)[0].childNodes.length == 0) {
			return '';
		} else {

			return xmlDoc.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
		}
	} else {
		return '';
	}
}



function animationHandler(i) {
	animating = true;

	$(varArray[i]).tween({
		opacity: {
			start: 100,
			stop: 0,
			time: 0,
			duration: 0.2,
			effect: 'easeIn'
		},
		onStop: function () {
			$(varArray[i]).html(stringArray[i]);
			thirdArray[i] = stringArray[i];
			
		}
	});

	$.play();

	$(varArray[i]).tween({
		opacity: {
			start: 0,
			stop: 100,
			time: 0.5,
			duration: 0.2,
			effect: 'easeOut'
		},
		onStop: function () {
			animating = false;
		}
	});

	$.play();
}