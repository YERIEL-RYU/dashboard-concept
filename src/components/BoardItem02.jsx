import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';

const BoardItem02 = () => {
  return (
    <Paper style={{ height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ padding: '20px', fontWeight: '800', fontSize: 'large', color: '#5f5f5f' }}>ANNOUNCE</div>
        <img
          alt=""
          src="https://image.freepik.com/free-vector/smiling-man-talking-loudspeaker-monitor-social-media-computer-online-flat-vector-illustration-communication-digital-technology_74855-13238.jpg"
          style={{ height: '200px', textAlign: 'center' }}
        />
        <div style={{ padding: '10px 20px', color: '#5f5f5f' }}>
          <Button variant="outlined" color="secondary">ALL announce</Button>
        </div>
      </div>
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
    </Paper>
  );
};

export default BoardItem02;