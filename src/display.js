import React ,{Component}from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import accounting from './data.json';


export default class Display extends Component
{
    render(){
        
  return (
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
     {
          accounting.map((account)=>{
            return    <TableBody>
              <TableRow>
              <TableCell>{account.ID}</TableCell>
                <TableCell>{account.firstName}</TableCell>
                <TableCell>{account.lastName}</TableCell>
                <TableCell>{account.age}</TableCell>
                </TableRow> </TableBody>
            })
          }
       
      </Table>
    </Paper>
  );
 
}
}
