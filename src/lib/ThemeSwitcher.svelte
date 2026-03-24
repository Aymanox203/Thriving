<script>
  import { currentThemeId } from "./theme.js";

  function toggle() {
    currentThemeId.update((id) => (id === "light" ? "dark" : "light"));
  }

  let isDark = $derived($currentThemeId === "dark");
</script>

<button
  onclick={toggle}
  class="fixed top-4 left-4 z-50 w-9 h-9 rounded-full border border-current opacity-40 hover:opacity-100
         transition-opacity duration-300 flex items-center justify-center"
  aria-label="Toggle theme"
>
  {#if isDark}
    <!-- Sun icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  {:else}
    <!-- Moon icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  {/if}
</button>