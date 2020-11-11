import React from 'react'
import MaterialTable from 'material-table'
import Container from '@material-ui/core/Container';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const stocks = [
  { symbol: 'ITUB4', price: 8340, gain: 3.76 },
  { symbol: 'MGLU3', price: 5020, gain: 7.82 },
  { symbol: 'WEGE3', price: 7300, gain: -1.64 },
  { symbol: 'OIBR3', price: 8200, gain: 0.41 },
  { symbol: 'AZUL4', price: 4600, gain: -5.6 },
  { symbol: 'VALE3', price: 6850, gain: 2.52 }
]

const columns = [
  { title: 'Ativo', field: 'symbol', align: 'center' },
  { title: 'Preço(R$)', field: 'price', align: 'center' },
  { title: 'Lucro(%)', field: 'gain', align: 'center' }
]

const headerStyle = {
  color: '#f4623a',
  textAlign: 'center',
  fontSize: '40px',
  margin: "3%"
}
const stockStyle = {
  color: '#f4623a',
  textAlign: 'center',
  fontSize: '20px',
  margin: "3%"
}

const IncomeTax = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="IncomeTax">
        <Container>
          <div className="text-color-primary" style={headerStyle}>
            Mufasa
        </div>
          <div style={{textAlign: 'center'}}>
          <Button variant="contained" color='warning' onClick={handleClickOpen}>
              Visão detalhada do imposto
          </Button>
        </div>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ul>
              <li>Vendido: ITUB4, OIBR3, VALE3</li>
              <li>Valor: R$ 25642,28</li>
              <li>Lucro: R$ 519,82</li>
              <li>Taxas: R$ 15,60</li>
              <li>Lucro líquido sem abate: R$ 504,23</li>
              <li>Prejuízos a compensar: R$ 21,47</li>
              <li>Lucro líquido com abate: R$ 482,76</li>
              <li>15% do lucro líquido</li>
              <li>Valor sem prejuízo a compensar: R$ 75,64</li>
              <li>Valor com prejuízo a compensar: R$ 72,41</li>
            </ul>
          </DialogContentText>
        </DialogContent>
      </Dialog>
        <div className="text-color-primary" style={stockStyle}>
            Ativos em custódia
        </div>
          <MaterialTable
            icons={tableIcons}
            style={{padding: "2%"}}
            title=""
            columns={columns}
            data={stocks}
            options={{
              headerStyle: {
                backgroundColor: '#f06139',
                color: '#FFF',
                textAlign: 'center'
              }
            }}
          />

      </Container>
      </div>
    </>
  )
}

export default IncomeTax