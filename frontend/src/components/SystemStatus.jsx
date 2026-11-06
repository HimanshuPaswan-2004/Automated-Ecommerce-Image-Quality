import React, { useState } from 'react'
import { RefreshCw, CheckCircle2, XCircle, Cpu, Layers, Sparkles, Database } from 'lucide-react'

export default function SystemStatus({ healthData, loading, onRefresh, error }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (!healthData) return
    navigator.clipboard.writeText(JSON.stringify(healthData, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-white tracking-tight">Backend Health & Architecture Status</h2>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Phase 1 Target
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Real-time validation of FastAPI backend server on <code className="font-mono text-cyan-400">/health</code> endpoint.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onRefresh}
            disabled={loading}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 active:bg-slate-800 border border-slate-700 rounded-xl transition disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Test /health API</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* API Health Card */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Service Status</span>
            {healthData?.status === 'healthy' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <XCircle className="w-4 h-4 text-rose-400" />
            )}
          </div>
          <div className="text-lg font-bold text-white capitalize">
            {healthData ? healthData.status : error ? 'Offline' : 'Checking...'}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {healthData ? `Version ${healthData.version}` : 'FastAPI Uvicorn service'}
          </p>
        </div>

        {/* DIP Engine Card */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">DIP Engine</span>
            <Cpu className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-white">OpenCV + NumPy</div>
          <p className="text-xs text-emerald-400 mt-1">
            {healthData?.modules?.dip_engine === 'available' ? '● Metrics Ready' : 'Pending'}
          </p>
        </div>

        {/* ML Classifier Card */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">ML Engine</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-lg font-bold text-white">Scikit-learn</div>
          <p className="text-xs text-emerald-400 mt-1">
            {healthData?.modules?.ml_classifier === 'available' ? '● Classifier Ready' : 'Pending'}
          </p>
        </div>

        {/* Storage / Audit Card */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Storage Mode</span>
            <Database className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-lg font-bold text-white">
            {healthData?.modules?.storage ? healthData.modules.storage.toUpperCase() : 'LOCAL FS'}
          </div>
          <p className="text-xs text-slate-500 mt-1">Isolated Original / Derived</p>
        </div>
      </div>

      {/* JSON Response Preview */}
      <div className="mt-6 pt-5 border-t border-slate-800/70">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-slate-400">Response Payload (GET http://localhost:8000/health)</span>
          {healthData && (
            <button
              onClick={handleCopy}
              className="text-xs text-blue-400 hover:text-blue-300 font-mono transition"
            >
              {copied ? 'Copied!' : 'Copy JSON'}
            </button>
          )}
        </div>
        <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto">
          {healthData
            ? JSON.stringify(healthData, null, 2)
            : error
            ? JSON.stringify({ error, note: "Start backend server: uvicorn app.main:app --reload --port 8000" }, null, 2)
            : "Querying backend /health endpoint..."}
        </pre>
      </div>
    </section>
  )
}
