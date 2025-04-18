import { createInterface } from 'readline';

// github @sandeep-codes-7
// instagram @simply.sandeep_

const read = createInterface({
    input: process.stdin,
    output: process.stdout
});

var user = [];
let countMap = {};
let maxCount = 0;
let mostRepeated;

const ques = {
    0:"What's your ideal way to spend a Saturday?",
    1:"What's your favorite snack?",
    2:"What do you do when someone texts “k”?",
    3:"What animal do you relate to the most?",
    4:"Your dream job?",
}

const ans = {
    0:{
        1:"1. Sleeping like a burrito in bed.",
        2:"2. Dancing in your room like no one's watching (but your cat is).",
        3:"3. Plotting to become a potato chip billionaire.",
        4:"4. Binge-watching documentaries to feel smart, then falling asleep 15 mins in."
    },
    1:{
        1:"1. Anything that doesn't judge me back.",
        2:"2. Pickles dipped in peanut butter (don't knock it till you try it).",
        3:"3. Air. I forgot to eat again.",
        4:"4. Chocolate. It understands me."
    },
    2:{
        1:"1. Start an existential crisis.",
        2:"2. Reply with “k.” and assert dominance.",
        3:"3. Text them back in Morse code.",
        4:"4. Cry softly while eating chips."
    },
    3:{
        1:"1. Sloth — maximum chill, zero regrets.",
        2:"2. Cat — I do what I want, human.",
        3:"3. Squirrel — too much energy, not enough direction.",
        4:"4. Penguin — clumsy, adorable, and overdressed."
    },
    4:{
        1:"1. Official nap tester.",
        2:"2. Meme curator.",
        3:"3. Ice cream flavor inventor.",
        4:"4. Motivational speaker for tired houseplants."
    },
}

function ask(){
    return new Promise(resolve => read.question("enter option 😉: ",resolve));
}

async function main() {
    console.log(">>>>Personality Quiz<<<<\n");

    for(let i in ques){
        console.log(ques[i],"\n");
        for(let j in ans[i]){
            console.log(ans[i][j]);
        }
        const b = await ask();
        let c = parseInt(b);
        if(isNaN(b)||b<1||b>5){
            console.log("enter valid option 😕!, try again...");
        }
        else{
            user.push(c);
        }
        console.log("\n\n");
    }

    read.close();

    //console.log(user);

    for (let num of user) {
        countMap[num] = (countMap[num] || 0) + 1;
      
        if (countMap[num] > maxCount) {
          maxCount = countMap[num];
          mostRepeated = num;
        }
    }

    console.log("And, Here's your personality... ");

    if(mostRepeated==1){
        console.log("The Sleepy Genius 😴");
    }
    else if(mostRepeated==2){
        console.log("The Quirky Rebel 😼");
    }
    else if(mostRepeated==3){
        console.log("The Overthinking Squirrel 🐿️");
    }
    else if(mostRepeated==4){
        console.log("The Soft Chaos Bean 🫘");
    }
    else{
        console.log("Mr Strange 😵‍💫");
    }

}
main();