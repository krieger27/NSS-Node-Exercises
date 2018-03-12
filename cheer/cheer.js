//Node Cheer Practicing Commenting Code

const myFirstName = process.argv[2]; //returns the first 'user supplied argument
const myLastName = process.argv[3];
const person = {
    //Object Literal Shorthand
    myFirstName,
    myLastName,
    job: "student"
};

//destructure assignment and fat arrow
const nodeCheer = ({ myFirstName: first, myLastName: second }) => {
    return new Promise((resolve, reject) => {
        if (first && second) {
            let name = `${first} ${second}`.toUpperCase(); //using string temperate literals and passing in method to make uppercase
            let nameArr = [...first, ...second] //spread operator
            let i = nameArr.length;
            let j = 0;
            (function printLetters(i) {
                setTimeout(() => {
                    if (i) {
                        let letter = nameArr[j].toUpperCase();
                        let conj ="aeiofhlmnrsx".includes(letter.toLowerCase())
                            ? "an"
                            : "a";
                        console.log(`Gimmie ${conj} ${letter}!`);
                        i--;
                        j++;
                        //Recursively call the function from insdie itself so it runs over and over until the "if" does not resolve to true
                        printLetters(i);
                    } else {
                        console.log("What's that spell?");
                        resolve(name);
                    }
                    }, 1000);
                })(i);
            }else {
                reject("enter a first and a last name")
            }
            });
        };

        nodeCheer(person)
        .then(name => {
            
        })

