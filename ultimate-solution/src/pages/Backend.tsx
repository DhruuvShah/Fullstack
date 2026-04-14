import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { HardDrive, FileText, Calculator, Type, Terminal, Globe, Clock, FileClock } from 'lucide-react';
import { motion } from 'motion/react';

export function Backend() {
  const [osInfo, setOsInfo] = useState<any>(null);
  const [fileContent, setFileContent] = useState('');
  const [writeContent, setWriteContent] = useState('Welcome to Node JS');
  const [mathA, setMathA] = useState(5);
  const [mathB, setMathB] = useState(10);
  const [mathResult, setMathResult] = useState<number | null>(null);
  const [stringText, setStringText] = useState('hello world');
  const [stringResult, setStringResult] = useState('');

  const [helloOutput, setHelloOutput] = useState('');
  const [timersOutput, setTimersOutput] = useState('');
  const [textIntervalContent, setTextIntervalContent] = useState('');
  const [dateIntervalContent, setDateIntervalContent] = useState('');

  const fetchOsInfo = async () => { const res = await fetch('/api/os'); setOsInfo(await res.json()); };
  const readFile = async () => { const res = await fetch('/api/fs/read'); const data = await res.json(); if (data.error) alert(data.error); else setFileContent(data.content); };
  const writeFile = async () => { const res = await fetch('/api/fs/write', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content: writeContent }) }); const data = await res.json(); alert(data.message || data.error); };
  const calculateMath = async (operation: 'add' | 'product') => { const res = await fetch('/api/math', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ a: Number(mathA), b: Number(mathB), operation }) }); const data = await res.json(); setMathResult(data.result); };
  const processString = async (operation: string) => { const res = await fetch('/api/string', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: stringText, operation }) }); const data = await res.json(); setStringResult(data.result); };

  const runHello = async () => { const res = await fetch('/api/hello'); const data = await res.json(); setHelloOutput(data.output); };
  const runTimers = async () => { const res = await fetch('/api/timers/basic'); const data = await res.json(); setTimersOutput(data.output); };
  
  const startTextInterval = async () => { const res = await fetch('/api/timers/text/start', { method: 'POST' }); const data = await res.json(); alert(data.message); };
  const stopTextInterval = async () => { const res = await fetch('/api/timers/text/stop', { method: 'POST' }); const data = await res.json(); alert(data.message); };
  const readTextInterval = async () => { const res = await fetch('/api/timers/text/read'); const data = await res.json(); setTextIntervalContent(data.content); };

  const startDateInterval = async () => { const res = await fetch('/api/timers/date/start', { method: 'POST' }); const data = await res.json(); alert(data.message); };
  const stopDateInterval = async () => { const res = await fetch('/api/timers/date/stop', { method: 'POST' }); const data = await res.json(); alert(data.message); };
  const readDateInterval = async () => { const res = await fetch('/api/timers/date/read'); const data = await res.json(); setDateIntervalContent(data.content); };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Unit 3: Task 1 */}
      <GlassCard title="Hello Node (REPL/CLI)" icon={Terminal} delay={0.1}>
        <div className="flex flex-col gap-4">
          <motion.button whileTap={{ scale: 0.97 }} onClick={runHello} className="bg-gray-800 text-white rounded-xl px-4 py-2 font-medium">Run hello.js</motion.button>
          {helloOutput && <div className="bg-black text-green-400 p-3 rounded-xl font-mono text-sm whitespace-pre-wrap">{helloOutput}</div>}
        </div>
      </GlassCard>

      {/* Unit 3: Task 2 (Math Module) */}
      <GlassCard title="Custom Math Module" icon={Calculator} delay={0.2}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <input type="number" value={mathA} onChange={(e) => setMathA(Number(e.target.value))} className="w-1/2 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2 focus:outline-none" />
            <input type="number" value={mathB} onChange={(e) => setMathB(Number(e.target.value))} className="w-1/2 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2 focus:outline-none" />
          </div>
          <div className="flex gap-2">
            <motion.button whileTap={{ scale: 0.97 }} onClick={() => calculateMath('add')} className="w-1/2 bg-orange-500 text-white rounded-xl px-4 py-2 font-medium shadow-md shadow-orange-500/20">Add</motion.button>
            <motion.button whileTap={{ scale: 0.97 }} onClick={() => calculateMath('product')} className="w-1/2 bg-orange-500 text-white rounded-xl px-4 py-2 font-medium shadow-md shadow-orange-500/20">Multiply</motion.button>
          </div>
          {mathResult !== null && (
            <div className="text-center text-2xl font-bold mt-2">Result: {mathResult}</div>
          )}
        </div>
      </GlassCard>

      {/* Unit 3: Task 3 (OS Module) */}
      <GlassCard title="OS Module" icon={HardDrive} delay={0.3}>
        <div className="flex flex-col gap-4">
          <motion.button whileTap={{ scale: 0.97 }} onClick={fetchOsInfo} className="bg-blue-500 text-white rounded-2xl px-4 py-3 font-medium shadow-md shadow-blue-500/20">
            Get System Info
          </motion.button>
          {osInfo && (
            <div className="bg-black/5 dark:bg-white/5 p-4 rounded-2xl text-sm font-mono overflow-x-auto">
              <pre>{JSON.stringify(osInfo, null, 2)}</pre>
            </div>
          )}
        </div>
      </GlassCard>

      {/* Unit 3: Task 4 (FS Module) */}
      <GlassCard title="File System (fs)" icon={FileText} delay={0.4}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <input 
              type="text" 
              value={writeContent} 
              onChange={(e) => setWriteContent(e.target.value)} 
              className="bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2 focus:outline-none"
            />
            <motion.button whileTap={{ scale: 0.97 }} onClick={writeFile} className="bg-green-500 text-white rounded-xl px-4 py-2 font-medium shadow-md shadow-green-500/20">
              Write to welcome.txt
            </motion.button>
          </div>
          <div className="h-px w-full bg-black/10 dark:bg-white/10" />
          <div className="flex flex-col gap-2">
            <motion.button whileTap={{ scale: 0.97 }} onClick={readFile} className="bg-purple-500 text-white rounded-xl px-4 py-2 font-medium shadow-md shadow-purple-500/20">
              Read welcome.txt
            </motion.button>
            {fileContent && (
              <div className="bg-black/5 dark:bg-white/5 p-3 rounded-xl text-sm font-mono">
                {fileContent}
              </div>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Unit 3: Task 5 (HTTP Module) */}
      <GlassCard title="HTTP Server Demo" icon={Globe} delay={0.5}>
        <div className="flex flex-col gap-4">
          <p className="text-sm opacity-80">This app is already running on an Express/HTTP server. Click below to view the raw HTML response from the specific endpoint requested in the PDF.</p>
          <a href="/api/http-demo" target="_blank" rel="noreferrer" className="bg-blue-500 text-white text-center rounded-xl px-4 py-2 font-medium block">Open HTTP Response</a>
        </div>
      </GlassCard>

      {/* Unit 3: Task 6 (Timers) */}
      <GlassCard title="setTimeout & setInterval" icon={Clock} delay={0.6}>
        <div className="flex flex-col gap-4">
          <motion.button whileTap={{ scale: 0.97 }} onClick={runTimers} className="bg-purple-500 text-white rounded-xl px-4 py-2 font-medium">Simulate Timers</motion.button>
          {timersOutput && <div className="bg-black text-green-400 p-3 rounded-xl font-mono text-sm whitespace-pre-wrap">{timersOutput}</div>}
        </div>
      </GlassCard>

      {/* Unit 3: Task 7 (Interval Text Append) */}
      <GlassCard title="Interval: Append Text" icon={FileText} delay={0.7}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <motion.button whileTap={{ scale: 0.97 }} onClick={startTextInterval} className="w-1/2 bg-green-500 text-white rounded-xl px-4 py-2 font-medium">Start (5s)</motion.button>
            <motion.button whileTap={{ scale: 0.97 }} onClick={stopTextInterval} className="w-1/2 bg-red-500 text-white rounded-xl px-4 py-2 font-medium">Stop</motion.button>
          </div>
          <motion.button whileTap={{ scale: 0.97 }} onClick={readTextInterval} className="bg-gray-500 text-white rounded-xl px-4 py-2 font-medium">Read ayushi.txt</motion.button>
          {textIntervalContent && <div className="bg-black/5 dark:bg-white/5 p-3 rounded-xl text-sm font-mono whitespace-pre-wrap h-32 overflow-y-auto">{textIntervalContent}</div>}
        </div>
      </GlassCard>

      {/* Unit 3: Task 8 (Interval Date Append) */}
      <GlassCard title="Interval: Append Date" icon={FileClock} delay={0.8}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <motion.button whileTap={{ scale: 0.97 }} onClick={startDateInterval} className="w-1/2 bg-green-500 text-white rounded-xl px-4 py-2 font-medium">Start (2s)</motion.button>
            <motion.button whileTap={{ scale: 0.97 }} onClick={stopDateInterval} className="w-1/2 bg-red-500 text-white rounded-xl px-4 py-2 font-medium">Stop</motion.button>
          </div>
          <motion.button whileTap={{ scale: 0.97 }} onClick={readDateInterval} className="bg-gray-500 text-white rounded-xl px-4 py-2 font-medium">Read date_time.txt</motion.button>
          {dateIntervalContent && <div className="bg-black/5 dark:bg-white/5 p-3 rounded-xl text-sm font-mono whitespace-pre-wrap h-32 overflow-y-auto">{dateIntervalContent}</div>}
        </div>
      </GlassCard>

      {/* Unit 4: Task 1 (String Module) */}
      <GlassCard title="Custom String Module" icon={Type} delay={0.9}>
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            value={stringText} 
            onChange={(e) => setStringText(e.target.value)} 
            className="bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2 focus:outline-none"
          />
          <div className="grid grid-cols-2 gap-2">
            <motion.button whileTap={{ scale: 0.97 }} onClick={() => processString('uppercase')} className="bg-indigo-500 text-white rounded-xl px-2 py-2 text-sm font-medium shadow-md shadow-indigo-500/20">Uppercase</motion.button>
            <motion.button whileTap={{ scale: 0.97 }} onClick={() => processString('lowercase')} className="bg-indigo-500 text-white rounded-xl px-2 py-2 text-sm font-medium shadow-md shadow-indigo-500/20">Lowercase</motion.button>
            <motion.button whileTap={{ scale: 0.97 }} onClick={() => processString('camelcase')} className="bg-indigo-500 text-white rounded-xl px-2 py-2 text-sm font-medium shadow-md shadow-indigo-500/20">Camelcase</motion.button>
            <motion.button whileTap={{ scale: 0.97 }} onClick={() => processString('capitalize')} className="bg-indigo-500 text-white rounded-xl px-2 py-2 text-sm font-medium shadow-md shadow-indigo-500/20">Capitalize</motion.button>
          </div>
          {stringResult && (
            <div className="bg-black/5 dark:bg-white/5 p-3 rounded-xl text-center font-medium text-lg">
              {stringResult}
            </div>
          )}
        </div>
      </GlassCard>

      {/* Unit 4: Task 2 (Nodemon) */}
      <GlassCard title="Nodemon / Live Reload" icon={Terminal} delay={1.0}>
        <div className="flex flex-col gap-4">
          <p className="text-sm opacity-80 leading-relaxed">
            In this modern full-stack environment, we use <strong>Vite</strong> and <strong>tsx</strong> which provide the exact same functionality as <code>nodemon</code>. 
            <br/><br/>
            Whenever you save a file, the server automatically restarts and the UI hot-reloads, fulfilling the requirement of automatically reloading a Node.js HTTP server upon saving file changes.
          </p>
          <div className="bg-black/5 dark:bg-white/5 p-3 rounded-xl text-sm font-mono text-blue-600 dark:text-blue-400">
            $ npm run dev
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
