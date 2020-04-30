import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class SkillTab extends React.Component {
  static languages = [
    'C/C++',
    'Python',
    'JavaScript',
  ]

  static frontend = [
    'HTML/CSS',
    'React',
    'MobX',
    'Redux',
  ]

  static backend = [
    'Node.js',
    'Thrift',
    'Express',
    'Flask',
    'Django',
    'AWS EC2',
    'LLVM',
  ]

  static database = [
    'MongoDB',
    'Postgres',
    'Hadoop',
    'DynamoDB',
    'Cassandra',
  ]

  static analytics = [
    'Jupyter Notebook',
    'Apache Spark',
    'Scikit-Learn',
    'Pandas',
  ]

  render() {

    const languages = (
      <div className="row" style={{flexWrap: 'wrap'}}>
        {
          SkillTab.languages.map((e, index) => {
            return (
              <Chip style={{marginTop: '2px', marginLeft: '1px', marginRight: '2px'}} key={index} label={e} />
            )
          })
        }
      </div>
    );

    const frontend = (
      <div className="row" style={{flexWrap: 'wrap'}}>
        {
          SkillTab.frontend.map((e, index) => {
            return (
              <Chip style={{marginTop: '2px', marginLeft: '1px', marginRight: '2px'}} key={index} label={e} />
            )
          })
        }
      </div>
    );

    const backend = (
      <div className="row" style={{flexWrap: 'wrap'}}>
        {
          SkillTab.backend.map((e, index) => {
            return (
              <Chip style={{marginTop: '2px', marginLeft: '1px', marginRight: '2px'}} key={index} label={e} />
            )
          })
        }
      </div>
    );

    const database = (
      <div className="row" style={{flexWrap: 'wrap'}}>
        {
          SkillTab.database.map((e, index) => {
            return (
              <Chip style={{marginTop: '2px', marginLeft: '1px', marginRight: '2px'}} key={index} label={e} />
            )
          })
        }
      </div>
    );

    const analytics = (
      <div className="row" style={{flexWrap: 'wrap'}}>
        {
          SkillTab.analytics.map((e, index) => {
            return (
              <Chip style={{marginTop: '2px', marginLeft: '1px', marginRight: '2px'}} key={index} label={e} />
            )
          })
        }
      </div>
    );

    return (
      <div className="col panel-layout" style={{overflow: 'auto'}}>
        <ExpansionPanel style={{marginLeft: '3%', marginTop: '3%', marginRight: '3%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Languages</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {languages}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{marginLeft: '3%', marginRight: '3%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Frontend</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {frontend}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{marginLeft: '3%', marginRight: '3%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Backend</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {backend}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{marginLeft: '3%', marginRight: '3%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Database</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {database}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{marginLeft: '3%', marginRight: '3%', marginBottom: '3%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Analytics</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {analytics}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}