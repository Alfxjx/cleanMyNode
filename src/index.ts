#!/usr/bin/env node

import {Cli, Command, Option, BaseContext} from 'clipanion';

type Context = BaseContext & {
    cwd: string;
};

class CleanCommand extends Command<Context> {
    static paths = [[`clean`]];
    public cleanRoot: (string | undefined) = Option.String(`-p,--path`);
    public verbose: boolean = Option.Boolean(`-v,--verbose`, false, {description: `verbose parameter`});

    async execute() {
        if (typeof this.cleanRoot === `undefined`) {
            this.context.stdout.write(`give a path plz\n`);
        } else {
            this.context.stdout.write(`start clean ${this.cleanRoot}...\n`);
            this.doClean(this.cleanRoot ?? '.')
        }
    }

    /**
     * @description
     * @author xujx
     * @date 2022-02-23
     * @private
     * @param {string} path
     * @memberof CleanCommand
     */
    private async doClean(path:string){
        
    }
};

const cli = new Cli<Context>({
    binaryLabel: `clean my node`,
    binaryName: `cmn`,
    binaryVersion: `1.0.0`,
});

cli.register(CleanCommand);

cli.runExit(process.argv.slice(2), {
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
    cwd: process.cwd(),
});

