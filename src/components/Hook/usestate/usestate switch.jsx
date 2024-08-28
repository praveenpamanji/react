import React, { useState } from 'react';

const Count1 = () => {
  const [age, setAge] = useState(10);

  const ageHandler = (type) => {
    switch (type) {
      case 'INCREMENT':
        setAge(age + 1);
        break;
      case 'DECREMENT':
          if (age > 0) {
          setAge(age - 1);
          }
          else {
           alert('Age cannot be negative');
          }
        break;
      case 'RESET':
        setAge(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h3>Age:{age}</h3>
      <button onClick={() => ageHandler('INCREMENT')}>Increment Age</button>
      <button onClick={() => ageHandler('DECREMENT')}>Decrement Age</button>
      <button onClick={() => ageHandler('RESET')}>Reset Age</button>
    </>
  );
};

export default Count1;
