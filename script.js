// let color = "yellow"
// if (color == "red") {
//     console.log("stop here")
// }
// if (color == "yellow") {
//     console.log("slow down")
// }
// if (color == "green") {
//     console.log("start going")
// }
// converting it to if if else and else for understanding if else and else alse
// let color = "blue";
// if (color==="red") {
//     console.log ("stop here");

// }
// else if (color === "yellow"){
//     console.log ("slow down");
// }else if (color==="green"){
//     console.log("go")
// }
// else{
//     console.log("traffic light is broken")
// }


// now i want to make it in switch statement
let color = "green";
switch (color) {
    case "red":
        console.log("stop here")
        break;
        case "yellow":
        console.log("slow down here")
        break;
        case "green":
        console.log("start going here")
        break;

    default:
        console.log("traffic light broken")
        break;
}