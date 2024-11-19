// backend.js
import express from "express";
import cors from "cors";
import userServices from "./user-services.js";


const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// const findUserById = (id) =>
//     users[userServices].find((user) => user["id"] === id);
app.get("/users", (req, res) => {
  const { name, job } = req.query;

  userServices.getUsers(name, job)
      .then((result) => res.send({ users_list: result }))
      .catch((error) => res.status(500).send("Internal Server Error at name-job"));
});

app.get("/users/:id", (req, res) => {
    const id = req.params["id"]; //or req.params.id
    userServices.findUserById(id)
    .then((result) => {
      if (!result) {
          res.status(404).send("Resource not found.");
      } else {
          res.send(result);
      }
    }) .catch(() => res.status(500).send("Internal Server Error id"));
});

// FIND BY NAME 
// const findUserByName = (name) => {
//     return users["users_list"].filter(
//       (user) => user["name"] === name
//     );
//   };
  
  // app.get("/users", async (req, res) => {
  //   const name = req.query.name;
  //   const job = req.query.job;
  //   try {
  //     const result = await userServices.findUserByName(name);
  //     result = { users_list: result };
  //   } catch {
  //     res.status(500).send("Internal Server Error");
  //   }
  // });
  
  //ADD USER
  // const addUser = (user) => {
  //   user.id = Math.random().toString(36).substring(2, 8);  // random Id gen
  //   users["users_list"].push(user);
  //   return user;
  // };
  
  app.post("/users", (req, res) => {
    const userToAdd = req.body;
    userServices.addUser(userToAdd)
      .then((newUser) => res.status(201).send(newUser))
      .catch(() => res.status(404).send("Couldn't add user adduser"));
  });

  //DELETE USER
  app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    userServices.deleteUser(id)

      .then((deletedUser) => {
        if (!deletedUser) {
          res.status(404).send("Resource not found.");
        } else {
          res.status(204).send("User deleted successfully.");
        }
      })
      .catch(() => res.status(500).send("Internal Server Error deelete"));
  });
    
  //   console.log(req.params.id);
  //   const user_delete = req.params.id;
  //   const person = users["users_list"].findIndex(((user) => user["id"] === user_delete));
  //   if (person === -1) {
  //     res.status(404).send("Resource not found.");
  //   }
  //   else {
  //     const updated = users["users_list"].filter((_,index) => {
  //       return index !== person;
  //     });
  //     users["users_list"] = updated;
  //     res.status(204).send("Succeed");
  //   }
  // });

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}/users`
  );
});

