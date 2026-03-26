
function hideImage()
{
    const myImage = document.getElementById("test");
    myImage.style.display = "none";
}
function showImage()
{
    const myImage = document.getElementById("test");
    myImage.style.display = "block";
}


function hideImage()
{
    const myImage = document.getElementById("test");
    myImage.style.display = "none";
}
function showImage()
{
    const myImage = document.getElementById("test");
    myImage.style.display = "block";
}

function checkQuiz() {
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');

    if (q1 && q1.value === "b") {
        score++;
    }

    document.getElementById("result").innerText =
        "You scored " + score + " out of 1";
}

function showSection(sectionId) {

    let sections = document.querySelectorAll(".topic-section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

// Show overview by default
window.onload = function() {
    showSection("overview");
}


function checkSpeedQuiz() {

    let score = 0;

    const correctAnswers = {
        q1: "50",
        q2: "8",
        q3: "80",
        q4: "60",
        q5: "120"
    };

    for (let question in correctAnswers) {

        const selected = document.querySelector(`input[name="${question}"]:checked`);
        const questionDiv = document.querySelector(`input[name="${question}"]`).closest(".quiz-question");

        if (!selected) {
            continue;
        }

        if (selected.value === correctAnswers[question]) {
            score++;
            questionDiv.style.border = "2px solid green";
        } else {
            questionDiv.style.border = "2px solid red";
        }
    }

    document.getElementById("quiz-result").innerHTML =
        "You scored " + score + "/5";
}

function checkDensityQuiz() {

    let score = 0;

    const correctAnswers = {
        dq1: "5",
        dq2: "20",
        dq3: "5",
        dq4: "4",
        dq5: "3"
    };

    for (let question in correctAnswers) {

        const selected = document.querySelector(`input[name="${question}"]:checked`);
        const questionDiv = document.querySelector(`input[name="${question}"]`).closest(".quiz-question");

        if (!selected) {
            continue;
        }

        if (selected.value === correctAnswers[question]) {
            score++;
            questionDiv.style.border = "2px solid green";
        } else {
            questionDiv.style.border = "2px solid red";
        }
    }

    document.getElementById("density-result").innerHTML =
        "You scored " + score + "/5";
}


function checkPressureQuiz() {

    let score = 0;

    const correctAnswers = {
        pq1: "5",
        pq2: "6",
        pq3: "3",
        pq4: "10",
        pq5: "3"
    };

    for (let question in correctAnswers) {

        const selected = document.querySelector(`input[name="${question}"]:checked`);
        const questionDiv = document.querySelector(`input[name="${question}"]`).closest(".quiz-question");

        if (!selected) {
            continue;
        }

        if (selected.value === correctAnswers[question]) {
            score++;
            questionDiv.style.border = "2px solid green";
        } else {
            questionDiv.style.border = "2px solid red";
        }
    }

    document.getElementById("pressure-result").innerHTML =
        "You scored " + score + "/5";
}

function showcontentSection(sectionId){
let sections =
document.querySelectorAll(".content-section");

sections.forEach(function(section){
section.style.display = "none";
});

document.getElementById(sectionId)
.style.display = "block";

}
function checkProbQuiz(){

let ans = [2.1,4.9,0.49,1,0.4,2,3,4,5,6]

let score = 0

for(let i=1;i<=10;i++){

let v = document.getElementById("q"+i).value

if(Number(v) === ans[i-1]){

score++

}

}

document.getElementById("score").innerText =
"Score: " + score + "/10"

}