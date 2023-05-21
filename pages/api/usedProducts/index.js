import { usedCarsData } from "../../../data/usedCars";
export default function handler(req, res) {
  res.status(200).json({ usedCarsData });
}
