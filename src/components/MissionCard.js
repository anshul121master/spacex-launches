import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  media: {
    height: 240,
    backgroundSize: "80% 80%",
    backgroundColor: "#bdc3c7"
  },
  cardHeader:{
    fontWeight: "bold"
  }
});

export default function MissionCard(props) {
  const classes = useStyles();
  const { missionDetails } = props;
  const { missionImage, missionName, missionIds, launchYear, successLaunch, successLand } = missionDetails;
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={missionImage}
          title="mission image"

        />
        <CardContent>
          <Typography className={classes.cardHeader} color="primary" variant="h6" component="h3">
            {missionName}
          </Typography>
          <Typography variant="body2"  component="p">
           <strong>Mission Ids:</strong> {JSON.stringify(missionIds)}
          </Typography>
          <Typography variant="body2" component="p">
            <strong>Launch Year:</strong> {launchYear}
         </Typography>
         <Typography variant="body2" component="p">
            <strong>Launch Success:</strong> {successLaunch}
         </Typography>
         <Typography variant="body2" component="p">
         <strong>Land Success:</strong> {successLand}
      </Typography>
        </CardContent>
    </Card>
  );
}
