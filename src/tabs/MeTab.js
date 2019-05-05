import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Me from './me.jpeg';
import Typing from 'react-typing-animation';


export default class MeTab extends React.Component {
  render() {
    return (
      <div className="col panel-layout">
        <div className="row" style={{marginTop: '5%', justifyContent: 'center'}}>
          <Avatar style={{width: '180px', height: '180px'}} alt="KC" src={Me}/>
        </div>
        <div
          className="row"
          style={{
            marginLeft: '15%',
            marginRight: '15%',
            marginTop: '5%',
            justifyContent: 'center',
            height: '30%',
            overflow: 'auto',
          }}
        >
          <Typing>
            <Typography variant="h5">
              Hi, my name is Kun <span role="img" aria-label="sheep">👋</span> <br/>
              <Typing.Delay ms={2000} />
              I major in CS at Georgia Institute of Technology.
            </Typography>
          </Typing>
        </div>
        
      </div>
    )
  }
}