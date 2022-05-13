import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Contact Number: +91 9879293349
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Email id: group46da2019@gmail.com
        </Typography>
        <a href="https://github.com/rathod0045/weCare" target="_blank">
          <IconButton style={{width:"100%"}}>
            <GitHubIcon />
          </IconButton>
        </a>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};