"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Linkedin, Sun, Moon, CheckCircle, Calendar, Building2, Languages, Globe2, Briefcase, GraduationCap, Hammer, Rocket } from "lucide-react";

// One‑page CV site for Isaac Benjamin Bamba
// TailwindCSS required. Works great in Next.js + App Router.
// Dark mode: toggles a `dark` class on the root wrapper and persists to localStorage.

export default function IsaacCVSite() {
  const [lang, setLang] = useState<'EN' | 'FR'>("EN");
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('isaac-theme') : null;
    if (stored) setDark(stored === 'dark');
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('isaac-theme', dark ? 'dark' : 'light');
    }
  }, [dark]);

  const t = useMemo(() => (lang === "EN" ? en : fr), [lang]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {/* META */}
        <HeadMeta />

        {/* HEADER */}
        <header className="sticky top-0 z-30 backdrop-blur bg-white/75 dark:bg-neutral-950/75 border-b border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center font-bold">IB</div>
              <span className="font-semibold">Isaac Benjamin Bamba</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#experience" className="hover:opacity-70">{t.nav.experience}</a>
              <a href="#projects" className="hover:opacity-70">{t.nav.projects}</a>
              <a href="#education" className="hover:opacity-70">{t.nav.education}</a>
              <a href="#skills" className="hover:opacity-70">{t.nav.skills}</a>
              <a href="#contact" className="hover:opacity-70">{t.nav.contact}</a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="/Isaac_Benjamin_Bamba_CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900"
              >
                <Download className="h-4 w-4" /> {t.cta.download}
              </a>
              <button
                onClick={() => setLang((p) => (p === "EN" ? "FR" : "EN"))}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900"
                aria-label="Toggle language"
              >
                <Languages className="h-4 w-4" /> {lang}
              </button>
              <button
                onClick={() => setDark((d) => !d)}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900"
                aria-label="Toggle dark mode"
                title="Toggle dark mode"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {dark ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        </header>

        {/* HERO / SUMMARY */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                ISAAC BENJAMIN BAMBA
              </motion.h1>
              <div className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                <div>Ouagadougou, Burkina Faso | +22644348455</div>
                <div>isaacbenjamin.bamba@gmail.com | LinkedIn: Isaac Benjamin Bamba | FR | EN</div>
              </div>
              <h2 className="mt-6 text-lg font-bold">SUMMARY</h2>
              <p className="mt-2 text-neutral-700 dark:text-neutral-200 md:text-base">
                Economist trained in data analytics with a strong track-record in event, project and franchise management across Africa. Experienced in logistics, financial & risk management, educational programming, leadership and multi-stakeholder coordination. Adept at building operational frameworks in diverse cultural environments, forecasting outcomes and driving measurable results. Seeking to leverage these skills into the African ecosystem.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <Fact icon={<MapPin className="h-4 w-4" />} label={t.facts.location} value="Ouagadougou, Burkina Faso" />
                <Fact icon={<Globe2 className="h-4 w-4" />} label={t.facts.languages} value={t.facts.languages_value} />
                <Fact icon={<Phone className="h-4 w-4" />} label={t.facts.phone} value={"+22644348455"} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5" /> {t.metrics.title}</h3>
              <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                <li>• Managed events for 200+ attendees and built performance dashboards for ops decisions</li>
                <li>• Equity research & financial modeling (DCF, WACC, comps) at BLK Capital Management</li>
                <li>• Project Management Intern at Sagrasy Consulting (PAPEA II / ADC Burkina)</li>
                <li>• Founder of Fincura; conceived ISCANNAH hydroponic feed project (conception phase)</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <Section id="experience" title={t.nav.experience} icon={<Briefcase className="h-5 w-5" />}> 
          <TimelineItem
            role="Project Management Intern"
            org="Sagrasy Consulting (PAPEA II Program / ADC Burkina)"
            location="Kigali, Rwanda"
            period="October 2024 – Present"
            bullets={[
              "Assisted in the diagnostic and strategic planning of agricultural clusters (porcine, avicole, horticulture) under the PAPEA II program.",
              "Supported preparation of annual PTBA plans, Terms of Reference, and monitoring frameworks for partner organizations.",
              "Coordinated stakeholders including NGOs, producer organizations, and local authorities to ensure alignment with national entrepreneurship goals.",
              "Conducted data analysis and reporting for progress indicators and impact metrics.",
              "Assisted in organizing rural events and capacity-building sessions, ensuring operational excellence and resource tracking.",
            ]}
          />
          <TimelineItem
            role="Event & Franchise Manager"
            org="Mundi Center"
            location="Kigali, Rwanda"
            period="February 2024 – August 2024"
            bullets={[
              "Used data analysis to align business activities with business objectives.",
              "Negotiated contracts through cost-benefit analysis.",
              "Analyzed franchise operations data to ensure performance standards and identify improvements",
              "Developed data-driven marketing strategies based on market trends and consumer behavior",
              "Created performance dashboards translating event metrics into actionable business insights",
            ]}
          />
          <TimelineItem
            role="Equity Research Analyst"
            org="BLK Capital Management"
            location="Remote"
            period="February 2023 – November 2023"
            bullets={[
              "Conducted in-depth research, studied company financials, ran DCF models, WACC calculations as well as comparable analysis and assessing industry trends to provide informed investment recommendations.",
              "Conducted financial modeling, investment research, and data driven performance tracking.",
              "Analyzed key financial metrics to assess profitability, risk, and market trends.",
              "Developed business intelligence reports & dashboards, improving strategic decision-making.",
              "Assisted in portfolio management, supporting recommendations for asset allocation.",
            ]}
          />
          <TimelineItem
            role="Education & Community Program Lead — Arbitration Committee (AGEULK)"
            org="University of Kigali"
            location="Kigali, Rwanda"
            period="January 2022 – December 2023"
            bullets={[
              "Mediated and resolved student cases affecting 2,000 + students, fostering community engagement.",
              "Facilitated workshops on leadership and negotiation for student representatives.",
            ]}
          />
          <TimelineItem
            role="Trading Game Participant — Top 10"
            org="Timbuktu Capital Management"
            location="Remote"
            period="2024"
            bullets={["Competed in a continental investment simulation, ranking in the Top 10 for portfolio performance and strategy."]}
          />
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title={t.nav.projects} icon={<Hammer className="h-5 w-5" />}> 
          <ProjectCard
            title="Iscanna — Hydroponic Animal Feed Startup"
            status="Conception Phase"
            description="Designing a low-cost hydroponic barley feed system to reduce dependence on imported feeds and improve livestock nutrition."
            details={[
              "Ouagadougou, Burkina Faso | October 2025 – Ongoing",
              "Conducting market feasibility studies, client surveys and prototype planning for modular production units adapted to hot climates.",
              "Preparing a comprehensive business plan covering cost structure, ROI modeling and distribution strategy for Burkina Faso and neighboring markets.",
            ]}
          />
          <ProjectCard
            title="Fincura — Data Analytics & Consulting Brand"
            status="Active"
            description="Provides data visualization, business intelligence and forecasting services to African SMEs."
            details={[
              "Ouagadougou, Burkina Faso | October 2025 – Ongoing",
              "Created freelance dashboards for Airbnb, Amazon Prime Video and other companies to translate raw data into strategic insights.",
            ]}
          />
        </Section>

        {/* EDUCATION */}
        <Section id="education" title={t.nav.education} icon={<GraduationCap className="h-5 w-5" />}> 
          <EduItem school="2iE – Masters in Management of Companies and Organizations" degree="Ouagadougou, Burkina Faso | September 2024 – Present" period="" details={["Relevant Coursework: Financial Accounting and Management, Business Strategy and Management Tools, Organizational Analysis and Governance, Institutional and Legal Environment, Business Planning and Project Development, Organizational Diagnostics, Professional Communication"]} />
          <EduItem school="Bindura University of Science Education – Professional Certificate in Data Analysis & Predictive Modeling" degree="Harare, Zimbabwe | February 2025 – May 2025" period="" details={["Relevant Coursework: Data Structures, Database Management, SQL, R, Power BI for Data Analytics, Basics of Predictive Modeling."]} />
          <EduItem school="Kigali Independent University – Bachelors with Honors in Economics" degree="Kigali, Rwanda | November 2020 – December 2023" period="" details={["Relevant Coursework: Macroeconomics, Microeconomics, Financial Accounting & Analysis, Business Law, Public Economics, Public Finance, and National Accounting."]} />
          <EduItem school="EPITECH – Expertise in Information Technology" degree="Lille, France | September 2019 – August 2020" period="" details={["Relevant Coursework: Data Structures and Algorithms, Computer Architecture, Web Development, Programming Databases, Management Systems, Mathematical Foundations for Computing, Discrete Math."]} />
        </Section>

        {/* SKILLS */}
        <Section id="skills" title={t.nav.skills} icon={<Rocket className="h-5 w-5" />}> 
          <SkillGroup title="KEY SKILLS" items={[
            "Project & event management",
            "Data analytics & forecasting",
            "Financial management & risk assessment",
            "Franchise operations & logistics coordination",
            "Education management",
            "Stakeholder management",
            "Technical tools: R, Power BI, SQL",
            "Financial Forecasting",
          ]} />
        </Section>

        {/* CONTACT */}
        <Section id="contact" title={t.nav.contact} icon={<Mail className="h-5 w-5" />}> 
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
              <h4 className="font-semibold mb-3">{t.contact.reach}</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:isaacbenjamin.bamba@gmail.com" className="hover:underline">isaacbenjamin.bamba@gmail.com</a></p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +22644348455</p>
                <p className="flex items-center gap-2"><Linkedin className="h-4 w-4" /><a href="https://www.linkedin.com/in/isaacbamba" target="_blank" className="hover:underline">LinkedIn: Isaac Benjamin Bamba</a></p>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
              <h4 className="font-semibold mb-3">{t.contact.cta}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{t.contact.note}</p>
              <a
                href="/Isaac_Benjamin_Bamba_CV.pdf"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm"
              >
                <Download className="h-4 w-4" /> {t.cta.download}
              </a>
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Isaac Benjamin Bamba. {t.footer.rights}</p>
            <a href="#top" className="hover:underline">{t.footer.back_to_top}</a>
          </div>
        </footer>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }} />
      </div>
    </div>
  );
}

