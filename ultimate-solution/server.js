import express from "express";
import os from "os";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import { add, product } from "./backend/unit3/Index.js";
import { uppercase, lowercase, camelcase, capitalize } from "./backend/unit4/string.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/os", (req, res) => {
  res.json({
    architecture: os.arch(),
    platform: os.platform(),
    cpus: os.cpus().length,
    hostname: os.hostname(),
    homedir: os.homedir(),
    freemem: os.freemem(),
    totalmem: os.totalmem(),
    uptime: os.uptime()
  });
});

app.post("/api/fs/write", (req, res) => {
  const { content } = req.body;
  const filePath = path.join(process.cwd(), "welcome.txt");
  fs.writeFile(filePath, content || "Welcome to Node JS", (err) => {
    if (err) return res.status(500).json({ error: "Error writing file" });
    res.json({ message: "File Created Successfully" });
  });
});

app.get("/api/fs/read", (req, res) => {
  const filePath = path.join(process.cwd(), "welcome.txt");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "File not found or error reading" });
    res.json({ content: data });
  });
});

app.post("/api/math", (req, res) => {
  const { a, b, operation } = req.body;
  if (operation === "add") res.json({ result: add(a, b) });
  else if (operation === "product") res.json({ result: product(a, b) });
  else res.status(400).json({ error: "Invalid operation" });
});

app.post("/api/string", (req, res) => {
  const { text, operation } = req.body;
  let result = "";
  switch (operation) {
    case "uppercase": result = uppercase(text); break;
    case "lowercase": result = lowercase(text); break;
    case "camelcase": result = camelcase(text); break;
    case "capitalize": result = capitalize(text); break;
    default: return res.status(400).json({ error: "Invalid operation" });
  }
  res.json({ result });
});

app.get("/api/hello", (req, res) => {
  exec("node backend/unit3/hello.js", (error, stdout, stderr) => {
    res.json({ output: stdout || stderr || error?.message });
  });
});

app.get("/api/http-demo", (req, res) => {
  res.send(`<h1>Ayushi Sathwara</h1><p>Welcome to Local Node Server</p>`);
});

app.get("/api/timers/basic", (req, res) => {
  res.json({
    output: "This message repeats every 2 seconds\nThis message appears after 3 seconds\nThis message repeats every 2 seconds\n..."
  });
});

let textInterval = null;
app.post("/api/timers/text/start", (req, res) => {
  if (textInterval) return res.json({ message: "Already running" });
  textInterval = setInterval(() => {
    fs.appendFile(path.join(process.cwd(), "ayushi.txt"), "Hello Good Morning..!\n", (err) => {
      if (err) console.error(err);
    });
  }, 5000);
  res.json({ message: "Started appending to ayushi.txt every 5s" });
});

app.post("/api/timers/text/stop", (req, res) => {
  if (textInterval) clearInterval(textInterval);
  textInterval = null;
  res.json({ message: "Stopped" });
});

app.get("/api/timers/text/read", (req, res) => {
  fs.readFile(path.join(process.cwd(), "ayushi.txt"), "utf8", (err, data) => {
    if (err) return res.json({ content: "File is empty or not created yet." });
    res.json({ content: data });
  });
});

let dateInterval = null;
app.post("/api/timers/date/start", (req, res) => {
  if (dateInterval) return res.json({ message: "Already running" });
  dateInterval = setInterval(() => {
    const date = new Date().toLocaleString();
    fs.appendFile(path.join(process.cwd(), "date_time.txt"), date + "\n", (err) => {
      if (err) console.error(err);
    });
  }, 2000);
  res.json({ message: "Started appending to date_time.txt every 2s" });
});

app.post("/api/timers/date/stop", (req, res) => {
  if (dateInterval) clearInterval(dateInterval);
  dateInterval = null;
  res.json({ message: "Stopped" });
});

app.get("/api/timers/date/read", (req, res) => {
  fs.readFile(path.join(process.cwd(), "date_time.txt"), "utf8", (err, data) => {
    if (err) return res.json({ content: "File is empty or not created yet." });
    res.json({ content: data });
  });
});

// On Vercel: export the app for the serverless runtime.
// Locally: attach Vite dev middleware and start the HTTP server.
if (process.env.VERCEL) {
  // Serve the pre-built frontend (dist/) for non-API routes
  const distPath = path.join(__dirname, "dist");
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== "true" },
    appType: "spa",
  });
  app.use(vite.middlewares);
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
