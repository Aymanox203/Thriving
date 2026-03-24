<script>
  import { BOOK_TITLE, BOOK_SUBTITLE_1, BOOK_SUBTITLE_2, BOOK_SUBTITLE_3 } from "../lib/config.js";
</script>

<header class="pt-10 pb-8 px-8">
  <div class="text-center">
    <h1 class="font-display text-3xl lg:text-5xl font-bold tracking-[0.15em] uppercase text-charcoal">
      {BOOK_TITLE}
    </h1>
    <p class="font-display text-sm lg:text-base tracking-[0.2em] uppercase text-charcoal/70 mt-2">
      {BOOK_SUBTITLE_1}
    </p>
  </div>
  <div class="mx-auto mt-8 max-w-[calc(100%-8rem)] h-px bg-charcoal/15"></div>
</header>