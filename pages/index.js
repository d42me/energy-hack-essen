import React, { Component } from 'react';
import { Card, Container, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import { Link } from '../routes';
import Layout from '../components/Layout';

class Home extends Component {
  static async getInitialProps() {
    const loads = await factory.methods.getDeployedLoads().call();

    return { loads };
  }

  renderLoads() {
    const items = this.props.loads.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/loads/${address}`}>
            <a>View details</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>{this.renderLoads()}</div>
      </Layout>
    );
  }
}

export default Home;