function HeadMeta() {
  return (
    <>
      <title>Isaac Benjamin Bamba — CV</title>
      <meta name="description" content="Economist & data analytics professional—events, project & franchise management across Africa. BAL/sports operations ready." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}

function Section({ id, title, icon, children }: { id: string; title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
      <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 flex items-center gap-2"><span>{icon}</span>{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}

function TimelineItem({ role, org, location, period, bullets }: { role: string; org: string; location: string; period: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
      <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
        <span className="inline-flex items-center gap-1 font-semibold text-neutral-900 dark:text-neutral-100"><Building2 className="h-4 w-4" /> {org}</span>
        <span>•</span>
        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {location}</span>
        <span>•</span>
        <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {period}</span>
      </div>
      <h3 className="mt-2 text-lg font-bold">{role}</h3>
      <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, status, description, details }: { title: string; status: string; description: string; details: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-xs rounded-full border border-neutral-200 dark:border-neutral-800 px-2 py-1 bg-neutral-50 dark:bg-neutral-800/50">{status}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{description}</p>
      <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}

function EduItem({ school, degree, period, details }: { school: string; degree: string; period: string; details: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="text-lg font-bold">{school}</h3>
        {period ? <div className="text-sm text-neutral-600 dark:text-neutral-300 flex items-center gap-2"><Calendar className="h-4 w-4" /> {period}</div> : null}
      </div>
      <p className="mt-1 text-sm text-neutral-800 dark:text-neutral-200 font-medium">{degree}</p>
      <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
      <h4 className="font-semibold">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it, i) => (
          <span key={i} className="text-xs rounded-full border border-neutral-200 dark:border-neutral-800 px-2 py-1 bg-neutral-50 dark:bg-neutral-800/50">{it}</span>
        ))}
      </div>
    </div>
  );
}

const en = {
  nav: { experience: "Experience", projects: "Projects", education: "Education", skills: "Skills", contact: "Contact" },
  cta: { download: "Download CV", contact: "Contact Me" },
  facts: { location: "Location", languages: "Languages", languages_value: "French (FR) · English (EN)", phone: "Phone" },
  metrics: { title: "Quick Highlights" },
  contact: { reach: "Reach out", cta: "Prefer email?", note: "I typically respond within 24–48 hours. For urgent matters, call or DM on LinkedIn." },
  footer: { rights: "All rights reserved.", back_to_top: "Back to top" },
};

const fr = {
  nav: { experience: "Expérience", projects: "Projets", education: "Éducation", skills: "Compétences", contact: "Contact" },
  cta: { download: "Télécharger le CV", contact: "Me contacter" },
  facts: { location: "Localisation", languages: "Langues", languages_value: "Français (FR) · Anglais (EN)", phone: "Téléphone" },
  metrics: { title: "Faits saillants" },
  contact: { reach: "Me joindre", cta: "De préférence par email ?", note: "Réponse sous 24–48h. Pour l’urgent, appelez ou écrivez sur LinkedIn." },
  footer: { rights: "Tous droits réservés.", back_to_top: "Haut de page" },
};

const schemaLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Isaac Benjamin Bamba",
  jobTitle: "Economist & Data Analytics Professional",
  address: { "@type": "PostalAddress", addressLocality: "Ouagadougou", addressCountry: "BF" },
  email: "isaacbenjamin.bamba@gmail.com",
  sameAs: ["https://www.linkedin.com/in/isaacbamba"],
};
