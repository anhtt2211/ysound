import {
  Avatar,
  Grid, Link, Typography
} from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AnhTranAvatar from "../../images/anhtran-avatar.jpeg"
import NgocLamAvatar from "../../images/ngoclam-avatar.jpg"

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 80,
    height: 80
  },
  avatatContainer: {
    width: "50%"
  },
  divider: {
    width: "100%",
    margin: 10
  },
  miniContainer: {
    margin: 10,
    "& div": {
      margin: "2px"
    },
    "& .MuiAvatar-root": {
      // width: 50,
      // height: 50,
      marginRight: 20,
      marginLeft: 10,
      background: pink[500],
      color: "#fff"
    }
  }
});

const ContributorsPage = () => {
  const classes = useStyles();

  return (
    <>
      <br />
      <Grid container alignItems="center" justify="center">
        <Grid
          component={Link}
          href="https://github.com/anhtt2211"
          target="blank"
          container
          direction="column"
          alignItems="center"
          color="inherit"
          className={classes.avatatContainer}
        >
          <Avatar
            className={classes.avatar}
            src={AnhTranAvatar}
          />
          <Typography variant="h5">Anh Tran</Typography>
          <Typography>Creator of YSound Music</Typography>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.avatatContainer}
          component={Link}
          href="https://github.com/lamngok1201"
          target="blank"
          color="inherit"
        >
          <Avatar
            className={classes.avatar}
            src={NgocLamAvatar}
          />
          <Typography variant="h5">Ngoc Lam</Typography>
          <Typography>Helped in writing code</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ContributorsPage;
