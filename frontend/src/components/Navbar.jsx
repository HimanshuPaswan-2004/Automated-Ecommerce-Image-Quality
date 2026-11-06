import React from 'react'
import { ShieldCheck, Activity, Terminal } from 'lucide-react'

export default function Navbar({ backendStatus }) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white tracking-tight">ImageQuality</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-medium">
                Inspector
              </span>
            </div>
            <p className="text-xs text-slate-400">DIP + ML + Agentic Workflow</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
            <span
              className={`w-2 h-2 rounded-full ${
                backendStatus === 'online'
                  ? 'bg-emerald-500 animate-pulse'
                  : backendStatus === 'checking'
                  ? 'bg-amber-400 animate-bounce'
                  : 'bg-rose-500'
              }`}
            />
            <span className="font-mono">
              API:{' '}
              {backendStatus === 'online'
                ? 'Online (8000)'
                : backendStatus === 'checking'
                ? 'Connecting...'
                : 'Offline'}
            </span>
          </div>

          <a
            href="http://localhost:8000/docs"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition px-3 py-1.5 rounded-lg hover:bg-slate-800"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>FastAPI Docs</span>
          </a>
        </div>
      </div>
    </header>
  )
}
