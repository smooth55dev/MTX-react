/*
This file is
to customize the ui of the grid and
to integrate with a communication with backend.
 */

import * as React from 'react';
import { Component } from 'react';
import { Box, styled ,Checkbox, Select, MenuItem } from '@mui/material';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Breadcrumb, SimpleCard } from 'app/components';
import FullEditDataGrid from '../../../lib/table/index';
import { useEffect, useState } from 'react';
import UsersController from './users';

export default function UserList() {
  const [rows, setRawRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const setRows = (rows) => {
    return setRawRows([...rows.map((r, i) => ({ ...r, no: i + 1 }))]);
  };
  useEffect(() => {
    setLoading(true);
    UsersController
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

    UsersController
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
    UsersController
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

//renders react datepicker component
class UDatepicker extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      startDate: moment(props.params, 'MM-DD-YYYY')
    };
  }

  consoleDate = () => {
    console.log(this.state.startDate);
  };

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
      </div>
    );
  }
}

class IsTestUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.params,
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Checkbox
        value="checkedA"
        checked={this.state.checkedA}
        onChange={this.handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    );
  }
}

class UserGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentStatus: props.value,
    };
    this.id = props.id;
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ paymentStatus: value });
    // updateSubscription(this.id, value); // function to update the payment
  };

  render() {
    const { paymentStatus } = this.state;

    return (
      <Select value={paymentStatus} onChange={this.handleChange}>
        <MenuItem value={"paid"}>Paid</MenuItem>
        <MenuItem value={"unpaid"}>Un Paid</MenuItem>
      </Select>
    );
  }
}

class UserImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: props.value,
    };
  }
  
  handleImageClick = () => {
    // const inputElement = document.getElementById('imageInput');
    // inputElement.click();
  };
  
  handleImageUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      const imageDataUrl = reader.result;
      this.setState({ selectedImage: imageDataUrl });
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  render() {
    const { selectedImage } = this.state;
  
    return (
      <div>
        <div className="image-container" onClick={this.handleImageClick}>
          <img
            src={selectedImage || 'placeholder.jpg'}
            alt="Selected"
            style={{ maxWidth: '300px', cursor: 'pointer' }}
          />
        </div>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={this.handleImageUpload}
        />
      </div>
    );
  }
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
    field: 'lineUserName',
    headerName: 'LINEユーザーネーム',
    width: 100,
    headerAlign: 'center',
    type: 'string',
    align: 'center',
    editable: true
  },
  {
    field: 'dateCreated',
    headerName: 'Start Date',
    width:100,
    headerAlign: 'center',
    type: 'dateTime',
    valueGetter: (params) => new Date(params.value),
    formatter:<UDatepicker />,
    align: 'center',
    editable : true,
  },
  {
    field: 'isTestUser',
    headerName: 'Test User',
    width:100,
    headerAlign: 'center',
    type: 'boolean',
    formatter:<IsTestUser />,
    align: 'center',
    editable : true,
  },
  {
    field: 'userGroub',
    headerName: 'User Group',
    width:100,
    headerAlign: 'center',
    type: "singleSelect",
    valueOptions: [
      { value: 1, label: " " },
      { value: "Confirmed", label: "Confirmed" },
      { value: "Didn't answer", label: "Didn't answer" },
      { value: "Received", label: "Received" },
      { value: "Duplicated", label: "Duplicated" },
      { value: "Complaint", label: "Complaint" },
    ],
    formatter:<UserGroup />,
    align: 'center',
    editable : true,
  },
  {
    field: 'userImage',
    headerName: 'Image',
    width:100,
    headerAlign: 'center',
    type : "image",
    renderCell:() => <UserImage />,
    align: 'center',
    editable : false,
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
