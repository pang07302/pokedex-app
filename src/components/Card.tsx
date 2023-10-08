import bulbasaur from "./../assets/Bulbasaur.png";
import TagCloud from "./TagCloud";

export default function Card() {
  return (
    <div className="border-2 rounded-xl drop-shadow-md w-[18rem] h-[25rem] m-4 flex flex-col justify-center items-center">
      <img
        src={bulbasaur}
        alt="bulbasaur"
        width={250}
        height={200}
        className="m-3 p-2"
      />

      <div className="mt-3 flex flex-col w-1/3 justify-center">
        <TagCloud type="grass" />
        <div className="text-gray-600 ml-3 mt-2 pl-2">#0001</div>
        <div className="pl-2">
          <b>Bulbasaur</b>
        </div>
      </div>
    </div>
  );
}
