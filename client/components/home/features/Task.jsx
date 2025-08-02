import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

const Task = () => {
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
        container
        data-aos="fade-up-left"
      >
        <Box
          sx={{
            marginLeft: "auto",
            textAlign: "left",
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
              Insight Exchange
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="#797979"
            marginTop="-10px"
          >
            Stay on top of your assignments and
            deadlines.
          </Typography>
          <Typography
            variant="body1"
            color="#797979"
            marginTop="80px"
          >
            Efficiently manage your workload with
            our task management tool. Set
            deadlines, create to-do lists, and get
            reminders to ensure you never miss a
            due date. Stay organized and keep
            track of your progress to achieve your
            academic goals with ease.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        data-aos="fade-up-right"
      >
        <img
          style={{
            width: "100%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
          src="/images/task.jpg"
          alt="Smart Task Organizer"
        />
      </Grid>
    </Grid>
  );
};

export default Task;
