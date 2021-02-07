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
});

export default function MissionCard(props) {
  const classes = useStyles();
  const { missionDetails } = props;
  const { missionImage, missionName, missionIds, launchYear, successLaunch } = missionDetails;
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={missionImage}
          title="mission image"

        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {missionName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Mission Ids: {JSON.stringify(missionIds)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Launch Year: {launchYear}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            Launch Success: {successLaunch}
         </Typography>
        </CardContent>
    </Card>
  );
}
