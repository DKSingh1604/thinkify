import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

const Test = () => {
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
              Practice Exams
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="#797979"
            marginTop="-10px"
          >
            Test your knowledge anytime, anywhere.
          </Typography>
          <Typography
            variant="body1"
            color="#797979"
            marginTop="80px"
          >
            Take advantage of our comprehensive
            online test system to assess your
            knowledge and track your progress.
            With a variety of practice exams and
            quizzes tailored to your curriculum,
            you can improve your skills and boost
            your confidence before the big test.
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
          src="/images/test.jpg"
          alt="Practice Exams"
        />
      </Grid>
    </Grid>
  );
};

export default Test;
