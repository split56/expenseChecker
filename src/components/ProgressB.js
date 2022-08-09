import React from 'react'

function ProgressB({progress}) {
    const Parentdiv = {
        width: '100%',
        borderRadius: 5,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress > 100? 100 : progress}%`,
       borderRadius:5,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
      }
  return (
    <div style={Parentdiv} className='parent-b'>
      <div style={Childdiv} className={`child-b ${progress >= 100? 'fnish' : 'unfnish'}`}>
        <span style={progresstext} className='progress'>{`${progress}%`}</span>
      </div>
    </div>
  )
}

export default ProgressB