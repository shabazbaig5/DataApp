import React,{Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class App extends Component{

  constructor(props){
    super(props);

    const useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });

    this.state ={
      rows : []
    }

  }
  
  
  createData = (name, calories, fat, carbs, protein) => {

    return { name, calories, fat, carbs, protein };

  }
  

  handleFilter = () => {

    axios.post('/getFiltered').then((data) => {

      this.setState({
        rows : data.data['userdata']
      })
    }).catch((err) => {
      console.log("error");
    });
    

  }
 
  componentWillMount = () => {

    axios.post('/getdata').then((data) => {

      console.log(data.data['userdata']);

      this.setState({
        rows : data.data['userdata']
      });

      console.log(this.state);

    }).catch(() => {

      console.log("something went wrong");

    });

  }
  render = () => {
    
    return (
      <div>
        <p>The table will go here</p>

        <hr>
        </hr>

        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows.map((row) => (
            <TableRow key={row.name}>
             
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            <button onClick={this.handleFilter}>Filter Ethan</button>
      </div>
    )
  }

}

export default App;
