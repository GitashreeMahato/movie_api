

const express = require('express'),
 morgan = require('morgan'),
 bodyParser = require('body-parser'),
 uuid = require('uuid'),
 
fs = require('fs'), // import built in node modules fs and path 
path = require('path');
const { title } = require('process');

const app = express();

app.use(bodyParser.json());


// list of 5 movies
let movies = [

        {
          Title : "The Godfather",
          Description: "The patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          Genre: 
            {
              Name :"Crime",
              Description: "Movies in this genre explore criminal activities, their consequences, and the moral dilemmas faced by the characters.",
            },
          
          
          Director:
            {
              Name: "Francis Ford Coppola",
              bio : "Francis Ford Coppola is an American film director, producer, and screenwriter. He is best known for directing the critically acclaimed 'The Godfather trilogy' and the Vietnam War epic Apocalypse Now. Coppola has won multiple Academy Awards during his career and is considered one of the most influential filmmakers in the history of cinema.",
              DOB : "April 7, 1939",
              
            },
          
          Actor: [
              {
                name: "Marlon Brando",
                DOB: "April 3, 1924",
              },
              {
                name: "Al Pacino",
                DOB: "April 25, 1940" ,
              },
            ],
          Release_date: 1972,
          Rating: 9.2,
          imageURL: "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224/?ref_=tt_ov_i",
          Featured: false,
        },

        {
            
          "Title" : "Inception",
          "Description": "A thief, who enters people's dreams to steal their secrets, is given a final job where he must implant an idea into someone's mind.",
          "Genre":
            {
              "Name" :"Science Fiction",
              "Description": "Sci-Fi films combine futuristic or scientific concepts with intense action sequences, often set in space, the future, or with advanced technology.",
            },
            
            
          "Director":
            {
              "Name": "Christopher Nolan",
              "bio" : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
              "DOB" : "July 30, 1970",
              
            },
          
          "Actor": [
              {
                "name": " Leonardo DiCaprio",
                "DOB": "November 11, 1974" ,
              },
              {
                "name": " Joseph Gordon-Levitt",
                "DOB": "February 17, 1981",
              },
              {
                "name": "Ellen Page",
                "DOB": "February 21, 1987" ,
              },
               
            ],
          "Release_date": 2010 ,
          "Rating": 8.8,
          "imageURL": "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i",
          "Featured": true,
          },
        
        {
          
          
          Title : "The Shawshank Redemption",
          Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          Genre:
             {
            Name :"Drama",
            Description: "Drama films portray realistic and emotional stories focusing on the characters' personal development and life challenges.",
          },
          
            
          Director:
            {
              Name: "Frank Darabont",
              bio : "Frank Darabont is an American filmmaker, screenwriter, and director. He is renowned for his work in adapting Stephen King's stories into successful films, including 'The Shawshank Redemption' and 'The Green Mile.' Darabont is known for his skill in creating emotionally powerful and character-driven narratives.",
              DOB : "January 28, 1959",
              
            },
         
          Actor: [
              {
                name: "Tim Robbins",
                DOB: "October 16, 1958" ,
              },
              {
                name: "Morgan Freeman",
                DOB: "June 1, 1937",
              },
            ],
          Release_date: 1994 ,
          Rating: 9.3 ,
          imageURL: "https://www.imdb.com/title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i",
          Featured: false,
          },
         
            {
              
          Title : "The Dark Knight",
          Description: "When the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          Genre:
            {
              Name :"Action",
              Description: "Action movies feature characters with extraordinary abilities who engage in thrilling action sequences, typically battling supervillains to save the world.",
            },
          
          Director:
            {
              Name: "Christopher Nolan",
              bio : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
              DOB : "July 30, 1970",
            },
      
          Actor: [
              {
                name: "Christian Bale",
                DOB: "January 30, 1974",
              },
              {
                name: "Heath Ledger",
                DOB: "April 4, 1979",
                Death: "January 22, 2008"
              },
            ],
          Release_date: 2008 ,
          Rating: 9.0 ,
          imageURL: "https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632/?ref_=tt_ov_i/",
          Featured: true,
          },

          {   
          Title : "Forrest Gump",
          Description: "Through three decades of U.S. history, a man with a low IQ witnesses and unwittingly influences several defining historical events in the 20th century United States.",
          Genre:
            
            {
              Name :"Romance",
              Description: "Romance films incorporate song and dance numbers to tell romantic stories, where music and choreography play a significant role in the narrative",
            },
          
          Director:
            {
              Name: "Robert Zemeckis",
              bio : "Robert Zemeckis is an American filmmaker, screenwriter, and producer. He is famous for directing and co-writing the 'Back to the Future' trilogy, 'Forrest Gump,' 'Cast Away,' and 'Who Framed Roger Rabbit.' Zemeckis is known for his innovative use of visual effects and storytelling techniques in his films.",
              DOB : "May 14, 1951",
              
            },
        
          Actor: [
              {
                name: "Tom Hanks",
                DOB: "July 9, 1956" ,
              },
              {
                name: "Robin WrightT",
                DOB:  "April 8, 1966",
              },
            ],
          Release_date: 1994,
          Rating: 8.8,
          imageURL: "https://www.imdb.com/title/tt0109830/mediaviewer/rm1954748672/?ref_=tt_ov_i",
          Featured: false
          },

      ];

      let users = [
        {
          id: 1,
          Name: "Kim",
          Password: "kim@123",
          Email: "kim@gmail.com",
          dob: "September 23, 1998",
          favoriteMovies: ["The God Father"]
        },
        {
          id: 2,
          Name: "Jow",
          Password: "joe@123",
          Email: "joe@gmail.com",
          dob: "Septemver 30, 1988",
          favoriteMovies: [] 
        },
        {
          id: 3,
          Name: "Rony",
          Password: "rony@123",
          Email: "rony@gmail.com",
          dob: "Septemver 12, 1978",
          favoriteMovies: ["Inception"] 
        },
        {
          "id": 4,
          "Name": "Krish",
          "Password": "k@123",
          "Email": "k@gmail.com",
          "dob": "July 12, 1994",
          "favoriteMovies": []
        },
        {
          "id": 6,
          "Name": "Rubi",
          "Password": "rubi@123",
          "Email": "rubi@gmail.com",
          "dob": "June 12, 1994",
          "favoriteMovies": ["The God Father"]
        },

        
        ];



