import { type JSX } from "react";
import { SiLinkedin, SiGithub, SiBehance, SiCodepen, SiHackerrank, SiLeetcode, SiLetterboxd } from "react-icons/si";
import IconCard from "./IconCard";

const socialsTop = [
  { id: "linkedin", icon: <SiLinkedin className="text-2xl md:text-xl" />, url: "https://www.linkedin.com/in/ayenjtt/" },
  { id: "github", icon: <SiGithub className="text-2xl md:text-xl" />, url: "https://github.com/jinvkyen" },
  { id: "behance", icon: <SiBehance className="text-2xl md:text-xl" />, url: "https://www.behance.net/ayenjtt" },
  { id: "codepen", icon: <SiCodepen className="text-2xl md:text-xl" />, url: "https://codepen.io/jinvkyen" },
];

const socialsBottom = [
  { id: "hackerrank", icon: <SiHackerrank className="text-2xl md:text-xl" />, url: "https://www.hackerrank.com/profile/ayenjtt" },
  { id: "leetcode", icon: <SiLeetcode className="text-2xl md:text-xl" />, url: "https://leetcode.com/u/jinvkyen/" },
  { id: "letterboxd", icon: <SiLetterboxd className="text-2xl md:text-xl" />, url: "https://letterboxd.com/filmswjin/" },
  { id: "placeholder", icon: null, url: "" },
];

export default function Socials() {
  const baseClass =
    "bg-bgoutline/50 border border-1 border-bghover w-16 h-16 md:w-16 md:h-16 lg:w-10 lg:h-10 xl:w-16 xl:h-16";
  const hoverableClass = "hover:bg-bghover cursor-pointer";

  const renderSocials = (
    list: Array<{ id: string; icon: JSX.Element | null; url: string }>
  ) =>
    list.map(({ id, icon, url }) => {
      const isClickable = !!icon && !!url;
      const classes = `${baseClass} ${isClickable ? hoverableClass : ""}`;

      const card = <IconCard icon={icon} className={classes.trim()} />;

      return isClickable ? (
        <a key={id} href={url} target='_blank' rel='noopener noreferrer'>
          {card}
        </a>
      ) : (
        <div key={id}>{card}</div>
      );
    });

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>{renderSocials(socialsTop)}</div>
      <div className='flex gap-2'>{renderSocials(socialsBottom)}</div>
    </div>
  );
}
