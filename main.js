const prompt = require('prompt-sync')
({sigint: true});

console.log("pick combine or deconstuct");

let colortype = Number(prompt("enter the number of choice !=combine 2-deconstruct:"));

let Color
let Color1
let Color2

if (Colortype === 1){
console.log("pick the colors you like to combine" );
color1 = Number(prompt("first color: 1-red 2-blue 3- yellow: >"));
color2 = Number(prompt("second color: 1-red 2-blue 3- yellow: >"));
if (Color1 === 1 && Color2 === 1){
 console.log("your Color is red ");
} else if (Color1 === 2 && Color2 === 2);
    console.log("your Color is blue");
} else if(Color1 === 3 && Color2 ===3);
    console.log("your Color is yellow")
} else if ((Color1 === 1 && Color2 === 2) || (Color1 === 2 && Color2 === 1));
    console.log("your Color is purple")
} else if ((Color1 === 1 && Color2 === 3) || (Color1 === 3 && Color2 === 1));
    console.log(("your Color is orange"))
} else if ((Color1 === 2 && Color2 === 3) || (Color1 === 3 && Color2 === 2);
    console.log ("your Color is green");
} else {
    console.log ("error entry invalid");
}

