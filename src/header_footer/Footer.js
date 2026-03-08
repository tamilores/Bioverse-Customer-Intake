import {Box, Typography} from "@mui/material"

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        padding: 2,
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="h6">
        b
      </Typography>

      <Typography variant="body2">
        © 2026 Bioverse. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;