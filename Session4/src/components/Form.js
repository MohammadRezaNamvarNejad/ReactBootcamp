import { useState } from "react";

export function MyTextArea() {
  const [myCar, setMyCar] = useState("Ford");
  const cars = ["Ford", "BMW", "Audi"];
  const handleChange = (event) => {
    setMyCar(event.target.value);
  };
  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        {cars.map((car, index) => (
          <option value={car}>{car}</option>
        ))}
      </select>
    </form>
  );
}
