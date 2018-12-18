import React ,{Component}from 'react';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import accounting from './data.json';
import { Link } from "react-router-dom";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,  
     };
    this.handleChange = this.handleChange.bind(this);
    }
  handleChange(event) {
    this.setState({value: event.target.value}); 
  }
  validation()
  {
  if(this.state.value)
  {
  return(
<Paper style={{marginTop:"normal"}}>
<Table>
<TableHead>
  <TableRow>
    <TableCell>ID</TableCell>
    <TableCell>First Name</TableCell>
    <TableCell>Last Name</TableCell>
    <TableCell>Age</TableCell>
    </TableRow>
</TableHead>
</Table>
</Paper>
  )  
 
  }
}

  render() { 
    if(this.state.value)
    {
    let a=accounting.filter((account)=> { 
      return account.firstName.toLowerCase().match( this.state.value.toLowerCase() ) || account.lastName.toLowerCase().match( this.state.value.toLowerCase() )  })
      var name123=a.map((account1)=>{
      return    <TableBody>
        <TableRow>
        <TableCell>{account1.ID}</TableCell>
          <TableCell>{account1.firstName}</TableCell>
          <TableCell>{account1.lastName}</TableCell>
          <TableCell>{account1.age}</TableCell>
          </TableRow> </TableBody>
         
      })
 
    }
   
    return (
      <div> <br></br>
        <Link to="/Display">Show Table</Link>>>
          <Link to="/">Back</Link>
      <form >
          <h1>
          <TextField 
           type="text" 
           id="outlined-search"
           label="Search field"
           placeholder="Type to Search"
           margin="normal"
           variant="outlined"
           placeholder="Type to serach!"
          onChange={this.handleChange} />
         </h1>
      </form>
          
     
        {this.validation()}
          <Paper>
          <Table>
          {name123}
          </Table>
          </Paper>
</div>
    );
    }
}

export default Search;


