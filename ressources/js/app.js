
var lang;
var cancel;
function Start() {
    lang = [];
    cancel = 0;
    alert('Enter word by word what you want in your glitch');
    alert('Whenever you want to stop typing, simply press Enter without filling in the field.');
    while (true) {
        var promptL = prompt('Enter a word');
        console.log(promptL);
        if (lang.length < 10 && promptL != '' && promptL != null) {
            lang.push(promptL);
            
        }
        else if( promptL == null) {
            cancel = 1;
            console.log('canceled')
            break;
        }
        else {

            break;
        }

    }

    for (var i = 0; i < lang.length; i++)


        var dd = (lang.join(' - '));

    if ( cancel == 0 && dd != undefined) {
        if (confirm(`The glitch that will be displayed is : ${dd} \nConfirm to continue, cancel to return to the present page without generating the glitch.`) && i != 0) {
            document.getElementById('buttonContainer1').style.display = 'none';
            document.getElementById('buttonContainer2').style.display = 'flex';
            document.getElementById('buttonContainer3').style.display = 'flex';
    
    
            dd = (lang.join(' - '));
            document.getElementById('dd').innerHTML = '<h1 id=\"glitch\" class=\"glitch\" data-text=\"' + dd + '\">' + dd + '</h1>';
            document.getElementById('glitchContainer').style.display = 'block';
    
        }
    }

    
}





function ReStart() {
    lang = [];
    alert('Same method as earlier');
    while (true) {
        var promptL = prompt('Enter a word');

        if (lang.length < 10 && promptL != '' && promptL != null) {
            lang.push(promptL);
            console.log(lang);
        }
        else if( promptL == null) {
            cancel = 1;
            console.log('canceled')
            break;
        }
        else {

            break;
        }

    }

    for (var i = 0; i < lang.length; i++)

    var dd = (lang.join(' - '));

    if ( cancel == 0 && dd != undefined) {
        if (confirm(`The glitch that will be displayed is : ${dd} \nConfirm to continue, cancel to return to the present page without generating the glitch.`) && i != 0) {
            document.getElementById('buttonContainer1').style.display = 'none';
            document.getElementById('buttonContainer2').style.display = 'flex';
            document.getElementById('buttonContainer3').style.display = 'flex';
    
    
            dd = (lang.join(' - '));
            document.getElementById('dd').innerHTML = '<h1 id=\"glitch\" class=\"glitch\" data-text=\"' + dd + '\">' + dd + '</h1>';
            document.getElementById('glitchContainer').style.display = 'block';
    
        }
    }


}

function Reload() {
    window.location.reload();
}
