const core = require("@actions/core");
const github = require("@actions/github");

try{
    // throw( new Error("Error present!"));
    core.debug("Sample Debug Message");
    core.warning("Sample Warning Message");
    core.error("Sample Error message");

    const name = core.getInput('who-to-greet');
    core.setSecret(name);
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    core.startGroup('Logging Github actions');
    console.log(JSON.stringify(github, null, '\t'));
    core.endGroup();

    core.exportVariable("CC", 'Jack');
} catch(error){

    core.setFailed(error.message);

}