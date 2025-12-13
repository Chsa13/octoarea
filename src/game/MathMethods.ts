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
export function GetForbiddenCells(cells:Cells){
  let ForbiddenCells:FieldCoordinate[]= [];
  for(let i in cells){
    for (let j in cells[i]){
      if (cells[i][j] == "-1"){
        ForbiddenCells.push({x:Number(j), y:Number(i)});
      }
    };
  };
  return ForbiddenCells;
};
export function getSquareFromCoordinates(coord1: FieldCoordinate, coord2: FieldCoordinate, coord3: FieldCoordinate):number{
  let ans:number;
  ans = Math.abs(coord1.x*(coord2.y-coord3.y)+coord2.x*(coord3.y-coord1.y)+coord3.x*(coord1.y-coord2.y))/2
  return ans
}
export function RandomNumber(start:number, end:number):number{
  const from = Math.min(start, end);
  const to = Math.max(start, end);
  return from + Math.floor(Math.random() * (to - from + 1));
}
export function GenerateForbiddenCells(cells: Cells, quantity:number): Cells{
  for (let i=0; i<quantity; i++){
    cells[RandomNumber(0, 15)][RandomNumber(0, 15)] = "-1"
  }
  // cells[5][7] = "-1";
  // cells[9][2] = "-1";
  // cells[15][9] = "-1";
  return cells
}
function checkForbiddenCellNotInTriangel( ForbiddenCell:FieldCoordinate, 
                                          TargetCell1: FieldCoordinate, 
                                          TargetCell2:FieldCoordinate, 
                                          TargetCell3:FieldCoordinate):boolean{
  return !(getSquareFromCoordinates(TargetCell1, TargetCell2, TargetCell3) == 
  getSquareFromCoordinates(ForbiddenCell, TargetCell2, TargetCell3) + 
  getSquareFromCoordinates(ForbiddenCell, TargetCell1, TargetCell3) + 
  getSquareFromCoordinates(ForbiddenCell, TargetCell1, TargetCell2));
};
export function checkForbiddenCellsNotInTriangel(cells: Cells):boolean{
  let ans: boolean = true;
  let ForbiddenCells = GetForbiddenCells(cells);
  let TargetCells = GetTargetCells(cells);
  for(let ForbiddenCell of ForbiddenCells){
    if (!checkForbiddenCellNotInTriangel(ForbiddenCell, TargetCells[0], TargetCells[1], TargetCells[2])){
      ans = false;
      break;
    };
  }
  return ans;
};
export function clearTargetCells(cells: Cells): Cells{
  let TargetCells = GetTargetCells(cells);
  for (let TargetCell of TargetCells){
    cells[TargetCell.y][TargetCell.x] = ""
  }
  return cells
}