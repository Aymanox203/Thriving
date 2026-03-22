<script>
  import photo1 from "../assets/moses2.jpg";
  import photo2 from "../assets/generic2.jpg";
  import photo3 from "../assets/generic3.jpg";

  const authors = [
    {
      name: "Moses C. Okonkwo",
      photo: photo1,
      description:
        "Doctoral Researcher at Zhejiang University with interests in Pschology, Technopreneurship, and Computer Vision. Spends most of his spare time on reading, sports, and meeting with different minds. ",
    },
    {
      name: "Van Dam",
      photo: photo2,
      description:
        "Award-winning researcher specializing in human-computer interaction and pioneering work in interactive graphics.",
    },
    {
      name: "Sam Alt",
      photo: photo3,
      description:
        "Interdisciplinary scholar bridging the gap between technology and the humanities with a focus on ethical AI.",
    },
  ];
</script>

<div class="flex flex-col gap-5 w-full">
  <h2
    class="font-display text-sm tracking-[0.3em] uppercase text-charcoal text-center lg:text-left mb-2"
  >
    Meet the Authors
  </h2>

  {#each authors as author}
    <div class="min-h-[110px] rounded-md overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] relative flex flex-row">
      <!-- Left section — secondary color -->
      <div class="w-[80px] shrink-0 bg-secondary"></div>

      <!-- Right section — anti-primary color -->
      <div class="flex-1 bg-anti flex flex-col justify-center pl-[48px] pr-4">
        <h3 class="font-display text-base font-bold tracking-wide text-charcoal">
          {author.name}
        </h3>
        <p class="font-body text-[13px] leading-relaxed text-charcoal/60 mt-1">
          {author.description}
        </p>
      </div>

      <!-- Profile photo — centered on the vertical border between sections -->
      <div class="absolute left-[80px] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          class="w-[80px] h-[80px] rounded-full overflow-hidden border-[3px] border-anti shadow-md"
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