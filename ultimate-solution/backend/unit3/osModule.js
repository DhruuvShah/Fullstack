import os from 'os';

console.log("Architecture :", os.arch());
console.log("Platform     :", os.platform());
console.log("CPUs         :", os.cpus().length);
console.log("Hostname     :", os.hostname());
console.log("Home Dir     :", os.homedir());
console.log("Free Memory  :", os.freemem());
console.log("Total Memory :", os.totalmem());
console.log("Uptime       :", os.uptime());
