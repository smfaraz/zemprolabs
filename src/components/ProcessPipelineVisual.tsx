import React, { useState } from 'react';
import { serviceProcesses, type ServiceProcess, type ProcessStage } from '../data/processes';
import { 
  CheckCircle2, 
  ArrowRight,
  Clock, 
  Activity, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';

export const ProcessPipelineVisual: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(serviceProcesses[0].id);
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  const currentService =
    serviceProcesses.find((sp) => sp.id === selectedServiceId) || serviceProcesses[0];
  const currentStage = currentService.stages[activeStageIdx] || currentService.stages[0];

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setActiveStageIdx(0);
  };

  return (
    <div className="w-full bg-[#090A0D] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
      {/* Header & Service Ribbon */}
      <div className="space-y-4 pb-6 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>AGILE RETAINERS &bull; CONTINUOUS CI/CD PODS</span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Select a practice to inspect its tailored delivery flow &amp; ongoing retainer
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
          Delivery Process by Discipline
        </h3>

        {/* Service Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
          {serviceProcesses.map((sp) => {
            const isSelected = sp.id === currentService.id;
            const Icon = sp.icon;
            return (
              <button
                key={sp.id}
                type="button"
                onClick={() => handleSelectService(sp.id)}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all border text-center ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-lg ring-2 ring-[#FF6B00]/40'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#FF6B00]' : 'text-slate-400'}`} />
                <span className="truncate">{sp.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Facts Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
            <span>Timeline</span>
          </div>
          <div className="text-xs sm:text-sm font-bold font-display text-white leading-snug">
            {currentService.timelineEstimate}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <Activity className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
            <span>Cadence</span>
          </div>
          <div className="text-xs sm:text-sm font-bold font-display text-white leading-snug">
            {currentService.cadence}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
            <span>Primary Handover</span>
          </div>
          <div className="text-xs sm:text-sm font-bold font-display text-white leading-snug">
            {currentService.deliverableType}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <UserCheck className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
            <span>Lead Contact</span>
          </div>
          <div className="text-xs sm:text-sm font-bold font-display text-white leading-snug">
            {currentService.leadContact}
          </div>
        </div>
      </div>

      {/* Stage Selector Ribbon */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {currentService.stages.map((stg, idx) => {
          const isActive = idx === activeStageIdx;
          return (
            <button
              key={stg.number}
              type="button"
              onClick={() => setActiveStageIdx(idx)}
              className={`text-left p-3.5 rounded-xl transition-all border flex flex-col justify-between ${
                isActive
                  ? 'bg-white/10 border-white/30 ring-1 ring-[#FF6B00]'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#FF6B00]' : 'text-slate-400'}`}>
                  STAGE {stg.number}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {stg.timeline}
                </span>
              </div>
              <div className="text-xs font-bold text-white truncate">
                {stg.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card */}
      <div className="p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#FF6B00] font-bold">
                STAGE {currentStage.number} &bull; {currentStage.timeline}
              </span>
              <span className="text-xs text-slate-400">
                ({currentService.serviceName})
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              {currentStage.title}
            </h4>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {currentService.leadContact}
          </span>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {currentStage.description}
        </p>

        {/* What Client Receives */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
          <div className="text-xs font-mono uppercase text-emerald-400 font-bold">
            What You Receive:
          </div>
          <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed font-medium">
            {currentStage.clientReceives}
          </p>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-2.5">
          <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
            Concrete Deliverables &amp; Milestones:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentStage.deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
