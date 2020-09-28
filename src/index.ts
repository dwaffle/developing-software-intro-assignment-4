import yargs = require('yargs');
import { greeting } from "./commands/greeting";

//The command to run
greeting(yargs);

//Have the help flag return help
yargs.help();

//Parse the arguments.
yargs.parse();