import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#2b2b2b',
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#1890ff',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
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
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    /*
    backgroundColor: theme.palette.background.paper,
    */
  },
  demo2: {
    /*
    backgroundColor: '#2e1534',
    */
  },
}));

function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Tab 1" />
          <AntTab label="Tab 2" />
          <AntTab label="Tab 3" />
        </AntTabs>
        {/*<Typography className={classes.padding} />*/}
      </div>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Workflows" />
          <StyledTab label="Datasets" />
          <StyledTab label="Connections" />
        </StyledTabs>
	{/*
        <Typography className={classes.padding} />
	*/}
      </div>
    </div>
  );
}
export default CustomizedTabs;
