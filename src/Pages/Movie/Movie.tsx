import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import movies from "../../jsons/movies.json";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Divider, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function MoviePage() {
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const fav = searchParams.get("fav");

  function navigateToHome() {
    navigate("/");
  }

  const { id } = useParams();
  const movie = movies.find(
    (movie: { id: number | undefined }) => movie.id == id
  );
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
            justifyContent: "flex-start",
            marginRight: 138,
          }}
        >
          <Button
            startIcon={<ArrowBackIosNewRoundedIcon />}
            onClick={navigateToHome}
            sx={{ marginTop: 0, fontSize: 25, color: "#F5c518" }}
          >
            Back
          </Button>
        </Box>
        <Card
          sx={{
            width: 1200,
            height: 900,
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
                <h1>{movie?.name}</h1>
                <h5 style={{ marginTop: -10, color: "gray" }}>
                  {movie?.year} • {movie?.rate} • {movie?.time}
                </h5>
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
                    border: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{
                      color: "gray",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    IMDb RATING
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      border: 1,
                    }}
                  >
                    {" "}
                    <Button>
                      <StarRoundedIcon
                        sx={{ fontSize: 40, color: "#F5c518" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "start",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Typography
                            variant="h6"
                            color="initial"
                            sx={{ fontWeight: "bold" }}
                          >
                            {movie?.rating}
                          </Typography>
                          <Typography variant="button" color="initial">
                            /10
                          </Typography>
                        </Box>

                        <Typography variant="caption" color="initial">
                          {movie?.vote}
                        </Typography>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                    marginLeft: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{ color: "gray", fontWeight: "bold" }}
                  >
                    YOUR RATING
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      border: 1,
                    }}
                  >
                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <StarOutlineRoundedIcon
                        sx={{ fontSize: 30, color: "#00A9FF" }}
                      />
                      <Typography
                        variant="h6"
                        color="#00A9FF"
                        sx={{ fontWeight: "bold" }}
                      >
                        Rate
                      </Typography>
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                    marginLeft: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{ color: "gray", fontWeight: "bold" }}
                  >
                    POPULARITY
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      border: 1,
                    }}
                  >
                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TrendingUpIcon sx={{ fontSize: 30, color: "green" }} />
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{ fontWeight: "bold", marginLeft: 1 }}
                      >
                        60
                      </Typography>
                    </Button>
                  </Box>
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
              <img width={260} height={360} src={movie?.img} />
            </Box>
            <Box>
              <iframe
                width="700"
                height="360"
                src={movie?.video}
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
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
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
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                }}
              >
                <PhotoLibraryIcon sx={{ fontSize: 48, marginBottom: 1 }} />
                <h5 style={{ margin: 0 }}>Photo</h5>
              </Card>
            </Grid>
          </CardContent>
          <CardContent sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                marginTop: -2,
                marginRight: 1,
                borderRadius: "50px",
                borderColor: "white",
                color: "white",
              }}
            >
              {movie?.genre[0]}
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginTop: -2,
                marginRight: 1,
                borderRadius: "50px",
                borderColor: "white",
                color: "white",
              }}
            >
              {movie?.genre[1]}
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginTop: -2,
                marginRight: 1,
                borderRadius: "50px",
                borderColor: "white",
                color: "white",
              }}
            >
              {movie?.genre[2]}
            </Button>
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
              {movie?.details}
              <Divider
                sx={{ width: "100%", marginTop: 3, backgroundColor: "grey" }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "row", marginTop: -1 }}
              >
                <h4 style={{ marginRight: 20 }}>Director</h4>
                {movie?.director.map((director, idx) => (
                  <>
                    <h4
                      className="line"
                      style={{
                        color: "#00A9FF",
                        marginRight: 10,
                      }}
                      onClick={() => {
                        navigate(`/person/${director}`);
                      }}
                    >
                      {director}
                    </h4>
                    <h4
                      style={{
                        color: "#00A9FF",
                        marginRight: 10,
                      }}
                      onClick={() => {
                        navigate(`/person/${director}`);
                      }}
                    >
                      {idx < movie?.director.length - 1 && " •"}
                    </h4>
                  </>
                ))}
              </Box>
              <Divider
                sx={{ width: "100%", marginTop: -1, backgroundColor: "grey" }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "row", marginTop: -1 }}
              >
                <h4 style={{ marginRight: 20 }}>Writer</h4>
                {movie?.writers.map((writer, idx) => (
                  <>
                    <h4
                      className="line"
                      style={{
                        color: "#00A9FF",
                        marginRight: 10,
                      }}
                      onClick={() => {
                        navigate(`/person/${writer}`);
                      }}
                    >
                      {writer}
                    </h4>
                    <h4
                      style={{
                        color: "#00A9FF",
                        marginRight: 10,
                      }}
                      onClick={() => {
                        navigate(`/person/${writer}`);
                      }}
                    >
                      {idx < movie?.writers.length - 1 && " •"}
                    </h4>
                  </>
                ))}
              </Box>
              <Divider
                sx={{ width: "100%", marginTop: -1, backgroundColor: "grey" }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "row", marginTop: -1 }}
              >
                <h4 style={{ marginRight: 20 }}>Stars</h4>
                {movie?.stars.map((star, idx) => (
                  <>
                    <h4
                      className="line"
                      style={{
                        color: "#00A9FF",
                        marginRight: 10,
                      }}
                      onClick={() => {
                        navigate(`/person/${star}`);
                      }}
                    >
                      {star}
                    </h4>
                    <h4
                      style={{
                        color: "#00A9FF",
                        marginRight: 10,
                      }}
                      onClick={() => {
                        navigate(`/person/${star}`);
                      }}
                    >
                      {idx < movie?.stars.length - 1 && " •"}
                    </h4>
                  </>
                ))}
              </Box>
              <Divider
                sx={{ width: "100%", marginTop: -1, backgroundColor: "grey" }}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 8 }}>
              <Button
                variant="contained"
                sx={{
                  borderEndEndRadius: 0,
                  borderStartEndRadius: 0,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  width: 350,
                  height: 50,
                  marginTop: -2,
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
                  <Typography variant="inherit"> Add To Watchlist</Typography>
                  <Typography variant="caption">
                    Added by {movie?.vote} users
                  </Typography>
                </div>
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderStartStartRadius: 0,
                  borderEndStartRadius: 0,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: 10,
                  height: 50,
                  marginTop: -2,
                  backgroundColor: "#F5c518",
                  color: "black",
                }}
              >
                <ExpandMoreIcon />
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default MoviePage;
