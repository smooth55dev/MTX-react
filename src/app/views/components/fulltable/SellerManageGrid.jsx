/*
This file is
to customize the ui of the grid and
to integrate with a communication with backend.
 */

import * as React from 'react';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import FullEditDataGrid from './lib/index';
import { useEffect, useState } from 'react';
import sellerController from './seller';

export default function SellerManageGrid() {
  const [rows, setRawRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const setRows = (rows) => {
    return setRawRows([...rows.map((r, i) => ({ ...r, no: i + 1 }))]);
  };
  useEffect(() => {
    setLoading(true);
    sellerController
      .getAll()
      .then((res) => {
        setRows(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onSaveRow = (id, updatedRow, oldRow, oldRows) => {
    console.log(updatedRow);

    sellerController
      .saveRow(updatedRow)
      .then((res) => {
        const dbRow = res.data;
        setRows(oldRows.map((r) => (r.id === updatedRow.id ? { ...dbRow } : r)));
      })
      .catch((err) => {
        setRows(oldRows);
      });
  };

  const onDeleteRow = (id, oldRow, oldRows) => {
    sellerController
      .deleteRow(id)
      .then((res) => {
        const dbRowId = res.data.id;
        setRows(oldRows.filter((r) => r.id !== dbRowId));
      })
      .catch((err) => {
        setRows(oldRows);
      });
  };

  const createRowData = (rows) => {
    console.log(rows);

    const newId = Math.max(...rows.map((r) => (r.id ? r.id : 0) * 1)) + 1;
    const newNo = Math.max(...rows.map((r) => (r.no ? r.no : 0) * 1)) + 1;
    return { id: newId, no: newNo };
  };

  const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
  }));

  return (
    <Container>
      <Box className="breadcrumb">
        {/* <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Table' }]} /> */}
        <Breadcrumb routeSegments={[{ name: 'Table', path: '/fulltable' }]} />
      </Box>

      <SimpleCard title="Simple Table">
        <FullEditDataGrid
          columns={columns}
          rows={rows}
          onSaveRow={onSaveRow}
          onDeleteRow={onDeleteRow}
          createRowData={createRowData}
          loading={loading}
        />
      </SimpleCard>
    </Container>
  );
}

const columns = [
  {
    field: 'no',
    headerName: 'No',
    width: 50,
    align: 'center',
    type: 'number',
    editable: false
  },
  {
    field: 'id',
    headerName: 'Id',
    width: 80,
    align: 'center',
    type: 'number',
    editable: true
  },
  {
    field: 'login',
    headerName: 'Login',
    width: 100,
    headerAlign: 'center',
    type: 'string',
    align: 'center',
    editable: true
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    headerAlign: 'center',
    type: 'string',
    align: 'center',
    editable: true
  },
  {
    field: 'desc',
    headerName: 'Description',
    width: 250,
    headerAlign: 'center',
    type: 'string',
    editable: true
  }
];
