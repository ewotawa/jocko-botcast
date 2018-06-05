var jocko = [
    "Don't make a New Year's resolution to be a better person in 2016. Make a resolution to be a better person NOW.",
    "When things go bad, say, 'GOOD.' because if you can say the word, 'GOOD' ... it means you're still alive.",
    "If you take ownership ... EXTREME Ownership of your problems, you will solve those problems.",
    "Yes, discipline does start with waking up early. But that is just the beginning. You have to apply it to all things.",
    "Don't stop, don't rest, until the enemy is completely destroyed. And THEN, turn that focus inward to make yourself better ...",
    "Just remind me to never complain about ANYTHING EVER again ...",
    "STANDARDS ... And what you're going to tolerate -- Don't just think about your team. Think about yourself.",
    "If you can't control it, why are you going to worry about it?",
    "Every day, every thought, every smile, every laugh is a gift. ... And I will cherish every moment. ... AND I WILL LIVE IT.",
    "I am weak in many ways. But I don't accept that.",
    "If you think you aren't disciplined, or can't be disciplined ... It's because you haven't yet DECIDED to be disciplined.",
    "Next time you're feeling lazy, weak, soft, or emotional. ... Tell those feelings, 'You get no vote.'",
    "Questions from the Interwebs.",
    "It IS a good evening ... Because we're FREE.",
    "Remember that THE GRIND ... is how you sharpen the AXE.",
    "To me, 'aggression' is the will to win. And if it's your default mode, you WILL win.",
    "Sometimes with others, I have to compromise. But with myself, I CAN NOT compromise.",
    "If you're gonna go down, go down swinging. And more often than not, if you swing with all you've got, you won't go down at all.",
    "You want to know where to start? HERE. You want to know when to start? NOW.",
    "This temporary pain, this FIGHT, will make you stronger.",
    "Jocko white tea.",
    "A nice, healthy, steak.",
    "That being said ...",
    "Discipline equals freedom.",
    "Back in the day",
    "The dichotomy of leadership"
];

var echo = [
    "Dang.",
    "If you can function with these concepts, you're going to do good.",
    "Check.",
    "I don't really like that, when someone calls me 'boss'.",
    "Next question.",
    "The shirts have layers.",
    "onnit.com/jocko",
    "That's dope.",
    "Supplementation.",
    "EDC: Every Day Consumption",
    "Sodium in the fishtank.",
    "Jocko has a store. It's called Jocko Store. JockoStore.com",
    "The Jocko Effect is real.",
    "That's one of the good things about Jiu Jitsu: you can have different philosophies and still be successful.",
    "Small action, big reaction.",
    "Campaign against weakness.",
    "Psychological Warfare: It's an album. With tracks. Jocko tracks.",
    "True story.",
    "It doesn't take discipline to take Discipline."
];

var tweetJocko = "\"Good evening, Echo.\" @jockowillink";

var tweetEcho = "\"Good evening.\" @echocharles";


$(document).ready(function() {
    $("#getQuote").on("click",function(){
        var randJ = Math.floor( Math.random() * jocko.length );
        var randE = Math.floor( Math.random() * echo.length );
        console.log(randJ, randE);
        tweetJocko = "\"" + jocko[randJ] + "\" @jockowillink"
        tweetEcho = "\"" + echo[randE] + "\" @echocharles"
        $(".msgJocko").html(tweetJocko);
        $(".msgEcho").html(tweetEcho);
         
    });

    $("#tweetJocko").on("click", function(){
        console.log(tweetJocko);
        if (tweetJocko.length > 280) {
            alert('This quote is longer than 280 characters.');
        } else {
            var tweetJLink = 'http://twitter.com/home?status=' + encodeURIComponent(tweetJocko);
            window.open(tweetJLink, '_blank');
        };
    });

    $("#tweetEcho").on("click", function(){
        console.log(tweetEcho);
        if (tweetEcho.length > 140) {
            alert('This quote is longer than 140 characters.');
        } else {
            var tweetELink = 'http://twitter.com/home?status=' + encodeURIComponent(tweetEcho);
            window.open(tweetELink, '_blank');
        };
    });

    $(window).resize(function() {
        if ($(window).width() < 408) {
            $('#responsive').removeClass('btn-group');
            $('#responsive').addClass('btn-group-vertical');
        } else {
            $('#responsive').addClass('btn-group');
            $('#responsive').removeClass('btn-group-vertical');
        }
    });
});


/* 
https://stackoverflow.com/questions/21800023/twitter-bootrap-3-how-can-i-switch-from-a-horizontal-button-group-to-vertical
https://debugmode.net/2012/06/27/how-to-post-a-tweet-using-javascript/
*/