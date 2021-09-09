import React from 'react';
import { Avatar, Paper } from '@material-ui/core';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import styled from "styled-components";

const ListItem = styled.div`
  padding: 20px 10px;
  border-top: 1px solid #eeeeee;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  &:hover{
    background-color: #eeeeee;
  }
`;
const AnnounceContent = styled.div`
  padding: 0 10px;
  width: 100%;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: bold;
  padding-bottom: 5px;
`;
const UserDate = styled.div`
  font-size: small;
  color: #5f5f5f;
`;
const BodyContent = styled.div`
  font-size: small;
`;

const BoardItem03 = () => {
  return (
    <Paper style={{ height: '100%', backgroundColor: 'white' }}>
      <div id="title" style={{ display: 'flex', flexDirection: 'row', padding: '20px', fontSize: 'large', fontWeight: 'bold', alignSelf: 'center', color: '#5f5f5f' }}>
        <div><SpeakerNotesIcon /></div>
        <div style={{ padding: '0 10px' }}>ANNOUNCE</div>
      </div>
      <div id="list-container">
        <ListItem id="list-item" >
          <Avatar variant="rounded" id="icon" style={{ backgroundColor: '#f5b699' }}>
            <StarRoundedIcon />
          </Avatar>
          <AnnounceContent id="content" >
            <TitleWrap >
              <Title id="title" >R_CDM 공지사항</Title>
              <UserDate >mcrc 2021-09-09</UserDate>
            </TitleWrap>
            <BodyContent >Radiology CDM은 DICOM 국제 표준 및 ETL정의서를 기반으로 CT, MRI, X-Ray, Ultra-Sound등 다양한 DICOM 영상을 표준 DICOM Dataset으로 변환할 수 있는 소프트웨어입니다. </BodyContent>
          </AnnounceContent>
        </ListItem>
        <ListItem id="list-item" >
          <Avatar variant="rounded" id="icon" style={{ backgroundColor: '#80ac90' }}>
            <SpeakerNotesIcon />
          </Avatar>
          <AnnounceContent id="content" >
            <TitleWrap >
              <Title id="title" >R_CDM 공지사항</Title>
              <UserDate >mcrc 2021-09-09</UserDate>
            </TitleWrap>
            <BodyContent >Radiology CDM은 DICOM 국제 표준 및 ETL정의서를 기반으로 CT, MRI, X-Ray, Ultra-Sound등 다양한 DICOM 영상을 표준 DICOM Dataset으로 변환할 수 있는 소프트웨어입니다. </BodyContent>
          </AnnounceContent>
        </ListItem>
      </div>
    </Paper>
  );
};

export default BoardItem03;