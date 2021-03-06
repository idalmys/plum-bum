import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TodayIcon from "@material-ui/icons/Today";
import DateRangeIcon from "@material-ui/icons/DateRange";
import FlareRoundedIcon from "@material-ui/icons/FlareRounded";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Divider from "@material-ui/core/Divider";
import WritingStreak from "../components/WritingStreak/WritingStreak.js";
import DailyWordcount from "../components/DailyWordCount/DailyWordcount.js";
import WeeklyWordCount from "../components/WeeklyWordCount/weeklyWordCount.js";
import HighestWordCount from "../components/HighestWordCount/highestWordCount.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    marginBottom: "40px",
  },
  avatar: {
    color: "#ffaaa5",
    backgroundColor: "#352054",
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <TrendingUpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Writing Streak"
          secondary={<WritingStreak />}
          days
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <TodayIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Today's Word Count"
          secondary={<DailyWordcount />}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="This Week's Word Count"
          secondary={<WeeklyWordCount />}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <FlareRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Best Daily Word Count"
          secondary={<HighestWordCount />}
        />
      </ListItem>
    </List>
  );
}
