import React, { useEffect, useState } from "react";
import Person from "./Person";
import Search from "./Search";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    goToServer();
  }, []);

  const goToServer = (txt) => {
    let url='https://jsonplaceholder.typicode.com/users'
    if(txt)
    url+='?id='+txt
    fetch(url)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching data:', error));
  }

  return (
    <>
    <Search onSearch={goToServer}></Search>
      <ul>
        {user.map(item => 
        (<li key={item.id}><Person per={item}></Person></li>))}
      </ul>
    </>
  );
}



export default User;
