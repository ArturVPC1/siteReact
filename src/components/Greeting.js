import React from 'react'

function Greeting() {
    const sayHi = (name, surname) => {
        alert('Oi ' + name + ' ' + surname);
    }
  return (
    <div>
        <button onClick={() => sayHi('Artur', ':)')}>Olá</button>
    </div>
  )
}

export default Greeting