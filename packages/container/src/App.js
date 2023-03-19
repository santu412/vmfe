import React from 'react';
import MarketingApp from './components/MarketingApp';
import { AppBar, Toolbar } from "@material-ui/core";


export default () => {
    const classes = useStyles((theme) => ({
        header: {
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
        <AppBar className={classes.header}>{displayDesktop()}</AppBar>
        <MarketingApp/>
      </>
);
};