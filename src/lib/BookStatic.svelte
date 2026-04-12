<script>
  import { BOOK_TITLE } from "../lib/config.js";
  import bookImg from "../assets/book_static_final_nobg.png";
</script>

<section class="flex flex-col items-center justify-center py-10 md:py-16">
  <div class="relative flex items-center justify-center">
    <!-- Halo glow (theme-driven, glows from center behind the book) -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0
             w-[60%] h-[60%] rounded-full blur-[40px] transition-opacity duration-500"
      style="background: var(--book-halo-bg, transparent);"
    ></div>

    <!-- Book image — height-locked so different aspect ratios render the same size -->
    <img
      src={bookImg}
      alt={BOOK_TITLE}
      class="min-h-[200px] md:min-h-[200px] w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px] object-contain relative z-10 drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
    />

    <!-- 3D shadow ellipse below the book -->
    <div
      class="absolute bottom-[-12px] left-1/2 -translate-x-1/2 z-0
             w-[70%] h-[20px]
             rounded-[50%]
             bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.25)_0%,_rgba(0,0,0,0.08)_40%,_transparent_70%)]
             blur-[2px]"
    ></div>
  </div>

<div class="mt-8 px-16 lg:px-20 py-3 lg:py-4 rounded-[40%]
            bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_var(--color-primary)_20%,_transparent_70%)]">
    <p class="font-body text-2xl lg:text-3xl text-bg italic text-center">
      {BOOK_TITLE}
    </p>
  </div>
</section>