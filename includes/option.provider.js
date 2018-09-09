const fs = require('fs');
var prompt = require('prompt');
var promptOptions = require('./prompt.options');

module.exports = () => {
    return new Promise((resolve, reject) => {
        const homeDir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
        const configFile = `${homeDir}/.bastion`;
        var conf;
        try {
            if (!fs.existsSync(configFile)) {
                prompt.start();
                prompt.get(promptOptions, (err, result) => {
                    fs.writeFileSync(configFile, JSON.stringify(result));
                    resolve(result);
                });
            } else {
                conf = fs.readFileSync(configFile);
                resolve(JSON.parse(conf.toString()));
            }
        } catch(e) {
            reject(e);
        }
    });
};
