import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import vue from "../images/vue.png";
import js from "../images/js.png";
import html from "../images/html.png";
import css from "../images/css.png";
import angular from "../images/angular.png";
import ts from "../images/typescript.png";
import c from "../images/C.png";
import bootstrap from "../images/bootstrap.png";
import mysql from "../images/mysql.png";
import github from "../images/github.png";
import git from "../images/git.png";
import mongodb from "../images/mongodb.png";
import Avatar from '@material-ui/core/Avatar';
import Flip from 'react-reveal/Flip';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#000",
    height: "100%",
  },
  cardContainer: {
    width : 300,
    //maxWidth: 345,
    margin: "4rem auto",
    display: 'flex',
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius : 20,
   // boxShadow: "rgba(255, 255, 255, 0.02) 0px 1px 3px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px",
  },
  skill: {
    paddingLeft: "40px",
  },
  root: {
    width: "max-content",
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    color: theme.palette.getContrastText("#FF004D"),
    backgroundColor:  "#000",
    padding:10,
  },
  heading: {
    color: "#FF004D",
    textTransform: "uppercase",
    padding: "1rem 0",
  },
  txt: {
    textAlign: "left",
  }

}));

const projects = [
  {
    name: "Html5",
    image: html,
  },
  {
    name: "Css3",
    image: css,
  },
  {
    name: "Javascript",
    image: js,
  },
  {
    name: "Vuejs",
    image: vue,
  },
  {
    name: "Angular",
    image: angular,
  },
  {
    name: "Typescript",
    image: ts,
  },
  {
    name: "Bootstrap",
    image: bootstrap,
  },
  {
    name: "C",
    image: c,
  },
  {
    name: "MySql",
    image: mysql,
  },
  {
    name: "Github",
    image: github,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "MongoDB",
    image: mongodb,
  },
];

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
        Tools and Skills
      </Typography>
      <Grid container justify="center" className={classes.skill}>
        {/* Skils */}
        {projects.map((project, i) => (
          <Grid item  key={i}>
             <Flip left duration={2000}>
            <Card className={classes.cardContainer}>
             <div className={classes.root}>
              <Avatar  className={classes.large} src={project.image}>
              </Avatar>
             </div>
             <CardActionArea>
                <CardContent>
                  <Typography variant="h5" className={classes.txt} gutterBottom>
                    {project.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Flip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
