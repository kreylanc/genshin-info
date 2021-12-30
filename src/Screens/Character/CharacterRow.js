import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import { Link } from "react-router-dom";
import {
  weaponFilter,
  visionFilter,
  rarityFilter,
  selectWeapon,
  selectVision,
  selectRarity,
} from "../../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoading from "./SkeletonLoading";
import Star from "../../star.png";
import { selectSearchTerm } from "../../features/searchSlice";

function CharacterRow() {
  const dispatch = useDispatch();

  const exception = ["Traveler", "Raiden", "Hu Tao", "Arataki Itto"];

  // const [characters, setCharacters] = useState([]);
  const [charDetails, setCharDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchTerm = useSelector(selectSearchTerm);

  const weapon = useSelector(selectWeapon);
  const vision = useSelector(selectVision);
  const rarity = useSelector(selectRarity);

  const baseUrl = "https://api.genshin.dev/";
  //append any part of the url while filtering data
  let filterUrl = "";

  // TODO: in the API, appending /all will allow to fetch all the characters and its details
  // TODO: so no need to loop through array from the first link to get details just use "characters/all"
  // * to filter data use ?weapon=Bow&vision=Geo after /all

  const fetchCharDetails = async () => {
    //checking if the filter is empty (meaning display all)
    if (weapon === "" && vision === "" && rarity === "") {
      filterUrl = "";
    }
    // when all the filters are selected
    else if (weapon !== "" && vision !== "" && rarity !== "") {
      filterUrl = `weapon=${weapon}&vision=${vision}&rarity=${rarity}`;
    }
    //when only weapon filter is selected
    else if (weapon !== "" && vision == "" && rarity == "") {
      filterUrl = `weapon=${weapon}`;
    }
    //when only vision filter is selected
    else if (weapon == "" && vision !== "" && rarity == "") {
      filterUrl = `vision=${vision}`;
    }
    //when only rarity filter is selected
    else if (weapon === "" && vision === "" && rarity !== "") {
      filterUrl = `rarity=${rarity}`;
    }
    //if not empty then provide the condition in the api to filter data
    //condition when weapon filter is selected
    else {
      if (weapon !== "" && rarity !== "") {
        filterUrl = `weapon=${weapon}&rarity=${rarity}`;
      } else if (weapon !== "" && vision !== "") {
        filterUrl = `weapon=${weapon}&vision=${vision}`;
      } else if (vision !== "" && rarity !== "") {
        filterUrl = `vision=${vision}&rarity=${rarity}`;
      }
    }

    const promise = await axios.get(
      `${requests.fetchCharacters}/all?${filterUrl}`
    );

    setCharDetails(promise.data);

    if (promise.data !== null) {
      setLoading(false);
    }
  };

  //this useEffect is used for fetching character details
  useEffect(() => {
    fetchCharDetails();

    //rerun the useEffect when there is change in one of these values
  }, [weapon, vision, rarity]);

  useEffect(() => {
    return () => {
      dispatch(weaponFilter(""));
      dispatch(visionFilter(""));
      dispatch(rarityFilter(""));
    };
  }, []);

  const lowerCaseFirstLetter = (string) => {
    return string.toLowerCase();
  };

  // ** some characters have full name e.g. Kamisato Ayaka so this function returns only Ayaka
  //the exception array is made because some characters dont follow the pattern
  //the vision parameter is only required in the case of "Traveler" character
  const getFirstName = (string, vision) => {
    // \s means there is atleast 1 spaces
    var reWhiteSpace = new RegExp(/\s/);

    var ignoreName = false;

    //checking the name passed from the parameter matches from the exception array
    for (let i = 0; i < exception.length; i++) {
      ignoreName = string.includes(exception[i]);

      if (ignoreName) {
        string = exception[i];
        break;
      }
    }

    // Check for white space i.e. the character has full name
    if (reWhiteSpace.test(string) && !ignoreName) {
      return string.substring(string.indexOf(" ") + 1);
    } else {
      if (string === "Traveler" && vision !== undefined) {
        return (string = string + "-" + vision);
      } else if (string === "Hu Tao") {
        return (string = "Hu-Tao");
      } else if (string === "Arataki Itto") {
        return (string = "Arataki-Itto");
      }
      return string;
    }
  };

  return (
    <div className="grid grid-cols-2 grid-flow-row md:grid-cols-2 md:gap-y-1 gap-x-4 xl:grid-cols-3 mt-4 text-base">
      {!loading ? (
        charDetails
          .filter((value) => {
            if (searchTerm == "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((char, i) => (
            <div key={i}>
              <Link
                to={`/characters/${lowerCaseFirstLetter(
                  getFirstName(char.name, char.vision)
                )}`}
                className="bg-gray-light flex flex-col md:flex-row justify-between m-2 rounded cursor-pointer transform hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in md:h-28"
              >
                <div className="order-2 md:order-1 py-2 px-2 md:w-32 flex flex-col items-center md:items-start">
                  <div className="flex items-center ">
                    <h1 className="text-xl font-semibold text-white">
                      {getFirstName(char.name)}
                    </h1>
                    <img
                      src={`${baseUrl}elements/${lowerCaseFirstLetter(
                        char.vision
                      )}/icon.png`}
                      alt="icon"
                      className="object-contain h-6 ml-2"
                    />
                  </div>

                  <span className="flex space-x-1 text-gray-200 items-center">
                    <h2>{char.rarity}</h2>
                    <img src={Star} alt="" className="object-contain h-3" />
                    {/* <h2 className="pr-1">{char.vision}</h2> */}
                    <h2>{char.weapon}</h2>
                  </span>
                </div>
                <img
                  src={`${baseUrl}characters/${lowerCaseFirstLetter(
                    getFirstName(char.name, char.vision)
                  )}/icon.png`}
                  alt="icon"
                  className="h-20 md:h-auto md:ml-20 object-contain rounded-br order-1 md:order-2"
                />
              </Link>
            </div>
          ))
      ) : (
        <SkeletonLoading type="row" />
      )}
    </div>
  );
}

export default CharacterRow;
