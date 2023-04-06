import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function card(){
    return(
        <Card
        style={{
          width: 400,
          backgroundColor: "yellow",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom>
            7244
          </Typography>
          <Typography variant="h5" component="h2">
            Submission
          </Typography>
        </CardContent>
      </Card>
    )
}

export default card;