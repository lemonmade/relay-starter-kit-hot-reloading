import React from 'react';
import Relay from 'react-relay';

class Nested extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.relay.setVariables({first: this.props.relay.variables.first + 1});
    }, 1000)
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.props.relay.setVariables({first: this.props.relay.variables.first + 1});
    }, 1000)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.viewer.widgets.edges.map(edge =>
            <li key={edge.node.id}>{edge.node.name} (ID: {edge.node.id})</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(Nested, {
  initialVariables: {
    first: 1,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(first: $first) {
          edges {
            node {
              id,
              name,
            },
          },
        },
      }
    `,
  },
});
