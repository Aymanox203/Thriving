<script>
  import { BOOK_TITLE } from "../lib/config.js";
  import bookImg from "../assets/book_static.png";
</script>

<section class="flex flex-col items-center justify-center py-10 md:py-16">
  <!-- Outer wrapper — overflow visible so halo bleeds out -->
  <div class="relative flex items-center justify-center overflow-visible">

    <!-- Halo glow — fixed large circle, centered behind the book -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0
             w-[400px] h-[400px] md:w-[500px] md:h-[500px]
             rounded-full blur-[60px] transition-all duration-500 pointer-events-none"
      style="background: var(--book-halo-bg, transparent);"
    ></div>

    <!-- Book container -->
    <div class="relative z-10">
      <img
        src={bookImg}
        alt={BOOK_TITLE}
        class="min-h-[200px] md:min-h-[200px] w-[400px] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
      />

      <!-- 3D shadow ellipse below the book -->
      <div
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10
         w-[800px] h-[800px]
         rounded-full blur-[80px] transition-all duration-500 pointer-events-none"
  style="background: var(--book-halo-bg, transparent);"
></div>
    </div>
  </div>

  <p class="mt-6 font-body text-base lg:text-lg text-charcoal/40 italic">
    {BOOK_TITLE}
  </p>
</section>