// async function data(){
//     const response =await fetch("https://jsonplacholder.typicode.com/users");
//     console.log(response.status);
//     const std=await response.json();
//     return std;
// }
// data().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// data();
// event looping for async function..
const f1=()=>{
    console.log("f1");
};
const f2=()=>{
    console.log("f2");
};
const f3=function main(){
    console.log("main function");
    setTimeout(f1,1000);
    setTimeout(f3,2000);
    new Promise((resolve,reject)=>{
        resolve("i am promise");
    }).then((result)=>{
        console.log(result);
    })

    
}
// f2();
//f3();

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("greet", (name) => {
    console.log(`hello ${name}`);
});

event.on("exit", () => {
    console.log("exits my custom event..");
});

event.emit("greet", "cse-25");
event.emit("exit");