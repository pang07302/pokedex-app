import SocialMediaList from "./SocialMediaList";

export default function Footer() {
  return (
    <>
      <div className="bg-medium-purple h-[10rem] flex justify-center items-center">
        <SocialMediaList />
      </div>
      <div className="bg-dark-purple h-8 text-center">
        ©2023 Pokedex Project
      </div>
    </>
  );
}
