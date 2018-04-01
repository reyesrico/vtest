import moment from 'moment';
import { random, range, sample } from 'lodash';

function threeRandomLetters() {
  return range(3).map(() => String.fromCharCode(random(65, 65 + 25))).join('')
}

function generateSampleExperiments() {
  return range(10).map(index => ({
    id: index,
    name: `${threeRandomLetters()}-${threeRandomLetters()}-${sample(['001', '002', '003'])}`,
    study_director: sample([null, 'Shakira Kessler', 'Arnaldo Monahan']),
    start_date: sample([null, moment().subtract(Math.random() * 100, 'days')]),
  }));
}

// A mock API call for fetching experiments. Doesn't actually hit a server, but is still asynchronous.
// Returns a Promise that resolves to example experiment data after a timeout of 500 ms.
export function fetchExperimentsApiCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ data: generateSampleExperiments() });
    }, 500);
  });
}
