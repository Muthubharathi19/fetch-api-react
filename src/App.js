import React, { useState, useEffect } from 'react';

const FetchComp = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => 
        setData(data)
      );
  }, []); 

  //or

  // async function getData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json();
  //   return setData(data);
  // }
  // useEffect(() => {
  //  getData();
  // }, []);

  return (
    <>
      <ul>
        {data.map(item =>
           <li key={item.username}> {item.username} </li>
            )}
      </ul>
    </>
  )
}


const App = () => {
  return(
    <>
      <FetchComp />
    </>
  )
}

export default App