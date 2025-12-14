<script lang="ts">
  let {square, MaxSquare} = $props();
</script>
<style>
  .text-cont{
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    padding-bottom: 8px;
  }
</style>
<div>
  <div class = "text-cont">
    <div>
      Текущая площадь: {square*2}
    </div>
    <div>
      Возможная площадь: {MaxSquare*2}
    </div>
  </div>
</div>