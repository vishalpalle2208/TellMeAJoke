const jokes = [
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What's the best time to go to the dentist? Tooth-hurty!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "How do you organize a space party? You just planet!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
];
let TellMeAJoke = () => {
    const index = Math.floor(Math.random() * jokes.length);
    return jokes[index];
}

const MakeMeLaugh = TellMeAJoke();
console.log(MakeMeLaugh);