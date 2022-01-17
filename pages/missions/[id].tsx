import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import { useQuery } from "@apollo/client";
import { LaunchQuery } from "../../utils/queries/queries";
import { Alert, CircularProgress } from "@mui/material";
import MissionDetails from "../../components/Mission/MissionDetails";
import { Box } from "@mui/system";

const MissionDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(LaunchQuery, {
    variables: { id },
    skip: !id,
  });

  if (error) {
    return <Alert severity="warning">API Error</Alert>;
  }

  return (
    <Layout>
      {!loading ? (
        data && (
          <MissionDetails
            mission_name={data.launch.mission_name}
            details={data.launch.details}
            launch_date_local={data.launch.launch_date_local}
            launch_site={data.launch.launch_site}
            rocket={data.launch.rocket}
            ships={data.launch.ships}
          />
        )
      ) : (
        <Box
          sx={{ width: "100%", height: "90vh" }}
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
        >
          <CircularProgress />
        </Box>
      )}
    </Layout>
  );
};

export default MissionDetailsPage;
