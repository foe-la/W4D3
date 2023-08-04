// Part I: HTML & CSS
// Answer: 2/3

//Part II: JavaScript Reps
for(let i =1; i<=20; i++) {;
console.log(i);
}
//GET EVEN
for(let i =0; i<=200; i++){
    if(i % 2 == 0) {
        console.log(i + " is even")
    }
}
//FIZZ BUZZ
for(let i=1; i<=100; i++){
    if(i % 3==0 && i % 5 == 0){
        console.log("Fizzbuzz")
    }if(i % 3 == 0){
        console.log('Fizz')
    }if(i % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}
//WILD WILD LIFE
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]=plantee[2]+=1
console.log(plantee[2])

wolfy[3] ="Gotham City"
console.log(wolfy[3])

dart.push("Hawkins")
console.log(dart)

wolfy[0] = "Gameboy"
console.log(wolfy)

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for(let ninjaTurtle of ninjaTurtles) {
    console.log(ninjaTurtle.toUpperCase())
}

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf("Titantic"))
favMovies.sort();
console.log(favMovies)
favMovies.pop();
favMovies.push("Guardians of the Galaxy")
favMovies.reverse();
favMovies.shift();
favMovies.unshift("Meet the Browns");
console.log(favMovies.indexOf("Django Unchained"))
favMovies.splice(favMovies.indexOf("Django Unchained"),1, "Avatar")

const fHalf = favMovies.slice(favMovies.length/2)
console.log(fHalf);
console.log(favMovies.indexOf("Jaws"))

console.log(favMovies);

// Where is WALDO
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1)
whereIsWaldo[1][2] = "No One"
// whereIsWaldo[0][0][1][1]
console.log(whereIsWaldo[2][1][1])

// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint 1
// Hint 2
// Hint 3
// Hint 4
// Hint 5
// Hint 6

for(let i=1; i<=20; i++) {
    if(i % 2 == 0) {
        console.log(i + "...human...why you taking pictures of me?..." || "...the catnip made me do it..." || "...why does the red dot always get away...")
    }else{
        console.log(i)
    }
}
console.log(Math.random())
// Find the Median
// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log(nums.sort()[Math.floor(nums.length/2)])

// Expected output:
// => 15
