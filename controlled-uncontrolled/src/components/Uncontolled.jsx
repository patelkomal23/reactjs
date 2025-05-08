import React, { useEffect, useRef, useState } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);
  const [input, setInput] = useState('');

  const handleClick = () => {
    if (inputRef.current) {
      setInput(inputRef.current.value);
      inputRef.current.value=' ';

    }
  };
useEffect(()=>{
    inputRef.current.focus();
})
  return (
    <>
      <input type="text" ref={inputRef} />
      <br /> <br />
       <button onClick={handleClick}>Submit</button>
      <p>You submitted: {input}</p>
    </>
  );
}

export default UncontrolledForm;
