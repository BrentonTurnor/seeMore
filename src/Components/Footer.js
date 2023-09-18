import './Footer.css'

export const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className='footer'>{`Copyright © BT Inc. ${year}`}</footer>;
  };
  
  export default Footer;