import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import CharDetailsMain from "./CharDetailsMain";
import CharDetailsSub from "./CharDetailsSub";
import { Link } from "react-scroll";

function CharacterDetails({ match }) {
  const mergedUrl = `${requests.fetchCharacters}/${match.params.id}`;
  const baseUrl = "https://api.genshin.dev";

  const [charDetails, setcharDetails] = useState({
    skillTalents: [{}],
    passiveTalents: [{}],
    constellations: [{}],
  });
  const [skill, setSkill] = useState([]);
  const [passive, setPassive] = useState([]);
  const [constellation, setConstellation] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSkill(charDetails.skillTalents);
    setPassive(charDetails.passiveTalents);
    setConstellation(charDetails.constellations);
  }, [charDetails]);

  const fetchData = async () => {
    const request = await axios.get(mergedUrl);

    setcharDetails(request.data);
  };

  return (
    <div className="w-full lg:w-4/5 m-auto md:mt-10 px-3 md:px-7 py-5 text-white bg-gray-750 text-base md:text-xl  lg:shadow-md transition-all duration-200 ease-in">
      <div className="flex justify-between flex-col md:flex-row">
        <CharDetailsMain
          name={charDetails.name}
          rarity={charDetails.rarity}
          vision={charDetails.vision}
          weapon={charDetails.weapon}
          nation={charDetails.nation}
          affiliation={charDetails.affiliation}
          birthday={charDetails.birthday}
          description={charDetails.description}
        />

        <img
          src={`${baseUrl}${mergedUrl}/portrait`}
          alt=""
          className="object-contain h-96 m-auto mt-5 md:m-0 md:mt-0"
        />
      </div>

      <div className="flex items-center mt-10 bg-gray-500 h-12 sticky top-2">
        <ul className="flex w-full md:w-3/5 cursor-pointer transition-all duration-200 ease-in text-gray-300 md:p-4 md:text-xl lg:text-2xl">
          <Link
            className="nav-sub"
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
        </ul>
      </div>

      <CharDetailsSub
        title="Skill Talents"
        info={skill}
        linkId="SkillSection"
      />
      <CharDetailsSub
        title="Passive Talents"
        info={passive}
        linkId="PassiveSection"
      />
      <CharDetailsSub
        title="Constellation"
        info={constellation}
        linkId="ConstellationSection"
      />
    </div>
  );
}

export default CharacterDetails;
