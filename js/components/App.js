import React from 'react';
import Relay from 'react-relay';

import Nested from './Nested';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Widget lists</h1>
        <p>Product: {this.props.product.name}</p>
        <Nested viewer={this.props.viewer} />
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        ${Nested.getFragment('viewer')}
      }
    `,
    product: () => Relay.QL`
      fragment on Product {
        name
      }
    `
  },
});
