import React from 'react';

const Footer = () => {
  return (
    <div >
      <footer className="footer bg-gradient-to-t text-black from-slate-300 to-slate-500 grid items-center justify-center p-10 bg-neutral ">
        <div className='mx-auto'>
          <img className='w-20 mx-auto' src="https://cdn-icons-png.flaticon.com/512/843/843311.png?w=740&t=st=1682964342~exp=1682964942~hmac=457ff5ed2b81d5658fb97bad553f9d1347d95aa4d0b4158b96becc3ccacc880b" alt="" />
          <div className='text-center'>
          <p className='text-base '>Turkish Delight<br />Providing food serve since 2018</p>
          <p>Copyright © 2023 - All right reserved by Emon Hasan</p>
          </div>
        </div>
        
        
      </footer>
    </div>
  );
};

export default Footer;