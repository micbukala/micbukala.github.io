'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const, delay },
  }),
}

const pipelineModules = [
  {
    num: '01',
    name: 'ThermoChemX',
    nameHighlight: false,
    desc: 'Bulk & redox setup',
    borderColor: 'border-t-[#89C3F9]',
    nameColor: 'text-[#89C3F9]',
  },
  {
    num: '02',
    name: 'ThermoPathX',
    nameHighlight: true,
    desc: 'Phase equilibria along P-T paths',
    borderColor: 'border-t-[#E8973A]',
    nameColor: 'text-[#E8973A]',
  },
  {
    num: '03',
    name: 'ThermoRedoX',
    nameHighlight: false,
    desc: 'Redox estimates & data processing',
    borderColor: 'border-t-[#D45F3C]',
    nameColor: 'text-[#D45F3C]',
  },
  {
    num: '04',
    name: 'ThermoSynteX',
    nameHighlight: false,
    desc: 'Data exploration & visualisation',
    borderColor: 'border-t-[#C44569]',
    nameColor: 'text-[#C44569]',
  },
] as const

const features = [
  '30,000+ subduction geotherms across 56 zones',
  '1D and 2D minimization models',
  'Single model and batch processing',
  'Full provenance tracking on every output file',
  'Windows & macOS · Open source (MIT)',
] as const

const specs = [
  { label: 'Geotherms available', value: '30,000+', note: 'van Keken & Wilson, 2023', color: 'text-[#D45F3C]' },
  { label: 'Subduction zones', value: '56', note: '14 layers · 40 time intervals each', color: 'text-[#E8973A]' },
] as const

