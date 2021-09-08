import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const BoardItem01 = () => {
  return (
    <Paper style={{ height: '100%' }}>
      <div style={{ padding: '20px', fontWeight: '800', fontSize: 'large', color: '#5f5f5f' }}>ANNOUNCE</div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">TITLE</TableCell>
              <TableCell align="center">DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">★</TableCell>
              <TableCell align="center">R_CDM 처음 이용하기</TableCell>
              <TableCell align="center">2021-09-01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">R_CDM DATA </TableCell>
              <TableCell align="center">2021-09-09</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">R_CDM DATA </TableCell>
              <TableCell align="center">2021-09-09</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">R_CDM DATA </TableCell>
              <TableCell align="center">2021-09-09</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">R_CDM DATA </TableCell>
              <TableCell align="center">2021-09-09</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button style={{ margin: '10px 40%', backgroundColor: '#3498db', color: 'white' }} variant="contained">View All Announce</Button>
    </Paper>
  );
};

export default BoardItem01;