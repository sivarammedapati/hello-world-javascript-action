const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  //console.log(process.env);
  console.log(process.env);
  console.log(core);
  const nameToGreet = core.getInput('who-to-greet');
  const wishPerson = core.getInput('wish-person')
  console.log(`Hello ${nameToGreet}!`);
  console.log(`Have a good day ${wishPerson}!`);
  const time = (new Date()).toTimeString();
  const day = "Monday";
  core.setOutput("time", time);
  core.setOutput("day", day);
  console.log(time);
  console.log(day);
  // Get the JSON webhook payload for the event that triggered the workflow
  //const payload = JSON.stringify(github.context.payload, undefined, 2)
  const payload = JSON.parse(JSON.stringify(github.context.payload, undefined, 2));
  const commits = JSON.parse(payload.commits);
  core.setOutput("payload", JSON.stringify(commits.message));

  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}