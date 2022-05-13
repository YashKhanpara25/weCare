import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../mainHeader/mainHeader';
import MainFeaturedPost from '../mainFeaturedPost/mainFeaturedPost';
import FeaturedPost from '../featuredPost/featuredPost';
import Footer from '../mainFooter/mainFooter';
import Precautions from '../Precautions2/precautions';
import I3 from '../../images/i8.JPG';
import I1 from '../../images/i9.JPG';
import I2 from '../../images/i10.JPG';
import I0 from '../../images/i11.JPG';
import C2 from '../../images/c2.jpg';
import C3 from '../../images/c3.JPG';
import C1 from '../../images/c1.jpg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  // { title: 'Functionalities', url: '#' },
  // { title: 'Precautions', url: '#precaution' },
  // { title: 'Get in Touch', url: '#' },
];

const mainFeaturedPost = {
  title: 'we Care',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: C1,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Consult specialist of your choice',
    
    description:
      'Get in touch with the best doctors around.',
    image: C2,
    imageText: 'C2',
  },
  {
    title: 'Monitor your health regualary',
    
    description:
      'This helps patient to know at the right time what treatment he needs from doctor.',
    image: C3,
    imageText: 'Image Text',
  },
];


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="weCare" sections={sections} />
        
        <main>
        
          <MainFeaturedPost post={mainFeaturedPost} />
          <div style={{padding: 20, color:"#3B4252", fontSize: 30, textAlign: "center"}}>
            Aim
          </div>
          <div style={{paddingBottom: 30,paddingTop: 10, fontSize: 15, textAlign: "center"}}>
          weCare provides affordable, high-quality healthcare to every human being with a sense of warmth, personalization, and a homey touch, resulting in the most compelling Healthy Recovery Experience for the patients. weCare aims to replace the hospital's current paper-based file system with a paperless healthcare experience.
          </div>
          
          <div style={{padding: 30, color:"#3B4252", fontSize: 30, textAlign: "center"}}>
            Functionalities
          </div>
          <Grid container spacing={8}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

          <div id = "precaution" style={{padding: 30, color:"#3B4252", fontSize: 30, textAlign: "center", paddingTop: 50}}>
          Precautions
          </div>
        
          <Grid container spacing={8}>
            <Grid item xs={3} > <Precautions image={I3} iptext={'COVID-19: What is a risk group?'} link={'https://patient.info/news-and-features/covid-19-what-is-a-risk-group'}/> </Grid>
            <Grid item xs={3} > <Precautions image={I1} iptext={'How well do face masks protect against coronavirus?'} link={'https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-mask/art-20485449'}/> </Grid>
            <Grid item xs={3} > <Precautions image={I2} iptext={'Possible Side Effects of getting COVID 19 Vaccine'} link={'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html'}/> </Grid>
            <Grid item xs={3} > <Precautions image={I0} iptext={'The Importance of Hand Sanitization'} link={'https://www.cdc.gov/handwashing/why-handwashing.html'}/> </Grid>
          </Grid>
          <br/>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}