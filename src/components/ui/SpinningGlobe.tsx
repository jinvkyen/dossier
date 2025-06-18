import Globe from "react-globe.gl";
import { useRef, useEffect, useState } from "react";


export default function SpinningGlobe({ width = 400, height = 400 }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeEl = useRef<any>(null);
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    if (!globeReady || !globeEl.current) return;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 5.5;
  }, [globeReady]);

  return (
    <Globe
      ref={globeEl}
      width={width}
      height={height}
      globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
      bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
      showAtmosphere={true}
      onGlobeReady={() => setGlobeReady(true)}
      backgroundColor='rgba(0,0,0,0)'
    />
  );
}
