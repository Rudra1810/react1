import React from 'react'

function NameList() {
    const names=['Manager','Tech Lead','Senior Software Developer','Junior Software Developer']
    // const NameList=names.map(name=><h2>{name}</h2>)
  return (
             <div>
                {/* <h2>{names[0]}</h2>
                <h2>{names[1]}</h2>
                <h2>{names[2]}</h2>
                <h2>{names[3]}</h2> */}

                 { names.map(namedemo => <h2>{namedemo}</h2>)  }

                 {/* {NameList} */}

             </div>

            
  )
}

export default NameList