import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import AlertBox from "../../components/common/AlertBox";

export default function NavBar() {
  const cookie = Cookies.get(
    import.meta.env.VITE_COOKIE_KEY
  );
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffffffff",
          borderBottom: "1px solid #59e3a7",
          padding: "20px 0",
        }}
        elevation={0}
      >
        <Toolbar>
          <Box
            sx={{
              maxWidth: "1280px",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    gap: "10px",
                  }}
                >
                  <img
                    src="./images/favicon.ico"
                    width="55"
                    alt="Thinkify"
                  />
                  <Typography
                    sx={{
                      fontFamily: "Platypi",
                      color: "#1b2e35",
                    }}
                    variant="h3"
                    component="h3"
                  >
                    Thinkify
                  </Typography>
                </Box>
              </Link>
              {/* Only show Join/Login if not logged in */}
              {!cookie && (
                <Box>
                  <ButtonGroup
                    sx={{
                      gap: 2,
                      background: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <Link
                      to="/registration"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        sx={{
                          background:
                            "linear-gradient(90deg, #59e3a7 0%, #1b2e35 100%)",
                          color: "#fff",
                          fontWeight: 700,
                          borderRadius: "30px",
                          px: 5,
                          py: 1.5,
                          minWidth: 120,
                          border:
                            "1.5px solid #59e3a7",
                          boxShadow:
                            "0 4px 16px 0 rgba(89,227,167,0.10)",
                          textTransform:
                            "uppercase",
                          letterSpacing: 1,
                          fontSize: "1rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          transition: "all 0.2s",
                          "&:hover": {
                            background:
                              "linear-gradient(90deg, #1b2e35 0%, #59e3a7 100%)",
                            color: "#fff",
                            boxShadow:
                              "0 6px 24px 0 rgba(27,46,53,0.18)",
                            border:
                              "1.5px solid #1b2e35",
                          },
                        }}
                        startIcon={
                          <span
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.2em",
                            }}
                          >
                            +
                          </span>
                        }
                      >
                        Join
                      </Button>
                    </Link>
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        sx={{
                          background:
                            "linear-gradient(90deg, #1b2e35 0%, #59e3a7 100%)",
                          color: "#fff",
                          fontWeight: 700,
                          borderRadius: "30px",
                          px: 4,
                          py: 1.5,
                          minWidth: 120,
                          border:
                            "1.5px solid #59e3a7",
                          boxShadow:
                            "0 4px 16px 0 rgba(27,46,53,0.10)",
                          textTransform:
                            "uppercase",
                          letterSpacing: 1,
                          fontSize: "1rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          transition: "all 0.2s",
                          "&:hover": {
                            background:
                              "linear-gradient(90deg, #59e3a7 0%, #1b2e35 100%)",
                            color: "#fff",
                            boxShadow:
                              "0 6px 24px 0 rgba(89,227,167,0.18)",
                            border:
                              "1.5px solid #1b2e35",
                          },
                        }}
                        startIcon={
                          <span
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.2em",
                            }}
                          >
                            &#128274;
                          </span>
                        }
                      >
                        Login
                      </Button>
                    </Link>
                  </ButtonGroup>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AlertBox />
    </Box>
  );
}
