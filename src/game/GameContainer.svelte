<script lang="ts">
  import ControlsContainer from "./ControlsContainer.svelte";
  import SquareContainer from "./SquareContainer.svelte";
  let newToken = 0;
  function handleNew(){newToken+=1}
  let square = 0
  function handleSquare(x:number){square=x}
  let MaxSquare = 0
  function handleMaxSquare(x:number){MaxSquare=x}
</script>
<div>
  <ControlsContainer
    onNew={handleNew}
    square ={square}
    MaxSquare ={MaxSquare}
  />
  <SquareContainer
    {newToken}
    {handleSquare}
    {handleMaxSquare}
  />
</div>