<script>
  import photo1 from "../assets/moses2.jpg";
  import photo2 from "../assets/generic2.jpg";
  import photo3 from "../assets/generic3.jpg";

  const authors = [
    
{
      name: "John Doe",
      photo: photo1,
      description:
        "Doctoral Researcher at Zhejiang University with interests in Psychology, Technopreneurship, and Computer Vision. Spends most of his spare time on reading, sports, and meetings with different minds",
    },
  ];
  let author_word = (authors.length > 1) ? "Authors":"Author";
</script>

<div class="flex flex-col gap-6 lg:gap-8 w-full">
  <h2
    class="font-display text-sm lg:text-base tracking-[0.3em] uppercase text-text text-center lg:text-left mb-2"
  >
    Meet the {author_word}
  </h2>

  {#each authors as author}
    <div class="min-h-[120px] lg:min-h-[140px] rounded-md overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] relative flex flex-row">
      <!-- Left section — secondary color -->
      <div class="w-[80px] lg:w-[100px] shrink-0 bg-card-accent"></div>
      <!-- Right section — anti-primary color -->
      <div class="flex-1 bg-tertiary flex flex-col justify-center pl-[48px] lg:pl-[60px] pr-4 lg:pr-6 py-4">
        <h3 class="font-display text-base lg:text-lg font-bold tracking-wide text-text">
          {author.name}
        </h3>
        <p class="font-body text-[13px] lg:text-[15px] leading-relaxed text-text/60 mt-1 lg:mt-2">
          {author.description}
        </p>
      </div>

      <!-- Profile photo — centered on the vertical border between sections -->
      <div class="absolute left-[80px] lg:left-[100px] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          class="w-[80px] h-[80px] lg:w-[96px] lg:h-[96px] rounded-full overflow-hidden border-[3px] border-tertiary shadow-md"
        >
          <img
            src={author.photo}
            alt={author.name}
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  {/each}
</div>