export default function SoftwarePage() {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string

    if (!email || !email.includes('@')) {
      setEmailError(true)
      setTimeout(() => setEmailError(false), 1500)
      return
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setEmailSubmitted(true)
      }
    } catch {
      setEmailSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#27303F]">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">

          {/* ── Hero ── */}
          <motion.section
            className="mb-16"
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="font-mono text-xs tracking-[0.18em] uppercase text-[#89C3F9] mb-6"
              variants={fadeUp}
              custom={0.1}
            >
              Computational petrology · Subduction modelling
            </motion.p>

            <motion.div className="mb-8" variants={fadeUp} custom={0.2}>
              <Image
                src="/images/tpx_logo2.png"
                alt="ThermoPathX"
                width={420}
                height={100}
                className="w-auto h-16 sm:h-20"
                priority
              />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-[1.05] mb-6"
              variants={fadeUp}
              custom={0.3}
            >
              Phase equilibria<br />
              at <em className="italic text-[#E8973A]">planetary</em> scale.
            </motion.h1>

            <motion.p
              className="text-lg leading-relaxed text-slate-300 max-w-xl mb-12"
              variants={fadeUp}
              custom={0.45}
            >
              An integrated four-application pipeline for automated thermodynamic
              modelling non-linear geotherms — from raw geochemical data to
              redox analysis across thousands of P‑T paths.
            </motion.p>

            {/* ── Pipeline ── */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0"
              variants={fadeUp}
              custom={0.6}
            >
              {pipelineModules.map((mod, i) => (
                <div
                  key={mod.num}
                  className={`
                    relative bg-slate-800/50 lg:bg-transparent
                    border border-slate-700/50 lg:border-0 lg:border-t-2
                    ${mod.borderColor}
                    rounded-xl lg:rounded-none
                    p-5 lg:px-4 lg:py-5
                    hover:bg-slate-800/40 transition-colors
                  `}
                >
                  <span className="font-mono text-[0.62rem] tracking-[0.12em] text-slate-500 block mb-2">
                    {mod.num}
                  </span>
                  <span className={`text-base font-semibold block mb-1 ${mod.nameColor}`}>
                    {mod.nameHighlight ? (
                      <>ThermoPath<em className="italic text-[#E8973A]">X</em></>
                    ) : (
                      mod.name
                    )}
                  </span>
                  <span className="text-xs leading-relaxed text-slate-400 block">
                    {mod.desc}
                  </span>

                  {/* Arrow between modules (desktop only) */}
                  {i < pipelineModules.length - 1 && (
                    <span className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs z-10">
                      →
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Divider ── */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-16" />

          {/* ── Built for systematic studies ── */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Left column */}
            <motion.div variants={fadeUp} custom={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight mb-4">
                Built for<br />
                <em className="italic text-[#89C3F9]">systematic</em><br />
                studies.
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                ThermoPathX integrates with PerpleX (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0012821X05002839?via%3Dihub" target="_blank" rel="noopener noreferrer" className="text-[#89C3F9] hover:text-[#CDE5FC] hover:underline transition-colors">Connolly, 2005</a>) and the
                <a href="https://link.springer.com/article/10.1186/s40645-023-00589-5" target="_blank" rel="noopener noreferrer" className="text-[#89C3F9] hover:text-[#CDE5FC] hover:underline transition-colors"> van Keken &amp; Wilson (2023)</a> subduction zone database to enable
                local- and global-scale thermodynamic modelling
              </p>
              <ul className="space-y-0">
                {features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 py-3 border-b border-slate-700/50 text-sm text-slate-300"
                  >
                    <span className="font-mono text-xs text-[#89C3F9] mt-0.5 flex-shrink-0">—</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right column — Specs */}
            <motion.div
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 sm:p-8 flex flex-col gap-6 self-start"
              variants={fadeUp}
              custom={0.25}
            >
              {/* Logo banner */}
              <div className="rounded-lg overflow-hidden mb-2">
                <Image
                  src="/images/tpx_logo2.png"
                  alt="ThermoPathX"
                  width={600}
                  height={180}
                  className="w-full h-auto"
                />
              </div>

              {specs.map((spec, i) => (
                <div key={spec.label}>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-slate-400">
                      {spec.label}
                    </span>
                    <span className={`text-3xl font-bold leading-none ${spec.color}`}>
                      {spec.value}
                    </span>
                    <span className="text-xs text-slate-400 mt-1">{spec.note}</span>
                  </div>
                  {i < specs.length - 1 && (
                    <div className="h-px bg-slate-700/50 mt-6" />
                  )}
                </div>
              ))}

              {/* PerpleX versions */}
              <div>
                <div className="h-px bg-slate-700/50 mb-6" />
                <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-slate-400 block">
                  PerpleX versions
                </span>
                <span className="font-mono text-sm text-slate-300 mt-1 block">
                  7.1.2 · 7.1.18
                </span>
                <span className="text-xs text-slate-400 mt-1 block">Aug 2023 — Jan 2026</span>
              </div>

              {/* Thermodynamic databases */}
              <div>
                <div className="h-px bg-slate-700/50 mb-6" />
                <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-slate-400 block">
                  Thermodynamic databases
                </span>
                <span className="font-mono text-sm text-slate-300 mt-1 block">
                  DEW19HP... · DEW24HP...
                </span>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Divider ── */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-16" />

          {/* ── Newsletter / Notify ── */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div
              className="relative border border-slate-700/50 rounded-xl p-8 sm:p-10 overflow-hidden"
              variants={fadeUp}
              custom={0.1}
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#89C3F9] via-[#E8973A] to-[#D45F3C]" />

              <h3 className="text-2xl font-bold text-slate-100 mb-2">
                Be the first to know.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-md">
                Leave your email and we&apos;ll notify you when ThermoPathX is
                available for download — no other emails, no marketing.
              </p>

              {!emailSubmitted ? (
                <form
                  action="https://formspree.io/f/xdappgwv"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="max-w-lg"
                >
                  <div className="flex flex-col sm:flex-row gap-0">
                    <input
                      type="email"
                      name="email"
                      placeholder="your@institution.edu"
                      autoComplete="email"
                      className={`
                        flex-1 bg-slate-900/50 text-slate-100 text-sm
                        border border-slate-700/50 sm:border-r-0
                        rounded-t-lg sm:rounded-t-none sm:rounded-l-lg
                        px-4 py-3 outline-none
                        placeholder:text-slate-500
                        focus:border-[#89C3F9]/50 focus:bg-slate-900/70
                        transition-colors
                        ${emailError ? 'border-[#D45F3C]/60' : ''}
                      `}
                    />
                    <button
                      type="submit"
                      className="
                        bg-[#1B8C8A] hover:bg-[#2DB5B2]
                        border border-[#1B8C8A] hover:border-[#2DB5B2]
                        rounded-b-lg sm:rounded-b-none sm:rounded-r-lg
                        px-6 py-3
                        font-mono text-xs tracking-[0.1em] uppercase text-white
                        transition-colors whitespace-nowrap
                      "
                    >
                      Notify me
                    </button>
                  </div>
                  <p className="font-mono text-[0.65rem] text-slate-500 mt-3">
                    No spam. Unsubscribe any time.
                  </p>
                </form>
              ) : (
                <div className="flex items-center gap-3 px-4 py-3 border border-[#3A9E6E]/35 bg-[#3A9E6E]/5 rounded-lg max-w-lg">
                  <div className="w-5 h-5 rounded-full bg-[#3A9E6E] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[0.6rem]">✓</span>
                  </div>
                  <span className="text-sm text-[#3A9E6E]">
                    You&apos;re on the list. We&apos;ll be in touch.
                  </span>
                </div>
              )}
            </motion.div>
          </motion.section>

          {/* ── Footer ── */}
          <footer className="border-t border-slate-700/50 pt-6 pb-8 flex flex-wrap justify-between items-center gap-4">
            <Image
              src="/images/tpx_logo2.png"
              alt="ThermoPathX"
              width={180}
              height={44}
              className="w-auto h-8"
            />
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.65rem] text-slate-400 tracking-wide">
                IACT-CSIC · Granada, Spain
              </span>
              <Image
                src="/images/logo_erc.png"
                alt="ERC"
                width={120}
                height={120}
                className="w-auto h-16"
              />
              <Image
                src="/images/momentum_logo_programme.png"
                alt="Momentum CSIC"
                width={120}
                height={120}
                className="w-auto h-16"
              />
            </div>
          </footer>

        </div>
      </main>
    </div>
  )
}
