// import { arrayRange } from "helper/utils"

export const initImageGallery = {
  interior: {
    front: `/images/placeholder/car/interior/front.webp`,
    rear: `/images/placeholder/car/interior/rear.webp`,
    frontLeft: `/images/placeholder/car/interior/front-left.webp`,
    frontRight: `/images/placeholder/car/interior/front-right.webp`,
  },
  exterior: {
    left: `/images/placeholder/car/exterior/left.webp`,
    right: `/images/placeholder/car/exterior/right.webp`,
    frontLeft: `/images/placeholder/car/exterior/front-left.webp`,
    frontRight: `/images/placeholder/car/exterior/front-right.webp`,
    rearLeft: `/images/placeholder/car/exterior/rear-left.webp`,
    rearRight: `/images/placeholder/car/exterior/rear-right.webp`,
  },
};

export const initProduct = {
  basicInfo: {
    // step 1
    brandId: "",
    carModelId: "",
    origin: "",
    translations: {
      en: {
        title: "",
        description: "",
      },
      ar: {
        title: "",
        description: "",
      },
    },
    optionLevel: "standard",
    shape: "sedan",
    interiorColor: "",
    exteriorColor: "",
    fuelType: "gasoline",
    gearType: "all",
    drivetrain: "all",
    manufactureYear: 0,
    mileage: 0,
    price: 0,
    discountedPrice: 0,
    engineSize: 0,
    cylinders: 0,
    imageGallery: initImageGallery,
  },
  safetyFeatures: {
    // step 2
    airbags: 0,
    abs: true,
    centerLock: true,
    electronicStabilityProgram: true,
    brakeAssistSystem: true,
    safetyBelts: true,
    electronicBrakeForceDistribution: true,
    TractionControlSystem: true,
    autoHold: true,
  },
  comfortFeatures: {
    // step 3
    FrontAndRearPowerWindows: true,
    acClimateControl: true,
    remoteControl: true,
    leatherSeats: true,
    rearACVents: true,
    fingerprintIgnition: true,
    steeringWheelControls: true,
    cruiseControl: true,
    memorySeats: true,
    powerSeats: true,
    seatsHeating: true,
    seatsCooling: true,
    voiceControl: true,
    rearCentralArmRest: true,
    paddleShift: true,
  },
  technologiesFeatures: {
    // step 4
    rearCamera: true,
    navigationSystem: true,
    powerConnection: true,
    mediaScreen: true,
    radio: true,
    electricalMirrors: true,
    rimWheels: true,
    rearParkingSensors: true,
    ledLamps: true,
    windowDefroster: true,
    frontSensors: true,
    rearFogLights: true,
    daytimeRunningLights: true,
    headlampWashers: true,
    electricalFoldOutsideMirror: true,
    headlightElectronicAdjustment: true,
    autoTentMirrors: true,
  },
};

export const optionsLevels = [
  { value: "standard", label: "Standard" },
  { value: "half", label: "Half" },
  { value: "full", label: "Full" },
];

export const shapeOptions = [
  { value: "sedan", label: "Sedan" },
  { value: "hatchback", label: "Hatchback" },
  { value: "4x4", label: "4x4" },
  { value: "crossover", label: "Crossover" },
  { value: "pickup", label: "Pickup" },
  { value: "truck", label: "Truck" },
  { value: "bus", label: "Bus" },
];

export const fuelTypeOptions = [
  { value: "gasoline", label: "Gasoline" },
  { value: "diesel", label: "Diesel" },
  { value: "hybrid", label: "Hybrid" },
  { value: "electricity", label: "Electric" },
];

export const gearTypeOptions = [
  { value: "all", label: "All" },
  { value: "manual", label: "Manual" },
  { value: "automatic", label: "Automatic" },
  { value: "cvt", label: "CVT" },
];

export const drivetrainOptions = [
  { value: "all", label: "All" },
  { value: "double4x4", label: "Double 4x4" },
  { value: "rwd", label: "RWD" },
  { value: "fwd", label: "FWD" },
  { value: "awd", label: "AWD" },
];

// export const manufactureYearRange =
//     arrayRange(1970, new Date().getFullYear() + 2)
//         .map(year => ({ value: year, label: year }))

export const errorsText = {
  brandId: "Please choose a valid Brand",
  carModelId: "Please choose a valid Model",
  origin: "", // optional
  title: "Title should has a string value",
  description: "", // optional
  optionLevel: "Please choose a valid options Level",
  shape: "Please choose a valid Shape",
  interiorColor: "Please choose a valid Interior Color",
  exteriorColor: "Please choose a valid Exterior Color",
  fuelType: "Please choose a valid Fuel Type",
  gearType: "Please choose a valid Gear Type",
  drivetrain: "Please choose a valid Drivetrain",
  manufactureYear: "Manufacture Year should be Integer value",
  mileage: "Mileage should be Integer value",
  price: "Price should be a Number",
  discountedPrice: "Discounted Price should be a Number",
  engineSize: "Engine-Size should be a Number",
  cylinders: "Cylinders should be a Number",
};
