import { Link, useNavigate } from "react-router-dom";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { useContext, useReducer } from "react";
import formReducer from "../hooks/formReducer";
import { PostRequest } from "../axios/RetrieveWhiskeyFromApi";

const initialFormState = {
  id: "",
  name: "",
  age: "",
  region: "",
  type: "",
  budget: "",
};

function NewWhiskey() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const { addWhiskey, whiskeys } = useContext(GlobalWhiskeyContext);

  const handleTextInput = (e) => {
    dispatch({
      type: "TEXT_INPUT",
      field: e.target.name,
      data: e.target.value,
    });
  };

  let nav = useNavigate();

  async function formSubmit(e) {
    e.preventDefault();
    PostRequest(formState)
    console.log("new wisky")
    nav("/whiskeys");
  }

  return (
    <>
      <div>New Whiskey</div>
      <form onSubmit={formSubmit}>
        <div>
          <h2>Whiskey name</h2>
          <textarea
            cols="20"
            rows="1"
            name="name"
            value={formState.name}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <h2>Whiskey age</h2>
          <textarea
            cols="20"
            rows="1"
            name="age"
            value={formState.age}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <h2>Region</h2>
          <textarea
            cols="20"
            rows="1"
            name="region"
            value={formState.region}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <h2>Type</h2>
          <textarea
            cols="20"
            rows="1"
            name="type"
            value={formState.type}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <h2>Budget</h2>
          <textarea
            cols="20"
            rows="1"
            name="budget"
            value={formState.budget}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <div>
          <h2>Price</h2>
          <textarea
            cols="20"
            rows="1"
            name="price"
            value={formState.price}
            onChange={(e) => handleTextInput(e)}
          ></textarea>
        </div>
        <button>Add whiskey</button>
        <div>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </>
  );
}

export default NewWhiskey;
