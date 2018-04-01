import { range, sample } from 'lodash';

export function generateSampleSubjects() {
  return range(10).map(index => ({
    displayId: index.toString(),
    phase: sample([null, 'Phase 1', 'Phase 2', 'Phase 3']),
    group: sample([null, 'Group 1', 'Group 2', 'Group 3']),
    strain: sample(['129 SV', 'Balb/c']),
    sex: sample(['F', 'M']),
  }))
}
