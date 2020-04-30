import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import FB from '../images/FB.png';
import GS from '../images/GS.png';
import GT from '../images/GT.png';
import INS from '../images/INS.png';
import THD from '../images/THD.png';

export default class ExpTab extends React.Component {
  render() {
    return (
      <div className="col panel-layout" style={{overflow: 'auto'}}>
        <List disablePadding={true} style={{marginLeft: '3%', marginTop: '2%'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="GT" src={GT} />
            </ListItemAvatar>
            <ListItemText
              primary="Georgia Institute of Technology"
              secondary={
                <React.Fragment>
                  <Typography component="span" color="textPrimary">
                    Jan 2017 - Present
                  </Typography>
                  {"Research Assistant (Habanero Group)"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="INSTAGRAM" src={INS} />
            </ListItemAvatar>
            <ListItemText
              primary="Instagram"
              secondary={
                <React.Fragment>
                  <Typography component="span" color="textPrimary">
                    May 2019 - Present
                  </Typography>
                  {"Software Engineering Intern"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="FACEBOOK" src={FB} />
            </ListItemAvatar>
            <ListItemText
              primary="Facebook"
              secondary={
                <React.Fragment>
                  <Typography component="span" color="textPrimary">
                    Aug 2018 - Nov 2018
                  </Typography>
                  {"Software Engineering Intern"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="Godman" src={GS} />
            </ListItemAvatar>
            <ListItemText
              primary="Goldman Sachs"
              secondary={
                <React.Fragment>
                <Typography component="span" color="textPrimary">
                  May 2018 - Aug 2018
                </Typography>
                {"Software Engineering Intern"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="Godman" src={THD} />
            </ListItemAvatar>
            <ListItemText
              primary="The Home Depot"
              secondary={
                <React.Fragment>
                  <Typography component="span" color="textPrimary">
                    May 2017 - Aug 2017
                  </Typography>
                  {"Software Engineering Intern"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div>
    )
  }
}