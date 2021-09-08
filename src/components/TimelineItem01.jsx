import React from 'react';
import { Divider, Paper } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab';

const TimelineItem01 = () => {
  return (
    <Paper style={{ backgroundColor: 'white', height: '100%' }}>
      <div style={{ fontSize: 'x-large', fontWeight: 'bold', color: '#5f5f5f', padding: '10px 20px' }}>TIMELINE</div>
      <Divider />
      <Timeline align="left">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Join yeriel</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Add Annonymization mcrc</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Join Jieon</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Add Condition Sarcopenia</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: '#008000' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Upload Occurrence Sarcopenia count 200</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: '#008000' }} />
          </TimelineSeparator>
          <TimelineContent>Upload Occurrence Sarcopenia count 100</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Paper>
  );
};

export default TimelineItem01;