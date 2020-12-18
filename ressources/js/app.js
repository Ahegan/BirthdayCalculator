
var lang;
var cancel;
var joining;

function Start() {
    lang = [];
    cancel = 0;
    joining = ''

    alert('Enter word by word what you want in your glitch');
    alert('Whenever you want to stop typing, select cancel or simply press Enter without filling in the field');

    while (cancel == 0) {
        var promptL = prompt('Enter a word');
        lang.push(promptL);

        if (lang.length > 7 || promptL == '' && promptL != null) { // cancel the loop if true and make the rest of the function work
            cancel = 1;

            if (promptL == '') { //useless but cleaner, don't judge
                lang.pop();
            }
        }
        if (promptL == null) { // cancel the whole function if true
            break;
        }
    }

    if (cancel == 1) {
        
        if (lang.length > 1) { //don' ask a joining sign if there is only one word
        joining = prompt('Enter the sign that will separate the different words already entered, if you just want them to be separated by a space, press enter or cancel');
        }
        var joined = (lang.join(` ${joining} `));

        if (confirm(`The glitch that will be displayed is : ${joined} \nConfirm to continue, cancel to return to the present page without generating the glitch.`) && lang.length != 0) {
            document.getElementById('buttonContainer1').style.display = 'none';
            document.getElementById('buttonContainer2').style.display = 'flex';
            document.getElementById('buttonContainer3').style.display = 'flex';

            //put typed informations about the glitch on the HTML

            document.getElementById('joined').innerHTML = `<h1 id="glitch" class="glitch" data-text="${joined}">${joined}</h1>`;
            document.getElementById('glitchContainer').style.display = 'block';

        }

    }

}


function ReStart() {
    lang = [];
    cancel = 0;
    joining = ''

    alert('Same method as earlier');

    while (cancel == 0) {
        var promptL = prompt('Enter a word');
        lang.push(promptL);

        if (lang.length > 7 || promptL == '' && promptL != null) { // cancel the loop if true and make the rest of the function work
            cancel = 1;

            if (promptL == '') { //useless but cleaner, don't judge
                lang.pop();
            }
        }
        if (promptL == null) { // cancel the whole function if true
            break;
        }
    }

    if (cancel == 1) {
        
        if (lang.length > 1) { //don' ask a joining sign if there is only one word
        joining = prompt('Enter the sign that will separate the different words already entered, if you just want them to be separated by a space, press enter or cancel');
        }
        var joined = (lang.join(` ${joining} `));

        if (confirm(`The glitch that will be displayed is : ${joined} \nConfirm to continue, cancel to return to the present page without generating the glitch.`) && lang.length != 0) {

            //put typed informations about the glitch on the HTML

            document.getElementById('joined').innerHTML = `<h1 id="glitch" class="glitch" data-text="${joined}">${joined}</h1>`;
            document.getElementById('glitchContainer').style.display = 'block';

        }

    }


}

function Reload() {
    window.location.reload();
}
