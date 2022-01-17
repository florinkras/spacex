import React from "react";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import Ship from "../Ship/Ship";

interface MissionDetailsProps {
  mission_name: string;
  details?: string;
  launch_date_local: string;
  launch_site: {
    site_name: string;
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
    rocket: {
      description: string;
    };
  };
  ships: {
    image: string;
    name: string;
    model: string;
  }[];
}

const MissionDetails: React.FC<MissionDetailsProps> = ({
  mission_name,
  details,
  launch_date_local,
  launch_site,
  rocket,
  ships,
}) => {
  return (
    <>
      <Link href="/missions">
        <Button variant="contained" color="secondary">
          Go back
        </Button>
      </Link>
      <Paper sx={{ mt: 1, p: 2 }}>
        <Box display={"flex"} justifyContent={"space-between"} pb={1.5}>
          <Typography variant="h5" component="div">
            {mission_name}
          </Typography>
          <Box>
            <Typography variant="subtitle1" component="div">
              Launch Date : {new Date(launch_date_local).toLocaleDateString()}
            </Typography>
            <Typography variant="subtitle1" component="div">
              Launch Place : {launch_site.site_name}
            </Typography>
          </Box>
        </Box>
        <Divider />
        {details ? (
          <Box sx={{ pt: 2, pb: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
              Description
            </Typography>
            <Typography variant="subtitle1" component={"div"}>
              {details}
            </Typography>
          </Box>
        ) : (
          ""
        )}
        <Box sx={{ pt: 1, pb: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            Rocket
          </Typography>
          <Typography variant="subtitle1" component="div">
            Rocket name : {rocket.rocket_name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Rocket type : {rocket.rocket_type}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Rocket description : {rocket.rocket.description}
          </Typography>
        </Box>
        <Box sx={{ pt: 1, pb: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            Ships
          </Typography>
          <Grid container spacing={2}>
            {ships.length ? (
              ships.map((ship, index) => {
                return (
                  <Grid key={index} item xs={12} md={4} display={"flex"}>
                    <Ship
                      key={index}
                      name={ship.name}
                      image={ship.image}
                      model={ship.model}
                    />
                  </Grid>
                );
              })
            ) : (
              <Typography sx={{ m: 2 }} variant="subtitle1" component="div">
                No data for ships
              </Typography>
            )}
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default MissionDetails;
