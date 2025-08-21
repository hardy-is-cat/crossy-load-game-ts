import { type Row } from "../types";
import Road from "./Road";
import Truck from "./Truck";

type TruckTypes = {
  rowIndex: number;
  rowData: Extract<Row, { type: "truck" }>;
};

function TruckLane({ rowIndex, rowData }: TruckTypes) {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle, index) => (
        <Truck
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

export default TruckLane;
