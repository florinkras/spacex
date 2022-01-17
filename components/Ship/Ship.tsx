import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface ShipProps {
  name: string;
  model?: string;
  image: string;
}

const Ship: React.FC<ShipProps> = ({ name, model, image }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <CardMedia height="250px" component="img" src={image} />
      <CardContent>
        <Box>
          <Typography variant="subtitle1" component="div">
            Ship Name: {name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {model ? `Ship Model: ${model}` : "Unknown Model"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Ship;
