var page = 0;
var trivia = {
    first: {
        question: "what color is the sky?",
        guesses: {
            a: "Blue",
            b: "Red",
            c: "Pink",
            d: "Yellow"
        },
        answer: "a"
    },
    second: {
        question: "what is my last name?",
        guesses: {
            a: "Rain",
            b: "Robin",
            c: "Allison",
            d: "Batman"
        },
        answer: "c"
    },
    third: {
        question: "What is my favorite sport?",
        guesses: {
            a: "Football",
            b: "Hockey",
            c: "Basketball",
            d: "Baseball"
        },
        answer: "a"
    },
    fourth: {
        question: "whats my favorite type of music?",
        guesses: {
            a: "Rap",
            b: "Jazz",
            c: "R&B",
            d: "Country"
        },
        answer: "d"
    },
};




$("#timer").text(timer(30));
$("#question").text(trivia.first.question)
$("#a").text(trivia.first.guesses.a)
$("#b").text(trivia.first.guesses.b)
$("#c").text(trivia.first.guesses.c)
$("#d").text(trivia.first.guesses.d)

$(".choice").on("click", function () {
    stop();
    console.log(this.id)

    if (page === 0) {
        $("#timer").text(timer(30));
        if (this.id === trivia.first.answer) {
            page++;
            console.log("winning");
            $("#question").text(trivia.second.question);
            $("#a").text(trivia.second.guesses.a);
            $("#b").text(trivia.second.guesses.b);
            $("#c").text(trivia.second.guesses.c);
            $("#d").text(trivia.second.guesses.d);
            stop();

        };
    }
    if (page === 1) {
        $("#timer").text(timer(30));
        if (this.id === trivia.second.answer) {
            page++;
            console.log("winning");
            $("#question").text(trivia.third.question);
            $("#a").text(trivia.third.guesses.a);
            $("#b").text(trivia.third.guesses.b);
            $("#c").text(trivia.third.guesses.c);
            $("#d").text(trivia.third.guesses.d);
            stop();
        }
    }
    if (page === 2) {
        $("#timer").text(timer(30));
        if (this.id === trivia.third.answer) {
            page++;
            console.log("winning");
            $("#question").text(trivia.fourth.question);
            $("#a").text(trivia.fourth.guesses.a);
            $("#b").text(trivia.fourth.guesses.b);
            $("#c").text(trivia.fourth.guesses.c);
            $("#d").text(trivia.fourth.guesses.d);
            stop();
        }
    }
    if (page === 3) {
        $("#timer").text(timer(30));
        if (this.id === trivia.fourth.answer) {
            page = 0;
            console.log("winning")
            
        }
        stop();
    }


});

















// function for setting a timer just enter the time for the "num" parameter
var intervalId;
function timer(num) {

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        num--;
        $("#timer").html("<h2>" + num + "</h2>");

        if (num === 0) {
            stop();
            alert("timeup");
        }
    }
    run()
}
function stop() {
    clearInterval(intervalId);
}

