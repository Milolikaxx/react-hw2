import { Card, CardMedia, CardContent, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Container, Box } from "@mui/system";
import movies from "../../jsons/movies.json";
import person from "../../jsons/person.json";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container sx={{ width: "80vw" }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"start"}
      >
        <Box display={"flex"} flexDirection={"row"} marginTop={"70px"}>
          <h2 style={{ color: "#F5c518" }}>|</h2>
          &nbsp; &nbsp;
          <h2>Top 10 on IMDb this week</h2>
        </Box>
        <Box display="flex" flexDirection="row" gap={4}>
          {movies.map((movie) => (
            <Box>
              <Card
                style={{
                  flex: 1,
                  backgroundColor: "#191919",
                  color: "white",
                }}
                sx={{
                  width: "200px",
                  height: "425px",
                }}
              >
                <CardMedia
                  onClick={() => {
                    navigate(`/movie/${movie.id}`);
                  }}
                  sx={{ height: "60%", objectFit: "cover" }}
                  image={movie.img}
                />
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <StarIcon
                      style={{
                        fontSize: "18px",
                        color: "yellow",
                        marginRight: 5,
                      }}
                    />
                    {movie.rating}
                    <Button>
                      <StarBorderIcon style={{ fontSize: "18px" }} />
                    </Button>
                  </div>
                  <div
                    onClick={() => {
                      navigate(`/movie/${movie.id}`);
                    }}
                  >
                    <a>
                      {movie.name.length > 11
                        ? movie.name.slice(0, 11).concat("...")
                        : movie.name}
                    </a>
                  </div>
                </CardContent>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <div>
                    <Button
                      variant="contained"
                      color="inherit"
                      style={{
                        color: "#00A9FF",
                        background: "#3D3B40",
                      }}
                    >
                      + Watchlist
                    </Button>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      // justifyContent: "space-around",
                    }}
                  >
                    <Button style={{ color: "white" }}>
                      <PlayArrowIcon />
                      <div>Trailer</div>
                    </Button>
                  </div>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{ justifyContent: "st", alignItems: "center" }}
          >
            <h2 style={{ color: "#F5c518" }}>|</h2>
            &nbsp; &nbsp;
            <h2>Born today</h2>
            &nbsp;
            <ArrowForwardIosIcon />
          </Box>
          <div style={{ marginTop: -10, color: "gray" }}>
            People born on December 11
          </div>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"row"} gap={4}>
        {person.slice(0, 6).map((p) => (
          <Box
            marginTop={3}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src={p.img}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              onClick={() => {
                navigate(`/person/${p.name}`);
              }}
            ></img>
            <div
              className="line"
              onClick={() => {
                navigate(`/person/${p.name}`);
              }}
              style={{ marginTop: 10 }}
            >
              {p.name}
            </div>
            <div style={{ marginTop: 5 }}>{p.age}</div>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default HomePage;
