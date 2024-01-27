import React from 'react';
import { Link } from 'react-router-dom'; // Importe le composant Link
import facebookLogo from './Facebook.png';
import woocommerceLogo from './Woocomerce.jpg';
import SideNav from './SideNav';

const Card = ({ logo, alt, children }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    margin: '10px',
  };

  return (
    <div style={cardStyle}>
      <img src={logo} alt={alt} style={{ width: '50px', height: '70px' }} />
      {children}
    </div>
  );
};

const Button = ({ onClick, to }) => {
  const buttonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  if (to) {
    // Si la prop "to" est fournie, utilise le composant Link
    return (
      <Link to={to}>
        <button className="btn btn-primary btn-sm mb-0 w-100" style={buttonStyle}>
          Se connecter
        </button>
      </Link>
    );
  } else {
    // Sinon, utilise un bouton simple
    return (
      <button className="btn btn-primary btn-sm mb-0 w-100" style={buttonStyle} onClick={onClick}>
        Se connecter
      </button>
    );
  }
};

const Connector = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  return (
    <>
      <SideNav />
      <div style={containerStyle}>
        <Card logo={facebookLogo} alt="Logo Facebook">
          {/* Utilise le bouton sans redirection */}
          <Button onClick={() => console.log('Connect with Facebook')} />
        </Card>
        <Card logo={woocommerceLogo} alt="Logo Woocommerce">
          {/* Utilise le bouton avec redirection vers "/woocomerce" */}
          <Button to="/woocomerce" />
        </Card>
      </div>
    </>
  );
};

export default Connector;
