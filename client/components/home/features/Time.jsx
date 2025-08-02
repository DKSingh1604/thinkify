import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

const Time = () => {
  return (
    <Grid
      container
      sx={{
        maxWidth: "1280px",
        mx: "auto",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        data-aos="fade-up-left"
      >
        <img
          style={{
            width: "100%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
          src="/images/time.jpg"
          alt="Time Master"
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        container
        data-aos="fade-up-left"
      >
        <Box
          sx={{
            marginLeft: "auto",
            textAlign: "right",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              background:
                "linear-gradient(90deg, #59e3a7 0%, #1b2e35 100%)",
              borderRadius: "24px",
              px: 3,
              py: 1,
              pt: 2,
              mb: 2,
              boxShadow:
                "0 2px 12px 0 rgba(89,227,167,0.10)",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              Time Master
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="#797979"
            marginTop="-10px"
          >
            Optimize your study schedule and
            maximize productivity
          </Typography>
          <Typography
            variant="body1"
            color="#797979"
            marginTop="80px"
          >
            Enhance your productivity with our
            time management tools designed
            specifically for students. Create
            personalized study plans, set time
            blocks for different tasks, and
            monitor your time usage to ensure you
            {"'"}re making the most out of every
            study session.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Time;
