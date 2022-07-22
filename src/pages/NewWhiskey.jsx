import { Link, useNavigate } from "react-router-dom";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { useContext,  useState } from "react";

const api = `${import.meta.env.VITE_API_SERVER_URL}/api/whiskeys` || 'http://localhost:4000/api/whiskeys'

function NewWhiskey() {
  // State for whiskey
  const [whiskeyState, setWhiskeyState] = useState({
    name: "",
    description: "",
    age: "",
    region: "Scotch",
    type: "Single malt",
    price: "Cheap and nasty",
    image: "",
  });
  const [image, setImage] = useState("")

  const { addWhiskey } = useContext(GlobalWhiskeyContext);

  const postDetails = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "whiskeyImage")
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);
    return fetch(import.meta.env.VITE_CLOUDINARY_URL, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        whiskeyState.image = data.url;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // DRY dynamic handling of onChange
  const handleTextInput = (e) => {
    setWhiskeyState({...whiskeyState, [e.target.name] : e.target.value})
  }

  let nav = useNavigate();

  async function formSubmit(e) {
    e.preventDefault();
    await postDetails()
    await addWhiskey(whiskeyState);
    await fetch(api, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: whiskeyState.name,
        description: whiskeyState.description,
        age: whiskeyState.age,
        region: whiskeyState.region,
        type: whiskeyState.type,
        price: whiskeyState.price,
        image: whiskeyState.image,
      }),
    })
    nav("/whiskeys");

  }

  return (
    <div className="bg-hero bg-cover min-h-screen min-w-full prose lg:prose-xl">
      <h1 className="h-1 text-center text-white  py-10">Add New Whiskey</h1>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-orange-200 py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="mb-0 space-y-6" onSubmit={formSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-amber-700">Whiskey name</label>
            <input
              required
              id="name"
              type="text"
              name="name"
              className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400"
              value={whiskeyState.name}
              onChange={(e) => handleTextInput(e)}
            ></input>
          </div>
          <div>
          <label htmlFor="description" className="block text-lg font-medium text-amber-700">Description</label>
            <textarea
              required
              rows="3"
              className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400"
              name="description"
              value={whiskeyState.description}
              onChange={(e) => handleTextInput(e)}
            ></textarea>
          </div>
          <div>
          <label htmlFor="age" className="block text-lg font-medium text-amber-700">Whiskey age</label>
          <input
              required
              id="age"
              type="number"
              name="age"
              className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400"
              value={whiskeyState.age}
              onChange={(e) => handleTextInput(e)}
            ></input>
          </div>
          <div>
          <label className="block text-lg font-medium text-amber-700">Region
          <select
              id="region"
              type="text"
              name="region"
              className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400"
              value={whiskeyState.region}
              onChange={(e) => handleTextInput(e)}
              onBlur={(e) => handleTextInput(e)}
            >
              <option value="none" disabled="disabled">Please Select...</option>
              <option value="Scotch">Scotch</option>
              <option value="Irish">Irish</option>
              <option value="American">American</option>
              <option value="Japanese">Japanese</option>
              <option value="Canadian">Canadian</option>
              <option value="Other">Other</option>
            </select>
            </label>
          </div>
          <div>
          <label className="block text-lg font-medium text-amber-700">Type
          <select
              id="type"
              type="text"
              name="type"
              className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400"
              value={whiskeyState.type}
              onChange={(e) => handleTextInput(e)}
              onBlur={(e) => handleTextInput(e)}
            >
              <option defaultValue value="none" disabled="disabled">Please Select...</option>
              <option value="Single Malt">Single Malt</option>
              <option value="Blended">Blended</option>
              <option value="Bourbon">Bourbon</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Rye">Rye</option>
              <option value="Sour Mash">Sour Mash</option>
              <option value="White">White</option>
              <option value="Other">Other</option>
            </select>
            </label>
          </div>
          <div>
          <label className="block text-lg font-medium text-amber-700">Budget
          <select
              type="text"
              id="price"
              name="price"
              className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400"
              value={whiskeyState.price}
              onChange={(e) => handleTextInput(e)}
              onBlur={(e) => handleTextInput(e)}
            >
              <option defaultValue value="none" disabled>Please Select...</option>
              <option value="Cheap">Cheap and nasty</option>
              <option value="Average">Average Everyday</option>
              <option value="Above Average">Not cheap, but not too bad.</option>
              <option value="Expensive">It will set you back.</option>
              <option value="Top Shelf">Top Shelf</option>
            </select>
            </label>
          </div>
            <div>
            <input
              required
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            Add whiskey
          </button>
          <div>
            <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" to="/">
              Cancel
            </Link>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default NewWhiskey;
