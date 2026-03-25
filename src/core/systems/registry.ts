import { AizawaCPU } from "./aizawa/AizawaCPU";
import AizawaGPU from "./aizawa/AizawaGPU";
import { ChenCPU } from "./chen/ChenCPU";
import ChenGPU from "./chen/ChenGPU";
import { DadrasCPU } from "./dadras/DadrasCPU";
import DadrasGPU from "./dadras/DadrasGPU";
import { LorenzCPU } from "./lorenz/LorenzCPU";
import LorenzGPU from "./lorenz/LorenzGPU";
import { ThomasCPU } from "./thomas/ThomasCPU";
import ThomasGPU from "./thomas/ThomasGPU";

export const SYSTEMS_REGISTRY = {
  lorenz: {
    name: "Lorenz Attractor",
    description:
      "A system of ordinary differential equations that exhibits chaotic behavior.",
    factory: () => {
      const particlesCount = 5_000_000;
      return new LorenzCPU(particlesCount);
    },
    parameters: {
      color: "#00FFFF",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 200,
    },
  },
  lorenz_gpu: {
    name: "Lorenz Attractor (GPU)",
    description:
      "A system of ordinary differential equations that exhibits chaotic behavior, optimized for GPU computation.",
    factory: () => {
      const particlesCount = 8_000_000;
      return new LorenzGPU(particlesCount);
    },
    parameters: {
      color: "#00FFFF",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 200,
    },
  },
  aizawa: {
    name: "Aizawa Attractor",
    description:
      "A three-dimensional dynamical system that exhibits chaotic behavior with a distinctive toroidal structure.",
    factory: () => {
      const particlesCount = 500_000;
      return new AizawaCPU(particlesCount);
    },
    parameters: {
      color: "#FF00FF",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 5,
    },
  },
  aizawa_gpu: {
    name: "Aizawa Attractor (GPU)",
    description:
      "A three-dimensional dynamical system that exhibits chaotic behavior with a distinctive toroidal structure, optimized for GPU computation.",
    factory: () => {
      const particlesCount = 1_000_000;
      return new AizawaGPU(particlesCount);
    },
    parameters: {
      color: "#FF00FF",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 5,
    },
  },
  thomas: {
    name: "Thomas Attractor",
    description:
      "A cyclically symmetric attractor discovered by René Thomas, exhibiting conservative chaos.",
    factory: () => {
      const particlesCount = 1_000_000;
      return new ThomasCPU(particlesCount);
    },
    parameters: {
      color: "#00FF00",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 10,
    },
  },
  thomas_gpu: {
    name: "Thomas Attractor (GPU)",
    description:
      "A cyclically symmetric attractor discovered by René Thomas, exhibiting conservative chaos, optimized for GPU computation.",
    factory: () => {
      const particlesCount = 5_000_000;
      return new ThomasGPU(particlesCount);
    },
    parameters: {
      color: "#00FF00",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 10,
    },
  },
  dadras: {
    name: "Dadras Attractor",
    description: "A three-dimensional chaotic system with complex dynamics.",
    factory: () => {
      const particlesCount = 5_000_000;
      return new DadrasCPU(particlesCount);
    },
    parameters: {
      color: "#FFFF00",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 50,
    },
  },
  dadras_gpu: {
    name: "Dadras Attractor (GPU)",
    description:
      "A three-dimensional chaotic system with complex dynamics, optimized for GPU computation.",
    factory: () => {
      const particlesCount = 8_000_000;
      return new DadrasGPU(particlesCount);
    },
    parameters: {
      color: "#FFFF00",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 50,
    },
  },
  chen: {
    name: "Chen Attractor",
    description:
      "A chaotic system closely related to the Lorenz attractor, discovered by Guanrong Chen.",
    factory: () => {
      const particlesCount = 3_000_000;
      return new ChenCPU(particlesCount);
    },
    parameters: {
      color: "#FF6600",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 100,
    },
  },
  chen_gpu: {
    name: "Chen Attractor (GPU)",
    description:
      "A chaotic system closely related to the Lorenz attractor, discovered by Guanrong Chen, optimized for GPU computation.",
    factory: () => {
      const particlesCount = 8_000_000;
      return new ChenGPU(particlesCount);
    },
    parameters: {
      color: "#FF6600",
      sizeParticle: 0.01,
      opacity: 0.5,
      speed: 1,
      autoRotate: true,
      zoom: 100,
    },
  },
};
