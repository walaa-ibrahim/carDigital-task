import { HiOutlineKey } from "react-icons/hi";
import { CgOptions } from "react-icons/cg";
import { BiCylinder } from "react-icons/bi";
import { TbEngine } from "react-icons/tb";
import { RiPriceTag3Line } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";

import { IoMdSpeedometer } from "react-icons/io";

export const infoFeatures = [
  {
    featureName: "shape",
    featureIcon: <HiOutlineKey />,
    iconAvilable: true,
  },
  {
    featureName: "optionLevel",
    featureIcon: <CgOptions />,
    iconAvilable: true,
  },
  {
    featureName: "interiorColor",
    featureIcon: "/features/InteriorColor.svg",
    iconAvilable: false,
  },
  {
    featureName: "exteriorColor",
    featureIcon: "/features/ExteriorColor.svg",
    iconAvilable: false,
  },
  {
    featureName: "fuelType",
    featureIcon: "/features/FuelType.svg",
    iconAvilable: false,
  },
  {
    featureName: "gearType",
    featureIcon: "/features/Gear.svg",
    iconAvilable: false,
  },
  {
    featureName: "drivetrain",
    featureIcon: "/features/Drivetrain.svg",
    iconAvilable: false,
  },
  {
    featureName: "manufactureYear",
    featureIcon: "/features/year.svg",
    iconAvilable: false,
  },
  {
    featureName: "mileage",
    featureIcon: <IoMdSpeedometer />,
    iconAvilable: true,
  },
  {
    featureName: "price",
    featureIcon: <RiPriceTag3Line />,
    iconAvilable: true,
  },
  {
    featureName: "discountedPrice",
    featureIcon: <CiDiscount1 />,
    iconAvilable: true,
  },
  {
    featureName: "engineSize",
    featureIcon: <TbEngine />,
    iconAvilable: true,
  },
  {
    featureName: "cylinders",
    featureIcon: <BiCylinder />,
    iconAvilable: true,
  },
];
