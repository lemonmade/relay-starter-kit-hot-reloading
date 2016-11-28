import React from 'react';
import Relay from 'react-relay';

import Nested from './Nested';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Widget lists</h1>
        <Nested viewer={this.props.viewer} />
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  initialVariables: {
    
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        ${Nested.getFragment('viewer')}
      }
    `,
  },
});
