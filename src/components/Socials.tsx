import IconCard from "./IconCard";
import { SiBehance, SiCodepen, SiGithub, SiHackerrank, SiLeetcode, SiLetterboxd, SiLinkedin } from "react-icons/si";

export default function Socials() {
  return (
    <div className='flex flex-col gap-2'>
      {/* Socials on top */}
      <div className='flex gap-2'>
        <IconCard
          icon={<SiLinkedin size={20} />}
          className='bg-bgoutline/50 border border-1 border-bghover hover:bg-bghover cursor-pointer'
        />
        <IconCard
          icon={<SiGithub size={20} />}
          className='bg-bgoutline/50 border border-1 border-bghover hover:bg-bghover cursor-pointer'
        />
        <IconCard
          icon={<SiBehance size={20} />}
          className='bg-bgoutline/50 border border-1 border-bghover hover:bg-bghover cursor-pointer'
        />
        <IconCard
          icon={<SiCodepen size={20} />}
          className='bg-bgoutline/50 border border-1 border-bghover hover:bg-bghover cursor-pointer'
        />
      </div>
      {/* Socials at the bottom - equalling */}
      <div className='flex gap-2'>
        <IconCard
          icon={<SiHackerrank size={20} />}
          className='bg-bgoutline/50 border border-1 border-bghover hover:bg-bghover cursor-pointer'
        />
        <IconCard
          icon={<SiLeetcode size={20} />}
          className='bg-bgoutline/50 border border-1 border-bghover hover:bg-bghover cursor-pointer'
        />
        <IconCard
          icon={<SiLetterboxd size={20} />}
          className='bg-bgoutline/50 border border-1 border-bghover hover:bg-bghover cursor-pointer'
        />
        <IconCard icon className='bg-bgoutline/50 border border-1 border-bghover' />
      </div>
    </div>
  );
}
