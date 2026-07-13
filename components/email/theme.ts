// These hex values are the email-safe equivalents of app/tokens.css.
// We resolve them here because email clients should not rely
// on CSS variables or OKLCH support.
export const emailTheme = {
  background: "#c7c0b2",
  foreground: "#1a1a1a",
  muted: "#ddd5c4",
  mutedForeground: "#5d5a54",
  link: "#1a1a1a",
  mutedLink: "#5d5a54",
  buttonBackground: "#1a1a1a",
  buttonForeground: "#ddd5c4",
  buttonBorder: "#1a1a1a",
} as const;
