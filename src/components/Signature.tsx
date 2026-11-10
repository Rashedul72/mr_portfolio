import { Mrs_Saint_Delafield } from 'next/font/google';

const script = Mrs_Saint_Delafield({ weight: '400', subsets: ['latin'], display: 'swap' });

interface SignatureProps {
  className?: string;
  /** Font size class, e.g. "text-4xl" */
  size?: string;
}

/** Handwritten signature. */
export default function Signature({ className = '', size = 'text-4xl' }: SignatureProps) {
  return (
    <span
      className={`inline-flex flex-col items-start leading-normal select-none ${className}`}
      role="img"
      aria-label="MD Rashedul Islam Junayed signature"
    >
      <span
        aria-hidden
        className={`${script.className} ${size} whitespace-nowrap -rotate-3 bg-gradient-to-r from-cyan-300 via-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.35)] px-3 py-2 -mx-3 -my-2`}
      >
        MD Rashedul Islam Junayed
      </span>
    </span>
  );
}
