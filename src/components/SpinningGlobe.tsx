/* eslint-disable @typescript-eslint/no-explicit-any */
// components/DotGlobe.tsx
import Globe from "react-globe.gl";
import { useEffect, useRef } from "react";

// Define the shape of dot points
type DotPoint = {
  lat: number;
  lng: number;
  size?: number;
  color?: string;
};

export default function SpinningGlobe({ width = 500, height = 500 }: { width?: number; height?: number }) {
  const globeEl = useRef<any>(null);

  // Create dots with better distribution for a more uniform appearance
  const dots: DotPoint[] = Array.from({ length: 1200 }, () => {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    return {
      lat: ((Math.PI / 2 - phi) * 180) / Math.PI,
      lng: (theta * 180) / Math.PI,
      size: Math.random() * 0.3 + 0.2,
      color: "#ffffff",
    };
  });

  useEffect(() => {
    if (!globeEl.current) return;

    const globe = globeEl.current;

    // Set initial camera position
    globe.pointOfView({ lat: 60, lng: 0, altitude: 2.5 }, 0);

    const controls = globe.controls();
    controls.enableDamping = true;
    controls.dampingFactor = 0.01;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;

    // Animation loop for continuous smooth rotation
    let animationId: number;

    const animate = () => {
      if (controls) {
        controls.update();
      }
      animationId = requestAnimationFrame(animate);
    };

    // Start animation loop
    animate();

    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
      <Globe
        ref={globeEl}
        width={width}
        height={height}
        backgroundColor='rgba(0,0,0,0)'
        showGlobe={true}
        globeMaterial={{
          transparent: true,
          opacity: 0.1,
          color: "#000000",
        }}
        showAtmosphere={true}
        atmosphereColor='#ffffff'
        atmosphereAltitude={0.15}
        pointsData={dots}
        pointLat='lat'
        pointLng='lng'
        pointColor='color'
        pointAltitude={0.005}
        pointRadius={(d: DotPoint) => d.size || 0.2}
        pointResolution={10}
        pointsMerged={false}
        rendererConfig={{
          antialias: true,
          alpha: true,
        }}
      />
  );
}
