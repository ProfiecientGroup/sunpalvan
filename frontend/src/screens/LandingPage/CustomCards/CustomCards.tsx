import { Box, Container, Stack, Typography } from "@mui/material";
import cardImg from "../../../assets/icons/landingPage/cardImg.svg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import landingPageStyles from "../LandingPage.styles";

const cardDetails = [
  {
    header: "Top  Stories",
    tab: "Latest",
    cardDetail: [
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
    ],
  },
  {
    header: "Top  Stories",
    tab: "Latest",
    cardDetail: [
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
    ],
  },
  {
    header: "Top  Stories",
    tab: "Latest",
    cardDetail: [
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
    ],
  },
  {
    header: "Top  Stories",
    tab: "Latest",
    cardDetail: [
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
      {
        title: "The overlooked benefits of real Christmas trees",
        description: "The overlooked benefits of real Christmas trees",
        date: "1 June, 2023",
      },
    ],
  },
];

const customCards = () => {
  const homeClasses = landingPageStyles;
  return (
    <>
      {cardDetails.map((cards: any) => {
        return (
          <Box mt={15}>
            <Container maxWidth="lg">
              <Box>
                <Stack direction={{ lg: "row" }} alignItems="center" mb={5}>
                  <Box sx={homeClasses.cardMainContain}>
                    <Typography sx={homeClasses.memberText}>
                      {cards.header}
                    </Typography>
                    <Box sx={homeClasses.tabBtn}>
                      <Typography sx={homeClasses.tabBtnText}>
                        {cards.tab}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={homeClasses.viewBtn}>
                    <Typography sx={homeClasses.viewBtnText}>
                      View All
                    </Typography>
                    <KeyboardDoubleArrowRightIcon />
                  </Box>
                </Stack>
                <Stack direction={{ lg: "row" }} spacing={2}>
                  {cards.cardDetail.map((item: any) => {
                    return (
                      <Box sx={homeClasses.cardsInner}>
                        <img src={cardImg} style={homeClasses.img} />
                        <Stack sx={{ padding: 2 }} spacing={2}>
                          <Box sx={homeClasses.cardsInnerTitle}>
                            <Typography sx={homeClasses.cardsInnerTileText}>
                              {item.title}
                            </Typography>
                            <MoreVertIcon />
                          </Box>
                          <Typography sx={homeClasses.cardsInnerDes}>
                            {item.description}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                            }}
                          >
                            <Typography sx={homeClasses.cardsInnerDate}>
                              {item.date}
                            </Typography>
                            <Box sx={homeClasses.readMoreBtn}>
                              <Typography sx={homeClasses.readMoreBtnText}>
                                Read More
                              </Typography>
                            </Box>
                          </Box>
                        </Stack>
                      </Box>
                    );
                  })}
                </Stack>
              </Box>
            </Container>
          </Box>
        );
      })}
    </>
  );
};

export default customCards;
