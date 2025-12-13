import type { FieldCoordinate } from "./CanvasMethods"
import { config } from "./config";
export type Cells=String[][]
export function generateCells():Cells{
  let cells: Cells = [];
  for (let i = 0; i<config.fieldHeight;i++){
    let row:String[]=[];
    for(let j = 0; j<config.fieldWidth; j++){
      row.push("")
    };
    cells.push(row);
  };
  return cells;
};
export function GetTargetCells(cells:Cells){
  let SuitablePoints:FieldCoordinate[]= [];
  for(let i in cells){
    for (let j in cells[i]){
      if (cells[i][j] == "1"){
        SuitablePoints.push({x:Number(j), y:Number(i)});
      }
    };
  };
  return SuitablePoints;
};
export function getSquareFromCoordinates(coord1: FieldCoordinate, coord2: FieldCoordinate, coord3: FieldCoordinate):number{
  let ans:number;
  ans = Math.abs(coord1.x*(coord2.y-coord3.y)+coord2.x*(coord3.y-coord1.y)+coord3.x*(coord1.y-coord2.y))/2
  return ans
}
export function getForbiddenCells(cells: Cells, quantity:number): Cells{
  cells[5][7] = "-1";
  cells[9][2] = "-1";
  cells[15][9] = "-1";
  return cells
}