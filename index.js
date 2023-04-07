const express = require('express');
const app = express();
const port = 4000

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
  );
});

  app.use(express.json());

  app.post('/register', (req,res) => {
    let data = req.body
    res.send(
      register(
      data.username,
      data.password,
      data.nama,
      data.email
    )
    );
});
  

app.listen(port, () => {
  console.log(`Example app at https://localhosts: ${port}`);
});



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