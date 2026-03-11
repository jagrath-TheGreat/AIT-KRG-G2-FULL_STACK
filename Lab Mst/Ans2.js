//Answer 2: created only the core logic as per instructed in question 2
// The promise outputs data fetched successfully after 2 seconds if resolved successfully
//  or else it will output error msg

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000);
});

promise
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});
