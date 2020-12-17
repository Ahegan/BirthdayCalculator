
var lang;
var cancel;

function Start() {
    lang = [];
    cancel = 0;

    alert('Enter word by word what you want in your glitch');
    alert('Whenever you want to stop typing, select cancel or simply press Enter without filling in the field');

    while (true) {
        var promptL = prompt('Enter a word');
        if (lang.length < 7 && promptL != '' && promptL != null) { //put a limit of 7 words on the array and make the loop canlelable
            lang.push(promptL);

        }
        else if (promptL == null) { //cancel the rest of the function if the user clcik on cancel
            cancel = 1;
            break;
        }
        else {

            break;
        }

    }

    var joined = (lang.join(' - '));

    if (cancel == 0 && joined != undefined && joined != '') { // I've noticed that for a reason that i didn't found (DM me if you know) != undefined usually works but also sometimes just don't work and same for !='' so i put both
        if (confirm(`The glitch that will be displayed is : ${joined} \nConfirm to continue, cancel to return to the present page without generating the glitch.`) && lang.length != 0) {
            document.getElementById('buttonContainer1').style.display = 'none';
            document.getElementById('buttonContainer2').style.display = 'flex';
            document.getElementById('buttonContainer3').style.display = 'flex';


            joined = (lang.join(' - '));
            document.getElementById('joined').innerHTML = '<h1 id=\"glitch\" class=\"glitch\" data-text=\"' + joined + '\">' + joined + '</h1>';
            document.getElementById('glitchContainer').style.display = 'block';

        }
    }


}


function ReStart() {
    lang = [];
    cancel = 0;

    alert('Same method as earlier');

    while (true) {
        var promptL = prompt('Enter a word');

        if (lang.length < 7 && promptL != '' && promptL != null) { //put a limit of 7 words on the array and make the loop canlelable
            lang.push(promptL);
        }
        else if (promptL == null) { //cancel the rest of the function if the user clcik on cancel
            cancel = 1;
            break;
        }
        else {

            break;
        }

    }


    var joined = (lang.join(' - '));

    if (cancel == 0 && joined != undefined && joined != '') { // I've noticed that for a reason that i didn't found (DM me if you know) != undefined usually works but also sometimes just don't work and same for !='' so i put both
        if (confirm(`The glitch that will be displayed is : ${joined} \nConfirm to continue, cancel to return to the present page without generating the glitch.`) && lang.length != 0) {
            document.getElementById('buttonContainer2').style.display = 'flex';
            document.getElementById('buttonContainer3').style.display = 'flex';


            joined = (lang.join(' - '));
            document.getElementById('joined').innerHTML = '<h1 id=\"glitch\" class=\"glitch\" data-text=\"' + joined + '\">' + joined + '</h1>';
            document.getElementById('glitchContainer').style.display = 'block';

        }
    }


}

function Reload() {
    window.location.reload();
}
