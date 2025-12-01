function ipToNumber(ip = '127.0.0.1') {
    return ip.split('.')
        .map(Number)
        .reduce((acc, val, index) => acc + (val << 8*(3 - index)), 0);
}

console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumber('127.0.0.1'));
console.log(ipToNumber('192.168.1.1'));
