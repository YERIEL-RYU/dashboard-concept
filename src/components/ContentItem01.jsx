import React from 'react';
import { Paper, Button } from '@material-ui/core';

const ContentItem01 = () => {
  return (
    <Paper style={{ height: '100%', padding: '10px', backgroundImage: 'url(/bg/bg-wave.svg)', backgroundSize: 'cover', minWidth: '980px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '40px', fontWeight: '600', padding: '20px', color: '#3498db' }}>
            Radiology CDM
          </div>
          <div style={{ fontSize: 'large', fontWeight: '400', padding: '0 20px', color: '#5f5f5f', lineHeight: '2' }}>
            Radiology CDM은 DICOM 국제 표준 및 ETL정의서를 기반으로 CT, MRI, X-Ray, Ultra-Sound등 다양한 DICOM 영상을 표준 DICOM Dataset으로 변환할 수 있는 소프트웨어입니다.
            DICOM Dataset뿐만 아니라 영상정보에 대한 Cohort 결과도 함께 제공되어 다양한 임상연구에 응용이 가능합니다.
            <div style={{ padding: '20px' }}>
            </div>
            <Button variant="contained" style={{ backgroundColor: '#3498db', color: 'white' }} size="large">Get Start &gt;</Button>
          </div>
        </div>
        <div style={{ height: '100%', alignSelf: 'center' }}>
          <img
            src="https://sb-admin-pro-angular.startbootstrap.com/assets/img/illustrations/statistics.svg"
            style={{ height: '80%', paddingTop: '30px' }}
            alt=""
          />
        </div>
      </div>
    </Paper>
  );
};

export default ContentItem01;