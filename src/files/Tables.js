import React,{useState} from 'react'
import { Card } from 'react-bootstrap'
import ReactTable from 'sk-react-table'
import Base from './Base'

const TablesReact = () =>{

    const data =[
        {   
            id:1,
            name : 'A',
            status:'active'
        },
        {   
            id:2,
            name : 'B',
            status:'active'
        },
        
        {   
            id:3,
            name : 'C',
            status:'active'
        },
        
        {   
            id:4,
            name : 'D',
            status:'active'
        },
        
        {   
            id:5,
            name : 'E',
            status:'active'
        },
        
        {   
            id:6,
            name : 'F',
            status:'active'
        },
        {   
            id:6,
            name : 'F',
            status:'active'
        },
        
        {   
            id:6,
            name : 'F',
            status:'active'
        },
        
        {   
            id:6,
            name : 'F',
            status:'active'
        },
        
        {   
            id:6,
            name : 'F',
            status:'active'
        },
        
        {   
            id:6,
            name : 'F',
            status:'active'
        },
        

        
    ]
    const columns =[
        {
            name: 'Name',
            cell: (row,fun) => <span>{row.name}</span>
        },
        {
            name: 'Status',
            cell: (row,fun) => <span onClick={fun.view}>{row.status}</span>
        },
        
    ]
    const setColor ={
        backgroundColor:'#283046',
        textColor:'#d0d2d6',
        borderColor:'#404656',
        paginationItemColor : '#110f2e',
        paginationActiveColor:'#31497c',
    }

    const [rowParPage, setrowParPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('')

    const rowNumber = [5];
    const selectRef = 'id';
    const filterKey = ['', 'food', 'electronix', 'technology']; 
    const paginationItemShow = 4;

    const selectedRow = (selectRowData) => {
        console.log(selectRowData)
    }

    const view = ()=>{

    }

    return(
        <div className='App'>
            <Base>
            <div className="startheading">
            Tables

        <p className="para">
        DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the official DataTables documentation.
        </p>
      </div>

      <Card className="Tables">
      <Card.Header>DataTables Example</Card.Header>
      <Card.Body>
        <Card.Text>
        <ReactTable
                data={data}
                columns={columns}
                setColor={setColor}
                rowNumber={rowNumber}
                setrowParPage={setrowParPage}
                parPage={rowParPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalItem={10}
                selector
                selectRef={selectRef}
                deleteData={selectedRow}
                setSelected={setSelected}
                selected={selected}
                setSearchValue={setSearchValue}
                filterKey={filterKey}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                useFunction={{ view }}
                paginationItemShow={paginationItemShow}
           />
        </Card.Text>
      </Card.Body>
    </Card>
            
           </Base>
        </div>
    )
}

export default TablesReact