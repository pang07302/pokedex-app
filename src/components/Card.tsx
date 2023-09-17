import bulbasaur from "./../assets/Bulbasaur.png";

export default function Card() {
  return (
    <div className="border-2 rounded-xl drop-shadow-md w-[18rem] h-[25rem] m-4">
      <img
        src={bulbasaur}
        alt="bulbasaur"
        width={250}
        height={200}
        className="m-3 p-2"
      ></img>
      <div className="m-4">
        <p className="text-gray-600">#0001</p>
        <h1>
          <b>Bulbasaur</b>
        </h1>
        {/* <TagCloud/> */}
      </div>
    </div>
  );
}
