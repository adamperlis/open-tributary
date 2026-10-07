/** Shared ink for the animated hero and quieter artwork throughout the site. */
export const FLOW_INK = {
 filament: [.50, .62, .82],
 particle: [.47, .62, .86],
 highlight: [.94, .97, 1.0],
} as const;
/** Ink for white stages: the same blue current, with dark glints. */
export const FLOW_PAPER_INK = {
 filament: [.20, .34, .57],
 particle: [.16, .34, .62],
 highlight: [.025, .07, .14],
} as const;
export const flowColor = (ink: readonly number[]) => `rgb(${ink.map(channel => Math.round(channel * 255)).join(' ')})`;
