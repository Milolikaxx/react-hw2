import {
  Button,
  Card,
  Typography,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import person from "../../jsons/person.json";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddIcon from "@mui/icons-material/Add";
import LaunchIcon from "@mui/icons-material/Launch";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
function PersonPage() {
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const fav = searchParams.get("fav");

  function navigateBack() {
    navigate(-1);
  }

  const { name } = useParams();
  const p = person.find((p: { name: string | undefined }) => p.name == name);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginRight: 138,
          }}
        >
          <Button
            startIcon={<ArrowBackIosNewRoundedIcon />}
            onClick={navigateBack}
            sx={{ marginTop: 0, fontSize: 25, color: "#F5c518" }}
          >
            Back
          </Button>
        </Box>
        <Card
          sx={{
            width: 1200,
            height: 800,
            marginTop: 2,
            backgroundColor: "black",
            color: "white",
            border: 1,
          }}
        >
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 0,
                border: 1,
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  marginTop: 0,
                }}
              >
                <h1>{p?.name}</h1>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    marginTop: -40,
                    marginRight: 5,
                  }}
                >
                  {p?.occupation.map((o, idx) => (
                    <>
                      <h5 style={{ color: "gray", marginRight: 10 }}>{o}</h5>
                      <h5 style={{ color: "gray", marginRight: 10 }}>
                        {idx < p?.occupation.length - 1 && "•"}
                      </h5>
                    </>
                  ))}
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  marginTop: 0,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: 1,
                  }}
                >
                  <Button>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                      }}
                    >
                      <Typography
                        variant="caption"
                        color="initial"
                        sx={{ fontWeight: "bold" }}
                      >
                        IMDbPro
                      </Typography>
                      <Typography variant="caption" color="initial">
                        Starmeter
                      </Typography>
                    </Box>
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: 1,
                  }}
                >
                  <Button>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "start",
                      }}
                    >
                      <TrendingUpIcon sx={{ fontSize: 30, color: "green" }} />
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{ fontWeight: "bold", marginLeft: 1 }}
                      >
                        500
                      </Typography>
                      <ArrowDropUpIcon sx={{ fontSize: 30, color: "green" }} />
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{ fontWeight: "bold", marginLeft: 1 }}
                      >
                        224
                      </Typography>
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 0,
            }}
          >
            <Box sx={{ marginRight: 1 }}>
              <img width={260} height={360} src={p?.img} />
            </Box>
            <Box>
              <iframe
                width="700"
                height="360"
                src={p?.video}
                title="YouTube video player"
                // FrameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Box>
            <Grid sx={{ marginLeft: 1 }}>
              <Card
                sx={{
                  width: 175,
                  height: 178,
                  marginBottom: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <VideoLibraryIcon sx={{ fontSize: 50, marginBottom: 1 }} />
                <h5 style={{ margin: 0 }}>Video</h5>
              </Card>
              <Card
                sx={{
                  width: 175,
                  height: 178,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PhotoLibraryIcon sx={{ fontSize: 48, marginBottom: 1 }} />
                <h5 style={{ margin: 0 }}>Photo</h5>
              </Card>
            </Grid>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 1,
              marginTop: -2,
            }}
          >
            <Box sx={{ marginRight: 5 }}>
              {p?.details}
              <Divider
                sx={{ width: "100%", marginTop: 3, backgroundColor: "grey" }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: -1,
                }}
              >
                <h4 style={{ marginRight: 10 }}>More at IMDbPro</h4>
                <h4 style={{ color: "#00A9FF", marginRight: 5 }}>
                  Contact info & Agent info
                </h4>
                <LaunchIcon style={{ color: "#00A9FF" }} />
              </Box>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", marginTop: 8 }}
            >
              <h4>Born {p?.born}</h4>
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  width: 350,
                  height: 50,
                  marginTop: -1,
                  backgroundColor: "#F5c518",
                  color: "black",
                }}
              >
                <AddIcon sx={{ marginRight: 1 }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                  }}
                >
                  <Typography variant="body1">Added to list</Typography>
                </div>
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default PersonPage;
