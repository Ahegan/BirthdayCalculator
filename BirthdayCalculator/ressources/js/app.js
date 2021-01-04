var input = document.getElementById("dataUser").getElementsByTagName("input");
var empty;

//define error messages for empties inputs
document.getElementById("dataUser").addEventListener("input", function () {
    empty = 0;
    for (i = 1; i < input.length; i++) {
        if (input[i - 1].value == "") {
            empty = i;
            document.getElementById(`span${i}`).style.display = "initial";
        }
        else {
            document.getElementById(`span${i}`).style.display = "none";
        }

    }

})

var month;
var day;
var yStart;
var yEnd;

document.getElementById("dataUser").addEventListener("submit", function (e) {
    e.preventDefault();
    result.innerHTML = "";

    if (empty == 0) {
        month = input.namedItem("month").value;
        day = input.namedItem("day").value;
        yStart = input.namedItem("yStart").value;
        yEnd = input.namedItem("yEnd").value;
        let x = new Date(`${yStart}-${month}-${day}T12:00:00`);

        if (Number.isInteger(Number(month)) && Number.isInteger(Number(day)) && Number.isInteger(Number(yStart)) && Number.isInteger(Number(yEnd)) && x != "Invalid Date")  {
            let y;
            let result = document.getElementById("result");

            for (i = yStart; i <= yEnd; i++) {

                x = new Date(`${i}-${month}-${day}T12:00:00`);
                x = x.toString();

                if (x.substring(0, 3) == "Mon") {
                    y = "Monday"
                }
                if (x.substring(0, 3) == "Tue") {
                    y = "Tuesday"
                }
                if (x.substring(0, 3) == "Wen") {
                    y = "Wednsday"
                }
                if (x.substring(0, 3) == "Thu") {
                    y = "Thursday"
                }
                if (x.substring(0, 3) == "Fri") {
                    y = "Friday"
                }
                if (x.substring(0, 3) == "Sat") {
                    y = "Saturday"
                }
                if (x.substring(0, 3) == "Sun") {
                    y = "Sunday"
                }
                result.innerHTML += `In ${i}, your birthday will be on a ${y} <br>`;


            }
        }
        else {
            document.getElementById("pop-up").style.display = "initial"
        }


    }
})

function closepop() {
    document.getElementById("pop-up").style.display = "none"
}
