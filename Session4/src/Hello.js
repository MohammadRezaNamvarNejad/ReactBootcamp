import { useState } from "react";

// export function Car(props) {
//   return <li>I am a { props.brand }</li>;
// }

// export function Garage() {
//   const cars = ['Ford', 'BMW', 'Audi'];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car,index) => <Car key={index} brand={car} />)}
//       </ul>
//     </>
//   );
// }

export function MyForm() {
  const [inputs, setInputs] = useState({username: "Abass", age: "25"});  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
