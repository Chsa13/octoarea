<script lang="ts">
  import ControlsContainer from "./ControlsContainer.svelte";
  import SquareContainer from "./SquareContainer.svelte";
  let startToken = 0;
  function handleStart(){startToken+=1}
  let resetToken = 0;
  function handleReset(){resetToken+=1}
  let countToken = 0;
  function handleCount(){countToken+=1}
  let square = 0
  function handleSquare(x:number){square=x}
</script>
<div>
  <ControlsContainer
    onStart={handleStart}
    onReset={handleReset}
    onCount={handleCount}
    square ={square}
  />
  <SquareContainer
    {startToken}
    {resetToken}
    {countToken}
    {handleSquare}
  />
</div>