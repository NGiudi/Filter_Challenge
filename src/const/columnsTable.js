export const constColumns = [
  {
    Header: 'ID',
    accessor: 'id', // accessor is the "key" in the data
  },
  {
    Header: 'Comercio',
    accessor: 'commerce',
  },
  {
    Header: 'CUIT',
    accessor: 'cuit',
  },
  {
    Header: 'Concepto 1',
    accessor: 'concept1',
  },
  {
    Header: 'Concepto 2',
    accessor: 'concept2',
  },
  {
    Header: 'Concepto 3',
    accessor: 'concept3',
  },
  {
    Header: 'Concepto 4',
    accessor: 'concept4',
  },
  {
    Header: 'Concepto 5',
    accessor: 'concept5',
  },
  {
    Header: 'Concepto 6',
    accessor: 'concept6',
  },
  {
    Header: 'Balance Actual',
    accessor: 'balance',
  },
  {
    id: "asset",
    Header: 'Activo',
    accessor: d => d.asset ? "true" : "false",
  },
  {
    Header: 'Última venta',
    accessor: 'last_movement',
  },
];