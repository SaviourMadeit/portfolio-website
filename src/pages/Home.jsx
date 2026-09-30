import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Mail,
  ShieldCheck,
  Wrench,
  Cpu,
  Layers,
  FileText,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import {
  certifications,
  educationBackground,
  portfolioProjects,
  professionalRoles,
  services,
  siteProfile,
} from "../data";

const cvUrl = "/docs/Saviour_Dagadu_CV.pdf";

const Home = () => {
  const { isDark } = useOutletContext();
  const panel = isDark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white/80";
  const softPanel = isDark ? "bg-slate-900/50 border-slate-700" : "bg-slate-50 border-slate-200";
  const brandText = isDark ? "text-white" : "text-slate-900";
  const muted = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <div className="pt-24 pb-20">
      <section className="px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-blue-500/20">
                {siteProfile.name}
              </span>
              <h1 className={`mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${brandText}`}>
                Engineer. Builder. Mentor. Problem-solver.
              </h1>
              <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${muted}`}>
                I am a technical professional focused on embedded systems, firmware, IT infrastructure, security solutions, electrical support, and live event technology. My work is built around practical problem solving, service reliability, and helping people, businesses, venues, and teams get the systems they need to perform with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold ${isDark ? "border-slate-600 text-white hover:border-blue-400" : "border-slate-300 text-slate-900 hover:border-blue-500"}`}
                >
                  Explore services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className={`mt-10 flex flex-wrap items-center gap-4 rounded-2xl border p-4 ${panel}`}>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                  SD
                </div>
                <div>
                  <p className={`font-semibold ${brandText}`}>Saviour Dagadu</p>
                  <p className={`text-sm ${muted}`}>
                    Technical Professional • IT Support • Embedded Systems • Event Technology
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-3xl border p-6 ${panel}`}>
              <h2 className={`mb-5 text-2xl font-bold ${brandText}`}>Quick profile</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BriefcaseBusiness className="mt-1 h-5 w-5 text-blue-500" />
                  <div>
                    <p className={`font-semibold ${brandText}`}>Profession</p>
                    <p className={muted}>Technical professional delivering support and solutions across IT, security, electrical, and event systems.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="mt-1 h-5 w-5 text-blue-500" />
                  <div>
                    <p className={`font-semibold ${brandText}`}>Education & learning</p>
                    <p className={muted}>Practical technical education, systems training, and continuous professional development in electronics and computing.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-blue-500" />
                  <div>
                    <p className={`font-semibold ${brandText}`}>Employer value</p>
                    <p className={muted}>Reliable, safety-focused, communication-driven, and solution-oriented in demanding real-world environments.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Professional profile</p>
            <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${brandText}`}>
              What I bring to every project and client relationship
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Education",
                text: "Learning grounded in technical practice, electronics training, systems support, and applied engineering experience.",
                icon: GraduationCap,
              },
              {
                title: "Certifications",
                text: "Continuous study in embedded systems, IoT, and technical skills that support reliable project execution.",
                icon: BadgeCheck,
              },
              {
                title: "Case studies",
                text: "Real product and system work across agriculture, automation, embedded systems, and robotics learning tools.",
                icon: BriefcaseBusiness,
              },
              {
                title: "Current work",
                text: "Focused on farm systems, robotics education kits, and practical technical support for business and event applications.",
                icon: Wrench,
              },
            ].map(({ title, text, icon: Icon }) => (
              <div key={title} className={`rounded-3xl border p-6 ${panel}`}>
                <div className="mb-4 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-semibold ${brandText}`}>{title}</h3>
                <p className={`mt-3 leading-relaxed ${muted}`}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-4 py-16 ${softPanel}`}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Expertise</p>
            <h2 className={`mt-3 text-3xl font-bold ${brandText}`}>Core professional roles</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {professionalRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-blue-500/30 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm dark:bg-slate-800/80 dark:text-blue-300"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className={`rounded-3xl border p-8 ${panel}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Education</p>
              <h2 className={`mt-3 text-3xl font-bold ${brandText}`}>Learning that supports technical confidence</h2>
              <ul className="mt-6 space-y-4">
                {educationBackground.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-500">•</span>
                    <span className={muted}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`rounded-3xl border p-8 ${panel}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Certifications</p>
              <h2 className={`mt-3 text-3xl font-bold ${brandText}`}>Recognised technical learning</h2>
              <div className="mt-6 space-y-4">
                {certifications.slice(0, 4).map((cert) => (
                  <div key={cert.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-blue-600 dark:text-blue-300">{cert.title}</p>
                        <p className={`text-sm ${muted}`}>{cert.issuer} • {cert.date}</p>
                      </div>
                      <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-600 dark:text-blue-300">
                        View
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Current focus</p>
            <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${brandText}`}>Active projects and real-world work</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioProjects.slice(0, 2).map((project) => (
              <div key={project.id} className={`rounded-3xl border p-6 ${panel}`}>
                <div className="mb-4 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-500">
                  {project.title === "Farm King" ? <Cpu className="h-6 w-6" /> : <Layers className="h-6 w-6" />}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">{project.category}</p>
                <h3 className={`mt-3 text-2xl font-bold ${brandText}`}>{project.title}</h3>
                <p className={`mt-3 leading-relaxed ${muted}`}>{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  {project.links?.website && (
                    <a href={project.links.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                      View project
                    </a>
                  )}
                  {project.links?.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-600 dark:text-slate-200">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Service categories</p>
            <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${brandText}`}>Full business profile in one service portfolio</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {services.map(({ title, description, icon: Icon }) => (
              <div key={title} className={`rounded-3xl border p-5 ${panel}`}>
                <div className="mb-4 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={`text-lg font-semibold ${brandText}`}>{title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-2xl shadow-blue-500/10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Let’s talk</p>
              <h2 className="mt-3 text-3xl font-bold">Need support, repair, security, or event technology?</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={cvUrl} download className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-blue-700">
                <FileText className="h-4 w-4" />
                Download CV
              </a>
              <a href={`mailto:${siteProfile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-3 font-semibold text-white">
                <Mail className="h-4 w-4" />
                Contact me
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-50">
            <a href={siteProfile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-2">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={siteProfile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={`https://wa.me/233248919044`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
