import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DesktopMacIcon from '@material-ui/icons/DesktopMacTwoTone';
import BusinessIcon from '@material-ui/icons/BusinessTwoTone';
import DraftsIcon from '@material-ui/icons/DraftsTwoTone';


export default class ContactTab extends React.Component {
  render() {
    return (
      <div className="col panel-layout">
        <List style={{marginLeft: '5%', marginRight: '5%', marginTop: '3%'}}>
          <ListItem button onClick={()=> window.open("https://github.com/JKChenFZ", "_blank")}>
            <ListItemIcon>
              <DesktopMacIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
          <ListItem button onClick={()=> window.open("https://www.linkedin.com/in/jasonchengt", "_blank")}>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Linkedin" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="me@kunchen.me" />
          </ListItem>
        </List>
      </div>
    )
  }
}