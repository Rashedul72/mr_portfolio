import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      accentColor: "from-cyan-400 to-cyan-600",
      accentGlow: "shadow-[0_0_35px_rgba(34,211,238,0.2)]",
      description: "Modern web technologies and frameworks",
      badgeIcon: "/icons/react.webp",
      skills: [
        { name: "React", icon: "/icons/react.webp" },
        { name: "Next.js", icon: "/icons/nextjs.webp" },
        { name: "TypeScript", icon: "/icons/ts.webp" },
        { name: "JavaScript", icon: "/icons/js.webp" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.webp" },
        { name: "shadcn/ui", icon: "/icons/shadcn.webp" },
        { name: "Framer Motion", icon: "/icons/framer-motion.webp" },
        { name: "GSAP", icon: "/icons/gsap.webp" },
        { name: "Redux", icon: "/icons/redux.webp" },
        { name: "Ant Design", icon: "/icons/antd.webp" },
        { name: "Figma", icon: "/icons/figma.webp" },
        { name: "Photoshop", icon: "/icons/ps.webp" },
      ],
    },
    {
      title: "Backend & APIs",
      accentColor: "from-emerald-400 to-emerald-600",
      accentGlow: "shadow-[0_0_35px_rgba(16,185,129,0.2)]",
      description: "Server-side development and database management",
      badgeIcon: "/icons/nodejs.webp",
      skills: [
        { name: "Node.js", icon: "/icons/nodejs.webp" },
        { name: "Express.js", icon: "/icons/express.webp" },
        { name: "NestJS", icon: "/icons/nest.webp" },
        { name: "MongoDB", icon: "/icons/mongo.webp" },
        { name: "Mongoose", icon: "/icons/mongoose.webp" },
        { name: "PostgreSQL", icon: "/icons/postgresql.webp" },
        { name: "Prisma", icon: "/icons/prisma.webp" },
        { name: "TypeORM", icon: "/icons/typeorm.webp" },
        { name: "SQL", icon: "/icons/sql.webp" },
        { name: "REST API", icon: "/icons/rest.webp" },
        { name: "Stripe", icon: "/icons/stripe.webp" },
        { name: "SSLCommerz", icon: "/icons/sslcommerz.webp" },
      ],
    },
    {
      title: "Tools, Cloud & Workflow",
      accentColor: "from-violet-400 to-violet-600",
      accentGlow: "shadow-[0_0_35px_rgba(139,92,246,0.2)]",
      description: "Delivery, collaboration, and productivity stack",
      badgeIcon: "/icons/github.webp",
      skills: [
        { name: "Git", icon: "/icons/git.webp" },
        { name: "GitHub", icon: "/icons/github.webp" },
        { name: "VS Code", icon: "/icons/vscode.webp" },
        { name: "Postman", icon: "/icons/postman.webp" },
        { name: "Chrome DevTools", icon: "/icons/chrome-dev-tools.webp" },
        { name: "Cloudflare", icon: "/icons/cloudflare.webp" },
        { name: "DigitalOcean", icon: "/icons/digitalocean.webp" },
        { name: "Coolify", icon: "/icons/coolify.webp" },
        { name: "Hostinger", icon: "/icons/hostinger.webp" },
        { name: "Linux", icon: "/icons/linux.webp" },
        { name: "Google Calendar", icon: "/icons/google-calendar.webp" },
        { name: "ClickUp", icon: "/icons/clickup.webp" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 bg-[#082c47] relative scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-cyan-500/[0.08] blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-[36rem] h-[36rem] bg-violet-500/[0.08] blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          />
          <motion.p
            className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            A comprehensive toolkit for building modern, scalable applications
          </motion.p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`relative glass rounded-3xl overflow-hidden border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.16] ${category.accentGlow} transition-all duration-300 group`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div
                className={`h-1.5 bg-gradient-to-r ${category.accentColor}`}
              />

              <div className="p-6 sm:p-7 lg:p-8">
                <div className="mb-6 flex items-start gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-xl border border-white/[0.14] bg-white/[0.06] flex items-center justify-center">
                    <Image
                      src={category.badgeIcon}
                      alt={category.title}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative flex items-center gap-3 rounded-xl bg-gradient-to-r from-white/[0.045] to-white/[0.02] border border-white/[0.08] px-3.5 py-2.5 hover:from-white/[0.08] hover:to-white/[0.045] hover:border-white/[0.16] transition-all duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + skillIndex * 0.06,
                      }}
                      viewport={{ once: true, amount: 0.15 }}
                    >
                      <div className="relative h-9 w-9 shrink-0 rounded-lg bg-white/10 border border-white/[0.15] flex items-center justify-center overflow-hidden">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={22}
                          height={22}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-200 leading-tight tracking-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
