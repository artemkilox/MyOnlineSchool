import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {DATABASE_ROUTE, MAIN_PAGE_ROUTE, MANAGER_REGISTRATION_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
// style={{color: 'white', marginRight: '15px', fontSize: '1.5em', textDecoration: 'none'}}

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar style={{background: 'black', color: 'white', padding: '5px'}}>
            <Container style={{display: 'flex'}}>
                <NavLink style={{color: 'white', marginRight: '15px', fontSize: '1.5em', textDecoration: 'none'}} to={MAIN_PAGE_ROUTE} >MyFriend</NavLink>
                {/*{user.isAuth ?*/}
                {/*    <Nav style={{marginRight: 'auto'}}>*/}
                {/*        <Button style={{fontSize: '1em', marginRight: '10px', padding: '5px'}}>Админ панель</Button>*/}
                {/*        <Button style={{fontSize: '1em', marginRight: '10px', padding: '5px'}} onClick={() => user.setIsAuth(false)} >Выйти</Button>*/}
                {/*    </Nav>*/}
                {/*    :*/}
                    <Nav style={{marginRight: 'auto'}}>
                        <NavLink to={MANAGER_REGISTRATION_ROUTE}>
                            <Button style={{fontSize: '1em', marginRight: '10px', padding: '5px'}} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </NavLink>
                        <NavLink to={DATABASE_ROUTE}>
                            <Button style={{fontSize: '1em', marginRight: '10px', padding: '5px'}} onClick={() => user.setIsAuth(true)}>База данных</Button>
                        </NavLink>
                    </Nav>
                {/*}*/}
            </Container>
        </Navbar>
    );
});

export default NavBar;