"use client";

import { SYSTEMS_REGISTRY } from "@/core/systems/registry";
import { useRouter } from "next/navigation";
import { useState } from "react";

const systemKeys = Object.keys(SYSTEMS_REGISTRY);
const getSystemsByKey = (key: string) => {
  return SYSTEMS_REGISTRY[key as keyof typeof SYSTEMS_REGISTRY];
};

export const SelectSimulation = () => {
  const router = useRouter();
  const [selectedSystem, setSelectedSystem] = useState<string>(systemKeys[0]);

  return (
    <div className="flex flex-col gap-6 w-full">
      <select
        className="w-full border rounded py-2 px-3"
        value={selectedSystem}
        onChange={(e) => setSelectedSystem(e.target.value)}
      >
        {systemKeys.map((key) => {
          const system = getSystemsByKey(key);
          return (
            <option key={key} value={key}>
              {system.name}
            </option>
          );
        })}
      </select>

      <button
        className="w-full bg-cyan-400 text-black font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => router.push(`/${selectedSystem}`)}
      >
        View Simulation
      </button>
    </div>
  );
};
