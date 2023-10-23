import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';

import EditorComponent from './htmleditor/editor.component';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const Htmleditor = () => {
  const [value, setValue] = useState('');
  const getValue = (value) => {
    setValue(value);
  };
  return (
    <Container>
      <Box className="breadcrumb">
        {/* <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Table' }]} /> */}
        <Breadcrumb routeSegments={[{ name: 'Table', path: '/fulltable' }]} />
      </Box>

      <SimpleCard title="Simple Table">
        <EditorComponent initialValue="" getValue={getValue} />
      </SimpleCard>
    </Container>
  );
};

export default Htmleditor;
