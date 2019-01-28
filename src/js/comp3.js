
let moment = require('moment');

export default function clickme(){
    console.log("Click Me!!!");
}


let opr1 = function(){
    console.log("Operation 1");
}

let opr2 = function(){
    console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
    console.log("Operation 1");
}


export {opr1, opr2}
