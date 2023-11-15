import React, { useEffect, useState } from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  // step2 : use useEffect for fetching the data including updating isLoading and error states


  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetching Data not Success");
          } else {
           return res.json();
          }
        })
        .then((data) => {
          setUsers(data);
          setIsLoading(false);
          setError(null);

        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        })

    }, 2000);
  }, [])

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      { users && <Users users={users}/>}
      
    </div>
  );
};

export default App;
