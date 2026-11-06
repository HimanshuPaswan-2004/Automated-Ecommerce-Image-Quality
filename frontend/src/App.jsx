import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SystemStatus from './components/SystemStatus'
import WorkflowTeaser from './components/WorkflowTeaser'
import { CheckCircle2, ArrowUpRight, Github, Code2, Server, Globe } from 'lucide-react'

export default function App() {
  const [healthData, setHealthData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [backendStatus, setBackendStatus] = useState('checking') // 'online' | 'offline' | 'checking'

  const checkHealth = async () => {
    setLoading(true)
    setError(null)
    setBackendStatus('checking')
    try {
      const response = await fetch('http://localhost:8000/health')
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      const data = await response.json()
      setHealthData(data)
      setBackendStatus('online')
    } catch (err) {
      console.warn('Backend /health unreachable:', err.message)
      setError(err.message)
      setBackendStatus('offline')
      setHealthData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkHealth()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar backendStatus={backendStatus} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Phase 1: Project Setup & Architecture Completed
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Automated E-commerce <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Image Quality Inspector
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A full-stack DIP, ML & agentic inspection platform designed to detect quality defects, apply
            safe corrections, and generate traceable quality scores for product catalogs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="http://localhost:8000/docs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 transition active:scale-95"
            >
              <Server className="w-4 h-4" />
              <span>Explore Swagger API Docs</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
            <button
              onClick={checkHealth}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold transition active:scale-95"
            >
              <Code2 className="w-4 h-4" />
              <span>Verify /health Status</span>
            </button>
          </div>
        </div>

        {/* Live System Status / Health API Card */}
        <SystemStatus
          healthData={healthData}
          loading={loading}
          onRefresh={checkHealth}
          error={error}
        />

        {/* Workflow Overview */}
        <WorkflowTeaser />

        {/* Project Roadmap Milestones */}
        <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Milestones & Roadmap Progress</h3>
              <p className="text-xs text-slate-400">Structured 9-Phase execution plan from project blueprint.</p>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-lg">
              1 / 9 Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs">
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Phase 1 — Setup & Architecture</span>
              </div>
              <p className="text-slate-400">
                Git repository, React + Vite + Tailwind frontend, FastAPI backend with /health endpoint & unit tests.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
              <div className="flex items-center gap-2 text-slate-300 font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Phase 2 — Dataset Strategy</span>
              </div>
              <p className="text-slate-400">
                Shoe category images collection, synthetic defect generation (blur, noise, exposure) & reproducible splits.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
              <div className="flex items-center gap-2 text-slate-300 font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-slate-600" />
                <span>Phase 3 — DIP Engine</span>
              </div>
              <p className="text-slate-400">
                Variance of Laplacian (sharpness), histogram luminance analysis, contrast and noise metrics with unit tests.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Automated E-commerce Image Quality Inspector • Planning & Development Blueprint</span>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Localhost: 5173 (UI) | 8000 (API)</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

