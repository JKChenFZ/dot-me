import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import sc18 from '../images/sc18.png';

export default class PubTab extends React.Component {
  render() {
    return (
      <div className="col panel-layout" style={{overflow: 'auto'}}>
        <List disablePadding={true} style={{marginLeft: '3%', marginTop: '2%'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="GT" src={sc18} />
            </ListItemAvatar>
            <ListItemText
              primary="2018 IEEE/ACM 4th International Workshop on Extreme Scale Programming Models and Middleware"
              secondary={
                <React.Fragment>
                  <Typography component="span" color="textPrimary">
                    Nov 2018
                  </Typography>
                  {"A Unified Runtime for PGAS and Event-Driven Programming (Second Author)"}
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction>
              <Button target="_blank" href="https://ieeexplore.ieee.org/abstract/document/8638486">View</Button>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    )
  }
}