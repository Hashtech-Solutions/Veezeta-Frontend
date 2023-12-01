import { Box, Typography, Container, Divider } from "@mui/material";
import backgroundImage from "../shared/images/background.jpg";

export const MainContainer = ({ children, title }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "calc(100vh - 64px)",
        width: "100%",
      }}
    >
      <Container fixed sx={{ pt: "30px" }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {children}
      </Container>
    </Box>
  );
};
