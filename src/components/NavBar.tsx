import pokeball from "./../assets/pokeball.png";
import pokedex from "./../assets/pokedex.png";
import DropDownMenu from "./DropDownMenu";

export default function NavBar() {
  const content = [
    { title: "Type", path: "#" },
    { title: "Abilities", path: "#" },
  ];
  return (
    <ul className="bg-medium-purple overflow-hidden">
      <li className="float-right px-4 ">
        {/* <a className="text-white text-center pt-3 flex flex-col items-center active:bg-dark-purple hover:bg-dark-purple"> */}
        <img
          src={pokedex}
          alt="pokedex"
          style={{ width: "1.5rem", height: "1.5rem" }}
          className=""
        ></img>
        <DropDownMenu label="Mechanics" content={content}></DropDownMenu>
        {/* </a> */}
      </li>

      <li className="float-right pr-6">
        <a className="text-white text-center pt-3 flex flex-col items-center active:bg-dark-purple hover:bg-dark-purple">
          <img
            src={pokeball}
            alt="pokeball"
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></img>
          Pokemon
        </a>
      </li>
    </ul>
  );
}
