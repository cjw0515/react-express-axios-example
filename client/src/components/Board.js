import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Bar from './Bar';
import Contents from './Contents';
//import axios from 'axios';

class Board extends Component{


  render(){
    return(
      <div>
        <MuiThemeProvider>
          <Bar/>
          <Contents/>
        </MuiThemeProvider>
      </div>
    )
  }

}

export default Board;
