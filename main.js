// Dictionary of numbers to words
let dict = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
}

let parseElement = function (num, dict) {
    let str = "";
    /* Argument into single-digit numbers 
    that are parsed & added to 'str' */
    num.split("").map(x => {
        let y = parseInt(x, 10);
        str += dict[y];
    });
    return str;
}

let prntStr = "";
// Parse command line arguments
for (let i = 2; i <= process.argv.length; ++i) {
    prntStr += parseElement(process.argv[i], dict);
    // Don't add comma to last element
    if (i === process.argv.length - 1) { break; }
    prntStr += ",";   
}

console.log(prntStr);


