import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Me from '../images/me.jpeg';
import Typing from 'react-typing-animation';


export default class MeTab extends React.Component {
  render() {
    return (
      <div className="col panel-layout">
        <div className="row" style={{marginTop: '3%', justifyContent: 'center'}}>
          <Avatar style={{width: '180px', height: '180px'}} alt="KC" src={Me}/>
        </div>
        <div
          className="row"
          style={{
            marginLeft: '15%',
            marginRight: '15%',
            marginTop: '3%',
            justifyContent: 'center',
            height: '50%',
            overflow: 'auto',
          }}
        >
          <Typing>
            <Typography variant="h5">
              Hi, my name is Jason <span role="img" aria-label="sheep">👋</span> <br/>
              <Typing.Delay ms={1500} />
              I study CS at Georgia Institute of Technology. <br/>
              <Typing.Delay ms={1000} />
              Mostly a Backend Engineer. Open to opportunities 💼
            </Typography>
          </Typing>
        </div>
        
      </div>
    )
  }
}