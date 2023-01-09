import React from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
// import {useHistory} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import {DATABASE_ROUTE} from "../utils/consts";

const Database = observer(() => {
    const navigate = useNavigate();
    const {database} = useContext(Context)
    return (
        <Container style={{paddingTop: 50, display: "flex"}}>
            <Container style={{margin: "0 auto", width: 600}}>
                <h2 style={{marginBottom: 20}}>Таблицы</h2>
                <Container style={{height: 800, overflow: "auto"}}>
                    {database._tables.map(table =>
                        <div
                            style={{margin: 5, border: "1px solid", borderRadius: "10px", padding: 10, fontSize: "1em", cursor: "pointer"}}
                            key={table.name}
                            onClick={() => navigate(DATABASE_ROUTE + '/' + table.name, table)}
                        >
                            {table.title}
                        </div>
                    )}
                </Container>
            </Container>
        </Container>
    );
});

export default Database;