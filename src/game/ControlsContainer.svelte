<script lang="ts">
  let {onStart, onNew, square, MaxSquare} = $props();
</script>
<style>
  .text-cont{
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }
</style>
<div>
  <button
    onclick={onStart}
  >
    Запустить
  </button>
  <button
    onclick={onNew}
  >
    Новая игра
  </button>
  <div class = "text-cont">
    <div>
      Текущая площадь: {square*2}
    </div>
    <div>
      Возможная площадь: {MaxSquare*2}
    </div>
  </div>
</div>