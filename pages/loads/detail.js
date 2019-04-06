import React, { Component } from 'react';
import { Card, Divider } from 'semantic-ui-react';
import { getLoadDetails } from '../../ethereum/load';
import Layout from '../../components/Layout';
import { Link } from '../../routes';

class LoadDetail extends Component {
  static async getInitialProps({ query }) {
    const loadDetails = await getLoadDetails(query.address);
    return { loadDetails };
  }

  renderLoadDetail(detail, index, property) {
    return (
      <Card key={index}>
        <Card.Content>
          <Card.Header>{property}</Card.Header>
          <Card.Description>{detail}</Card.Description>
        </Card.Content>
      </Card>
    );
  }

  renderLoadDetails() {
    if (this.props.loadDetails) {
      const properties = [
        'id',
        'idTag',
        'timestamp',
        'dueDate',
        'chargingPower',
        'batteryCapacity',
        'batteryStatus',
        'chargingStationId',
        'connectorId'
      ];
      let res = [];
      let index = 0;
      for (const detail of this.props.loadDetails) {
        const detailEntry = this.renderLoadDetail(
          detail,
          index,
          properties[index]
        );
        res.push(detailEntry);
        index++;
      }
      return res;
    }
  }

  render() {
    return (
      <Layout>
        <Link route="/">
          <a>Go back</a>
        </Link>
        <Divider />
        <Card.Group>{this.renderLoadDetails()}</Card.Group>
      </Layout>
    );
  }
}

export default LoadDetail;
