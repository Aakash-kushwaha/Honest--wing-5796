import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CurrentCricket from "./SeriesTabs/CurrentCricket";
import FutureSeries from "./SeriesTabs/FutureSeries";
import RecentlyConcluded from "./SeriesTabs/RecentlyConcluded";

const SeriesPage = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Current Cricket</Tab>
          <Tab>Future Series/Tournaments</Tab>
          <Tab>Recently Concluded</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CurrentCricket />
          </TabPanel>
          <TabPanel>
            <FutureSeries />
          </TabPanel>
          <TabPanel>
            <RecentlyConcluded />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default SeriesPage;
