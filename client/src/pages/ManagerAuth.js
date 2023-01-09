import React, {useState, useContext} from 'react';
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import {Context} from "../index";
import {DATABASE_ROUTE, MANAGER_LOGIN_ROUTE, MANAGER_REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {useLocation, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const ManagerAuth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === MANAGER_LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        // try {
        //     let data;
            if (isLogin) {
                const response = await login(email, password);
            } else {
                const response = await registration(email, password);
                console.log(response)
            }
        //     user.setManagers(user)
        //     user.setIsAuth(true)
        //     navigate(DATABASE_ROUTE)
        // } catch (e) {
        //     alert(e.response.data.message)
        // }
    }

    return (
        <Container
            style={{display: 'flex', justifyContent: 'center', alignItems: "center", height: window.innerHeight - 54}}
        >
            <Card style={{width: 500, border: '1px solid', padding: 15, fontSize: "1.2em"}}>
                <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form style={{display: "flex", flexDirection: "column"}}>
                    <Form.Control
                        style={{marginTop: 10, padding: 5, fontSize: "1em"}}
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        style={{marginTop: 10, padding: 5, fontSize: "1em"}}
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={MANAGER_REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={MANAGER_LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            style={{width: "30%", marginTop: 10, fontSize: '1em'}}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default ManagerAuth;