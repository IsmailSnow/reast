import React , {Component} from 'react';
import './App.css';

import {sampleText} from "./sampleText"

class  App extends Component {
  state = {
    text: sampleText
  }

  render() {
    return (
    <div className='container'>
       <div className='row'>
         <div className='col-sm-6'>
            <textarea value={this.state.text} rows='35' className='form-control' />
         </div>
         <div className='col-sm-6'>
            <div>
              {sampleText}
            </div>
         </div>
       </div>
    </div>
    )
   }  
}

export default App;
