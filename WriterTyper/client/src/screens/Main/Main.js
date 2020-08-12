import React from 'react';
import Introduction from '../../components/MAIN/Introduction/Introduction'
import Layout from '../../components/SHARED/Layout/Layout'
import StartButton from '../../components/MAIN/StartButton/StartButton'
function Main(props) {
  return (
    <>
      <Layout>
        <Introduction />
        <StartButton />
      </Layout>
    </>
  );
}

export default Main;