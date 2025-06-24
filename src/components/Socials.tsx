import { type JSX } from "react";
import { SiLinkedin, SiGithub, SiBehance, SiCodepen, SiHackerrank, SiLeetcode, SiLetterboxd } from "react-icons/si";
import IconCard from "./IconCard";

const socialsTop = [
  { id: "linkedin", icon: <SiLinkedin size={20} />, url: "https://www.linkedin.com/in/ayenjtt/" },
  { id: "github", icon: <SiGithub size={20} />, url: "https://github.com/jinvkyen" },
  { id: "behance", icon: <SiBehance size={20} />, url: "https://www.behance.net/ayenjtt" },
  { id: "codepen", icon: <SiCodepen size={20} />, url: "https://codepen.io/jinvkyen" },
];

const socialsBottom = [
  { id: "hackerrank", icon: <SiHackerrank size={20} />, url: "https://www.hackerrank.com/profile/ayenjtt" },
  { id: "leetcode", icon: <SiLeetcode size={20} />, url: "https://leetcode.com/u/jinvkyen/" },
  { id: "letterboxd", icon: <SiLetterboxd size={20} />, url: "https://letterboxd.com/filmswjin/" },
  { id: "placeholder", icon: null, url: "" },
];

export default function Socials() {
  const baseClass = "bg-bgoutline/50 border border-1 border-bghover";
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
