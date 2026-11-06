import React from 'react'
import { UploadCloud, Scan, BrainCircuit, Wand2, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Upload & Validation',
    desc: 'Validates file extension, MIME type, dimensions, and readability. Strips EXIF metadata safely.',
    icon: UploadCloud,
    accent: 'from-blue-500 to-indigo-500',
    border: 'border-blue-500/20',
  },
  {
    step: '02',
    title: 'DIP Quality Analysis',
    desc: 'Computes variance of Laplacian (sharpness), luminance spread, contrast standard deviation, and noise estimate.',
    icon: Scan,
    accent: 'from-cyan-500 to-blue-500',
    border: 'border-cyan-500/20',
  },
  {
    step: '03',
    title: 'ML Decision Engine',
    desc: 'Predicts defect probabilities using calibrated models to classify into ACCEPT, REJECT, or human REVIEW.',
    icon: BrainCircuit,
    accent: 'from-purple-500 to-pink-500',
    border: 'border-purple-500/20',
  },
  {
    step: '04',
    title: 'Correction Studio',
    desc: 'Applies safe non-destructive enhancements (unsharp mask, intensity correction) and reinspects the derived copy.',
    icon: Wand2,
    accent: 'from-emerald-500 to-teal-500',
    border: 'border-emerald-500/20',
  },
]

export default function WorkflowTeaser() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Inspection Pipeline
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            End-to-End Image Processing Workflow
          </h2>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Deterministic computer vision meets safe agentic automation to maintain flawless e-commerce catalog standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={item.step}
              className={`bg-slate-900/60 border ${item.border} rounded-2xl p-5 hover:border-slate-600 transition flex flex-col justify-between group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-2xl font-black text-slate-800 group-hover:text-slate-700 transition">
                {item.step}
              </div>

              <div>
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${item.accent} flex items-center justify-center shadow-lg mb-4 text-white`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition">
                <span>Phase {idx + 1} integration</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

