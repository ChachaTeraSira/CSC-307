// src/MyApp.jsx
import React, {useState, useEffect} from 'react';
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
  }

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => { console.log(error); });
  }, [] );

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