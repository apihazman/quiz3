const express = require('express')
const app = express()
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

}
]

app.use(express.json());

app.post('/',(req, res) => {
  let data = req.body
  res.send(
    login(
      data.username,
      data.password
    )
  )
    });

    app.use(express.json());

  app.post('/register', (req,res) => {
    let data = req.body
    res.send(
      data.username,
      data.password,
      data.nama,
      data.email
    )
  })
  
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bye', (req, res) => {
    res.send('Bye Bye World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//creat a post route for user to log in
app.post('/login', (req, res) => {
  // get the username and pasword from the request body
  const { username, password } =req.body;

  // find the username in the database
  const user = bdUsers.find(user => user.username === uesrname && user.password === password);

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

    dbUsers.push({
        username : newusername,
        password : newpassword,
        name : newname,
        email : newemail,
    })

    
    return "Register Succesfully"
}