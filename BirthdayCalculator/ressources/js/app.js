var input = document.getElementById("dataUser").getElementsByTagName("input");
var empty;

//define error messages for empties inputs
document.getElementById("dataUser").addEventListener("input", function () {
    empty = 0;
    for (i = 1; i < input.length; i++) {
        if (input[i - 1].value === "") {
            empty = i;
            document.getElementById(`span${i}`).style.opacity = "1";
        }
        else {
            document.getElementById(`span${i}`).style.opacity = "0";
        }

    }

})

var month;
var day;
var yStart;
var yEnd;
var datesArray = [];
//calculate and display the dates
document.getElementById("dataUser").addEventListener("submit", function (e) {
    e.preventDefault();
    result.innerHTML = "";
    var verifStart ="";
    var verifEnd = "";
    datesArray = [];

    if (empty === 0) {
        month = input.namedItem("month").value;
        day = input.namedItem("day").value;
        yStart = input.namedItem("yStart").value;
        yEnd = input.namedItem("yEnd").value;
        verifStart = new Date(`${yStart}-${month}-${day}T12:00:00`);
        verifEnd = new Date(`${yEnd}-${month}-${day}T12:00:00`);
        let currentDate;
        if (verifStart != "Invalid Date" && verifEnd != "Invalid Date" && Number(yEnd)-Number(yStart) < 2500) {
            let y;
            let result = document.getElementById("result");

            for (i = yStart; i <= yEnd; i++) {

                currentDate = new Date(`${i}-${month}-${day}T12:00:00`);
                currentDate = currentDate.toString();
                datesArray.push(currentDate);
                if (currentDate.substring(0, 3) === "Mon") {
                    y = "Monday"
                }
                if (currentDate.substring(0, 3) === "Tue") {
                    y = "Tuesday"
                }
                if (currentDate.substring(0, 3) === "Wen") {
                    y = "Wednsday"
                }
                if (currentDate.substring(0, 3) === "Thu") {
                    y = "Thursday"
                }
                if (currentDate.substring(0, 3) === "Fri") {
                    y = "Friday"
                }
                if (currentDate.substring(0, 3) === "Sat") {
                    y = "Saturday"
                }
                if (currentDate.substring(0, 3) === "Sun") {
                    y = "Sunday"
                }
                result.innerHTML += `In ${i}, your birthday will be on a ${y} <br>`;


            }
        }
        else if (Number(yEnd)-Number(yStart) > 2500){
            document.getElementById("pop-up").style.display = "initial"
            document.getElementById("alert-message").innerHTML = "Too many years to calculate"
        }
        else if (verifStart == "Invalid Date" ||verifEnd != "Invalid Date") {
            document.getElementById("pop-up").style.display = "initial"
            document.getElementById("alert-message").innerHTML = "Please enter numeric value"
        }



    }
    return false;
})
// function to close the pop-up
document.getElementById("close-cross").addEventListener("click", function () {
    document.getElementById("pop-up").style.display = "none"
})

var leap = [];
//options selector display an hide
document.getElementById("selector").addEventListener("click", function (e) {
    //highlights leaps years
    if (e.path[0].checked === true && e.path[0].name === "leap") {

        for (i=0; i <= datesArray.length; i++) {
            /* console.log(datesArray[i].substring(4, 7));
            console.log(yStart) */
            let x = i + Number(yStart);
            let y = new Date(`${x}-02-29T12:00:00`)
            y = y.toString();
            if (y.substring(4, 7) === "Feb") {

            }
        }

    }
    /* console.log(e.path[0].checked);
    console.log(e.path[0]); */
})

// pour année bisecurrentDatetile verifier que le 29 du mois de février apparît en février et pas en mars
