

//hello world after 2 sec here plus showing we can log something in before it  -> 
function asyncfuncation() {
   setTimeout(()  => {
    console.log("hello world after 2 sec");
   }, 2000); 
}
asyncfuncation();
console.log("THIS IS  MUST BE BEFORE THE 2SEC")

//Write a promise that resolves with a number 5.
const number = 5;
const promise = new Promise((resolve, reject) => {
    resolve(number);
});

//then mult by 2
promise
.then(
value =>{
    return value * 2},
)
//then sup by 2 
.then(
value => {
    return value - 2}
)
// result here
.then(result =>{
    console.log("final result ",result);
})


//error handling here
.catch(error =>{
    console.log("something went wrong: ",error);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

// fetch way
fetch("https://dummyjson.com/products/1")
.then((res) =>
      res.json()
.then(data =>{

    console.log("product Name: ", data.title)
}));


// sync await way


async function asyncfuncation() {
    const res = await fetch("https://dummyjson.com/products/1");
    const response = await res.json();
    console.log("product Name:", response.title);
}



//////////////////////////////////////////////////////////////////////////////////////////////////////
//Fetch two dummy JSON products:
const  prom1 = fetch("https://dummyjson.com/products/1")
.then(res =>
      res.json())
.then(data =>{
    console.log("product Name: ", data.title);
    return(data);

});
    

const  prom2 = fetch("https://dummyjson.com/products/2")
.then(res =>
      res.json())
.then(data =>{
    console.log("product Name: ", data.title);
    return(data);
});




Promise.all([prom1, prom2]).then(finalresult => {
    console.log("both of them: ", finalresult);
});
