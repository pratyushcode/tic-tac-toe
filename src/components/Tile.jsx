import React from 'react'

const Tile = ({className,value ,onClick,playerTurn}) => {

  let hoverclass=null;
  if(value==null && playerTurn!=null)
  {
    if(playerTurn=="X")hoverclass="x-hover";
    else hoverclass="o-hover";
  }
  return (
    <div className={`tile ${className} ${hoverclass}` } onClick={onClick}   >
        {value}
    </div>
  )
}

export default Tile