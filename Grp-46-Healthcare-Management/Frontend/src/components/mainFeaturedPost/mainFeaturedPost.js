import React from 'react';
import './mainFeaturedPost.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import I0 from '../../images/c1.jpg';
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <div>
      <div style={{width:"100%" ,height:"70vh"}}>
        <ul class='slideshow'>
          <li>
            <span>first</span>
          </li>
          <li>
            <span>second</span>
          </li>
          <li>
            <span>third</span>
          </li>
          <li>
            <span>fourth</span>
          </li>
        </ul>
      </div>
        
    </div>
    
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};


// <Paper className={classes.mainFeaturedPost} style={{ }}>
//       {/* Increase the priority of the hero background image */}
//       {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
//       <ul class='slideshow'>
//         <li>
//           <h3>The Seasons</h3>
//           <span>Summer</span>
//         </li>
//         <li>
//           <span>Fall</span>
//         </li>
//         <li>
//           <span>Winter</span>
//         </li>
//         <li>
//           <span>Spring</span>
//         </li>
//       </ul>

//       <div className={classes.overlay} />
//       <Grid container>
//         <Grid item md={6}>
//           <div className={classes.mainFeaturedPostContent}>
//             <Typography component="h1" variant="h3" color="inherit" gutterBottom>
//               <br/>
//               {post.title}
//               <br/>
//             </Typography>
//             <Typography variant="h5" color="inherit" paragraph>
//               <br/><br/><br/><br/>
//             </Typography>
//           </div>
//         </Grid>
//       </Grid>
//     </Paper>