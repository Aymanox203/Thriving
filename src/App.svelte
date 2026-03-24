<script>
  import Header from "./lib/Header.svelte";
  import MeetAuthors from "./lib/MeetAuthors.svelte";
  import BookCanvas from "./lib/BookCanvas.svelte";
  import BookStatic from "./lib/BookStatic.svelte";
  import ContactForm from "./lib/ContactForm.svelte";
  import Footer from "./lib/Footer.svelte";
  import ThemeSwitcher from "./lib/ThemeSwitcher.svelte";

  import "./lib/theme.js";
</script>

<div class="min-h-screen bg-cream flex flex-col font-body text-charcoal antialiased transition-colors duration-400">
  <ThemeSwitcher />
  <Header />

  <main class="flex-1 flex flex-col items-center">

    <!-- Authors + Book: side by side on lg, stacked on mobile -->
    <section class="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16 flex flex-col lg:flex-row lg:items-center lg:gap-16">

      <!-- Left: Author cards -->
      <div class="lg:w-[480px] shrink-0">
        <MeetAuthors />
      </div>

      <!-- Right: Book model, centered -->
      <div class="flex-1 flex flex-col items-center justify-center mt-12 lg:mt-0">
        <BookStatic />
      </div>
    </section>

    <ContactForm />
  </main>

  <Footer />
</div>