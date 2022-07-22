import BootstrapTable from 'react-bootstrap-table-next'
import React from "react";

class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        salesData:[],
    };
    }
    
  
    render() {
        let sortCarets = (order, column) => {
            if (!order)
                return (
                    <span className="sort-glyph-group">
                        <span className="sort-glyph-both glyphicon glyphicon-triangle-top"></span>
                        <span className="sort-glyph-both glyphicon glyphicon-triangle-bottom"></span>
                    </span>
                );
            else if (order === "asc")
                return (
                    <span className="sort-glyph glyphicon glyphicon-triangle-top"></span>
                );
            else if (order === "desc")
                return (
                    <span className="sort-glyph glyphicon glyphicon-triangle-bottom"></span>
                );
            return null;
        };

        var loadData = JSON.parse(JSON.stringify(this.props.stckline_data));
        var rawdata = loadData[0]["sales"]
        var tableColumn = ['weekEnding','retailSales','wholesaleSales','unitsSold','retailerMargin']
        var salesData = tableColumn.map((column,i) =>
          ({
              key:i,
              dataField: column,
              text:column,
              sort: true,
              sortCaret: sortCarets
          }));

      return (
        <BootstrapTable
                    keyField="id"
                    responsive="sm"
                    sizePerPage= "100"
                    size="sm"
                    data={rawdata}
                    rowStyle={{ fontSize: 20, maxWidth: '10%' }}

                    columns={[...salesData]}></BootstrapTable>
  
      );
    }
  }
  export default Table;