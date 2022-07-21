import React, { useContext, useState } from "react";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { RetrieveWhiskeyFromApi } from "../axios/RetrieveWhiskeyFromApi";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Whiskeys() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);
  const [searchWhiskey, setSearchWhiskey] = useState("");
  const [page, setPage] = useState(0)
  const whiskeysPerPage = 6
  const pagesVisited = page * whiskeysPerPage
  const totalPages = Math.ceil(
    whiskeys.filter((whiskey) => {
      if (searchWhiskey === "") {
        return whiskey
      } else if (whiskey.name.toLowerCase().includes(searchWhiskey.toLowerCase())) {
        return whiskey
      }
      return false
    }).length / whiskeysPerPage
    )

  const changePage = ({ selected }) => {
    setPage(selected)
  }
 
  return (
    <>
      <RetrieveWhiskeyFromApi />
      <div className="min-h-screen min-w-screen bg-hero bg-scroll bg-cover bg-centre bg-repeat">

        <h1 className="text-white text-6xl text-bold p-2">Whiskeys:</h1>

        <div className="search">
        <div className="searchInputs " >
          <input
            type="search"
            className="search-input"
            placeholder="Search Whiskeys..."
            onChange={(event) => {
              setSearchWhiskey(event.target.value)
              changePage({ selected: 0 })
            }}
          />
        </div>          
        </div>
        <div className="h-full lg:h-[100vh] w-[100vw] flex flex-wrap items-center justify-center text-white gap-8">
          {whiskeys.filter((whiskey) => {
            if (searchWhiskey === "") {
              return whiskey
            } else if (whiskey.name.toLowerCase().includes(searchWhiskey.toLowerCase())) {
              return whiskey
            }
          }).map((whiskey, key) => (
            <Link to={`/whiskey/${whiskey._id}`} key={key}>
              <div className="bg-black/30 backdrop-blur-sm w-[400px] h-[250px] shadow-xl rounded-xl shadow-black flex flex-row hover:scale-110">
                <div className="text-center basis-1/2">
                  <div className="text-3xl mb-4">{whiskey.name}</div>
                  <div>
                    {whiskey.age === 0
                      ? "No Statement"
                      : `${whiskey.age} years`}
                  </div>
                  <div>Price Range: {whiskey.price}</div>
                  <div>Rating: </div>
                </div>
                <div className=" justify-end ml-auto">
                  <img
                    src={whiskey.image}
                    className="h-full w-full rounded-r-xl"
                  />
                </div>
              </div>
            </Link>
          )).slice(pagesVisited, pagesVisited + whiskeysPerPage)}
        </div>
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={totalPages}
            onPageChange={changePage}
            forcePage={page}
            containerClassName={"navigationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"navigationDisabled"}
            activeClassName={"navigationActive"}   
          />
                
      </div>
    </>
  );
}

export default Whiskeys;
