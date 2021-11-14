import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import { Link } from "react-router-dom";

function CharacterRow() {
  const [characters, setCharacters] = useState([]);
  const [charDetails, setCharDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://api.genshin.dev/";

  // TODO: in the API, appending /all will allow to fetch all the characters and its details
  // TODO: so need to loop through array from the first link to get details just use "characters/all"
  // * to filter data use ?weapon=Bow&vision=Geo after /all

  const fetchCharDetails = () => {
    //the api returns data in an object
    const promise = characters.map(async (character) => {
      return await axios
        .get(`${requests.fetchCharacters}/${character}`)
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });

    Promise.all(promise).then((results) => {
      setCharDetails(results);
    });
  };

  //the useEffect is used for fetching character names from the api
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchCharacters);

      setCharacters(request.data);
    }

    fetchData();

    // fetchCharDetails();
  }, []);

  //this useEffect is used for fetching character details using the data fetched from the function fetchData()
  useEffect(() => {
    fetchCharDetails();

    if (characters.length > 0) {
      setLoading(false);
    }

    //character array is passed as dependency because the  this array is empty when the data is being fetched
    //so need to rerun the function when the array value changes to use its value in the fetchCharDetails function
  }, [characters]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const lowerCaseFirstLetter = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 md:gap-y-1 gap-x-4 xl:grid-cols-3 mt-4 min-h-screen text-base">
      {/* {console.log(charDetails)} */}
      {!loading ? (
        charDetails.map((char, i) => (
          <div key={i}>
            <Link
              to={`/characters/${characters[i]}`}
              className="bg-gray-light flex flex-col md:flex-row justify-between m-2 rounded cursor-pointer hover:bg-blue-100 transition-all duration-150 ease-in md:h-28"
            >
              <div className="order-2 md:order-1 py-2 px-2 md:w-32 flex flex-col items-center md:items-start">
                <div className="flex items-center ">
                  <h1 className="text-xl font-semibold">
                    {capitalizeFirstLetter(characters[i])}
                  </h1>
                  <img
                    src={`${baseUrl}elements/${lowerCaseFirstLetter(
                      char.vision
                    )}/icon.png`}
                    alt="icon"
                    className="object-contain h-6 pl-1 mt-1"
                  />
                </div>

                <span className="flex space-x-1 text-gray-200">
                  {/* <h2 className="pr-1">{char.vision}</h2> */}
                  <h2>{charDetails[i].weapon}</h2>
                </span>
              </div>
              <img
                src={`${baseUrl}characters/${characters[i]}/icon.png`}
                alt="icon"
                className="h-20 md:h-auto md:ml-20 object-contain rounded-br order-1 md:order-2"
              />
            </Link>
          </div>
        ))
      ) : (
        <div>
          <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 h-28 py-1">
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="h-4 bg-gray-400 rounded w-2/6"></div>
              </div>
              <div className=" bg-gray-400 h-28 w-28"></div>
            </div>
          </div>
          <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 h-28 py-1">
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="h-4 bg-gray-400 rounded w-2/6"></div>
              </div>
              <div className=" bg-gray-400 h-28 w-28"></div>
            </div>
          </div>
          <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 h-28 py-1">
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="h-4 bg-gray-400 rounded w-2/6"></div>
              </div>
              <div className=" bg-gray-400 h-28 w-28"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterRow;
