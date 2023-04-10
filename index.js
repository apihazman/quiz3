const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const port = 3000

let dbUsers = [
  {
    username : "hafiz",
    password : "apihhafiz",
    name : "Mohamad Hafiz",
    email : "apihazman@gmail.com",

},
{
    username : "wan",
    password : "wanencemm",
    name : "Wan Amirul",
    email : "wanamirul@gmail.com",

},
{
  
  username: "alyaa",
  password: "alyazaff",
  name: " Alyaa",
  email: "zafiraa@gmail.com"
}
]

app.use(express.json());

app.post('/login',(req, res) => {
  let data = req.body
  //res.send(
    const user = login(
      data.username,
      data.password
    )

res.send( generateToken(user))
});

  app.use(express.json());

  app.post('/register', (req,res) => {
    let data = req.body
    res.send(
      register(
      data.username,
      data.password,
      data.name,
      data.email
    )
    );
});
  
app.get('/hello',verifyToken, (req, res) => {
  console.log(req.user)
  res.send('Hello World!')
})

app.get('/bye', (req, res) => {
    res.send('bye bye World!')
  })

app.listen(port, () => {
  console.log(`Example app at https://localhosts: ${port}`);
});

//creat a post route for user to log in
app.post('/login', (req, res) => {
  // get the username and pasword from the request body
  const { username, password } =req.body;

  // find the username in the database
  const user = dbUsers.find(user => user.username === username && user.password === password);

  // if
  if (user) {
    res.send(user);
  } else {
    // if user is not found, return an error message
    res.send({ error: "User not found "});
  }
})



function login(username, password){
  console.log("someone try to login with", username, password)
  let matched = dbUsers.find(element =>
      element.username == username
  )
  if(matched){
      if(matched.password == password){
          return matched
      }else{
          return "Password not matched"
      }
  }else{
      return "Username not found"
  }
  }

  function register(newusername, newpassword, newname, newemail){

    dbUsers.find(element => {
      console.log(element)
    
    })

    dbUsers.push({
        username : newusername,
        password : newpassword,
        name : newname,
        email : newemail,
    })

    return "Register Succesfully"
}

// to generate JWT Token

function generateToken(userProfile) {
 return jwt.sign(
  userProfile,
 'secret',
 { expiresIn: 60 * 60 });
}

//to verify jwt token
function verifyToken(req, res, next) {
  let header = req.headers.authorization
  console.log(header);

  let token = header.split(' ')[1]

  jwt.verify(token, 'secret', function(err, decoded) {
   if(err) {
    res.send("Invalid Token")
   }
  
    req.user = decoded

    next()
  });
}

