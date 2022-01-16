import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Mission from "../Mission/Mission";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { launchesPast } from "../../utils/queries/queries";

interface Mission {
  mission_name: string;
  launch_date_local: string;
  details: string;
  links: {
    flickr_images: string[];
  };
}

const Missions = () => {
  const { data, loading, error, fetchMore } = useQuery(launchesPast, {
    variables: { offset: 0, limit: 6 },
  });

  if (error) {
    return <Alert severity="error">Api error</Alert>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {!loading ? (
          data?.launchesPast.map((d: Mission, index: number) => {
            console.log("DD", d);
            return (
              <Grid
                key={index}
                display={"flex"}
                justifyContent={"center"}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
              >
                <Mission
                  missionImage={
                    d.links.flickr_images.length
                      ? d.links.flickr_images[0]
                      : "https://ichef.bbci.co.uk/news/976/cpsprodpb/14C6F/production/_112430158_spacex1.jpg"
                  }
                  missionName={d.mission_name}
                  missionLaunchDate={d.launch_date_local}
                  missionDesc={
                    d.details ? d.details?.substr(0, 200) : "Spacex mission"
                  }
                />
              </Grid>
            );
          })
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
      </Grid>
      {data?.launchesPast.length ? (
        <Box display="flex" justifyContent="center" mt={3}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() =>
              fetchMore({
                variables: {
                  offset: data.launchesPast.length,
                },
              })
            }
          >
            Fetch More
          </Button>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Missions;
