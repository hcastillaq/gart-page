"use client";
import { SYSTEMS_REGISTRY } from "@/core/systems/registry";
import { createGArt, GArtCallbacks, GArtConfig } from "particle-system";
import { FC, useEffect, useRef, useState } from "react";

export const Simulator: FC<{ systemKey: string }> = ({ systemKey }) => {
  const container = useRef<HTMLDivElement>(null);

  const [gArt, setGArt] = useState<GArtCallbacks>();
  const [particlesCount, setParticlesCount] = useState(0);

  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const [speedValue, setSpeedValue] = useState<number>(1);
  const [opacityValue, setOpacityValue] = useState<number>(1);
  const [colorValue, setColorValue] = useState<`#${string}`>("#ffffff");

  useEffect(() => {
    const systemMatchKey = Object.keys(SYSTEMS_REGISTRY).find(
      (key) => key.toLocaleLowerCase() === systemKey.toLocaleLowerCase(),
    )!;

    const system =
      SYSTEMS_REGISTRY[systemMatchKey as keyof typeof SYSTEMS_REGISTRY];

    const systemInstance = system.factory();
    setParticlesCount(systemInstance.getParticleCount());

    const gArtConfig: GArtConfig = {
      system: systemInstance,
      container: container.current!,
      material: {
        color: system.parameters.color as `#${string}`,
        sizeParticle: system.parameters.sizeParticle,
      },
      orbitConfig: {
        autoRotate: system.parameters.autoRotate,
        autoRotateSpeed: 0.5,
      },
      zoom: system.parameters.zoom,
      speed: system.parameters.speed,
      stats: true,
    };

    setAutoRotate(system.parameters.autoRotate);
    setSpeedValue(system.parameters.speed);
    setOpacityValue(system.parameters.opacity);
    setColorValue(system.parameters.color as `#${string}`);

    const callbacks = createGArt(gArtConfig);
    callbacks.start();
    setGArt(callbacks);
    return () => {
      callbacks.stop();
      callbacks.dispose();
    };
  }, [systemKey]);

  return (
    <div>
      <div className="absolute top-5 right-5 text-white text-xs flex flex-col gap-2 w-30">
        <div>
          <span>Particles:</span> {particlesCount}
        </div>

        <div className="flex items-center gap-4">
          <span>Auto Rotate</span>
          <input
            type="checkbox"
            checked={autoRotate}
            className="w-3 h-3 cursor-pointer"
            onChange={(e) => {
              const value = e.target.checked;
              setAutoRotate(value);
              gArt?.setAutoRotate(value);
            }}
          />
        </div>

        <div>
          <span>Color</span>
          <input
            type="color"
            className="w-full cursor-pointer"
            value={colorValue}
            onChange={(e) => {
              const value = e.target.value as `#${string}`;
              setColorValue(value);
              gArt?.setColor(value);
            }}
          />
        </div>

        <div>
          <span>Speed: {speedValue}</span>
          <input
            type="range"
            min={0}
            max={2}
            step={0.01}
            value={speedValue}
            className="w-full cursor-pointer"
            onChange={(e) => {
              const value = Number(e.target.value);
              gArt?.setSpeed(value);
              setSpeedValue(value);
            }}
          />
        </div>

        <div>
          <span>Opacity: {opacityValue}</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={opacityValue}
            className="w-full cursor-pointer"
            onChange={(e) => {
              const value = Number(e.target.value);
              gArt?.setOpacity(value);
              setOpacityValue(value);
            }}
          />
        </div>

        <button
          className="w-full bg-gray-600 rounded capitalize cursor-pointer py-1"
          onClick={() => gArt?.takePhoto()}
        >
          take a photo
        </button>
      </div>
      <div
        ref={container}
        className="w-screen h-screen bg-black cursor-crosshair"
      ></div>
    </div>
  );
};
