<script lang="ts">
  let {startToken, resetToken, countToken, handleSquare} = $props()
  import { onMount } from "svelte";
  import { config } from "./config";
  import { drawField, handleCanvasClick, setupCanvas, clear, drawTriangel } from "./CanvasMethods";
  import { generateCells, getSquareFromCoordinates, GetTargetCells, type Cells } from "./MathMethods";
  let canvas:HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null
  let cells: Cells = generateCells();
  onMount(()=>{
    ctx = setupCanvas(canvas, config.fieldWidth*config.cellSize, config.fieldHeight*config.cellSize);
    if (!ctx){
      return;
    };
    drawField(canvas);
  });
  $effect(() => {
    if (!ctx) return;
    resetToken;
    clear(canvas);
    cells = generateCells();
  });
  $effect(() => {
    if (!ctx) return;
    countToken;
    let targetCells = GetTargetCells(cells);
    if (targetCells.length == 3){
        let square = getSquareFromCoordinates(targetCells[0], targetCells[1], targetCells[2])
        handleSquare(square)
        drawTriangel(canvas, targetCells[0], targetCells[1], targetCells[2]);
    }
  });
  $effect(() => {
    if (!ctx) return;
    startToken;
    clear(canvas);
    
  });

</script>
<style>
  canvas{
    border: 2px solid black
  }
</style>
<canvas 
  bind:this={canvas}
  onclick= {(event)=>{handleCanvasClick(event, canvas, cells)}}
></canvas>