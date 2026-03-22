<script>
  import { BOOK_TITLE } from "../lib/config.js";

  let open = $state(false);
  let name = "";
  let email = "";
  let phone = "";
  let comment = "";
  let submitted = $state(false);

  function handleSubmit() {
    submitted = true;
    setTimeout(() => {
      submitted = false;
      open = false;
      name = "";
      email = "";
      phone = "";
      comment = "";
    }, 2500);
  }

  function close() {
    open = false;
  }

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) close();
  }

  function onKeydown(e) {
    if (e.key === "Escape") close();
  }
</script>

<svelte:window on:keydown={onKeydown} />

<!-- CTA Button -->
<section class="w-full flex justify-center py-12">
  <button
    onclick={() => (open = true)}
    class="font-display text-[15px] tracking-[0.2em] uppercase
           px-12 py-4 bg-plum text-cream rounded-sm
           transition-all duration-300
           hover:bg-rose hover:shadow-[0_4px_20px_rgba(133,57,83,0.3)]
           active:scale-[0.97]"
  >
    Pre-Order Now
  </button>
</section>

<!-- Modal overlay -->
{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div
  tabindex="-1"
    role="dialog"
    aria-modal="true"
    class="fixed inset-0 z-50 flex items-center justify-center p-4
           bg-black/40 backdrop-blur-sm
           animate-[fadeIn_0.2s_ease-out]"
    onclick={onBackdropClick}
  >
    <div
      class="bg-cream w-full max-w-lg rounded-lg shadow-[0_24px_80px_rgba(0,0,0,0.2)]
             p-8 md:p-10 relative
             animate-[slideUp_0.25s_ease-out]"
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

      <h2 class="font-display text-sm tracking-[0.3em] uppercase text-charcoal text-center mb-8">
        Pre-Order {BOOK_TITLE}
      </h2>

      {#if submitted}
        <div class="text-center py-10">
          <p class="font-body text-charcoal text-lg">Thank you!</p>
          <p class="font-body text-charcoal/50 text-base mt-1">Your pre-order has been placed.</p>
        </div>
      {:else}
        <form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
              <label for="modal-name" class="font-display text-[13px] tracking-[0.18em] uppercase text-charcoal/60">
                Name
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
                Email
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
              Phone
            </label>
            <input
              id="modal-phone"
              type="tel"
              bind:value={phone}
              class="w-full bg-transparent border-b border-charcoal/20 pb-2 font-body text-base text-charcoal outline-none
                     transition-colors duration-300
                     focus:border-rose
                     placeholder:text-charcoal/20"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="modal-comment" class="font-display text-[13px] tracking-[0.18em] uppercase text-charcoal/60">
              Comment
            </label>
            <textarea
              id="modal-comment"
              bind:value={comment}
              required
              rows="3"
              class="w-full bg-transparent border-b border-charcoal/20 pb-2 font-body text-base text-charcoal outline-none resize-none
                     transition-colors duration-300
                     focus:border-rose
                     placeholder:text-charcoal/20"
              placeholder="Why would you read this book?"
            ></textarea>
          </div>

          <!-- Submit row: button + price -->
          <div class="pt-4 flex items-center justify-center gap-6">
            <button
              type="submit"
              class="font-display text-[13px] tracking-[0.2em] uppercase
                     px-10 py-3 bg-plum text-cream rounded-sm
                     transition-all duration-300
                     hover:bg-rose
                     active:scale-[0.97]"
            >
              Pre-Order
            </button>
            <span class="font-display text-lg text-charcoal/70">
              $0.00
            </span>
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