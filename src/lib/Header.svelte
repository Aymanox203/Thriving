<script>
  import { BOOK_TITLE, BOOK_SUBTITLE_1, BOOK_SUBTITLE_2, BOOK_SUBTITLE_3 } from "../lib/config.js";
</script>

<header class="pt-10 pb-8 px-8">
  <div class="text-center">
    <h1 class="font-display text-3xl lg:text-5xl font-bold tracking-[0.15em] uppercase text-text">
      {BOOK_TITLE}
    </h1>
    <p class="font-display text-sm lg:text-base tracking-[0.2em] uppercase text-text/70 mt-2">
      {BOOK_SUBTITLE_1}
    </p>
    <p class="font-body text-xs lg:text-sm text-text/50 mt-3 max-w-md mx-auto leading-relaxed">
      {BOOK_SUBTITLE_2}
    </p>
    <p class="font-body text-xs lg:text-sm text-text/50 max-w-md mx-auto leading-relaxed">
      {BOOK_SUBTITLE_3}
    </p>
  </div>
  <div class="mx-auto mt-8 max-w-[calc(100%-8rem)] h-px bg-text/15"></div>
</header>