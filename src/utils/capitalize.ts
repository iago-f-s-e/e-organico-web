export const capitalize = (value: string): string =>
  value.replace(/\b[a-z]/g, (match) => match.toUpperCase());
