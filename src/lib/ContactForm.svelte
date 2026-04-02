<script>
  import { BOOK_TITLE } from "../lib/config.js";

  // ── Modal state ──
  let modalType = $state(null); // "preorder" | "contribute" | null

  // ── Pre-order form state ──
  let poName = $state("");
  let poEmail = $state("");
  let poContact = $state("");
  let price = $state(79.99);

  // ── Contribute form state ──
  let coName = $state("");
  let coEmail = $state("");
  let coWechat = $state("");
  let coContent = $state("");

  let submitted = $state(false);

  // ── Price slider config ──
  const PRICE_MIN = 79.99;
  const PRICE_MAX = 179.99;
  const PRICE_STEP = 1;
  let pricePct = $derived(((price - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100);

  function openPreorder() { modalType = "preorder"; }
  function openContribute() { modalType = "contribute"; }

  function close() { modalType = null; }

  function resetPreorder() {
    poName = ""; poEmail = ""; poContact = ""; price = 79.99;
  }

  function resetContribute() {
    coName = ""; coEmail = ""; coWechat = ""; coContent = "";
  }

  function handleSubmit() {
    submitted = true;
    setTimeout(() => {
      submitted = false;
      if (modalType === "preorder") resetPreorder();
      else resetContribute();
      close();
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
    class="font-display text-[17px] lg:text-[19px] tracking-[0.2em] uppercase
           px-12 lg:px-20 py-4 lg:py-5 bg-primary text-bg rounded-sm
           transition-all duration-300
           hover:bg-secondary hover:text-bg hover:shadow-[0_4px_20px_rgba(133,57,83,0.3)]
           active:scale-[0.97]"
  >
    Pre-Order Now
  </button>
  <button
    onclick={openContribute}
    class="font-body text-[15px] lg:text-[17px] text-text/50 mt-4 italic
           underline underline-offset-4 decoration-text/20
           hover:text-text/70 hover:decoration-text/40
           transition-colors duration-300 cursor-pointer bg-transparent border-none"
  >
    Apply to contribute
  </button>
</section>

<!-- ════════════════════════════════════════ -->
<!-- PRE-ORDER MODAL                         -->
<!-- ════════════════════════════════════════ -->
{#if isPreorder}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    class="fixed inset-0 z-50 flex items-center justify-center p-4
           bg-black/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
    onclick={onBackdropClick}
  >
    <div class="bg-bg w-full max-w-lg rounded-lg shadow-[0_24px_80px_rgba(0,0,0,0.2)]
                p-8 md:p-10 relative animate-[slideUp_0.25s_ease-out]
                max-h-[90vh] overflow-y-auto">

      <button onclick={close} class="absolute top-4 right-4 text-text/30 hover:text-text transition-colors" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6L6 18" /><path d="M6 6l12 12" />
        </svg>
      </button>

      <h2 class="font-display text-base lg:text-lg tracking-[0.25em] uppercase text-text text-center mb-2">
        Pre-Order {BOOK_TITLE}
      </h2>
      <p class="font-body text-sm text-text/50 text-center mb-8">
        Fill in your information and choose your price
      </p>

      {#if submitted}
        <div class="text-center py-10">
          <p class="font-body text-text text-xl">Thank you!</p>
          <p class="font-body text-text/50 text-base mt-2">Your pre-order has been placed.</p>
        </div>
      {:else}
        <form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="space-y-5">

          <p class="font-display text-[11px] tracking-[0.2em] uppercase text-text/40 mb-1">Your Information</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
              <label for="po-name" class="font-display text-[13px] tracking-[0.18em] uppercase text-text/60">
                Name <span class="text-primary">*</span>
              </label>
              <input id="po-name" type="text" bind:value={poName} required
                class="w-full bg-transparent border-b border-text/20 pb-2 font-body text-base text-text outline-none
                       transition-colors duration-300 focus:border-primary placeholder:text-text/20"
                placeholder="Your name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="po-email" class="font-display text-[13px] tracking-[0.18em] uppercase text-text/60">
                Email <span class="text-primary">*</span>
              </label>
              <input id="po-email" type="email" bind:value={poEmail} required
                class="w-full bg-transparent border-b border-text/20 pb-2 font-body text-base text-text outline-none
                       transition-colors duration-300 focus:border-primary placeholder:text-text/20"
                placeholder="you@email.com" />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="po-contact" class="font-display text-[13px] tracking-[0.18em] uppercase text-text/60">
              Preferred contact <span class="text-primary">*</span>
            </label>
            <input id="po-contact" type="text" bind:value={poContact} required
              class="w-full bg-transparent border-b border-text/20 pb-2 font-body text-base text-text outline-none
                     transition-colors duration-300 focus:border-primary placeholder:text-text/20"
              placeholder="WeChat ID / QQ / Phone / WhatsApp" />
          </div>

          <!-- Price slider -->
          <div class="pt-4">
            <div class="flex items-baseline justify-between mb-4">
              <p class="font-display text-[11px] tracking-[0.2em] uppercase text-text/40">Name Your Price</p>
              <div class="flex items-baseline font-display text-2xl font-bold text-text">
                <span>¥</span>
                <input
                  type="number" min={PRICE_MIN} max={PRICE_MAX} step="0.01"
                  bind:value={price}
                  onblur={() => {
                    if (isNaN(price) || price < PRICE_MIN) price = PRICE_MIN;
                    else if (price > PRICE_MAX) price = PRICE_MAX;
                  }}
                  onkeydown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      /** @type {HTMLInputElement} */ (e.target).blur();
                    }
                  }}
                  class="w-[90px] bg-transparent border-none outline-none font-display text-2xl font-bold text-text
                         appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
            </div>

            <div class="relative w-full h-10 flex items-center">
              <div class="absolute w-full h-[3px] rounded-full bg-text/10"></div>
              <div class="absolute h-[3px] rounded-full bg-primary" style="width: {pricePct}%;"></div>
              <input type="range" min={PRICE_MIN} max={PRICE_MAX} step={PRICE_STEP} bind:value={price}
                class="price-slider absolute w-full h-[3px] appearance-none bg-transparent cursor-pointer z-10" />
            </div>

            <div class="flex justify-between mt-1">
              <span class="font-display text-[10px] text-text/30">¥{PRICE_MIN.toFixed(2)}</span>
              <span class="font-display text-[10px] text-text/30">¥{PRICE_MAX.toFixed(2)}</span>
            </div>
          </div>

          <!-- Submit -->
          <div class="pt-4 flex flex-col items-center gap-3">
            <button type="submit"
              class="font-display text-[14px] tracking-[0.2em] uppercase
                     px-10 py-3.5 bg-primary text-bg rounded-sm
                     transition-all duration-300 hover:bg-secondary active:scale-[0.97]">
              Pre-Order Now · ¥0.00
            </button>
            <p class="font-body text-sm text-text/50 italic">
              Price to be paid on delivery: <span class="font-display font-bold text-text not-italic">¥{price.toFixed(2)}</span>
            </p>
          </div>
        </form>
      {/if}
    </div>
  </div>
{/if}

<!-- ════════════════════════════════════════ -->
<!-- CONTRIBUTE MODAL                        -->
<!-- ════════════════════════════════════════ -->
{#if isContribute}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    class="fixed inset-0 z-50 flex items-center justify-center p-4
           bg-black/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
    onclick={onBackdropClick}
  >
    <div class="bg-bg w-full max-w-lg rounded-lg shadow-[0_24px_80px_rgba(0,0,0,0.2)]
                p-8 md:p-10 relative animate-[slideUp_0.25s_ease-out]
                max-h-[90vh] overflow-y-auto">

      <button onclick={close} class="absolute top-4 right-4 text-text/30 hover:text-text transition-colors" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6L6 18" /><path d="M6 6l12 12" />
        </svg>
      </button>

      <h2 class="font-display text-base lg:text-lg tracking-[0.25em] uppercase text-text text-center mb-2">
        Apply to Contribute
      </h2>
      <p class="font-body text-sm text-text/50 text-center mb-8">
        Tell us about yourself and how you'd like to contribute to {BOOK_TITLE}
      </p>

      {#if submitted}
        <div class="text-center py-10">
          <p class="font-body text-text text-xl">Thank you!</p>
          <p class="font-body text-text/50 text-base mt-2">Your application has been submitted.</p>
        </div>
      {:else}
        <form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="space-y-5">

          <p class="font-display text-[11px] tracking-[0.2em] uppercase text-text/40 mb-1">Your Information</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
              <label for="co-name" class="font-display text-[13px] tracking-[0.18em] uppercase text-text/60">
                Name <span class="text-primary">*</span>
              </label>
              <input id="co-name" type="text" bind:value={coName} required
                class="w-full bg-transparent border-b border-text/20 pb-2 font-body text-base text-text outline-none
                       transition-colors duration-300 focus:border-primary placeholder:text-text/20"
                placeholder="Your name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="co-email" class="font-display text-[13px] tracking-[0.18em] uppercase text-text/60">
                Email <span class="text-primary">*</span>
              </label>
              <input id="co-email" type="email" bind:value={coEmail} required
                class="w-full bg-transparent border-b border-text/20 pb-2 font-body text-base text-text outline-none
                       transition-colors duration-300 focus:border-primary placeholder:text-text/20"
                placeholder="you@email.com" />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="co-wechat" class="font-display text-[13px] tracking-[0.18em] uppercase text-text/60">
              WeChat ID <span class="text-primary">*</span>
            </label>
            <input id="co-wechat" type="text" bind:value={coWechat} required
              class="w-full bg-transparent border-b border-text/20 pb-2 font-body text-base text-text outline-none
                     transition-colors duration-300 focus:border-primary placeholder:text-text/20"
              placeholder="Your WeChat ID" />
          </div>

          <div class="pt-2">
            <p class="font-display text-[11px] tracking-[0.2em] uppercase text-text/40 mb-3">Your Contribution</p>
          </div>

          <div class="flex flex-col gap-2">
            <label for="co-content" class="font-display text-[13px] tracking-[0.18em] uppercase text-text/60">
              How would you like to contribute? <span class="text-primary">*</span>
            </label>
            <textarea id="co-content" bind:value={coContent} required rows="4"
              class="w-full bg-transparent border-b border-text/20 pb-2 font-body text-base text-text outline-none resize-none
                     transition-colors duration-300 focus:border-primary placeholder:text-text/20"
              placeholder="Tell us how or what your contribution would be about in less than 100 words (Chapter contribution, Book/Cover design, Marketing...)"></textarea>
          </div>

          <!-- Submit -->
          <div class="pt-4 flex flex-col items-center gap-3">
            <button type="submit"
              class="font-display text-[14px] tracking-[0.2em] uppercase
                     px-10 py-3.5 bg-primary text-bg rounded-sm
                     transition-all duration-300 hover:bg-secondary active:scale-[0.97]">
              Submit Application
            </button>
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

  .price-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--color-primary);
    border: 3px solid var(--color-bg);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .price-slider::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
  }

  .price-slider::-webkit-slider-thumb:active {
    transform: scale(1.05);
  }

  .price-slider::-moz-range-thumb {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--color-primary);
    border: 3px solid var(--color-bg);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .price-slider::-moz-range-track {
    background: transparent;
    height: 3px;
  }

  .price-slider:focus {
    outline: none;
  }
</style>