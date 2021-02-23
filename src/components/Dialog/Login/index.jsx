import React, { createContext, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { IconX } from '@tabler/icons';
import { setLoginVisibilty } from '@/redux/actions';
import './style.scss';
import DomScan from './Scan';
import DomSignIn from './SignIn';
import DomSignUp from './SignUp';
import DomReset from './Reset';
import DomIdentify from './Identify';

export const LoginContext = createContext(null);

const Build = {
  scan: () => <DomScan />,
  signin: () => <DomSignIn />,
  signup: () => <DomSignUp />,
  reset: () => <DomReset />,
  identify: () => <DomIdentify />,
};

export default () => {
  const dispatch = useDispatch();
  const [loginReducer, loginDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_TYPE':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_WARN':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_PHONE':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_PASSWORD':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_ARGEEARGUMENT':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_COUNTRYCODE':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  }, {
    argeeArgument: false,
    loginphone: '',
    loginpassword: '',
    registerphone: '',
    registerpassword: '',
    type: 'identify',
    countrycode: '86',
  });

  return (
    <div
      id="dialogLogin"
      className="ui_dialog"
    >
      <button
        type="button"
        className="ui_dialog_close close"
        onClick={() => dispatch(setLoginVisibilty())}
      >
        <IconX stroke={1.5} />
      </button>
      <LoginContext.Provider value={{ loginReducer, loginDispatch }}>
        {Build[loginReducer.type]()}
      </LoginContext.Provider>
    </div>
  );
};
