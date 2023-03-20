import React from 'react';
import MarketingApp from './components/MarketingApp';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default () => {
    const classes = makeStyles((theme) => ({
        headercontainer: {
            backgroundColor: "red",
            paddingRight: "20em",
            paddingLeft: "118px",
          },
    }));

    const displayDesktop = () => {
      return <Toolbar > 
      <div>VM --- CONTAINER PAGE FOR ALL THE APPS.</div>
      </Toolbar>;
    };

    return (
        <>
        <MarketingApp/>
        <AppBar className={classes.headercontainer}>{displayDesktop()}</AppBar>
      
      </>
);
};