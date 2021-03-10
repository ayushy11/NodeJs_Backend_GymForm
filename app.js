const express = require("express"); // express module imported
const path = require("path");   // path imported
const app = express();
const fs = require("fs");
const port = 80;

// EXPRESS SPECIFIC CONFIG
app.use('/static',express.static('static')); // Set the static files directory
app.use(express.urlencoded());  // form data -> express.

// PUG SPECIFIC CONFIG
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views',path.join(__dirname,'views')); // Set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    const con = "This is the first template."
    const param = {'title': 'pug template' , "content": con};
    res.status(200).render('index.pug',param);
});

app.post('/',(req,res)=>{    
    // console.log(req.body);
    Name = req.body.Name;
    Age = req.body.Age;
    Gender = req.body.Gender;
    Address = req.body.Address;
    More = req.body.More; 

    let outputToWrite = `The name of the client is ${Name},${Age} years old ${Gender},residing at ${Address}. More about his/her: ${More}`;
    fs.writeFileSync('output.txt',outputToWrite);
    const param = {'title': 'Your form has been submitted'};
    res.status(200).render('index.pug',param);
});



// START THE SERVER
app.listen(port,()=>{
    console.log(`The application successfully started on port ${port}`);
});















// // Pug demo endpoint
// app.get("/demo",(req,res) =>{
//     res.status(200).render('demo', { title: 'Hey there', message: 'Hello there! thanks for telling about pug.' });
// });

// app.get("/",(req,res) =>{
//     res.status(200).send("This is home page of my first express app");
// });
// app.get("/about",(req,res) =>{
//     res.send("This is about page of my first express app");
// });

// app.post("/about",(req,res) =>{
//     res.send("This is post request on about page of my first express app");
// });
// app.post("/this",(req,res) =>{
//     res.status(404).send("Page not found.");
// });



