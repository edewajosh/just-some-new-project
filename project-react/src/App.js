import React, {useState} from 'react';
import Tweet from './tweet';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: 'Josh',
    age: 25,
    posts: ['my first post', 'my lovely summer']
  });

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      {/* <Tweet name="Jane" message="Learning React with DevEd" />
      <Tweet name="Doe" message="Learning React-hooks with DevEd" />
      <Tweet name="Traversy" message="Learning React State Management" />
      <Tweet name="Smith" message="Software Development soft skills" />
      <Tweet name="John" message="Learning React with DevEd" /> */}
      <h1 className={isRed ? 'red': ''}>Change My Color</h1>
      <button onClick={increment} className='button'>Increment</button>
    <h1>{count}</h1>

    </div>
  );
}
export default App;