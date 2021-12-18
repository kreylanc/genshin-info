import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import axios from "axios";
import requests from "../../api/requests";
import CharDetailsMain from "./CharDetailsMain";
import CharDetailsSub from "./CharDetailsSub";
import { Link } from "react-scroll";
import star from "../../star.png";
import CharacterData from "../../JSON/CharacterData.json";
import CharacterAscension from "./CharacterAscension";
import { useParams, Navigate } from "react-router-dom";

function CharacterDetails() {
  const params = useParams();
  //  The merged url will look like this:
  //  /characters/albedo <---- albedo here is  character_id passed from earlier page
  const mergedUrl = `${requests.fetchCharacters}/${params.id}`;

  //An object value also be accessed by using brackets [] instead of dot (.) to access properties with dynamic value

  const extraDetail = CharacterData[params.id];

  const baseUrl = "https://api.genshin.dev";

  // when doing a fetch, nested objects are returned as undefined so we are initializing the nested data as an empty object
  const [charDetails, setcharDetails] = useState({
    skillTalents: [{}],
    passiveTalents: [{}],
    constellations: [{}],
  });

  useEffect(() => {}, [charDetails]);

  //  useState for loading
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();

    fetchMaterialData();
  }, []);

  const fetchData = async () => {
    const request = await axiosInstance.get(mergedUrl);

    if (request.status === 404) {
      setError("Task Not Found");
    }
    const data = await request.data;

    setcharDetails(data);
    setIsLoading(false);

    if (charDetails.length > 0) {
    }
  };

  if (error) {
    return <Navigate to="/Characters" />;
  }

  const fetchMaterialData = async () => {
    const getCharAscension = axiosInstance.get(
      requests.fetchCharacterAscension
    );
    const getBossMat = axiosInstance.get(requests.fetchBossMaterials);
    const getCommonAscension = axiosInstance.get(requests.fetchCommonAscension);
    const getLocalSpecial = axiosInstance.get(requests.fetchLocalSpecialties);

    await axios
      .all([getBossMat, getCharAscension, getCommonAscension, getLocalSpecial])
      .then(
        axios.spread((...response) => {
          const bossMat = response[0].data;
          const charAscension = response[1].data;
          const commonAscension = response[2].data;
          const local = response[3].data;
          console.log(charAscension);
          console.log(bossMat);
        })
      );
  };

  //  the api sends value as 0000-11-23
  //  the function turns the month number to their respective name
  //  11 -> November
  const getBirthday = () => {
    const date = new Date(charDetails.birthday);

    const month = date.toLocaleString("default", { month: "long" });
    const day = date.toLocaleString("default", { day: "numeric" });

    return day + " " + month;
  };

  return (
    <div className="w-full lg:w-4/5 m-auto md:mt-10 px-3 md:px-7 py-5 text-gray-300 bg-gray-750 text-base md:text-xl  lg:shadow-md transition-all duration-200 ease-in">
      {isLoading ? (
        <div className="flex h-screen items-center justify-center space-x-2 animate-pulse">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <h1 className=" text-3xl md:text-5xl font-bold text-white mb-3">
                {charDetails.name}
              </h1>

              <CharDetailsMain
                title="Rarity"
                content={charDetails.rarity}
                image={star}
              />
              <CharDetailsMain title="Vision" content={charDetails.vision} />
              <CharDetailsMain title="Weapon" content={charDetails.weapon} />
              <CharDetailsMain title="Nation" content={charDetails.nation} />
              <CharDetailsMain
                title="Affiliation"
                content={charDetails.affiliation}
              />
              <CharDetailsMain title="Birthday" content={getBirthday()} />

              <h2 className="md:w-9/12 mt-2">
                Description: {charDetails.description}
              </h2>
            </div>

            <img
              src={`${baseUrl}${mergedUrl}/portrait`}
              alt="Character Potrait"
              className="object-contain h-96 m-auto mt-5 md:m-0 md:mt-0"
            />
          </div>

          <div className="flex items-center mt-10 bg-gray-medium bg-opacity-70  h-12 filter drop-shadow-lg sticky top-2">
            <ul className="flex w-full   md:w-3/5 cursor-pointer transition-all duration-200 ease-in text-gray-300 md:p-4 md:text-lg lg:text-xl ">
              <Link
                className="nav-sub "
                activeClass="nav-sub active"
                to="SkillSection"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Skill Talents
              </Link>
              <Link
                className="nav-sub"
                activeClass="nav-sub active"
                to="PassiveSection"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Passive Talents
              </Link>
              <Link
                className="nav-sub"
                activeClass="nav-sub active"
                to="ConstellationSection"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Constellations
              </Link>
              <Link
                className="nav-sub"
                activeClass="nav-sub active"
                to="AscensionSection"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Ascension
              </Link>
            </ul>
          </div>

          <CharDetailsSub
            title="Skill Talents"
            info={charDetails.skillTalents}
            extraInfo={extraDetail.skillTalents}
            linkId="SkillSection"
          />
          <CharDetailsSub
            title="Passive Talents"
            info={charDetails.passiveTalents}
            extraInfo={extraDetail.passiveTalents}
            linkId="PassiveSection"
          />
          <CharDetailsSub
            title="Constellation"
            info={charDetails.constellations}
            extraInfo={extraDetail.constellations}
            linkId="ConstellationSection"
          />

          <CharacterAscension title="Ascension" linkId="AscensionSection" />
        </div>
      )}
    </div>
  );
}

export default CharacterDetails;
