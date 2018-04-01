import React, { Component } from 'react';

import buttonsImg from '../buttons.png';
import experimentsListImg from '../experiments-list.png';
import quickSelectImg from '../quick-select.png';

import Button from './button';
import QuickSelect from './quickselect';
import { generateSampleSubjects } from '../services/subject';
import ExperimentsList from './experimentslist';
import ExperimentsList2 from './experimentslist2';

import './app.css';
//import { range, sample } from 'lodash';



class App extends Component {

  constructor(props) {
    super(props);
    //this.data = generateSampleSubjects;
    //this.generateSampleSubjects = this.generateSampleSubjects.bind(this);
    this.data = generateSampleSubjects();
  }

  // generateSampleSubjects() {
  //   return range(10).map(index => ({
  //     displayId: index.toString(),
  //     phase: sample([null, 'Phase 1', 'Phase 2', 'Phase 3']),
  //     group: sample([null, 'Group 1', 'Group 2', 'Group 3']),
  //     strain: sample(['129 SV', 'Balb/c']),
  //     sex: sample(['F', 'M']),
  //   }))
  // }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>1. Buttons (CSS/React)</h2>
        <p>
          The buttons from the image below will appear throughout the site. As you can see, there are a number of
          different styles of buttons (color, size, width, disabled).
        </p>
        <p>
          How would you implement these buttons on the site?
        </p>
        <img src={buttonsImg} alt='Buttons' />

        <hr />
        <Button size="normal" isPrimary="true" disabled="true" value="Disabled Primary" text="DISABLED PRIMARY BUTTON" />
        <Button size="normal" isPrimary="true" disabled="false" value="Primary Large" text="PRIMARY BUTTON" />
        <Button size="large" isPrimary="true" disabled="false" value="Primary Large" text="LARGE PRIMARY BUTTON" />
        <Button size="full-width" isPrimary="true" disabled="false" value="Primary Large" text="FULL-WIDTH PRIMARY BUTTON" />
        <Button size="normal" isPrimary="false" disabled="true" value="Primary Large" text="DISABLED SECONDARY BUTTON" />
        <Button size="normal" isPrimary="false" disabled="false" value="Primary Large" text="SECONDARY BUTTON" />
        <Button size="large" isPrimary="false" disabled="false" value="Primary Large" text="LARGE SECONDARY BUTTON" />
        <Button size="full-width" isPrimary="false" disabled="false" value="Primary Large" text="FULL-WIDTH SECONDARY BUTTON" />
        <hr />

        <h2>2. QuickSelect (React)</h2>
        <p>
          Implement a QuickSelect component. It should accept an array of data and display it as a table. Use
          generateSampleSubjects from src/services/subject for sample data.
        </p>
        <p>
          Additionally, it should accept an array keys (a subset of the data keys) that can be use to quickly highlight
          rows of the data. For each key, it should display a list of checkboxes for each unique value that appears in
          the data for that key. And checking the boxes should highlight all rows that match any of the values checked.
          Example keys might be ['phase'] or ['group', 'strain'].
        </p>
        <p>
          Here's an example image:
        </p>
        <img src={quickSelectImg} alt='Quick Select' />

        <hr />
        <QuickSelect data={this.data} />
        <hr />        

        <h2>3. ExperimentsList (Redux)</h2>
        <p>
          Implement an ExperimentsList component. Using Redux and thunks, it should asynchronously fetch an array of
          experiment objects and display them in a table. Use fetchExperimentsApiCall from src/services/experiment as
          a mock API call.
        </p>

        <p>
          Here's an example image:
        </p>
        <img src={experimentsListImg} alt='Experiments List' />

        <hr />
        <ExperimentsList />
        <hr />
        
        <h2>4. HOC ExperimentsList (Redux/React)</h2>
        <p>
          Using the ExperimentsList component above as a starting point, create a Higher Order Component (HOC) to
          encapsulate the fetchExperimentsApiCall logic. The output should be the same as the ExperimentsList component
          but the fetch logic should now be in the HOC. You can name this new component ExperimentsListWithFetch.
        </p>

        <p>
          Here's an example image:
        </p>
        <img src={experimentsListImg} alt='Experiments List 2' />

        <hr />
        <ExperimentsList2 />
        <hr />
      </div>
    );
  }
}

export default App;
