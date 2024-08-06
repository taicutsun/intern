import '../../App.css';
import './Log.css';
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
//redux imports
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { check, selectLog, UserState } from '../../app/appSlice';
//redux imports

interface ErrMassProps {
  cl: number;
}

function LogMass(props: ErrMassProps) {
  const logged = useAppSelector(selectLog);
  if (logged === false && props.cl >= 1) {
    return (
      <>
        <div className="errorMass">Пароль или Имя неверно</div>
      </>
    );
  } else return <></>;
}

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  //for sending to server
  const dispatch = useAppDispatch();
  const logged = useAppSelector(selectLog);

  //for user
  const user: UserState = {
    //для корректной отправки состаяния пользователя
    username: username,
    password: pass,
    logged:false
  };
  //for user
  const [status, setStatus] = useState(false);
  const [click, setClick] = useState(0);

  useEffect(() => {
      console.log(logged);
      if(logged) setStatus(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click, status]);

  //for sending to server

  if (status) {
    return <Navigate to={'/'} />
  } else {
    return (
      <>
        <div id="mainWrap">
          <div className="greating">Вход</div>
          <form>
            <label>Имя</label>
            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
            <label>пароль</label>
            <input type="text" name="password" onChange={(e) => setPass(e.target.value)} />
          </form>
          <button
            className="loginBtn"
            onClick={() => {
              dispatch(check(user));
              setClick(click + 1);
            }}
          >
            Войти
          </button>
          <LogMass cl={click} />
          <div>
            <button className="backBtn">
              <Link className="Link" to="/">
                Назад
              </Link>
            </button>
          </div>
          <div>
            <Link className="Link" to="/create">
              Забыли пароль?
            </Link>
          </div>
        </div>
      </>
    );
  }
}
//for log
