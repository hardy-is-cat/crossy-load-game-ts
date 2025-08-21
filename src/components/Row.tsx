import { type Row } from "../types";
import CarLane from "./CarLane";
import Forest from "./Forest";
import TruckLane from "./TruckLane";

type RowTypes = {
  rowIndex: number;
  rowData: Row;
};

function Row({ rowIndex, rowData }: RowTypes) {
  switch (rowData.type) {
    case "forest": {
      return <Forest rowIndex={rowIndex} rowData={rowData} />;
    }
    case "car": {
      return <CarLane rowIndex={rowIndex} rowData={rowData} />;
    }
    case "truck": {
      return <TruckLane rowIndex={rowIndex} rowData={rowData} />;
    }
  }
}

export default Row;
