import React, { Fragment } from 'react';

class Meteors extends React.Component {
  state = {
    maxMeteors: 20,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    colors: ['orange', 'pink', 'black', 'blue', 'yellow', 'green'],
    speed: ['star-fast', 'star-slow'],
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  render() {
    const meteorKeyArr = new Array(this.state.maxMeteors);

    for (let i = 0; i < this.state.maxMeteors; i++) {
      meteorKeyArr[i] = i
    }

    return (
      <Fragment>
        {
          meteorKeyArr.map((e) => {

            const minWindowWidthOffset = Math.floor(this.state.windowWidth * 0.2);
            const maxWindowWidthOffset = Math.floor(this.state.windowWidth * 0.9);

            const minWindowHeightOffset = Math.floor(this.state.windowHeight * 0.05);
            const maxWindowHeightOffset = Math.floor(this.state.windowHeight * 0.5);

            const leftOffset = Math.random() * (maxWindowWidthOffset - minWindowWidthOffset) + minWindowWidthOffset;
            const topOffset = Math.random() * (maxWindowHeightOffset - minWindowHeightOffset) + minWindowHeightOffset;

            const selectedColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
            const selectedSpeed = this.state.speed[Math.floor(Math.random() * this.state.speed.length)];
            const classAttr = `${selectedColor} ${selectedSpeed}`

            return (
              <span key={e} className={classAttr} style={{top: topOffset, left: leftOffset}}/>
            )
          })
        }
      </Fragment>
    )
  }
}

export default Meteors;