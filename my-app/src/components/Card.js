import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";




const Card = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://d2lo9qrcc42lm4.cloudfront.net/Images/News/_contentLarge/Shakira-concert-2.jpg?mtime=20180608093628"
          alt=""
          className="img"
        ></img>
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Go go go
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
            <AccessTime sx={{width: 12.5}}/>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              Shakira Shakira
            </Typography>
            <Rating name="read-only" value={4.4} precision={0.1} size="small" readOnly/>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;
