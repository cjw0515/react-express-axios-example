import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
/*
const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};
*/
let test;

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class Contents extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: true,
    selectable: false,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '600px',
    data: [
      {
        title: 'title',
        writer: 'Employed',
        date: '2018-05-13',
        views:0
      },
    ]
  };
/*
  getPosts = async () => {
    const info = await axios.get('/api/board/');
  }
*/

  getPosts = () => {
    return axios.get('/api/board');
  }

  fetchPostInfo = async () => {
      const info = await this.getPosts();
      test = info.data;
      this.setState({
        data: test[0]
      });
      console.log(test[0]);
  }

  componentDidMount(){
    this.fetchPostInfo();
  }

  /*
    axios.get('/api/hello').then(response => {
      console.log(response.data);
    });
  */


  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="5" tooltip="Super Header" style={{textAlign: 'right'}}>
              <TextField
                hintText="제목"
              />
                <FlatButton label="검색" />
                <FlatButton label="작성" />
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">제목</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Writer">글쓴이</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Date">날짜</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Views">조회수</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.data.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.title}</TableRowColumn>
                <TableRowColumn>{row.writer}</TableRowColumn>
                <TableRowColumn>{row.date}</TableRowColumn>
                <TableRowColumn>{row.views}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}
