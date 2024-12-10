import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { Box } from "@mui/material";
function Card({ image, title, description }) {
  return (
    <Box
      className="card"
      sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2, width:"200px"}}
    >
      <Box
        component="img"

        src={image}
        alt={title}
        sx={{
          width: "200px", 
          height: "200px", 
          objectFit: "cover", 
          borderRadius: 1, 
        }}
      />
      <h4>{description}</h4>
    </Box>
    
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
