import { Typography } from "@mui/material";
import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import Missions from "../components/Missions/Missions";

const Home: NextPage = () => {
  return (
    <Layout>
      <Missions />
    </Layout>
  );
};

export default Home;
