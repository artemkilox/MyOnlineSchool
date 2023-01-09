import React, {useEffect, useState} from 'react';
import {Container, ListGroup, Table} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchOneTable} from "../http/tablesApi";

const TablePage = observer(() => {
    const [tableData, setTableData] = useState([''])
    const {database} = useContext(Context)
    const location = window.location.pathname
    const tableName = location.split('/')[2].slice(1);

    useEffect(()=>{
        fetchOneTable(tableName).then(data => setTableData(data))
    },[])

    function search(nameKey, myArray){
        for (let i=0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return myArray[i];
            }
        }
    }

    function parseColNames(object){
        let parsedDiv = ''
        let str = JSON.stringify(object, null)
        str = str.slice(1, -1).split(',')
        parsedDiv += str.map(item => item.split(':').filter((item, index) => !index % 2))
        return parsedDiv.replace(/['"]+/g, '').split(',')
    }

    function parseRow(object){
        let parsedDiv = ''
        let str = JSON.stringify(object, null)
        str = str.slice(1, -1).split(',')
        parsedDiv += str.map(item => item.split(':').filter((item, index) => index % 2))
        return parsedDiv.split(',')
    }

    return (
        <Container style={{paddingTop: 50, display: "flex"}}>
            <Container style={{margin: "0 auto", width: 600}}>
                <h2
                    style={{marginBottom: 20}}
                >Таблица "{search('_' + tableName, database._tables).title}"</h2>
                <Table striped bordered hover style={{width: "100%"}}>
                    <tbody>
                    {
                            <tr>
                                {
                                    parseColNames(tableData[0]).map(item =>
                                        <td
                                            key={item}
                                        >{item}</td>
                                    )}
                            </tr>
                    }
                    {
                    tableData.map(row =>
                        <tr
                            key={row.id}
                        >
                            {
                                parseRow(row).map(item =>
                                <td
                                    key={item}
                                >{item}</td>
                            )}
                        </tr>
                    )
                }
                </tbody>
                </Table>
            </Container>
        </Container>
    );
});

export default TablePage;