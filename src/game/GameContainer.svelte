<script lang="ts">
  import ControlsContainer from "./ControlsContainer.svelte";
  import SquareContainer from "./SquareContainer.svelte";
  let startToken = 0;
  function handleStart(){startToken+=1}
  let resetToken = 0;
  function handleReset(){resetToken+=1}
  let copyToken = 0;
  function handleCopy(){copyToken+=1}
  let countToken = 0;
  function handleCount(){countToken+=1}
  let square = 0
  function handleSquare(x:number){square=x}
  let MaxSquare = 0
  function handleMaxSquare(x:number){MaxSquare=x}
  let key:string|null = "";
  function handleInput(x:InputEvent){key=x.data}
  function getkey(){return key}
</script>
<div>
  <ControlsContainer
    onInput={handleInput}
    onStart={handleStart}
    onReset={handleReset}
    onCount={handleCount}
    onCopy={handleCopy}
    square ={square}
    MaxSquare ={MaxSquare}
  />
  <SquareContainer
    {getkey}
    {startToken}
    {resetToken}
    {countToken}
    {copyToken}
    {handleSquare}
    {handleMaxSquare}
  />
</div>