// function processUserInput(name, callback) { 
//   console.log("Processing input...");
//   callback(name);
// }
// processUserInput("Ahmed",function(name) {
//   console.log("Hello, " + name);
// });

// setTimeout(()=>{console.log("hello after 3 sceand")},3000);
// console.log("First"); 
// console.log("Second");
// console.log("Third");
// console.log("First");
// setTimeout(() => {
//     console.log("Second (delayed)");
// }, 2000);
// console.log("Third");
// function readFile(filename, callback) {
//     console.log(`Reading ${filename}...`);
//     setTimeout(() => {
//         const data = `am res`;
//         callback(null, data); 
//     }, 1000);
// }
// readFile("mostafa", (err,res)=>{
//     if(err){console.log("invalied name file")}
//         else {
//         console.log('File content:', res);
    
//     }
// })

// function step1(callback) {
//     setTimeout(() => {
//         console.log("1");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("2");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("3");
//         callback();
//     }, 1000);
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps done!");
//         });
//     });
// });
// function checknam(num){
//     return new Promise((resolve,reject)=> {
//         if (num > 0) {
//       resolve( "more then 0"+" "+"the num is"+" "+num);
//     } else {
//       reject("error then num less then 0"+" "+num);
//     }
//    });
// }
// checknam(7).then(res=>{
//     console.log("right:",res)
// }).catch(err=>{
//     console.log("Rong num",err)
// })
// console.log("------------------------------")

// fetch('https://json5559placeholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));
  
