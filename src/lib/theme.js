import { writable, derived } from "svelte/store";

// ── Theme definitions ──
export const themes = [
  {
    id: "light",
    label: "Light",
    bg: "#A9A9A9",
    text: "#1B2A4A",
    rose: "#C8A84E",
    plum: "#1B2A4A",
    accent: "#C8A84E",
    muted: "rgba(27, 42, 74, 0.12)",
    mutedText: "rgba(27, 42, 74, 0.40)",
    coverColor: "#1B2A4A",
    spineColor: "#142038",
    pageColor: "#FFFEF5",
    pageEdgeColor: "#C8A84E",
    coverTextColor: "#C8A84E",
    coverTextMuted: "rgba(200, 168, 78, 0.50)",
    coverBorder: "rgba(200, 168, 78, 0.20)",
    secondary: "#1B2A4A",
    antiPrimary: "#FFFFFF",
    bookHaloBg: "transparent",
  },
  {
    id: "dark",
    label: "Dark",
    bg: "#15133C",
    text: "#F1EEE9",
    rose: "#73777B",
    plum: "#EC994B",
    accent: "#73777B",
    muted: "rgba(241, 238, 233, 0.12)",
    mutedText: "rgba(241, 238, 233, 0.35)",
    coverColor: "#EC994B",
    spineColor: "#15133C",
    pageColor: "#FFFEF5",
    pageEdgeColor: "#73777B",
    coverTextColor: "#F1EEE9",
    coverTextMuted: "rgba(241, 238, 233, 0.50)",
    coverBorder: "rgba(115, 119, 123, 0.20)",
    secondary: "#EC994B",
    antiPrimary: "#1E1B4B",
    bookHaloBg: "radial-gradient(ellipse at center, rgba(236,153,75,0.35) 0%, rgba(115,119,123,0.2) 30%, transparent 60%)",
  },
];

// ── Detect system preference ──
function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// ── Current theme id — initialized from system ──
export const currentThemeId = writable(getSystemTheme());

// ── Listen for system theme changes ──
if (typeof window !== "undefined") {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    currentThemeId.set(e.matches ? "dark" : "light");
  });
}

// ── Derived: full theme object ──
export const currentTheme = derived(currentThemeId, ($id) => {
  return themes.find((t) => t.id === $id) || themes[0];
});

// ── Apply CSS custom properties to :root ──
if (typeof window !== "undefined") {
  currentTheme.subscribe((theme) => {
    const root = document.documentElement;
    root.style.setProperty("--color-cream", theme.bg);
    root.style.setProperty("--color-charcoal", theme.text);
    root.style.setProperty("--color-rose", theme.rose);
    root.style.setProperty("--color-plum", theme.plum);
    root.style.setProperty("--color-secondary", theme.secondary);
    root.style.setProperty("--color-anti", theme.antiPrimary);
    root.style.setProperty("--book-halo-bg", theme.bookHaloBg);

    // Smooth transition on theme change
    root.style.setProperty("transition", "background-color 0.4s ease, color 0.4s ease");
  });
}