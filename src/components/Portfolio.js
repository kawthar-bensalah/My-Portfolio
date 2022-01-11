import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import project1 from "../images/p1.jpg";
import project2 from "../images/p2.jpg";
import project3 from "../images/p3.jpg";
import project4 from "../images/p4.jpg";
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Fade from 'react-reveal';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#000",
    height: "100%",
  },
  heading: {
    color: "#FF004D",
    textTransform: "uppercase",
    padding: "1rem 0",
  },
  cardContainer: {
    background: "#000",
    color: "white",
    maxWidth: 1000,
    height: 400,
    margin: "3rem",
    display: 'flex',
    alignItems: "left",
    padding : 20,
    borderImageSlice: 1,
    borderRadius: 20,
    border:"1px solid white",
    boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
  //  borderImageSource: "linear-gradient(to right, tomato, tomato)",
   // boxShadow: "-15px -15px 15px rgba(255, 255, 255, 0.2), 15px 15px 15px rgba(0,0,0,0.1),inset -50px -50px 50px rgba(255, 255, 255, 0.2),inset 50px 50px 50px rgba(0,0,0,0.1)",

  },
  cardmedia: {
    width: 450,
    },
  margin: {
    marginLeft: "0.5em",
    marginRight: "0.5em",
    margin : "0.3em",
  },
  Btn: {
    color: "white",
    marginBottom: "1em",
    marginTop : "0.1em",
    marginRight: "0.5em",
  },
  Btn1: {
    color: "white",
    marginBottom: "1em",
    marginTop : "0.1em",
    marginLeft: "0.3em",
    marginRight: "0.5em",
  },
  cardAct: {
    marginRight: "3em",
  },
  content: {
    display: "flex",
    alignItems: "left",
  },
  head: {
    marginBottom : "1em",
  },
  div2: {
   margin:"auto",
  },
  link: {
    color: "tomato",
  }
}));

const projects = [

  {
    name: "Web-based DICOM viewer",
    description: `web based dicom viewer and annotation tool for CT Scans.
    The application allows manual annotation and segmentation in radiological images with a rich-features set that includes advancing viewing options and DICOM tags.
    The tool is compatible with all web browsers`,
    image: project1,
    languages: ['Vuejs','Buefy', 'Bulma', 'Nodejs', 'PHP', ],
    github: "https://github.com/kawthar-bensalah/DICOM-Viewer",
    link: "https://github.com/kawthar-bensalah/DICOM-Viewer",
  },
  {
    name: "Smart Home Automation System",
    description: `Web of Things based system including a client application that enables users to create and execute scenarios of coordinated services offered by the smart house.`,
    image: project3,
    languages: ['Angular', 'Bootstrap', 'Spring', ],
    github: "https://github.com/kawthar-bensalah",
    link: "https://github.com/kawthar-bensalah/MystroHome",
  },
  {
    name: "Parental control application",
    description: `Java Desktop application, based on social networks data, serving as a generator of real-time reports about children's activities on Twitter. The system introduces detection of suspicious profiles.`,
    image: project2,
    languages: ['Java', 'JAVA Swing', 'MySQL'],
    github: "https://github.com/kawthar-bensalah/KontRol",
    link: "https://github.com/kawthar-bensalah/KontRol",
  },
  {
    name: "Online magazine website",
    description: `Online news and magazine website with different sections including latest news, built using responsive design, accessible on any device and any platform on the Internet through a web browser`,
    image: project4,
    languages: ['HTML', 'CSS', 'JAVASCRIPT'],
    github: "https://github.com/kawthar-bensalah/Web-Magazine",
    link: "https://github.com/kawthar-bensalah/Web-Magazine",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
       <Typography variant="h4" align="center" className={classes.heading}>
        Projects
      </Typography>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item  key={i}>
              <Fade left duration={2000} distance="100px">
            <Card className={classes.cardContainer}>
              <CardActionArea className={classes.cardAct}>
                <CardMedia className={classes.cardmedia}
                  component="img"
                  alt="Project 1"
                  height="350"
                  width="350"
                  image={project.image}
                />
                  </CardActionArea>
                <CardContent className={classes.div2}>
                  <div className={classes.content}>
                  <Typography variant="h5" className={classes.head} >
                    {project.name}
                  </Typography>
                <Link href= {project.github} className={classes.link} target="_blank" >
                 <GitHubIcon fontSize="medium" className={classes.Btn1}/>
                </Link>

                  </div>
                  <Typography variant="body2">
                    {project.description}
                  </Typography>
              <ul>
                {
                  project.languages.map((value) => {
                    return  <Button variant="outlined" color="secondary" className={classes.margin}>
                    {value}
                  </Button>
                  })
                }
              </ul>

             </CardContent>
            </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
/*  <Link href= {project.link} className={classes.link} target="_blank" >
                 <LaunchIcon fontSize="medium" className={classes.Btn}  />
                </Link>
                */