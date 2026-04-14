import { GlassCard } from "../components/GlassCard";
import { Code, Paintbrush, Box, Users, Network, LayoutTemplate } from "lucide-react";
import { Hello } from "../components/Hello";
import { InlineStyleDemo } from "../components/InlineStyleDemo";
import { Nested } from "../components/Nested";
import { Greet } from "../components/Greet";
import { Faculty } from "../components/Faculty";
import { Parent } from "../components/NestedProps";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
function Basics() {
  return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <GlassCard title="Basic Components" icon={LayoutTemplate} delay={0.05} className="md:col-span-2">
        <div className="flex flex-col gap-4 w-full overflow-x-auto pb-4">
          <Navbar />
          <Header />
          <Footer />
        </div>
      </GlassCard>

      <GlassCard title="Hello World" icon={Code} delay={0.1}>
        <Hello />
      </GlassCard>

      <GlassCard title="Inline Styles" icon={Paintbrush} delay={0.2}>
        <InlineStyleDemo />
      </GlassCard>

      <GlassCard title="Nested Elements" icon={Box} delay={0.3}>
        <Nested />
      </GlassCard>

      <GlassCard title="Props Demo" icon={Users} delay={0.4}>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <Greet name="Alice" city="Wonderland" />
            <Greet name="Bob" city="Builderland" />
          </div>
          <div className="h-px w-full bg-black/10 dark:bg-white/10" />
          <div className="space-y-3">
            <Faculty name="Dr. Smith" Department="Computer Science" university="Tech University" />
            <Faculty name="Dr. Johnson" Department="Mathematics" university="Science College" />
          </div>
        </div>
      </GlassCard>

      <GlassCard title="Nested Props" icon={Network} delay={0.5} className="md:col-span-2">
        <Parent name="John" city="New York" />
      </GlassCard>
    </div>;
}
export {
  Basics
};
