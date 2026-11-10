'use client';

import { useEffect, useRef, useState } from "react";
import { anim } from '@/lib/anim';
import Image from "next/image";
import { ExternalLink, MapPin, Calendar, Award, Globe, Rocket } from "lucide-react";

const HIGHLIGHT_PHRASE = "Neoscoder (Akij Venture Group)";

function getStarCount(width: number) {
  if (width < 640) return 0;
  if (width < 1024) return 36;
  return 72;
}

function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
    drift: Math.random() * 40 - 20,
  }));
}

export default function Experience() {
  const [stars, setStars] = useState<ReturnType<typeof generateStars>>([]);

  useEffect(() => {
    let current = -1;
    const updateStarCount = () => {
      const next = getStarCount(window.innerWidth);
      if (next === current) return;
      current = next;
      setStars(generateStars(next));
    };
    updateStarCount();
    window.addEventListener("resize", updateStarCount);
    return () => window.removeEventListener("resize", updateStarCount);
  }, []);

  const experiences = [
    {
      company: "Riseup Labs",
      website: "https://riseuplabs.com/",
      logo: "/images/companies/riseup.png",
      location: "Dhaka, Bangladesh",
      role: "Software Engineer",
      period: "Jan 2026 – Present",
      description:
        "Augmented to Neoscoder (Akij Venture Group): backend of an FMCG route-to-market / sales-force automation platform on NestJS, Fastify, PostgreSQL, Drizzle, Redis and BullMQ, deployed across multiple pods.",
      achievements: [
        "Designed and built a NestJS trade-promotion microservice from scratch as primary author (schema, APIs, caching, queues, Excel import), serving an offline-first catalogue to the field sales app.",
        "Built a Redis-versioned catalogue cache bumped only after commit, so slow rebuilds can't overwrite newer data; falls back to Postgres if Redis fails, and clients poll a version endpoint to skip refetches.",
        "Fixed a trip-number race across Kubernetes pods with transaction-scoped Postgres advisory locks, and made memo locking a single atomic conditional update.",
        "Made offline pre-order sync idempotent (request-hash conflict detection, safe edit replay), and built a retry-safe job that assigns promotions to new routes in one set-based SQL query.",
        "Built a distributor investment early-warning engine with exact BigInt money arithmetic, and a queue-based Excel import for a 7-level geo hierarchy with per-row transactions.",
      ],
      technologies: [
        "NestJS",
        "Fastify",
        "TypeScript",
        "PostgreSQL",
        "Drizzle",
        "Redis",
        "BullMQ",
        "Docker",
      ],
    },
    {
      company: "Better E Mart",
      website: "https://betteremart.com/",
      logo: "/images/companies/betteremart.png",
      location: "Chittagong, Bangladesh",
      role: "Lead Developer",
      period: "Nov 2024 – Dec 2025",
      achievements: [
        "Led a team of 4 developers: owned system design, broke features into tasks and assigned them, and ran code reviews before every merge.",
        "Built the Better E Mart e-commerce platform for web and mobile with a modular, API-driven architecture covering catalogue, checkout, POS and analytics.",
        "Integrated payment-gateway, POS and analytics APIs, and set up CI/CD pipelines for automated deployment.",
      ],
      technologies: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "Express",
        "MongoDB",
        "Cloudflare",
      ],
    },
    {
      company: "SystemSage Solutions Sdn. Bhd.",
      website: "https://systemsage.tech/",
      logo: "/images/companies/systemsage.png",
      location: "Kuala Lumpur, Malaysia",
      role: "Software Developer (Remote)",
      period: "Oct 2023 – Oct 2024",
      achievements: [
        "Built IoT smart-farming systems with Node.js and Firebase, ingesting real-time sensor data through AWS IoT Core, with live monitoring dashboards.",
        "Implemented geofencing and crop-prediction analytics; co-authored the resulting research paper (GEn-CITy 2024).",
        "Deployed services on AWS and Azure with CI/CD.",
      ],
      technologies: [
        "Node.js",
        "Firebase",
        "AWS IoT Core",
        "AWS",
        "Azure",
        "Geofencing",
        "CI/CD",
      ],
    },
    {
      company: "Gifted Capital",
      website: "https://gifted-cap.com/",
      logo: "/images/companies/gifted.png",
      location: "Kuala Lumpur, Malaysia",
      role: "Data Science Intern",
      period: "Sep 2022 – Apr 2023",
      description:
        "Financial technology solutions for global IPO access and capital markets.",
      achievements: [
        "Leave Approval Form: Developed a system for employees to submit leave requests, automatically approved if submitted 7 days in advance, and pending manager approval if within 6 days.",
        "Auto-Generated Calendar: Created a tool allowing users to download a personalized company calendar by entering financial details, which is then emailed to both the user and business owner.",
        "Stock Trading Data Download: Built a feature that enables users to download Apple stock data in CSV format by specifying start and end dates, with automatic email notifications.",
      ],
      technologies: [
        "Python",
        "Data Processing",
        "Email Automation",
        "CSV APIs",
        "Financial APIs",
      ],
    },
    {
      company: "Alva Productions",
      website: "https://www.alvaproductions.com.my/",
      logo: "/images/companies/alva.png",
      location: "Kuala Lumpur, Malaysia",
      role: "Application Developer Intern",
      period: "Sep 2021 – Dec 2021",
      description:
        "Award-winning media company specializing in game development and mobile applications.",
      achievements: [
        "Dictionary App for Android: Developed an Android app using Android Studio, providing users with a fast and easy way to look up words and their meanings.",
      ],
      technologies: [
        "Android Studio",
        "Java",
        "Mobile Development",
        "UI/UX Design",
      ],
    },
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const [reached, setReached] = useState(-1);
  const [road, setRoad] = useState({ d: "", w: 0, h: 0 });

  useEffect(() => {
    let raf = 0;
    const desktop = () => window.matchMedia("(min-width: 1024px)").matches;

    // Node centres in timeline coordinates (transform-independent)
    const nodePoints = () =>
      nodeRefs.current.map((n, i) => {
        const it = itemRefs.current[i];
        if (!n || !it) return null;
        return { x: it.offsetLeft + n.offsetLeft + n.offsetWidth / 2, y: it.offsetTop + n.offsetTop + n.offsetHeight / 2 };
      });

    const buildRoad = () => {
      const box = timelineRef.current;
      if (!box) return;
      const pts = nodePoints().filter(Boolean) as { x: number; y: number }[];
      if (pts.length < 2 || !desktop()) {
        setRoad((r) => (r.d ? { d: "", w: 0, h: 0 } : r));
        return;
      }
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const c = pts[i];
        const k = (c.y - a.y) * 0.62;
        d += ` C ${a.x} ${a.y + k} ${c.x} ${c.y - k} ${c.x} ${c.y}`;
      }
      setRoad((r) => (r.d === d && r.w === box.offsetWidth && r.h === box.offsetHeight ? r : { d, w: box.offsetWidth, h: box.offsetHeight }));
    };

    const update = () => {
      raf = 0;
      const box = timelineRef.current;
      const fill = fillRef.current;
      const arrow = arrowRef.current;
      if (!box || !fill || !arrow) return;
      const rect = box.getBoundingClientRect();
      // the "reading line" sits ~60% down the viewport
      const y = Math.min(Math.max(window.innerHeight * 0.6 - rect.top, 0), rect.height);
      const pts = nodePoints();
      const path = pathRef.current;
      const prog = progressRef.current;

      if (desktop() && path && prog && path.getAttribute("d")) {
        const total = path.getTotalLength();
        // find the point on the road at the reading line (y grows monotonically along it)
        let lo = 0;
        let hi = total;
        for (let i = 0; i < 14; i++) {
          const mid = (lo + hi) / 2;
          if (path.getPointAtLength(mid).y < y) lo = mid;
          else hi = mid;
        }
        const startY = pts[0]?.y ?? 0;
        const len = y <= startY ? 0 : lo;
        const pt = path.getPointAtLength(len);
        prog.style.strokeDasharray = `${total}`;
        prog.style.strokeDashoffset = `${total - len}`;
        arrow.style.left = "0px";
        arrow.style.transform = `translate(${pt.x - 16}px, ${pt.y - 16}px)`;
        const p2 = path.getPointAtLength(Math.min(len + 4, total));
        const p1 = path.getPointAtLength(Math.max(len - 4, 0));
        const ang = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
        if (rocketRef.current) rocketRef.current.style.transform = `rotate(${ang + 45}deg)`;
      } else {
        fill.style.height = `${y}px`;
        arrow.style.left = "7px";
        arrow.style.transform = `translate(-50%, ${Math.max(y - 16, 0)}px)`;
        if (rocketRef.current) rocketRef.current.style.transform = "rotate(135deg)";
      }
      let r = -1;
      pts.forEach((pt, i) => {
        if (pt && pt.y <= y + 4) r = i;
      });
      setReached((prev) => (prev === r ? prev : r));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      buildRoad();
      onScroll();
    };
    buildRoad();
    update();
    const ro = new ResizeObserver(onResize);
    if (timelineRef.current) ro.observe(timelineRef.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // re-run the scroll update once the road geometry is in the DOM
  useEffect(() => {
    window.dispatchEvent(new Event("scroll"));
  }, [road.d]);

  return (
    <section
      id="experience"
      className="py-16 sm:py-28 lg:py-32 bg-[#0e1013] relative scroll-mt-20 sm:scroll-mt-20"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[128px]" />
        {/* Moving stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white star-float"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: 0,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              ["--star-drift" as string]: `${star.drift}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-12 sm:mb-16 lg:mb-20" {...anim({"from": {"opacity": 0, "y": 30}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.6})}
         
         
         
         
        >
          <h2
            className="text-balance text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] text-white mb-4" {...anim({"from": {"opacity": 0, "y": 20}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.5, "delay": 0.1})}
           
           
           
           
          >
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div
            className="w-24 h-px bg-cyan-400/70 mx-auto rounded-full" {...anim({"from": {"width": 0}, "to": {"width": 96}, "scroll": true, "duration": 0.8, "delay": 0.2})}
           
           
           
           
          />
          <p
            className="text-[13px] sm:text-base lg:text-lg text-slate-400 mt-5 sm:mt-6 max-w-2xl mx-auto" {...anim({"from": {"opacity": 0, "y": 20}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.5, "delay": 0.3})}
           
           
           
           
          >
            A journey through diverse roles in software development, IoT
            solutions, and financial technology
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          {/* Mobile: straight line + progress */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-white/10 lg:hidden" />
          <div
            ref={fillRef}
            className="absolute left-[7px] top-0 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-400 to-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.6)] lg:hidden"
            style={{ height: 0 }}
          />
          {/* Desktop: winding roadmap that draws itself as you scroll */}
          {road.d && (
            <svg
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 z-0 hidden overflow-visible lg:block"
              width={road.w}
              height={road.h}
            >
              <path ref={pathRef} d={road.d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
              <path
                ref={progressRef}
                d={road.d}
                fill="none"
                stroke="url(#roadGlow)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.7))", strokeDasharray: 1, strokeDashoffset: 1 }}
              />
              <defs>
                <linearGradient id="roadGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#7dd3fc" />
                </linearGradient>
              </defs>
            </svg>
          )}
          <div
            ref={arrowRef}
            aria-hidden
            className="absolute top-0 z-[5] flex h-8 w-8 items-center justify-center"
            style={{ transform: "translate(-50%, 0)", left: 7 }}
          >
            <span className="absolute inset-0 rounded-full bg-cyan-400/25 blur-md" />
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/20 [animation-duration:2s] motion-reduce:animate-none" />
            <span ref={rocketRef} className="relative flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/60 bg-[#0e1013] text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.5)]">
              <Rocket className="h-4 w-4" />
            </span>
          </div>

          <div className="space-y-10 lg:space-y-32">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.company}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className="relative pl-10 lg:pl-0 lg:pt-8" {...anim({ from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 }, scroll: true, ...{ duration: 0.6, delay: index * 0.1 } })}
                 
                 
                 
                 
                >
                  {/* Timeline dot (mobile) */}
                  <div className="absolute left-0 top-6 lg:hidden">
                    <div
                      className={`w-[15px] h-[15px] rounded-full ring-4 ring-[#0e1013] transition-all duration-500 ${
                        index <= reached
                          ? "bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] scale-110"
                          : "bg-[#2a2f36]"
                      }`}
                    />
                  </div>
                  {/* Numbered stop (desktop): sits on the card's top edge, centred */}
                  <div
                    ref={(el) => { nodeRefs.current[index] = el; }}
                    className="absolute top-8 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center lg:flex"
                    style={{ left: isLeft ? "calc(25% - 1.25rem - 1.75rem)" : "calc(75% + 1.25rem - 1.75rem)" }}
                  >
                    <span
                      className={`absolute inset-0 rounded-full border-2 border-dashed transition-colors duration-500 animate-spin [animation-duration:18s] motion-reduce:animate-none ${
                        index <= reached ? "border-cyan-300" : "border-white/20"
                      }`}
                    />
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-[13px] font-semibold transition-all duration-500 ${
                        index <= reached
                          ? "bg-cyan-400 text-[#06222b] shadow-[0_0_24px_rgba(34,211,238,0.6)]"
                          : "bg-[#14181d] text-slate-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`lg:w-[calc(50%-2.5rem)] ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}`}
                  >
                    <div
                      className="glass relative z-10 rounded-2xl p-5 sm:p-6 lg:p-8 lg:bg-[#101317]/95! hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:translate-y-[-4px]"
                     
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="relative w-11 h-11 flex-shrink-0 rounded-xl bg-white p-1.5 shadow-md">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              fill
                              sizes="44px"
                              className="object-contain p-1.5"
                            />
                          </div>
                          <h3 className="text-base sm:text-xl font-bold text-white">
                            {exp.company}
                          </h3>
                        </div>
                        <span className="inline-flex items-center gap-1.5 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-[0_0_12px_rgba(34,211,238,0.15)] w-fit whitespace-nowrap">
                          <Award className="w-3 h-3" />
                          {exp.role}
                        </span>
                      </div>

                      {/* Website */}
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors text-[13px] sm:text-sm mb-2 break-all"
                      >
                        <Globe className="w-3.5 h-3.5 flex-shrink-0" />
                        {exp.website}
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] sm:text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                        <span className="sr-only"> · </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>

                      {exp.description && (
                        <p className="text-white/80 mb-4 italic text-[13px] sm:text-sm">
                          &quot;
                          {exp.description.includes(HIGHLIGHT_PHRASE) ? (
                            <>
                              {exp.description.split(HIGHLIGHT_PHRASE)[0]}
                              <strong className="not-italic">{HIGHLIGHT_PHRASE}</strong>
                              {exp.description.split(HIGHLIGHT_PHRASE)[1]}
                            </>
                          ) : (
                            exp.description
                          )}
                          &quot;
                        </p>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/[0.06] text-cyan-300/80 px-2 py-0.5 rounded-md text-xs font-medium border border-white/[0.04]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.4)]" />
                            <p className="text-[13px] sm:text-sm text-white/90 leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
