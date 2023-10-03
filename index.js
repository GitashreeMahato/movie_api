const express = require('express'),
 morgan = require('morgan'),
fs = require('fs'), // import built in node modules fs and path 
path = require('path');
const app = express();


let topMovies = [
    {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    year: 2001
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 2001
  },
  {
    title: 'Twilight',
    author: 'Stephanie Meyer',
    year: 2008
  },
  {
    title: 'Inception',
    author: 'Christopher Nolan',
    year: 2010
  },
  {
    title: 'Interstellar',
    author: ['Jonathan Nolan','Christopher Nolan'],
    year: 2014
  },
  {
    title: 'Lord of War',
    author: 'Andrew Niccol',
    year: 2005
  },
  {
    title: 'Dilwale Dulhania Le Jayenge',
    author: 'Aditya Chopra',
    year: 1995
  },
  {
    title: '3 Idiots',
    author: 'Chetan Bhagat',
    year: 2009
  },
  {
    title: 'Queen',
    author: 'Anvita Dutt Guptan',
    year: 2014
  },
  {
    title: 'Lagaan',
    author: 'Ashutosh Gowariker',
    year: 2001
  },
  
  ];

 // setup logging

 const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
 app.use(morgan('combined', {stream: accessLogStream}));  // enable morgan logging to 'log.txt'

// setup app routing
app.use(express.static('public'));

// GET request
  app.get('/', (req, res)=>{
    res.send('Welcome to myFlix application!');
  });
  app.get('/documentation.html', (req, res)=>{
    res.sendFile('public/documentation.html', {root: __dirname});
  });
app.get('/movies', (req, res)=>{
  res.json(topMovies);
});

 




// set up error handling
app.use((err, req, res, next)=>{
  console.error(err.stack);
  res.status(500).send('Something broke!');

})

// listen for requests

app.listen(8080,()=>{
  console.log("My server is running on port 8080.");
});


//---------------------------------------------------------------------------------------------------

// fs = require('fs'), // import built in node modules fs and path 
// path = require('path');
// fs.createWriteStream create a write stream (in append mode)
// a ‘log.txt’ file is created in root directory and path.join appends it to a ‘log.txt’ file. 
// const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
// // setup the logger
// app.use(morgan('combined', {stream: accessLogStream}));

// app.get('/', (req, res) => {
//   res.send('Welcome to my app!');
// });

// app.get('/secreturl', (req, res) => {
//   res.send('This is a secret url with super top-secret content.');
// });




//?--------------using morgan   ----------------------
// app.use(morgan('common'));
// app.get('/', (req, res) => {
//   res.send('Welcome to my app!');
// });

// app.get('/secreturl', (req, res) => {
//   res.send('This is a secret url with super top-secret content.');
// });


// ---------------------------------------




//? ------ with timestamp -----------------------------

// myLogger() is used to log the request URL to the terminal.
// let myLogger = (req, res, next) => {
//   console.log(req.url);
//   next();
// };

// let requestTime = (req, res, next)=>{
//   req.requestTime = Date.now();
//   next();
// }

// app.use(myLogger);
// app.use(requestTime);


// app.get('/', (req, res) => {
//   let responseText ='Welcome to my app!';
//   responseText += 'Requested at :' + req.requestTime;
//   res.send(responseText);
// });

// app.get('/secreturl', (req, res) => {
//   let responseText ='This is a secret url with super top-secret content.';
//   responseText += 'Requested at :' + req.requestTime;
//   res.send(responseText);
// });

// -------------------------------------------------------------




//? ----------------------

// let topBooks = [
//   {
//   title: 'Harry Potter and the Sorcerer\'s Stone',
//   author: 'J.K. Rowling',
//   year: 2001
// },
// {
//   title: 'Lord of the Rings',
//   author: 'J.R.R. Tolkien',
//   year: 2001
// },
// {
//   title: 'Twilight',
//   author: 'Stephanie Meyer',
//   year: 2008
// },
// {
//   title: 'Inception',
//   author: 'Christopher Nolan',
//   year: 2010
// },
// {
//   title: 'Interstellar',
//   author: ['Jonathan Nolan','Christopher Nolan'],
//   year: 2014
// },
// {
//   title: 'Lord of War',
//   author: 'Andrew Niccol',
//   year: 2005
// },
// {
//   title: 'Dilwale Dulhania Le Jayenge',
//   author: 'Aditya Chopra',
//   year: 1995
// },
// {
//   title: '3 Idiots',
//   author: 'Chetan Bhagat',
//   year: 2009
// },
// {
//   title: 'Queen',
//   author: 'Anvita Dutt Guptan',
//   year: 2014
// },
// {
//   title: 'Lagaan',
//   author: 'Ashutosh Gowariker',
//   year: 2002
// },

// ]


// app.get('/', (req, res)=>{
//   res.send('Welcome to myBook movies club');

// })
// app.get('/documentation', (req, res)=>{
//   res.sendFile('public/documentation.html', {root: __dirname});
// })
// app.get('/books', (req, res)=>{
//   res.json(topBooks);
// });
// ----------------------------------------------------

































// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const statuscode = 200;
// const setHeader = {'Content Type ' : 'text/html' };
//  const hostname = 'localhost';
//  const port = 8080;

//  let server = http.createServer((req, res)=>{
//   let requestUrl = url.parse(req.url, true);
//   if(requestUrl.pathname == '/documentation.html'){
//     res.setHeader;
//     res.end("Documentation on Book API\n");
//   }else{
//     res.setHeader;
//     res.end('Welcome to myBook club....')
//   }
//   // res.statusCode;
//   // res.setHeader;
//   // res.end('Welcome to myBook club!!!!');
//  })
//  server.listen(port, hostname, ()=>{
//   console.log("My server is running in 8080 port");
//  })



























//! Notes:
//response.writeHead(200, {'Content-Type': 'text/plain'});

//the Content-Type of the HTTP response as text/plain.


// app.METHOD(PATH, HANDLER)
// The app here is an instance of express()
// “METHOD,” refers to an HTTP request method.
// “PATH” refers to a path on the server—in other words, the endpoint URL the request is targeting. 
// “HANDLER,” on the other hand, is the function to be executed when the route is matched. this is the callback function that’s executed when the route (or URL endpoint) is matched. It tells the server what kind of response to return in response to the request and takes the following format:

// (req, res) => {
  //logic here to send a response
// }
// The two parameters req and res contain data about the HTTP request (req) and allow you to control the HTTP response (res) respectively.


//? app.use((err, req, res, next) => {
// Information about the current error would be logged to the terminal using err.stack