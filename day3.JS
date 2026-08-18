// // PROMISES

// const promiseOne=new Promise((resolve,reject)=>{
//     console.log("successfull data passed");
//     resolve("resolved");
//     reject("rejected");
// });

// promiseOne.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//      console.log("error");
// })

function submit(teacheraccepted){
    return new Promise((resolve,reject)=>{
        console.log("inside promise");
        if(teacheraccepted)
            resolve("assignment submitted");
        else if(!teacheraccepted)
            reject("assignment rejected");
        else
            console.log("staus pending ");

    }).then ((status)=>{

        console.log(status);
    }).catch((status)=>{
        console.log(status);
    })
}

submit(true);


// async await 

function verify(cost) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (cost >= 5000) {
                resolve("Payment Successful");
            } else {
                reject("Payment Failed");
            }

        }, 2000);

    });
}


async function order(cost) {

    try {

        const payment = await verify(cost);

        console.log(payment);
        console.log("Order Placed");

    } catch(error) {

        console.log(error);

    }
}


order(600);
// Great! Here is another practice problem that is a little more realistic.

// Problem Statement: Food Delivery System 🍕

// You are building a food delivery application.

// The order process has these steps:

// Place Order (takes 2 seconds)
// Prepare Food (takes 3 seconds)
// Deliver Food (takes 2 seconds)

// The next step should start only after the previous step is completed.

function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}
function prepareFood( dish){
    dish=dish.toLowerCase();
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
          if(dish=="pizza"||dish=="burger"||dish=="momos"){
         resolve("food prepared.... pls pay"+" :$"+Math.floor(Math.random()*1000));
       }
       else 
        reject("food item not available, plss order something from the menu");
        },3000);
      
    })
}
async function placeOrder(dish){
        try {
        
        await delay(2000);
        console.log("Order placed for:", dish);

        
        const msg = await prepareFood(dish);
        console.log(msg);

        
        await delay(2000);
        console.log("Food delivered");

    } catch (error) {
        console.log(error);
    }
    
}
placeOrder("Burger");