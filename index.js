const core = require('@actions/core');
const github = require('@actions/github');

const child_process = require('child_process');
const fs = require('fs');
const process = require('process');

const get_gha_input = (name) => { return process.env[`INPUT_${name.toUpperCase()}`]; };
console.log(get_gha_input);
try {
  // `who-to-greet` input defined in action metadata file
  //console.log(process.env);
  const nameToGreet = core.getInput('who-to-greet');
  const wishPerson = core.getInput('wish-person')
  console.log(`Hello ${nameToGreet}!`);
  console.log(`Have a good day ${wishPerson}!`);
  const time = (new Date()).toTimeString();
  const day = "Friday";
  core.setOutput("time", time);
  core.setOutput("day", day);
  console.log(time);
  console.log(day);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
