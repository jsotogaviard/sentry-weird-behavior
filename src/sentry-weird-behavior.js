'use strict';

import { Sentry } from './sentry-init'

let i = 0

async function getLinkedinProfiles() {
  console.log('getlinkedinprofiles')
  i++
  Sentry.captureMessage('jso')
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

for (let index = 0; index < 10; index++) {
  sleep(1000);
  getLinkedinProfiles()
}

