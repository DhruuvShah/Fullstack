const osModule = require("os");

console.log("Operating System");
console.log("Architechture: ", `${osModule.arch()}`);
console.log("Platform Information: ", `${osModule.platform()}`);
console.log("CPU Information: ", `${osModule.cpus()}`);
console.log("Networking Information: ", `${osModule.networkInterfaces()}`);
console.log("Host Details: ", `${osModule.hostname()}`);
console.log("Parallelism: ", `${osModule.availableParallelism()}`);
console.log("Host Directory:", `${osModule.homedir()}`);
console.log("Free Memory: ", ` ${osModule.freemem()}`);
console.log("Total Memory: ", `${osModule.totalmem()}`);
console.log("Machine Information: ", `${osModule.machine()}`);
console.log("Release Details: ", `${osModule.release()}`);
console.log("Uptime: ", `${osModule.uptime()}`);
