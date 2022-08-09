import React,{useEffect,useState} from 'react'

import Balance from '../../Balance';
import InEx from '../../InEx';
import TransactionList from '../../TransactionList';
import AddTransaction from '../../AddTransaction';
import useWindowDimensions from '../../../customHooks/useWindowSize';
function WalletTab() {
  const [sep,setSep] = useState(false)
  const {height,width} = useWindowDimensions();
  useEffect(()=>{
    if(width<600) {
      setSep(true)
    } else {
      setSep(false)
    }
  },[width])
  return (
    <>
        {!sep ? (
          <>
          <div className='container-left'>
          <Balance/>
          <InEx/>
          <AddTransaction/>
        </div>
        <div className='container-right'>
          <TransactionList/>
        </div></>
        ) : (
          <div className='separate-tab'>
          <Balance/>
          <InEx/>
          <AddTransaction/>
          </div>
        )}
    </>
  )
}

export default WalletTab