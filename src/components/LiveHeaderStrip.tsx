import React from 'react';
import { Clock, Calendar, Users, Eye, Radio } from 'lucide-react';
import { useLiveVisitorStats } from '../hooks/useLiveVisitorStats';

export const LiveHeaderStrip: React.FC = () => {
  const { dateString, timeString, dailyVisitors, totalVisitors } = useLiveVisitorStats();

  return (
    <div className="w-full bg-stone-950/95 border-b border-amber-500/20 backdrop-blur-md text-[11px] sm:text-xs text-stone-300 py-1.5 px-3 sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        
        {/* Left: Date & Time with live indicator */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-[10px] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <Radio className="w-3 h-3 text-emerald-400" />
            <span>IST Live</span>
          </div>

          <div className="flex items-center gap-1.5 text-stone-300">
            <Calendar className="w-3.5 h-3.5 text-amber-400/90 shrink-0" />
            <span className="font-medium text-amber-100">{dateString}</span>
          </div>

          <span className="text-stone-700 hidden sm:inline">•</span>

          <div className="flex items-center gap-1.5 text-stone-300">
            <Clock className="w-3.5 h-3.5 text-amber-400/90 shrink-0" />
            <span className="font-mono font-bold text-amber-300 tabular-nums tracking-wide">{timeString}</span>
            <span className="text-[10px] text-amber-400/80 font-semibold tracking-wider">IST</span>
          </div>
        </div>

        {/* Right: 24h Visitor Count & Total Website Visitor Count */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
          {/* 24-Hour Visitors */}
          <div
            className="flex items-center gap-1.5 bg-stone-900/90 border border-amber-500/20 hover:border-amber-500/40 px-2 sm:px-2.5 py-0.5 rounded-lg transition-colors"
            title="Unique visitors in the last 24 hours"
          >
            <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-stone-400 hidden sm:inline text-[10px] uppercase tracking-wider font-semibold">
              24h Visitors:
            </span>
            <span className="text-stone-400 sm:hidden text-[10px] uppercase tracking-wider font-semibold">
              24h:
            </span>
            <span className="font-mono font-bold text-amber-200 tabular-nums">
              {dailyVisitors.toLocaleString()}
            </span>
          </div>

          {/* Total Visitors */}
          <div
            className="flex items-center gap-1.5 bg-stone-900/90 border border-amber-500/20 hover:border-amber-500/40 px-2 sm:px-2.5 py-0.5 rounded-lg transition-colors"
            title="Total verified visitors to Mrs. Shova Rai's portfolio"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-stone-400 hidden sm:inline text-[10px] uppercase tracking-wider font-semibold">
              Total Visits:
            </span>
            <span className="text-stone-400 sm:hidden text-[10px] uppercase tracking-wider font-semibold">
              Total:
            </span>
            <span className="font-mono font-bold text-amber-300 tabular-nums">
              {totalVisitors.toLocaleString()}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
