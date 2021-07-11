import express from "express";
const router = express.Router();

// npm run dev to run localhost

// http headers (post, delete, get, put)
// post send data create
// get asks for information
// put is updating data / patching
// delete is delete

// create a form in react > same wording for these variables
// be careful when makign form that when signing up the user has a post request header and the login has get request
router.post("/user/signup", async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var phone = req.body.phone;
  
  const customUser = new Parse.User();

  customUser.set("username", username);
  customUser.set("password", password);
  customUser.set("email", email);

  // custom fields can be set on each user
  customUser.set("phone", phone);

  customUser.signUp()
      .then((result) => {
          res.send(result);
          // Execute any logic that should take place after signup.
          console.info("New user was created successfully");
      }).catch((error) => {
          res.send(error);
          // Execute any logic that should take place if the signup fails.
          // error is a Parse.Error with an error code and message.
          console.error("Error message:", error.message);
      });
});

router.post("/user/login", async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  
  Parse.User.logIn(username, password)
    .then((result) => {
        res.send(result);
        // Execute any logic that should take place after successful login.
        console.info("User logged in successfully");
    }).catch((error) => {
        res.send(error);
        // Execute any logic that should take place if the login fails.
        // error is a Parse.Error with an error code and message.
        console.error("Error message:", error.message);
    });
});

router.get("/test", async (req, res) => {
  res.send('hello world');
});

export default router;
