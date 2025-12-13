<script lang="ts">
  let {onStart, onReset, onCount, square, MaxSquare} = $props();
</script>
<style>
  .text-cont{
    display: flex;
    justify-content: space-between;
  }
</style>
<div>
  <button
    onclick={onStart}
  >
    Начать
  </button>
  <button
    onclick={onReset}
  >
    Отчистить
  </button>
  <div class = "text-cont">
    <div>
      Текущая площадь: {square}
    </div>
    <div>
      Возможная площадь: {MaxSquare}
    </div>
  </div>
</div>