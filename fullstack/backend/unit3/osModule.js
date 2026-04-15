import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const os_module = require('os');

console.log('Operating System Details');
console.log('Architecture', os_module.arch());
console.log('Platform Info', os_module.platform());
console.log('CPU Info', os_module.cpus());
console.log('Networking Info', os_module.networkInterfaces());
console.log('Host Details', os_module.hostname());
// Note: availableParallelism is available in newer Node versions
if (os_module.availableParallelism) {
  console.log('Parallelism', os_module.availableParallelism());
}
console.log('Home Dir', os_module.homedir());
console.log('Free Memory', os_module.freemem());
console.log('Total Memory', os_module.totalmem());
// Note: machine is available in newer Node versions
if (os_module.machine) {
  console.log('Machine Info', os_module.machine());
}
console.log('Release Details', os_module.release());
console.log('Uptime', os_module.uptime());
