import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface MissionProps {
  missionId: string;
  missionName: string;
  missionImage: string;
  missionDesc: string;
}

const Mission: React.FC<MissionProps> = ({
  missionImage,
  missionName,
  missionDesc,
  missionId,
}) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={missionImage}
        alt="mission_image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {missionName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {missionDesc}...
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/missions/${missionId}`}>
          <Button size="small">View</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Mission;
