'use client'

import { useEffect, useState } from 'react'
import { CircularProgress } from '@/components/ui/circular-progress'
import { cn } from '@/lib/utils'
import { ZapIcon } from 'lucide-react'

interface InitialLoaderProps {
  onComplete?: () => void
  durationMs?: number
}

export default function InitialLoader({ onComplete, durationMs = 1800 }: InitialLoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      // Ease-out cubic so it feels snappy near the end
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.round(eased * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        onComplete?.()
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [durationMs, onComplete])

  const getColor = (v: number) => {
    if (v > 85) return 'text-cyan-300'
    if (v > 40) return 'text-cyan-400'
    return 'text-violet-400'
  }

  const activeColor = getColor(progress)

  return (
    <div className="min-h-screen bg-[#082c47] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center px-4">
        <CircularProgress
          size={180}
          showLabel
          circleStrokeWidth={8}
          progressStrokeWidth={10}
          value={progress}
          trackDashArray="8 15"
          shape="round"
          progressClassName={cn('transition-colors duration-500', activeColor)}
          progressBgClassName="text-cyan-400/15"
          renderLabel={v => (
            <div className="flex flex-col items-center">
              <ZapIcon className={cn('size-6 transition-colors duration-500', activeColor)} />
              <div className="flex items-baseline">
                <span className={cn('text-4xl font-medium tabular-nums', activeColor)}>{Math.round(v)}</span>
                <span className={cn('ml-0.5 text-base font-medium', activeColor)}>%</span>
              </div>
              <span className="text-slate-400 text-xs font-medium uppercase tracking-wide">Loading</span>
            </div>
          )}
        />

        <h2 className="mt-8 text-xl font-semibold text-white">Loading Rashed&apos;s Portfolio...</h2>
        <p className="text-sm text-slate-400 mt-2">Software Developer & Full Stack Engineer</p>
      </div>
    </div>
  )
}
