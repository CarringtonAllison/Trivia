function begin() {

    var time = 45    ;
    var timeInterval;
    var score = 0;
    var total = 10;
    var questions = [
        {
            question: `Which movie contains the quote "Say hello to my little friend"?`,
            answers: ["The Lion King", "Fight Club", "Scarface", "Avengers"],
            answerIndex: "Scarface"
        },
        {
            question: `Which actress was part of the movie "Suicide Squad"?`,
            answers: ["Margot Robbie", "Scarlett Johansson", "Oprah", "Jessica Alba"],
            answerIndex: "Margot Robbie"
        },
        {
            question: "What was the first monster to appear alongside Godzilla?",
            answers: ["King Kong", "Aguirus", "T-Rex", "Godzilla Jr."],
            answerIndex: "Aguirus"
        },
        {
            question: "Which of these movies did Jeff Bridges not star in?",
            answers: ["Tron: Legacy", "The Giver", "True Grit", "The Hateful Eight"],
            answerIndex: "The Hateful Eight"
        },
        {
            question: "Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-III?",
            answers: ["Alec Guinness", "Hayden Christensen", "Liam Neeson", "Ewan McGregor"],
            answerIndex: "Ewan McGregor"
        },
        {
            question: "Who is the frontman of the band 30 Seconds to Mars?",
            answers: ["Gerard Way", "Matthew Bellamy", "Jared Leto", "Mike Shinoda"],
            answerIndex: "Jared Leto"
        },
        {
            question: "Which Twitch streamer is the vocalist for Red Vox?",
            answers: ["The8BitDrummer", "Vinesauce", "LIRIK", "Sodapoppin"],
            answerIndex: "Vinesauce"
        },
        {
            question: "Who is the lead singer of Pearl Jam?",
            answers: ["Ozzy Osbourne", "Stone Gossard", "Kurt Cobain", "Eddie Vedder"],
            answerIndex: "Eddie Vedder"
        },
        {
            question: "Ringo Starr of The Beatles mainly played what instrument?",
            answers: ["Drums", "Bass", "Guitar", "Piano"],
            answerIndex: "Drums"
        },
        {
            question: "According to the American rapper Nelly, what should you do when its hot in here?",
            answers: ["Take a cool shower", "Take off all your clothes", "Drink some water", "Go skinny dipping"],
            answerIndex: "Take off all your clothes"
        },
    ];
    $("#time").addClass("hidden");
    renderQuestions();
    
    
    $("#start").on("click", function () {
        $("#time").removeClass("hidden")
        $("#timer").text(time);
        $("#intro").addClass("hidden");
        $("#trivia").removeClass("hidden");

        timeInterval = setInterval(function () {
            time--;
            if (time === 0) {
                clearInterval(timeInterval);
                checkTrivia();
                $("#trivia").addClass("hidden");
                $newDiv = $("<div id= 'restart'>");
                $("#final").append("<h1> Score: " + score + "/" + total + "</h1>", $newDiv);
                // $("#trivia").append($newDiv)
                $("#restart").html("<button id='reset'>RESTART</button>")
                $("#reset").on("click", function(){
                    $("#final").addClass("hidden")
                    end();

                })



            }
            $("#timer").text(time);
        }, 1000);
    });

    function renderQuestions() {

        questions.forEach(function (question, index) {
            // console.log(questions[index])
            var $form = $("<form>");
            var $question = $("<h3>").text(question.question);

            $form.append($question);

            question.answers.forEach(function (answer, i) {
                var $input = $('<input type="radio">');
                $input.attr("value", answer);
                $input.attr("name", index);
                $form.append($input);
                $form.append(answer);
            });

            $("#questions").append($form);
        });
    }

    function checkTrivia() {
        var $forms = $("form");
        $forms.each(function (i, elem) {
            $(elem).find("input:checked").each(function (i, elem) {
                answer = (elem.getAttribute("value"));
                // console.log(answer)
                // console.log(questions[0].answerIndex)
                for (var i = 0; i < questions.length; i++) {

                    if (answer === questions[i].answerIndex) {
                        console.log("winning")
                        score++;
                        console.log(score)
                    }
                }
            });
        })
    }
}
function end(){
    $("form").reset();  
    $("#trivia").removeClass("hidden");
    begin();
}
begin()
