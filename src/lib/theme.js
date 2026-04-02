import { writable, derived } from "svelte/store";

// ── Theme definitions ──
// primary   = accent color (input focus, card tops, highlights)
// secondary = structural color (buttons, strong UI elements)
// tertiary  = contrast surface (card bottoms, alternate backgrounds)
export const themes = [
  {
    id: "light",
    label: "Navy & Gold",
    bg: "#A9A9A9",
    text: "#1B2A4A",
    primary: "#1B2A4A",
    secondary: "#1B2A4A",
    tertiary: "#FFFFFF",
    accent: "#C8A84E",
    cardAccent: "#1B2A4A",
    muted: "rgba(27, 42, 74, 0.12)",
    mutedText: "rgba(27, 42, 74, 0.40)",
    coverColor: "#1B2A4A",
    spineColor: "#142038",
    pageColor: "#FFFEF5",
    pageEdgeColor: "#C8A84E",
    coverTextColor: "#C8A84E",
    coverTextMuted: "rgba(200, 168, 78, 0.50)",
    coverBorder: "rgba(200, 168, 78, 0.20)",
    bookHaloBg: "transparent",
  },
  {
    id: "dark",
    label: "Dark",
    bg: "#1A1A1A",
    text: "#E8E8E8",
    primary: "#cccccc",
    secondary: "#e61b0e",
    tertiary: "#2A2A2A",
    accent: "#cccccc",
    cardAccent: "#cccccc",
    muted: "rgba(232, 232, 232, 0.12)",
    mutedText: "rgba(232, 232, 232, 0.35)",
    coverColor: "#cccccc",
    spineColor: "#333333",
    pageColor: "#FFFEF5",
    pageEdgeColor: "#FFEF5F",
    coverTextColor: "#FFFFFF",
    coverTextMuted: "rgba(255,255,255,0.5)",
    coverBorder: "rgba(255,255,255,0.15)",
    bookHaloBg: "radial-gradient(ellipse at center, rgba(230,27,14,0.3) 0%, rgba(204,204,204,0.15) 30%, transparent 60%)",
  },
];

// ── Detect system preference for initial theme ──
function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// ── Current theme id ──
export const currentThemeId = writable(getInitialTheme());

// ── Derived: full theme object ──
export const currentTheme = derived(currentThemeId, ($id) => {
  return themes.find((t) => t.id === $id) || themes[0];
});

// ── Apply CSS custom properties to :root ──
if (typeof window !== "undefined") {
  currentTheme.subscribe((theme) => {
    const root = document.documentElement;
    root.style.setProperty("--color-bg", theme.bg);
    root.style.setProperty("--color-text", theme.text);
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-secondary", theme.secondary);
    root.style.setProperty("--color-tertiary", theme.tertiary);
    root.style.setProperty("--book-halo-bg", theme.bookHaloBg);
    root.style.setProperty("--color-card-accent", theme.cardAccent);
    root.style.setProperty("transition", "background-color 0.4s ease, color 0.4s ease");
  });
}