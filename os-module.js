const { log } = require('console');
const os = require('os');

const user = os.userInfo();
console.log(user);

console.log('the system uptime is ' + os.uptime() + ' seconds');

const osInfo = {
    name: os.type(),
    release: os.release(),
    total_Memory: os.totalmem(),
    free_Memory: os.freemem(),
}

console.log(osInfo);


