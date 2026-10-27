export type AnimConfig = {
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  scroll?: boolean;
  [key: string]: unknown;
};

/** Spread onto an element: `<div {...anim({ from: { opacity: 0, y: 30 }, scroll: true })} />` */
export const anim = (config: AnimConfig) => ({
  'data-gsap': JSON.stringify(config),
});
