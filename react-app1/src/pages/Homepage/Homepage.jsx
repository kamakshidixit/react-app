// import React from 'react';
// 


// export default function Homepage() {

//   return(
//     <>
//     <Appbar/>
//          <div>
//            {/* <pre><h3 style ={{marginLeft: '500px'}}>Name:{ localStorage.getItem('name')} </h3></pre>
//         <br></br>
//          <pre><h3 style ={{marginLeft: '500px'}}>Role:{localStorage.getItem('role')}  </h3></pre>
//         <br></br>
//   <pre><h3 style ={{marginLeft: '500px'}}>Grade:{ localStorage.getItem('grade')} </h3></pre>
//         <br></br>
//   <pre><h3 style ={{marginLeft: '500px'}}>Email:{localStorage.getItem('email')} </h3></pre>
//         <br></br> */}
     
 
//      </div>
//     </>
//   )

//   }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Appbar from '../../components/Appbar';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "1rem 43rem",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
  <>
    <Appbar/>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="h2">
         Profile Name : { localStorage.getItem('name')}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Role : {localStorage.getItem('role')}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Grade : { localStorage.getItem('grade')}
        </Typography><Typography className={classes.pos} color="textSecondary">
          Email : {localStorage.getItem('email')}
        </Typography>
       
      </CardContent>
    
    </Card>
    </>
  );
}




