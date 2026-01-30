<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  interface Props{
    onclick: MouseEventHandler<HTMLButtonElement>;
    title?: string
    children: Snippet
  }
  let {onclick, title, children }: Props = $props();
</script>
<style>
  button{
    border: 2px solid var(--border-color);
    border-radius: 3px;
    color: var(--button-text-color);
    background-color: var(--button-color);
    
    font-family: var(--font-family);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    letter-spacing: var(--letter-spacing);
    line-height: var(--line-height-normal);
    padding: var(--s-1) var(--s-3);
    
    cursor: pointer;
    user-select: none;
  
  }
  button:hover{
    background-color: var(--button-hover-color);
  }
  button:active{
    transform: translateY(1px);
  }
</style>
<button onclick={onclick} title={title}>
  {@render children()}
</button>