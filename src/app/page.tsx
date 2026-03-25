import { SelectSimulation } from "@/components/SelectSimulation/selectSimulationl";

const Simulations = () => {
  return (
    <div className="w-full flex justify-center mt-25 ">
      <div className="flex flex-col gap-8 max-w-md mx-auto ">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl text-center font-bold">GArt</h1>
          <p className="text-center text-gray-400">
            A collection of art simulations based in chaos attractors created
            with particles.
          </p>
          <SelectSimulation />
        </div>

        <div className="w-full h-px my-6 bg-gray-600"></div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl text-center font-bold">What is this?</h2>

          <p className="">
            This is a collection of art simulations based in chaos attractors
            created with particles. Each simulation has its own configuration
            and behavior. You can play with the configurations and see how the
            particles behave in different scenarios.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-xl text-center font-bold">
            Particle System Library
          </h3>
          <div>
            This project use the library
            <a
              href="https://www.npmjs.com/package/particle-system"
              target="_blank"
              className="text-cyan-400 underline mx-1 "
            >
              particle-system
            </a>
            to create the particle systems.
          </div>
        </div>

        <p>
          The library use threejs to create the particles and the simulation, so
          you can use the library to create your own particle systems.
        </p>
      </div>
    </div>
  );
};

export default Simulations;
