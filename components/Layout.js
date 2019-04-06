import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Head from 'next/head';

class Layout extends Component {
  render() {
    return (
      <Container
        textAlign="center"
        style={{ width: '50%', margin: 'auto', marginTop: '3rem' }}
      >
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"
          />
        </Head>
        <Header as="h2" dividing>
          Loads
        </Header>
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
