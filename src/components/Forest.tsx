import { type Row } from "../types";
import Grass from "./Grass";
import Tree from "./Tree";

type ForestTypes = {
  rowIndex: number;
  rowData: Extract<Row, { type: "forest" }>;
};

function Forest({ rowIndex, rowData }: ForestTypes) {
  return (
    <Grass rowIndex={rowIndex}>
      {rowData.trees.map((tree, index) => (
        <Tree key={index} tileIndex={tree.tileIndex} height={tree.height} />
      ))}
    </Grass>
  );
}

export default Forest;
