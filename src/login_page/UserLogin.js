import { Container, Typography, Card, CardMedia, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import Header from "../header_footer/Header";
import Footer from "../header_footer/Footer";

function UserLogin(){
    const navigate = useNavigate();
    return(
        <>
        <Header />

        <Container>
            <Typography variant="h3">What are you trying to achieve?</Typography>

            <div>
                <Card sx={{ width: 50, height: 100}}>
                    <Typography variant="subtitle2">Semaglutide</Typography>
                    <div>
                        <IconButton onClick={() => navigate("/questionnaire-one")}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                    <CardMedia
                    component="img"
                    image="/image.jpg"
                    sx={{ width: 50, height: 100}}
                    alt="Semaglutide"/>
                </Card>

                <Card sx={{ width: 50, height: 100}}>
                    <Typography variant="subtitle2">NAD-Injection</Typography>
                    <div>
                        <IconButton onClick={() => navigate("/questionnaire-two")}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                    <CardMedia
                    component="img"
                    image="/image.jpg"
                    sx={{ width: 50, height: 100}}
                    alt="NAD-Injection"/>
                </Card>

                <Card sx={{ width: 50, height: 100}}>
                    <Typography variant="subtitle2">Metformin</Typography>
                    <div>
                        <IconButton onClick={() => navigate("/questionnaire-three")}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                    <CardMedia
                    component="img"
                    image="/image.jpg"
                    sx={{ width: 50, height: 100}}
                    alt="Metformin"/>
                </Card>       
            </div>
        </Container>

        <Footer />
        </>
    );
}   
export default UserLogin;