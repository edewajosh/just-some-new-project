import React, {useState} from 'react';
import Tweet from './tweet';

function App() {
  const [users, setUsers] = useState([
    {id: 1, name: 'Josh',message: 'my first post my lovely summer'},
    {id: 2, name: 'John',message: 'This is your lucky day'},
    {id: 3, name: 'Jemmie',message: 'It is what is it is'},
  ]);
  return (
    <div className="app">
      {users.map((user, index) => (
        <Tweet name={user.name} message={user.message} key={index}/>
      ))}
    </div>
  );
}
export default App;