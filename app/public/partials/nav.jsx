import React from 'react';
import {FormattedMessage} from 'react-intl';

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href='#explorer'>
              <h5>
                <FormattedMessage
                  id='Explore'
                  defaultMessage='Explore'
                />
              </h5>
              <div><span>See what's happening in<br/>parks near you</span></div>
            </a>
          </li>
          <li>
            <a href='#discoverr'>
              <h5>
                <FormattedMessage
                  id='Discover'
                  defaultMessage='Discover'
                />
              </h5>
              <div><span>Learn more about parks<br/>across the state</span></div>
            </a>
          </li>
          <li>
            <a href='/wander'>
              <h5>
                <FormattedMessage
                  id='Wander'
                  defaultMessage='Wander'
                />
              </h5>
              <div><span>Find out more about one<br/>of our featured parks</span></div>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Nav;
