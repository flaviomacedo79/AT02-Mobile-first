import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function AlignItemsList(props) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            aria-label="recipe"
            alt="Remy Sharp"
            src={props.amigoImagemPerfil}
            sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={props.amigoNomeSugestao}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.amigosComum}
              </Typography>
              {" — em comum."}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
