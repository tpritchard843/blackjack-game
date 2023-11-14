import React, { useState } from 'react';

export default function GameDataRow({label, value}) {
  // const [cards, setCards] = useState([]);
  return(
    <div>
      <p>{label}: {value}</p>
    </div>
  )
}
