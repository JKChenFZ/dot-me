import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MeTab from './MeTab';
import ExpTab from './ExpTab';
import SkillTab from './SkillTab';
import PubTab from './PubTab';
import ContactTab from './ContactTab';
import FaceIcon from '@material-ui/icons/Face';
import SubjectIcon from '@material-ui/icons/SubjectRounded';
import BarChartIcon from '@material-ui/icons/BarChartRounded';
import BookIcon from '@material-ui/icons/BookRounded';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default class TabView extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const width = window.innerWidth;
    // const height = window.innerHeight;

    return (
      <div
        className="col"
        id="ContentPaper"
        style={{
          opacity: 0.85,
          zIndex: 10,
          background: 'white',
          width: width <= 500 ? '90%' : '50%',
          height: width <= 500 ? '75%' : '60%',
          borderRadius: '15px'
        }}
      >
        <Tabs
          className="hide-scroll-bar"
          value={this.state.value}
          onChange={this.handleChange}
          // variant="fullWidth"
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="on"
          // width="300"
          style={{height: '15%', borderTopRightRadius: '15px', borderTopLeftRadius: '15px'}}
        >
          <Tab icon={<FaceIcon />} label="ME" />
          <Tab icon={<SubjectIcon />} label="EXPERIENCE" />
          <Tab icon={<BarChartIcon />} label="SKILLS" />
          <Tab icon={<BookIcon />} label="PUBLICATIONS" />
          <Tab icon={<ContactMailIcon />} label="CONTACT" />
        </Tabs>
        {value === 0 && <MeTab />}
        {value === 1 && <ExpTab />}
        {value === 2 && <SkillTab />}
        {value === 3 && <PubTab />}
        {value === 4 && <ContactTab />}
      </div>
    )
  }
}