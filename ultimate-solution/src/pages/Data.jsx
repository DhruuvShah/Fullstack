import { GlassCard } from "../components/GlassCard";
import { CloudDownload, ClipboardList, Settings2, Share2 } from "lucide-react";
import { ApiWork } from "../components/ApiWork";
import { ContextDemo } from "../components/ContextDemo";
import { ReactForm } from "../components/ReactForm";
import { StudentRegistration } from "../components/StudentRegistration";
import { ReducerDemo } from "../components/ReducerDemo";
function Data() {
  return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <GlassCard title="API Fetch (useEffect)" icon={CloudDownload} delay={0.1}>
        <ApiWork />
      </GlassCard>

      <GlassCard title="React Forms" icon={ClipboardList} delay={0.2} className="row-span-2">
        <ReactForm />
        <StudentRegistration />
      </GlassCard>

      <GlassCard title="Reducer (useReducer)" icon={Settings2} delay={0.3}>
        <ReducerDemo />
      </GlassCard>

      <GlassCard title="Context API" icon={Share2} delay={0.4}>
        <ContextDemo />
      </GlassCard>
    </div>;
}
export {
  Data
};