// setup logging

 const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
 app.use(morgan('combined', {stream: accessLogStream}));  // enable morgan logging to 'log.txt'

// // setup app routing
// app.use(express.static('public'));

//  GET all movie list

  app.get('/movies', (req, res)=>{
    res.status(200).json(movies);
  });


  //  get about a single movie by title

  app.get('/movies/:title', (req, res)=>{
    const  {title} = req.params;
    const movie = movies.find(movie => movie.Title === title); 
     
    if(movie){
      res.status(200).json(movie);
    }else{
      res.status(400).send('no such movie');
    }
  })

  // get about a movie by genre name

  app.get('/movies/genre/:genreName', (req, res)=>{
    const  {genreName} = req.params;
    const genre = movies.find(movie => movie.Genre.Name === genreName).Genre; 
     
    if(genre){
      res.status(200).json(genre);
    }else{
      res.status(400).send('no such genre');
    }
  })

  // get  about a director by name
  app.get('/movies/director/:directorName', (req, res)=>{
    const  {directorName} = req.params;
    const director = movies.find(movie => movie.Director.Name === directorName).Director; 
     
    if(director){
      res.status(200).json(director);
    }else{
      res.status(400).send('no such director');
    }
  });


  // create  a new user by name
  app.post('/users', (req, res)=>{
    const  newUser = req.body;
    if(newUser.Name){
      newUser.id = uuid.v4();
      users.push(newUser);
      res.status(200).json(newUser);
    }else{
      res.status(400).send('User needs name');
    }
    
  });

  // update user info

  app.put('/users/:id', (req, res)=>{
    const {id} = req.params;
    const  updateUser = req.body;
    let user = users.find(user => user.id == id);
    if (user){
      user.Name = updateUser.Name;
      user.Password= updateUser.Password;
      user.Email= updateUser.Email;
      user.dob= updateUser.dob;
      user.favoriteMovies= updateUser.favoriteMovies;
      res.status(200).json(user);
    }else{
      res.status(400).send('User does not found.')
    }
  })

  //add a movie to user favorites list

  app.post('/users/:id/:movieTitle', (req, res)=>{
    const {id, movieTitle} = req.params;
    
    let user = users.find(user => user.id == id);
    if (user){
      
      user.favoriteMovies.push(movieTitle);
      res.status(200).send(`${movieTitle} has been added to user ${id}'s array.`);
    }else{
      res.status(400).send('no such user');
    }
  })

  // remove a movie from user favorites list

  app.delete('/users/:id/:movieTitle', (req, res)=>{
    const {id, movieTitle} = req.params;
    
    let user = users.find(user => user.id == id);
    if (user){
      
      user.favoriteMovies = user.favoriteMovies.filter(title => title !== movieTitle);
      res.status(200).send(`${movieTitle} has been removed to user ${id}'s array.`);
    }else{
      res.status(400).send('no such user');
    }
  })

  // delete existing users 

  app.delete('/users/:id', (req, res)=>{
    const {id} = req.params;
    
    let user = users.find(user => user.id == id);
    if (user){
      
      users = users.filter(user => user.id != id);
      // res.json(users);
      res.status(200).send(`User ${id} has been deleted.`);
    }else{
      res.status(400).send('no such user');
    }
  })


