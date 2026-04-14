import { GlassCard } from '../components/GlassCard';
import { Calculator as CalcIcon, Clock, MousePointerClick, TextCursorInput } from 'lucide-react';
import { CounterApp } from '../components/CounterApp';
import { Calculator } from '../components/Calculator';
import { SimpleCalculator } from '../components/SimpleCalculator';
import { UseEffectEx } from '../components/UseEffectEx';
import { DigitalClock } from '../components/DigitalClock';

export function Tools() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <GlassCard title="Counter App" icon={MousePointerClick} delay={0.1}>
        <CounterApp />
      </GlassCard>

      <GlassCard title="Modern Calculator" icon={CalcIcon} delay={0.2} className="row-span-2">
        <Calculator />
      </GlassCard>

      <GlassCard title="Simple Calculator" icon={CalcIcon} delay={0.25} className="row-span-2">
        <SimpleCalculator />
      </GlassCard>

      <GlassCard title="Digital Clock" icon={Clock} delay={0.3}>
        <DigitalClock />
      </GlassCard>

      <GlassCard title="Document Title (useEffect)" icon={TextCursorInput} delay={0.4}>
        <UseEffectEx />
      </GlassCard>
    </div>
  );
}
