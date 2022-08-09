import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import InEx from './components/InEx';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import Tab from './components/Tabs/Tab';
function App() {
  return (
    <GlobalProvider >
      <div className='bg-holder'>
        {/* <Header/> */}
        <Tab/>
      </div>
    </GlobalProvider>
  );
}

export default App;
