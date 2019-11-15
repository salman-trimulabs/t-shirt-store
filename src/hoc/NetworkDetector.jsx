import React, { Component } from 'react';
import Theme from '../theme/theme';

export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    }

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }


    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('//google.com', {
              mode: 'no-cors',
              })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing)
              });
            }).catch(() => this.setState({ isDisconnected: true }) )
          }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    }

    render() {
        
      const { isDisconnected } = this.state;
      return (
        <div>
          { isDisconnected && (<div style={{background: Theme.global.colors.red, marginTop: 0, marginBottom: 0}}>
              <p>Internet connection lost</p>
            </div>)
          }
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return NetworkDetector;
}