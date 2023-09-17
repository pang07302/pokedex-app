import facebook from "./../assets/facebook.png";
import instagram from "./../assets/instagram.png";
import twitter from "./../assets/twitter.png";
import youtube from "./../assets/youtube.png";

export default function SocialMediaList() {
  const socialMediaLists = [
    {
      name: facebook,
      source: "https://www.facebook.com/Pokemon/",
      text: "facebook",
    },
    {
      name: instagram,
      source: "https://www.instagram.com/pokemon",
      text: "instagram",
    },
    { name: twitter, source: "https://twitter.com/pokemon", text: "twitter" },
    {
      name: youtube,
      source: "https://www.youtube.com/user/Pokemon",
      text: "youtube",
    },
  ];
  const getSocialMediaList = socialMediaLists.map((item) => {
    return (
      <div className="px-3" key={item.text}>
        <a href={item.source}>
          <img src={item.name} alt={item.text} width={80} height={80}></img>
        </a>
      </div>
    );
  });
  return <div className="flex flex-row">{getSocialMediaList}</div>;
}
