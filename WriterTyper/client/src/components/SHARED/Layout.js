import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

function Layout(props) {
  return (
    <>
      < Header />
      < Main >
        {props.children}
      </Main>
      < Footer />
    </>
  );
}

export default Layout;