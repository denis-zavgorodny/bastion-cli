#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
var cmd = require('node-cmd');
const optionDefinitions = require('./includes/cli.option');
const sshOption = require('./includes/option.provider');
const help = require('./includes/cli.help');

const options = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(help);
if (options.help === true) {
    console.log(usage);
    process.exit(1);
}

sshOption().then((sshOption) => {
    cmd.get(
        `ssh ${sshOption.login}@${sshOption.host} -p${sshOption.port} -C ${options.cmd}`,
        function (err, data, stderr) {
            if (stderr) {
                console.log(stderr);
                process.exit(1);
            } else {
                console.log(data);
            }
        }
    );
});


