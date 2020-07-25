import React, {useState} from 'react';

function userForm() {
  const [values, setValues] = useState({});

  const submitUser = (e) => {
    e.preventDefault();
    const user = e.target.value;
    console.log(e.target.value);
    setUsers([...users, user]);
  }
  return (
    <div className="form">
    <form onSubmit={submitUser}>
      <input type="text" name="name" value={values.name} onChange={e => setValues(e.target.value)} placeholder="User name..."/>
      <input type="text" name="message" value={values.message} onChange={e => setValues(e.target.value)} placeholder="Message..."/>
      <button type="submit">Add User</button>
    </form>
    </div>
  );
}
export default userForm;