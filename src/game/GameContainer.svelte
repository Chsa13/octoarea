<script lang="ts">
  import ControlsContainer from "./ControlsContainer.svelte";
  import SquareContainer from "./SquareContainer.svelte";
  let startToken = 0;
  function handleStart(){startToken+=1}
  let newToken = 0;
  function handleNew(){newToken+=1}
  let square = 0
  function handleSquare(x:number){square=x}
  let MaxSquare = 0
  function handleMaxSquare(x:number){MaxSquare=x}
</script>
<div>
  <ControlsContainer
    onStart={handleStart}
    onNew={handleNew}
    square ={square}
    MaxSquare ={MaxSquare}
  />
  <SquareContainer
    {startToken}
    {newToken}
    {handleSquare}
    {handleMaxSquare}
  />
</div>