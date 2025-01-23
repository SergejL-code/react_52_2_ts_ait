interface Airplane {
  name: string;
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Plane1: Airplane = {
  name: "tu 204",
  numberOfEngines: 2,
  isJet: false,
  maxHeight: 12_600,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Plane2: Airplane = {
  name: "su 100",
  numberOfEngines: 2,
  isJet: true,
  maxHeight: 12_500,
  capacity: 98,
};
