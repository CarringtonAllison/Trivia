// function getQuestions() {
//     var queryURL = "https://opentdb.com/api.php?amount=" + 1 + "&category=11&difficulty=easy&type=multiple";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         for (var i = 0; i < response.results.length; i++) {
//             var IncorrectAnswersGrouped = Object.values(response.results[i].incorrect_answers)
//             var answersArray = [...IncorrectAnswersGrouped, response.results[i].correct_answer];
//             $("#trivia").append("<li>" + response.results[i].question + "</li>")
//             var $buttonDiv = $("<div>")
//             for (var j = 0; j < answersArray.length; j++){
//                 $buttonDiv.append("<button>" + answersArray[j] + "</button>")
//                 console.log(answersArray)
//                 $("#trivia").append($buttonDiv)
//             }
//             // + response.results[i].correct_answer + response.results[i].incorrect_answers[0,1,2] + "</li>"
//             console.log(response)
//         }
//     });
// }
// $(document).ready(function () {
//     getQuestions()
// });






// // var page = 0;
// // var loss = 0; 
// // questionIndex = 0;
// // var trivia = [

// //     {
// //         question: "what color is the sky?",
// //         guesses: {
// //             a: "Blue",
// //             b: "Red",
// //             c: "Pink",
// //             d: "Yellow"
// //         },
// //         answer: "a"
// //     },
// //      {
// //         question: "what is my last name?",
// //         guesses: {
// //             a: "Rain",
// //             b: "Robin",
// //             c: "Allison",
// //             d: "Batman"
// //         },
// //         answer: "c"
// //     },
// //      {
// //         question: "What is my favorite sport?",
// //         guesses: {
// //             a: "Football",
// //             b: "Hockey",
// //             c: "Basketball",
// //             d: "Baseball"
// //         },
// //         answer: "a"
// //     },
// //     {
// //         question: "whats my favorite type of music?",
// //         guesses: {
// //             a: "Rap",
// //             b: "Jazz",
// //             c: "R&B",
// //             d: "Country"
// //         },
// //         answer: "d"
// //     },
// // ];

// // for (var i = 0; i < trivia.length(); i++){

// // }



// // // initial start for the game 
// // $("#timer").text(timer(30));
// // $("#question").text(trivia.first.question)
// // $("#a").text(trivia.first.guesses.a)
// // $("#b").text(trivia.first.guesses.b)
// // $("#c").text(trivia.first.guesses.c)
// // $("#d").text(trivia.first.guesses.d)

// // $("#next").on("click", function(){
// //     questionIndex++
// //     console.log(questionIndex)
// // })
// // //  once the first answer is clicked it moves thru the game 
// // $(".choice").on("click", function () {
// //     //stop the timer
// //     stop();
// //     console.log(this.id)

// //     //first page
// //     if (page === 0) {
// //         // start and display timer 
// //         $("#timer").text(timer(30));

// //         // if correct answer is selected 
// //         if (this.id === trivia.first.answer) {
// //             page++;
// //             console.log("winning");

// //             //next set of questions
// //             $("#question").text(trivia.second.question);
// //             $("#a").text(trivia.second.guesses.a);
// //             $("#b").text(trivia.second.guesses.b);
// //             $("#c").text(trivia.second.guesses.c);
// //             $("#d").text(trivia.second.guesses.d);
// //             //stop the interval 
// //             stop();

// //         }else {

// //             loss++
// //             $("#quiz").html("<h2>'You Lose' <h2>") 

// //             setTimeout(function(){
// //                 $("#question").text(trivia.second.question);
// //                     $("#a").text(trivia.second.guesses.a);
// //                     $("#b").text(trivia.second.guesses.b);
// //                     $("#c").text(trivia.second.guesses.c);
// //                     $("#d").text(trivia.second.guesses.d);
// //                 },1000) 


// //                 stop();

// //             }

// //         }
// //          ;

// //     if (page === 1) {
// //         $("#timer").text(timer(30));
// //         if (this.id === trivia.second.answer) {
// //             page++;
// //             console.log("winning");
// //             $("#question").text(trivia.third.question);
// //             $("#a").text(trivia.third.guesses.a);
// //             $("#b").text(trivia.third.guesses.b);
// //             $("#c").text(trivia.third.guesses.c);
// //             $("#d").text(trivia.third.guesses.d);
// //             stop();
// //         }
// //     }
// //     if (page === 2) {
// //         $("#timer").text(timer(30));
// //         if (this.id === trivia.third.answer) {
// //             page++;
// //             console.log("winning");
// //             $("#question").text(trivia.fourth.question);
// //             $("#a").text(trivia.fourth.guesses.a);
// //             $("#b").text(trivia.fourth.guesses.b);
// //             $("#c").text(trivia.fourth.guesses.c);
// //             $("#d").text(trivia.fourth.guesses.d);
// //             stop();
// //         }
// //     }
// //     if (page === 3) {
// //         $("#timer").text(timer(30));
// //         if (this.id === trivia.fourth.answer) {
// //             page = 0;
// //             console.log("winning")

// //         }
// //         stop();
// //     }


// // });

















// // // function for setting a timer just enter the time for the "num" parameter
// // var intervalId;
// // function timer(num) {

// //     function run() {
// //         clearInterval(intervalId);
// //         intervalId = setInterval(decrement, 1000);
// //     }
// //     function decrement() {
// //         num--;
// //         $("#timer").html("<h2>" + num + "</h2>");

// //         if (num === 0) {
// //             stop();
// //             alert("timeup");
// //         }
// //     }
// //     run()
// // }
// // function stop() {
// //     clearInterval(intervalId);
// // }

