import react, { useState, useEffect } from 'react';
import Header from './components/Header'
import './App.css';
import Table from './components/Table';
import StatusTable from './components/StatusTable';
import Modal_Payment from './components/Modal_Payment';
import table from './data/table';

function App() {

  const [numberTables, setNumberTables] = useState(() => {
    const savenNumberTables = localStorage.getItem("numberTables");

    if (savenNumberTables) {
      return JSON.parse(savenNumberTables);
    } else {
      return table;
    }
  });

  const [qtyTable, setQtyTable] = useState(() => {
    const savenQtyTable = localStorage.getItem("qtyTable");

    if (savenQtyTable) {
      return JSON.parse(savenQtyTable);
    } else {
      return 9;
    }
  });

  const [modalShow, setModalShow] = useState(false);
  const [tablePayment, setTablePayment] = useState(undefined);

  useEffect(() => {
    localStorage.setItem('numberTables', JSON.stringify(numberTables))
    localStorage.setItem('qtyTable', JSON.stringify(qtyTable))
  }, [numberTables]);

  function updateTables(number) {
    const newNumberTables = numberTables;
    newNumberTables.forEach((numberTable) => {
      if (numberTable.number === number)
        numberTable.color = "danger";
      setQtyTable(qtyTable - 1);
    })
    setNumberTables([...newNumberTables]);
  }

  function successTables(number) {
    const newNumberTables = numberTables;
    newNumberTables.forEach((numberTable) => {
      if (numberTable.number === number)
        numberTable.color = "success";
      setQtyTable(qtyTable + 1);
    })
    setNumberTables([...newNumberTables]);
  }


  function onPayment(number) {
    setTablePayment(number);
    setModalShow(true);
  }

  let tableElements = (
    numberTables.map((numberTable) =>
      <Table key={numberTable.number} numberTable={numberTable} updateTables={updateTables} onPayment={onPayment} />
    )
  )

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-9 mb-2 text-center">
            {tableElements} 
          </div>
          <div className="col-md-3 ">
            <StatusTable qtyTable={qtyTable} />
          </div>
          <Modal_Payment
            show={modalShow}
            onHide={() => setModalShow(false)}
            tablePayment={tablePayment}
            successTables={successTables}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
