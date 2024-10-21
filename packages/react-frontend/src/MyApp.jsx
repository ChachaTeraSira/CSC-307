// src/MyApp.jsx
import React, {useState, useEffect} from 'react';
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index) {
    let Id = characters[index].id;
    fetch("Http://localhost:8000/users/"+Id, {
      method: "DELETE"
    })
    .then((res) => {
      if (res.status === 204) {
        const updated = characters.filter((_, i) => {
          return i !== index;
        });
        setCharacters(updated);
      } else {
        console.error("Resource not found.");
      }
    })
    .catch((error) => console.error("Couldn't delete user:", error));
  }

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => { console.log(error); });
  }, [] );

  function postUser(person) {
    const promise = fetch("Http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    })
    return promise;
  }

  function updateList(person) {
    setCharacters([...characters, person]);
  }
  function updateList(person) { 
    postUser(person)
      .then(response => response.json())
      .then((person) => setCharacters([...characters, person]))
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className = "container">
      <Table 
      characterData={characters}
      removeCharacter={removeOneCharacter}
      />
      <Form handleSubmit={updateList} />
    </div>
    // ^ Browsers will not accept this kind of code directly, so we need Vite to transpile it to standard Javascript. (Technically, the name of the standard language is ECMAScript.)
  );
  
  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
}

}
export default MyApp;