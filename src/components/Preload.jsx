import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Preload = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
    }} className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <InfinitySpin
  visible={true}
  width="200"
  color="#fff"
  ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Preload;
