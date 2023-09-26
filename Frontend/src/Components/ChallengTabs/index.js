import React from "react";
import useStyles from "./style";
import { Tab, Tabs } from "react-bootstrap";

const ChallengeTabs = ({ ListTabs }) => {
  const classes = useStyles();
  return (
    <Tabs className={classes.Tabs}>
      {ListTabs.map((item, index) => (
        <Tab
          key={index}
          eventKey={item.eventKey}
          title={item.title}
          tabClassName={classes.Tab}
          className={classes.InnerTab}
        >
          {item.TabComponent}
        </Tab>
      ))}
    </Tabs>
  );
};

export default ChallengeTabs;