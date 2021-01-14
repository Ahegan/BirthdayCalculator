var input = document.getElementById("dataUser").getElementsByTagName("input");
var empty, year;


//define error messages for empties inputs
document.getElementById("dataUser").addEventListener("input", function () {
    empty = 0;
    for (i = 1; i < input.length; i++) {
        if (input[i - 1].value === "") {
            empty = i;
            document.getElementById(`span${i}`).style.opacity = "1";

        } else document.getElementById(`span${i}`).style.opacity = "0";


    }

})
var month, day, yStart, yEnd, year;
function displayModal(displayedText) {
    document.getElementById("pop-up").style.visibility = "initial";
    document.getElementById("pop-up").style.opacity = "1";
    document.getElementById("window").style.top = "45%";
    document.getElementById("alert-message").innerHTML = displayedText
}

//calculate and display the dates
const getValue = (itemName) => input.namedItem(itemName).value;

document.getElementById("dataUser").addEventListener("submit", function (e) {
    e.preventDefault();
    result.innerHTML = "";
    var verifStart = "";
    var verifEnd = "";
    var verifYear = "";

    if (empty === 0) {
        month = getValue("month");
        day = getValue("day");
        yStart = getValue("yStart");
        yEnd = getValue("yEnd");
        year = getValue("year");

        //for the verification that display the modal if there is an error
        function verificationYear(el) {
            return new Date(`${el}-${month}-${day}T12:00:00`);
        }

        verifStart = verificationYear(yStart);
        verifEnd = verificationYear(yEnd);
        verifYear = verificationYear(year);


        let currentDate;
        let conditionsArray = [verifStart != "Invalid Date", verifEnd != "Invalid Date", verifYear != "Invalid Date", yEnd - yStart < 1000, yStart <= yEnd, year <= yStart]
        const isError = (currentValue) => currentValue === true;

        if (conditionsArray.every(isError)) {
            let fullDay;
            let result = document.getElementById("result");

            for (i = yStart; i <= yEnd; i++) {

                currentDate = new Date(`${i}-${month}-${day}T12:00:00`);

                switch (currentDate.getDay()) {
                    case 0:
                        fullDay = "Sunday";
                        break;
                    case 1:
                        fullDay = "Monday";
                        break;
                    case 2:
                        fullDay = "Tuesday";
                        break;
                    case 3:
                        fullDay = "Wednsday";
                        break;
                    case 4:
                        fullDay = "Thursday";
                        break;
                    case 5:
                        fullDay = "Friday";
                        break;
                    case 6:
                        fullDay = "Saturday";
                        break;
                }

                result.innerHTML += `<div id="year${i}" class="result-div" style="position: relative;">In ${i}, your birthday will be on a ${fullDay} </div>` //`In ${i}, your birthday will be on a ${fullDay} <br>`;


            }
        } else if (Number(yEnd) - Number(yStart) > 1000) {
            displayModal("Too many years to calculate");

        } else if (verifStart == "Invalid Date" || verifEnd == "Invalid Date" || verifYear == "Invalid Date") {
            displayModal("Please enter numeric value");

        } else if (yStart > yEnd) {
            displayModal("Ending year of the calcul must be superior to the starting year");
        } else if (year > yStart){
            displayModal("Starting year of the calcul must be superior to your birth year")
        }

        //reset options checkboxes to false
        for (i = 0; i <= 4; i++) {
            let inputSelectorArray = document.getElementById("selector").querySelectorAll("input");
            inputSelectorArray[i].checked = false;
        }

    }
    return false;
})
// function to close the modal
document.getElementById("close-cross").addEventListener("click", function () {
    document.getElementById("pop-up").style.visibility = "hidden"
    document.getElementById("pop-up").style.opacity = "0"
    document.getElementById("window").style.top = "35%"
})

var leap = [];
//options selector display an hide
document.getElementById("selector").addEventListener("click", function (e) {

    const forNameCond = (itemName, cond) => e.path[0].checked === cond && e.path[0].name === itemName;

    //leap modul
    //display a litle circle on leap years
    if (forNameCond("leap", true)) {
        for (i = 0; i <= yEnd - yStart; i++) {
            let calculatedYear = Number(yStart) + i;
            let leapCheck = new Date(`${calculatedYear}-02-29T12:00:00`);
            leapCheck = leapCheck.toString();

            if (leapCheck.substring(4, 7) === "Feb") document.getElementById(`year${calculatedYear}`).innerHTML += `<div class="leap" title="${calculatedYear} is a leap year"></div>`;

        }

    } else if (forNameCond("leap", false)) { // stop displaying leap years circle
        for (i = 0; i <= yEnd - yStart; i++) {
            let calculatedYear = Number(yStart) + i;
            let leapCheck = new Date(`${calculatedYear}-02-29T12:00:00`);
            leapCheck = leapCheck.toString();

            if (leapCheck.substring(4, 7) === "Feb") document.getElementById(`year${calculatedYear}`).innerHTML = document.getElementById(`year${calculatedYear}`).innerHTML.replace(`<div class="leap" title="${calculatedYear} is a leap year"></div>`, "");


        }
    }
    //week-end modul

    

    if (forNameCond("week-end", true)) {
        for (i = 0; i <= yEnd - yStart; i++) {
            let x = document.getElementById(`year${Number(yStart) + i}`);
            if (x.innerHTML.substring(36, 37) != "S") {
                x.style.display = "none";
            }
        }
    } else if (forNameCond("week-end", false)) {
        for (i = 0; i <= yEnd - yStart; i++) {
            let x = document.getElementById(`year${Number(yStart) + i}`);
            if (x.innerHTML.substring(36, 37) != "S") {
                x.style.display = "block";
            }
        }
    }

    //display age modul
    if (forNameCond("age-display", true)) {

        for (i = Number(getValue("yStart")); i <= getValue("yEnd"); i++) {
            document.styleSheets[0].addRule(`#year${i}::after`, `content: "and you\'ll be ${i - Number(getValue("year"))}"`)
        }

    } else if (forNameCond("age-display", false)) {
        
        for (i = Number(getValue("yStart")); i <= getValue("yEnd"); i++) {
            document.styleSheets[0].addRule(`#year${i}::after`, 'content: "";')

        }

    }

})