//   app.get('/documentation.html', (req, res)=>{
//     res.sendFile('public/documentation.html', {root: __dirname});
//   });
// app.get('/movies', (req, res)=>{
//   res.json(topMovies);
// });









// set up error handling
app.use((err, req, res, next)=>{
  console.error(err.stack);
  res.status(500).send('Something broke!');

})
// listen for requests

app.listen(8080,()=>{
  console.log("My server is running on port 8080.");
});


























































// =====================================   Exercise : 2.4 =============================================================

// const express = require('express'),
//  morgan = require('morgan'),
// fs = require('fs'), // import built in node modules fs and path 
// path = require('path');
// const app = express();


// let topMovies = [
//     {
//     title: 'Harry Potter and the Sorcerer\'s Stone',
//     author: 'J.K. Rowling',
//     year: 2001
//   },
//   {
//     title: 'Lord of the Rings',
//     author: 'J.R.R. Tolkien',
//     year: 2001
//   },
//   {
//     title: 'Twilight',
//     author: 'Stephanie Meyer',
//     year: 2008
//   },
//   {
//     title: 'Inception',
//     author: 'Christopher Nolan',
//     year: 2010
//   },
//   {
//     title: 'Interstellar',
//     author: ['Jonathan Nolan','Christopher Nolan'],
//     year: 2014
//   },
//   {
//     title: 'Lord of War',
//     author: 'Andrew Niccol',
//     year: 2005
//   },
//   {
//     title: 'Dilwale Dulhania Le Jayenge',
//     author: 'Aditya Chopra',
//     year: 1995
//   },
//   {
//     title: '3 Idiots',
//     author: 'Chetan Bhagat',
//     year: 2009
//   },
//   {
//     title: 'Queen',
//     author: 'Anvita Dutt Guptan',
//     year: 2014
//   },
//   {
//     title: 'Lagaan',
//     author: 'Ashutosh Gowariker',
//     year: 2001
//   },
  
//   ];

//  // setup logging

//  const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
//  app.use(morgan('combined', {stream: accessLogStream}));  // enable morgan logging to 'log.txt'

// // setup app routing
// app.use(express.static('public'));

// // GET request
//   app.get('/', (req, res)=>{
//     res.send('Welcome to myFlix application!');
//   });
//   app.get('/documentation.html', (req, res)=>{
//     res.sendFile('public/documentation.html', {root: __dirname});
//   });
// app.get('/movies', (req, res)=>{
//   res.json(topMovies);
// });


// // set up error handling
// app.use((err, req, res, next)=>{
//   console.error(err.stack);
//   res.status(500).send('Something broke!');

// })
// // listen for requests

// app.listen(8080,()=>{
//   console.log("My server is running on port 8080.");
// });


// --------------------------------------------------------------------------------------------------------------




























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