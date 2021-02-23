import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <nav>
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs value={value}  aria-label="styled tabs example">
           <Link href="/"><StyledTab label="Home" /></Link>
           <Link href="/newpost"><StyledTab label="Post"/></Link>
           <Link href="/playlist"><StyledTab label="Playlists" /></Link>
           <Link href="/weather"><StyledTab label="Weather" /></Link>
           <p>Hiker Diaries</p>
        </StyledTabs>
        
        <Typography className={classes.padding} />
        
      </div>
      
    </div>
    </nav>
  );
}