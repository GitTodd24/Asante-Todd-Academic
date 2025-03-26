function Footer() {
  return (
    <footer className="footer fixed bottom-0 left-0" style={{ zIndex: '4', width: '90%', height: '45px', backgroundColor: 'rgba(210, 180, 140, 0.5)', textAlign: 'center', lineHeight: '55px', margin: '0 auto', left: '7.5%', right: '7.5%' }}>
      <div className="text-white text-xs flex justify-between px-4">
        <span>Copyright 2025 GoldenCode. All rights reserved.</span>
       
       {/*<img src="img/wheat-pexels-kovyrina.jpg" alt="donate button" className="absolute scroll" style={{ top: '20%', left: '85%', transform: 'translate(-50%, -50%)', zIndex: '10', width: '75px', height: 'auto', borderColor: 'black', borderRadius: '10%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} /> */}

        <span>Design: <a href="https://www.tooplate.com" target="_parent" style={{ color: 'white', textDecoration: 'underline' }}>Tooplate</a></span>
      </div>
    </footer>
  );
}

export default Footer;