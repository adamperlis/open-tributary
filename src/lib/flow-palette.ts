/** Shared ink for the animated hero and quieter artwork throughout the site. */
export const FLOW_INK = {
 filament: [.50, .62, .82],
 particle: [.47, .62, .86],
 highlight: [.94, .97, 1.0],
} as const;
export const flowColor = (ink: readonly number[]) => `rgb(${ink.map(channel => Math.round(channel * 255)).join(' ')})`;
