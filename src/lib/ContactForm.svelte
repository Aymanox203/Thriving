<script>
  import { BOOK_TITLE } from "../lib/config.js";

  // ── Shared state ──
  let modalType = $state(null); // "preorder" | "contribute" | null
  let name = $state("");
  let email = $state("");
  let phone = $state("");
  let content = $state("");
  let submitted = $state(false);

  function openPreorder() { modalType = "preorder"; }
  function openContribute() { modalType = "contribute"; }

  function close() {
    modalType = null;
  }

  function resetForm() {
    name = "";
    email = "";
    phone = "";
    content = "";
  }

  function handleSubmit() {
    submitted = true;
    setTimeout(() => {
      submitted = false;
      close();
      resetForm();
    }, 2500);
  }

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) close();
  }

  let isPreorder = $derived(modalType === "preorder");
  let isContribute = $derived(modalType === "contribute");
  let isOpen = $derived(modalType !== null);
</script>

<svelte:window onkeydown={(e) => { if (e.key === "Escape") close(); }} />

<!-- CTA Section -->
<section class="w-full flex flex-col items-center py-12 lg:py-16">
  <button
    onclick={openPreorder}
    class="font-display text-[15px] lg:text-[17px] tracking-[0.2em] uppercase
           px-12 lg:px-16 py-4 lg:py-5 bg-plum text-cream rounded-sm
           transition-all duration-300
           hover:bg-rose hover:shadow-[0_4px_20px_rgba(133,57,83,0.3)]
           active:scale-[0.97]"
  >
    Pre-Order Now
  </button>
  <button
    onclick={openContribute}
    class="font-body text-sm lg:text-base text-charcoal/50 mt-4 italic
           underline underline-offset-4 decoration-charcoal/20
           hover:text-charcoal/70 hover:decoration-charcoal/40
           transition-colors duration-300 cursor-pointer bg-transparent border-none"
  >
    Apply to contribute
  </button>
</section>

<!-- Modal overlay -->
{#if isOpen}
  <div
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    class="fixed inset-0 z-50 flex items-center justify-center p-4
           bg-black/40 backdrop-blur-sm
           animate-[fadeIn_0.2s_ease-out]"
    onclick={onBackdropClick}
  >
    <div
      class="bg-cream w-full max-w-lg rounded-lg shadow-[0_24px_80px_rgba(0,0,0,0.2)]
             p-8 md:p-10 relative
             animate-[slideUp_0.25s_ease-out]
             max-h-[90vh] overflow-y-auto"
    >
      <!-- Close button -->
      <button
        onclick={close}
        class="absolute top-4 right-4 text-charcoal/30 hover:text-charcoal transition-colors"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>

      <!-- Header — changes based on modal type -->
      <h2 class="font-display text-base lg:text-lg tracking-[0.25em] uppercase text-charcoal text-center mb-2">
        {#if isPreorder}
          Pre-Order {BOOK_TITLE}
        {:else}
          Apply to Contribute
        {/if}
      </h2>
      <p class="font-body text-sm text-charcoal/50 text-center mb-8">
        {#if isPreorder}
          Fill in your information and what you'd like to contribute
        {:else}
          Tell us about yourself and how you'd like to contribute to {BOOK_TITLE}
        {/if}
      </p>

      {#if submitted}
        <div class="text-center py-10">
          <p class="font-body text-charcoal text-xl">Thank you!</p>
          <p class="font-body text-charcoal/50 text-base mt-2">
            {#if isPreorder}
              Your pre-order has been placed.
            {:else}
              Your application has been submitted.
            {/if}
          </p>
        </div>
      {:else}
        <form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="space-y-5">

          <!-- Info section -->
          <p class="font-display text-[11px] tracking-[0.2em] uppercase text-charcoal/40 mb-1">
            Your Information
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
              <label for="modal-name" class="font-display text-[13px] tracking-[0.18em] uppercase text-charcoal/60">
                Name <span class="text-rose">*</span>
              </label>
              <input
                id="modal-name"
                type="text"
                bind:value={name}
                required
                class="w-full bg-transparent border-b border-charcoal/20 pb-2 font-body text-base text-charcoal outline-none
                       transition-colors duration-300
                       focus:border-rose
                       placeholder:text-charcoal/20"
                placeholder="Your name"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="modal-email" class="font-display text-[13px] tracking-[0.18em] uppercase text-charcoal/60">
                Email <span class="text-rose">*</span>
              </label>
              <input
                id="modal-email"
                type="email"
                bind:value={email}
                required
                class="w-full bg-transparent border-b border-charcoal/20 pb-2 font-body text-base text-charcoal outline-none
                       transition-colors duration-300
                       focus:border-rose
                       placeholder:text-charcoal/20"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="modal-phone" class="font-display text-[13px] tracking-[0.18em] uppercase text-charcoal/60">
              Phone <span class="text-rose">*</span>
            </label>
            <input
              id="modal-phone"
              type="tel"
              bind:value={phone}
              required
              class="w-full bg-transparent border-b border-charcoal/20 pb-2 font-body text-base text-charcoal outline-none
                     transition-colors duration-300
                     focus:border-rose
                     placeholder:text-charcoal/20"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <!-- Content section — only for contribute modal -->
          {#if isContribute}
            <div class="pt-2">
              <p class="font-display text-[11px] tracking-[0.2em] uppercase text-charcoal/40 mb-3">
                Your Contribution
              </p>
            </div>

            <div class="flex flex-col gap-2">
              <label for="modal-content" class="font-display text-[13px] tracking-[0.18em] uppercase text-charcoal/60">
                How would you like to contribute? <span class="text-rose">*</span>
              </label>
              <textarea
                id="modal-content"
                bind:value={content}
                required
                rows="4"
                class="w-full bg-transparent border-b border-charcoal/20 pb-2 font-body text-base text-charcoal outline-none resize-none
                       transition-colors duration-300
                       focus:border-rose
                       placeholder:text-charcoal/20"
                placeholder="Tell us how you want to contribute — writing, research, design, expertise..."
              ></textarea>
            </div>
          {/if}

          <!-- Submit row -->
          <div class="pt-4 flex items-center justify-center gap-6">
            <button
              type="submit"
              class="font-display text-[14px] tracking-[0.2em] uppercase
                     px-10 py-3.5 bg-plum text-cream rounded-sm
                     transition-all duration-300
                     hover:bg-rose
                     active:scale-[0.97]"
            >
              {#if isPreorder}
                Pre-Order
              {:else}
                Submit Application
              {/if}
            </button>
            {#if isPreorder}
              <span class="font-display text-xl text-charcoal/70">
                ¥1.00 CNY
              </span>
            {/if}
          </div>
        </form>
      {/if}
    </div>
  </div>
{/if}

<style>
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>