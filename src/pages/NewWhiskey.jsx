import Whiskeys from "./Whiskeys";
import { Link, useNavigate } from "react-router-dom";
import { GlobalWhiskeyContext } from "../Hooks/GlobalWhiskey";
import { useContext, useState } from "react";

// state is an object.
function NewWhiskey() {
  let nav = useNavigate();

  const { addWhiskey, whiskeys } = useContext(GlobalWhiskeyContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  async function formSubmit(e) {
    e.preventDefault();
    const newWhiskey = {
      name,
      age,
      region,
      type,
      budget
    };
    await addWhiskey(newWhiskey);
  };

  return (
    <>
      <div>NewWhiskey</div>
      <form onSubmit={formSubmit}>
        <div>
          <h2>Whiskey name</h2>
          <textarea
            cols="20"
            rows="1"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <h2>Whiskey age</h2>
          <textarea
            cols="20"
            rows="1"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <h2>Region</h2>
          <textarea
            cols="20"
            rows="1"
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <h2>Type</h2>
          <textarea
            cols="20"
            rows="1"
            value={type}
            onChange={(e) => {setType(e.target.value)}}
          ></textarea>
        </div>
        <div>
          <h2>Budget</h2>
          <textarea
            cols="20"
            rows="1"
            value={budget}
            onChange={(e) => {setBudget(e.target.value)}}
          ></textarea>
        </div>
        <button>Add whiskey</button>
      </form>
    </>
  );
}

export default NewWhiskey;
