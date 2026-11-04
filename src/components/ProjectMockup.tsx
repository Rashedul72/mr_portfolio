import Image from 'next/image';
import { Globe, type LucideIcon } from 'lucide-react';

export interface MockupChip {
  icon: LucideIcon;
  title: string;
  sub: string;
}

interface ProjectMockupProps {
  src: string;
  alt: string;
  url: string;
  chips: MockupChip[];
  /** Focal point of the background scene, e.g. "70% 40%" */
  bgPosition?: string;
  /** Mirror the composition (devices right, cards left) */
  flip?: boolean;
  /** Finished mockup picture (e.g. /images/mockups/<slug>.webp). Shown instead of the CSS mockup when the file exists. */
  photo?: string;
}

function Chip({ icon: Icon, title, sub }: MockupChip) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-white/25 bg-white/15 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
        <Icon className="h-4 w-4 text-white" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-[12px] font-semibold text-white">{title}</span>
        <span className="block truncate text-[10px] text-white/70">{sub}</span>
      </span>
    </div>
  );
}

/**
 * Themed scene (the site's own imagery, enlarged and softened so each project gets its own
 * backdrop) with a tilted laptop + phone showing the website, floating feature cards and a URL pill.
 */
export default function ProjectMockup({ src, alt, url, chips, bgPosition = '50% 50%', flip = false, photo }: ProjectMockupProps) {
  if (photo) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#050607]">
        {/* Same picture, enlarged and blurred, fills any space the full picture doesn't cover */}
        <Image src={photo} alt="" aria-hidden fill sizes="30vw" className="scale-125 object-cover blur-2xl brightness-75" />
        <Image
          src={photo}
          alt={`${alt} website on laptop and phone`}
          fill
          sizes="(min-width:1024px) 60vw, 100vw"
          className="object-contain"
        />
      </div>
    );
  }

  const host = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return (
    <div className="relative h-full min-h-[300px] w-full overflow-hidden">
      {/* Scene */}
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes="(min-width:1024px) 45vw, 100vw"
        className="scale-[1.7] object-cover blur-[6px] saturate-150"
        style={{ objectPosition: bgPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#050607]/55 via-[#0a0b0d]/25 to-[#050607]/60" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(4,24,36,0.7)]" />

      <div className={`relative z-10 flex h-full min-h-[300px] items-center gap-3 px-4 py-8 sm:px-6 ${flip ? 'flex-row-reverse' : ''}`}>
        {/* Devices */}
        <div className="relative w-full flex-1">
          <div
            className="w-[88%] drop-shadow-[0_30px_36px_rgba(0,0,0,0.6)]"
            style={{ transform: `perspective(1400px) rotateY(${flip ? 9 : -9}deg) rotateX(3deg)` }}
          >
            <div className="rounded-t-xl border border-slate-500/60 bg-slate-900 p-[2.5%] pb-[2%]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] bg-white">
                <Image src={src} alt={alt} fill sizes="(min-width:1024px) 30vw, 70vw" className="object-cover object-top" />
              </div>
            </div>
            <div className="relative -mx-[4%] h-2.5 rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-500 sm:h-3">
              <div className="absolute left-1/2 top-0 h-1 w-[14%] -translate-x-1/2 rounded-b-md bg-slate-600/70" />
            </div>
          </div>

          {/* Phone */}
          <div className={`absolute -bottom-3 ${flip ? 'left-[-2%]' : 'right-[2%]'} w-[24%] drop-shadow-[0_20px_28px_rgba(0,0,0,0.65)]`}>
            <div className="rounded-[16px] border-2 border-slate-700 bg-slate-950 p-[4%]">
              <div className="relative aspect-[9/18] overflow-hidden rounded-[12px] bg-white">
                <Image
                  src={src}
                  alt=""
                  aria-hidden
                  fill
                  sizes="120px"
                  className="origin-top-left scale-[2.6] object-cover object-left-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating cards */}
        <div className="hidden w-[30%] max-w-[190px] flex-shrink-0 flex-col gap-3 sm:flex">
          {chips.slice(0, 2).map((c) => (
            <Chip key={c.title} {...c} />
          ))}
          <div className="flex items-center justify-center gap-1.5 self-start rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] text-white/90 backdrop-blur-md">
            <Globe className="h-3 w-3" />
            <span className="truncate">{host}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
