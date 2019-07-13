
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

const useStyles = makeStyles(theme=>({
  card: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
 
}));


export default function SimpleCard({name,birth_year,height,mass,hair_color,gender,skin_color}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
       
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Star Wars Characters
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body1" component="p">
          {bull} {birth_year}
        </Typography>
        <Typography variant="body1" component="p">
          {bull} {height}
        </Typography>
        <Typography variant="body1" component="p">
          {bull} {mass}
        </Typography>
        
      </CardContent>

      <CardActions disableSpacing>

      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

      <Typography variant="body1" component="p">
          {bull} {hair_color}
        </Typography>
        <Typography variant="body1" component="p">
          {bull} {gender}
        </Typography>
        <Typography variant="body1" component="p">
          {bull} {skin_color}
        </Typography>

      </Collapse>
    </Card>
  );
}