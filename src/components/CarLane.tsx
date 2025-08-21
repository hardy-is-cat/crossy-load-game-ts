import { type Row } from "../types";
import Car from "./Car";
import Road from "./Road";

type CarTypes = {
  rowIndex: number;
  rowData: Extract<Row, { type: "car" }>;
};

function CarLane({ rowIndex, rowData }: CarTypes) {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle, index) => (
        <Car
          key={index}
          rowIndex={rowIndex}
          initialTileIndex={vehicle.initialTileIndex}
          direction={rowData.direction}
          speed={rowData.speed}
          color={vehicle.color}
        />
      ))}
    </Road>
  );
}

export default CarLane;
