// backend.js
import express from "express";
import cors from "cors";


const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

//DELETE
app.delete("/users/:id", (req, res) => {
  console.log(req.params.id);
  const user_delete = req.params.id;
  const person = users["users_list"].findIndex(((user) => user["id"] === user_delete));
  if (person === -1) {
    res.status(404).send("Resource not found.");
  }
  else {
    // users["users_list"].splice(person, 1);
    const updated = users["users_list"].filter((_,index) => {
      return index !== person;
    });
    users["users_list"] = updated;
    res.status(204).send("Succeed");
  }
});

const findUserById = (id) =>
    users["users_list"].find((user) => user["id"] === id);
  
app.get("/users/:id", (req, res) => {
    const id = req.params["id"]; //or req.params.id
    let result = findUserById(id);
    if (result === undefined) {
        res.status(404).send("Resource not found.");
    } else {
        res.send(result);
    }
});

// FIND BY NAME 
const findUserByName = (name) => {
    return users["users_list"].filter(
      (user) => user["name"] === name
    );
  };
  
  app.get("/users", (req, res) => {
    const name = req.query.name;
    if (name != undefined) {
      let result = findUserByName(name);
      result = { users_list: result };
      res.send(result);
    } else {
      res.send(users);
    }
  });

  const addUser = (user) => {
    user.id = Math.random().toString(36).substring(2, 8);  // random Id gen
    // right now the id is printed at end how to get that to work?
    users["users_list"].push(user);
    return user;
  };
  
  app.post("/users", (req, res) => {
    const userToAdd = req.body;
    let updatez = addUser(userToAdd);
    res.status(201).send(updatez);
  });

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}/users`
  );
});

