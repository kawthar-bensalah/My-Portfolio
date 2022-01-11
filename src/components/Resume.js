import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AiFillStar } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#000",
  },
  heading: {
    color: "#FF004D",
    padding: "1rem 0",
    textTransform: "uppercase",
  },

}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experience
      </Typography>

      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#acadbd', color: '#fff'}} //#42363A
    contentArrowStyle={{ borderRight: '7px solid  #acadbd' }} //#42363A
    date="2020 - present"
    iconStyle={{ background: '#FF004D', color: '#fff' }}
    icon={<AiFillStar />}
  >
    <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">CERIST, Algiers-Algeria</h4>
    <p>
      FrontEnd developement, Software Developement, Medical image processing, DICOM image annotation and segmentation
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#acadbd', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid  #acadbd' }}
    date="2019 - 2020"
    iconStyle={{ background: '#FF004D', color: '#fff' }}
    icon={<AiFillStar />}
  >
    <h3 className="vertical-timeline-element-title">Master’s degree in Software Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">USTHB, Algiers-Algeria</h4>
    <p>
    Software Engineering,FrontEnd developement, Information systems, databases
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#acadbd', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid  #acadbd' }}
    date="2017 - 2019"
    iconStyle={{ background: '#FF004D', color: '#fff' }}
    icon={<AiFillStar />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor Degree in Academic Computing</h3>
    <h4 className="vertical-timeline-element-subtitle">USTHB, Algiers-Algeria</h4>
    <p>
    Computer architecture, Object Oriented programming, FrontEnd developement, Software Engineering
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: '#FF004D', color: '#fff' }}
    icon={<BsCircleFill />}
  />
</VerticalTimeline>

    </Box>
  );
};

export default Resume;
