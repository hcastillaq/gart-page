import { Simulator } from "@/components/Simulator/simulator";
import { SYSTEMS_REGISTRY } from "@/core/systems/registry";
import { NextPage } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    systemKey: string;
  }>;
}

const existsSystem = (systemKey: string) => {
  const systems = Object.keys(SYSTEMS_REGISTRY).map((key) =>
    key.toLocaleLowerCase(),
  );

  return systems.includes(systemKey.toLocaleLowerCase());
};

const SimulatorPage: NextPage<Props> = async ({ params }) => {
  const { systemKey } = await params;

  if (!existsSystem(systemKey)) {
    return notFound();
  }

  return <Simulator systemKey={systemKey} />;
};

export default SimulatorPage;
