import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

export default class ExpTab extends React.Component {
  render() {
    return (
      <div className="col panel-layout" style={{overflow: 'auto'}}>
        <List disablePadding={true} style={{marginLeft: '3%', marginTop: '2%'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="GT" src="https://media.licdn.com/dms/image/C560BAQGX16jcTrVxLg/company-logo_200_200/0?e=2159024400&v=beta&t=1Ho_4vw-6gjCOA002UcjoKSZb_JXuUrHVOU2B2XCA44" />
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
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="INSTAGRAM" src="https://media.licdn.com/dms/image/C510BAQEBW-TswoZ0CA/company-logo_100_100/0?e=1565222400&v=beta&t=7cve7TZcC4YKLu-JBQIAhiJSOWcCRajLbhd2EMUQBLM" />
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
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="FACEBOOK" src="https://media.licdn.com/dms/image/C560BAQGzrfvmsDzXeA/company-logo_200_200/0?e=2159024400&v=beta&t=VEfHmdft5MWMxyL5Er2FQCCs_t1WGUMsxkm1kJvsXmg" />
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
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="Godman" src="https://media.licdn.com/dms/image/C4D0BAQE0nZ2BzWyZuw/company-logo_200_200/0?e=2159024400&v=beta&t=YwByMGWHiaXWcNRxn193HWu6v1HnZ-wj4eq6DCVSgDM" />
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
              <Avatar style={{width: 50, height: 50, borderRadius: '0px'}} alt="Godman" src="https://media.licdn.com/dms/image/C4E0BAQGq7NLeMEjFsg/company-logo_200_200/0?e=2159024400&v=beta&t=3pn0rrwV_eNLe8qJBR468HypXastdBfcAWcnNr19ySg" />
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