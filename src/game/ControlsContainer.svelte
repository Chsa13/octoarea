<script lang="ts">
  let {onNew, onCopy} = $props();
</script>
<style>
button{
  appearance: none;
  border: 1px solid black;
  border-radius: 2px;               /* угловато */
  background: rgb(255, 239, 239);
  color: black;

  box-shadow: 0 1px 0 rgba(0,0,0,.18), 0 6px 18px rgba(0,0,0,.18);;

  padding: 7px 14px;
  font: 600 14px/1.1 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
  letter-spacing: 0.02em;
  text-transform: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;
  user-select: none;

  transition: background-color .15s ease, color .15s ease, border-color .15s ease, transform .05s ease;
}
button:active{
  transform: translateY(1px);
}
.contb{
  display: inline-flex;
  padding-right: 16px;
}
.cont{
  padding-top:8px;
}

</style>
<div class="cont">
  <div class = "contb">
    <button
      onclick={onNew}
    >
      Новая игра
    </button>
</div>
  <button
    onclick={onCopy}
    title="Будет скопированна сслыка на игру"
  >
    Поделиться игрой
  </button>
</div>