import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CurrentCricket from "./SeriesTabs/CurrentCricket";
import FutureSeries from "./SeriesTabs/FutureSeries";
import RecentlyConcluded from "./SeriesTabs/RecentlyConcluded";

const SeriesPage = () => {
  return (
    <div>
      <Tabs>
        <TabList
          colorScheme={"#439ec9"}
          borderBottom={"1px solid #c7c7c7"}
          background={"#EEEEEE"}
        >
          <Tab fontWeight="bold">Current Cricket</Tab>
          <Tab fontWeight="bold">Future Series/Tournaments</Tab>
          <Tab fontWeight="bold">Recently Concluded</Tab>
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
