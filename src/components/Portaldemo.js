import React from 'react'
import ReactDom from 'react-dom'

function Portaldemo() {
  return ReactDom.createPortal (
    <div>
    Portaldemo</div>,
    document.getElementById('portal-root')
  )
}

export default Portaldemo