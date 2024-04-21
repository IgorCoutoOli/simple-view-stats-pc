const { totalmem, freemem, platform, arch, cpus } = require('os');

function convertBityToMB(val) {
    return `${parseInt((val / 1024 / 1024))} MB`
}

setInterval(() => {
    const TotalRam = convertBityToMB(totalmem());
    const FreeRAM = convertBityToMB(freemem());
    const Usage = `${((parseInt(FreeRAM) / parseInt(TotalRam)) * 100).toFixed(2)} %`;

    exports.viewStats = {
        OS: platform(),
        Arch: arch(),
        TotalRam,
        FreeRAM,
        Usage
    };
}, 1000)