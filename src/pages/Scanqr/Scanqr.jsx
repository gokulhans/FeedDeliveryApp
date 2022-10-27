import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function Scanqr() {
  const [data, setData] = useState('No result');
  return (
    <div>

      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '500px', height:'500px'}}
      />
      <p>{data}</p>

    </div>
  )
}

export default Scanqr