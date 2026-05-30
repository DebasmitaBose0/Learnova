'use client';

import { useEffect, useState } from 'react';
import { AlertOctagon, Terminal, Copy, Check, RotateCcw, Home } from 'lucide-react';

export default function Error({ error, reset }) {
  const [copied, setCopied] = useState(false);
  const [showLogs, setShowLogs] = useState(false);

  useEffect(() => {
    console.error('Learnova Global Error Captured:', error);
  }, [error]);

  const handleCopyLogs = async () => {
    try {
      const logText = `Learnova Error Log\nMessage: ${error?.message || 'Unknown error'}\nStack: ${error?.stack || 'No stack trace available'}`;
      await navigator.clipboard.writeText(logText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Failed to copy error diagnostics:', err);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 p-4 font-sans relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="max-w-2xl w-full z-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="border border-slate-800 bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 shadow-2xl flex flex-col items-center text-center">
          
          {/* Animated Glow Ring & Error Icon */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-red-500/20 blur-xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shadow-inner">
              <AlertOctagon className="w-10 h-10 text-red-400" />
            </div>
          </div>

          <p className="mb-2 text-xs uppercase tracking-[0.25em] font-semibold text-red-400">
            System Error Encountered
          </p>
          
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
            Service Temporarily Disrupted
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
            Learnova encountered a critical runtime exception. We have automatically logged the error and our engineers are resolving it.
          </p>

          {/* Interactive Navigation Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-8">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-xl shadow-indigo-500/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              Try Recovery
            </button>
            
            <a
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-white text-slate-300 font-semibold px-6 py-3.5 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Home className="w-4 h-4" />
              Return Home
            </a>
          </div>

          {/* Diagnostics Section */}
          <div className="w-full border-t border-slate-800/80 pt-6">
            <div className="flex items-center justify-between w-full mb-3">
              <button
                onClick={() => setShowLogs(!showLogs)}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-indigo-400 transition-colors"
                aria-expanded={showLogs}
              >
                <Terminal className="w-4 h-4 text-indigo-400" />
                {showLogs ? 'Hide diagnostics' : 'Show diagnostics'}
              </button>
              
              {showLogs && (
                <button
                  onClick={handleCopyLogs}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors"
                  title="Copy error details"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy log</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {showLogs && (
              <div className="w-full text-left bg-black/60 border border-slate-800 rounded-2xl p-4 overflow-auto max-h-56 shadow-inner font-mono text-[11px] sm:text-xs leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
                <p className="text-red-400 font-bold mb-2 break-all">
                  Error: {error?.message || 'Unknown Exception'}
                </p>
                {error?.stack ? (
                  <pre className="text-slate-500 whitespace-pre-wrap select-all font-mono">
                    {error.stack}
                  </pre>
                ) : (
                  <p className="text-slate-600 italic">
                    No active stack trace was provided by the rendering context.
                  </p>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}