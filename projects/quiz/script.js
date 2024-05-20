const answers1 = ["אגד","דן ","מטרופולין ","רכבת ישראל"];
const answer1 = ["אגד"];
const answers2 = ["1","2","3 ","4"];
const answers3 = [];
const answers4 = [];
const answers5 = [];
const answers6 = [];
const answers7 =[];
const answers8 =[];
const answers9 =[];
const answers10 =[];

const question1=["?מה היא חברת התחבורה הכי גדולה בארץ"];
const question2=["nv nh"];
const question3 = [];
const question4 = [];
const question5 = [];
const question6 = [];
const question7 = [];
const question8 = [];
const question9 = [];
const question10 = [];

const cq1 = document.getElementById("question");
const ca1 = document.getElementById("answer1");
const ca2 = document.getElementById("answer2");
const ca3 = document.getElementById("answer3");
const ca4 = document.getElementById("answer4");


function start() {
    cq1.innerHTML = question1[0];
    ca1.innerHTML = answers1[0];
    ca2.innerHTML = answers1[1];
    ca3.innerHTML = answers1[2];
    ca4.innerHTML = answers1[3];
    document.getElementById("start").style.display="none";
return  };


function answer() {
    if (ca1.innerHTML === answers1[0]) {
            alert("correct");
            next1();
    // } else if (ca1.innerHTML === answers2[3]) {
    //          alert("correct");
    //          next2();
    // } else if (ca1.innerHTML === answers3[2]) {
    //         alert("correct");
    //          next3();
    // } else if (ca1.innerHTML === answers4[3]) {
    //         alert("correct");
    //          next4();
    // } else if (ca1.innerHTML === answers5[2]) {
    //         alert("correct");
    //          next5();
    // } else if (ca1.innerHTML === answers6[3]) {
    //         alert("correct");
    //          next6();
    // } else if (ca1.innerHTML === answers7[3]) {
    //         alert("correct");
    //          next7();
    // } else if (ca1.innerHTML === answers8[3]) {
    //         alert("correct");
    //          next8();
    // } else if (ca1.innerHTML === answers9[3]) {
    //         alert("correct");
    //          next9();
    } else {
        start();
        alert("Wrong answer try again");
    };
    return  };

 





// function next1() {
//     cq1.innerHTML = question2[0];
//     ca1.innerHTML = answers2[0];
//     ca2.innerHTML = answers2[1];
//     ca3.innerHTML = answers2[2];
//     ca4.innerHTML = answers2[3];
//     document.getElementById("start").style.display="none";
//     return  };
// function next2() {
//     cq1.innerHTML= question3[0];
//     ca1.innerHTML = answers3[0];
//     ca2.innerHTML = answers3[1];
//     ca3.innerHTML = answers3[2];
//     ca4.innerHTML = answers3[3];
//     document.getElementById("start").style.display="none";
//     return };
// function next3() {
//     cq1.innerHTML= question4[0];
//     ca1.innerHTML = answers4[0];
//     ca2.innerHTML = answers4[1];
//     ca3.innerHTML = answers4[2];
//     ca4.innerHTML = answers4[3];
//     document.getElementById("start").style.display="none";
//     return };
// function next4() {
//     cq1.innerHTML = question5[0]
//     ca1.innerHTML = answers5[0];
//     ca2.innerHTML = answers5[1];
//     ca3.innerHTML = answers5[2];
//     ca4.innerHTML = answers5[3];
//     document.getElementById("start").style.display="none";
//     return };
// function next5() {
//     cq1.innerHTML = question6[0]
//     ca1.innerHTML = answers6[0];
//     ca2.innerHTML = answers6[1];
//     ca3.innerHTML = answers6[2];
//     ca4.innerHTML = answers6[3];
//     document.getElementById("start").style.display="none";
//     return };
// function next6() {
//     cq1.innerHTML = question7[0]
//     ca1.innerHTML = answers7[0];
//     ca2.innerHTML = answers7[1];
//     ca3.innerHTML = answers7[2];
//     ca4.innerHTML = answers7[3];
//     document.getElementById("start").style.display="none";
//     return };
//     function next7() {
//         cq1.innerHTML = question8[0]
//         ca1.innerHTML = answers8[0];
//         ca2.innerHTML = answers8[1];
//         ca3.innerHTML = answers8[2];
//         ca4.innerHTML = answers8[3];
//         document.getElementById("start").style.display="none";
//         return };
//     function next8() {
//         cq1.innerHTML = question9[0]
//         ca1.innerHTML = answers9[0];
//         ca2.innerHTML = answers9[1];
//         ca3.innerHTML = answers9[2];
//         ca4.innerHTML = answers9[3];
//         document.getElementById("start").style.display="none";
//         return };
//     function next9() {
//         cq1.innerHTML = question10[0]
//         ca1.innerHTML = answers10[0];
//         ca2.innerHTML = answers10[1];
//         ca3.innerHTML = answers10[2];
//         ca4.innerHTML = answers10[3];
//         document.getElementById("start").style.display="none";
//         return };



