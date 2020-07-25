import React, {useState} from 'react';
import Tweet from './tweet';

function App() {

  const [users, setUsers] = useState([
    {name: 'Josh',message: 'my first post my lovely summer'},
    {name: 'John',message: 'This is your lucky day'},
    {name: 'Jemmie',message: 'It is what is it is'},
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}

    </div>
  );
}
export default App;