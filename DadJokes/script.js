let dadJokes = [
    "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
    "I used to play piano by ear, but now I use my hands.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "I wouldn't buy anything with velcro. It's a total rip-off.",
    "What do you call a fish wearing a crown? King mackerel!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I'm friends with 25 letters of the alphabet. I don't know why... U and I just keep drifting apart.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "How does a penguin build its house? Igloos it together!",
    "I asked my dad if he could help me with my math homework. He said, 'Math? I aced that when I was your age.' I replied, 'Dad, that's the problem!'",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "What did the grape say when it got stepped on? Nothing, but it let out a little wine.",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
];

let result = document.getElementById('joke');
let generateBtn = document.getElementById('getJoke');


function tellMeAJoke() {
    let index = Math.floor(Math.random()*dadJokes.length);
    result.innerText = dadJokes[index];
}
generateBtn.addEventListener('click',tellMeAJoke);