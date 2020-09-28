import { Arguments, Argv, string } from "yargs";
import { Hello } from "../hello";

export function greeting(yargs: Argv) {
  //Create a new yargs command
  yargs.command(
    //Name the command
    "greet",
    //Describe the command for the --help flag
    "Greets the user with a Hello <name>",
    //Define the needed paramaters.
    {
      person: {
        type: "string",
        alias: "p",
        description: "The name of the person to greet.",
      },
    },

    function (args: Arguments<{ person: string }>) {
      Hello(args.person);
    }
  );
}
