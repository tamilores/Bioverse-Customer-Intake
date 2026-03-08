import { Container, Typography, Card, CardMedia, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import Header from "../header_footer/Header";

function UserLogin(){
    const navigate = useNavigate();
    return(
        <>
        <Header />
        <Container>
            <Typography variant="h3">What are you trying to achieve?</Typography>

            <div>
                <Card sx={{ width: 50, height: 100}}>
                    <Typography variant="subtitle2">Product 1</Typography>
                    <div>
                        <IconButton onClick={() => navigate("/questionnaire-one")}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                    <CardMedia
                    component="img"
                    image="/image.jpg"
                    sx={{ width: 50, height: 100}}
                    alt="Pasta dish"/>
                </Card>

                <Card sx={{ width: 50, height: 100}}>
                    <Typography variant="subtitle2">Product 2</Typography>
                    <div>
                        <IconButton onClick={() => navigate("/questionnaire-two")}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                    <CardMedia
                    component="img"
                    image="/image.jpg"
                    sx={{ width: 50, height: 100}}
                    alt="Pasta dish"/>
                </Card>

                <Card sx={{ width: 50, height: 100}}>
                    <Typography variant="subtitle2">Product 3</Typography>
                    <div>
                        <IconButton onClick={() => navigate("/questionnaire-three")}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                    <CardMedia
                    component="img"
                    image="/image.jpg"
                    sx={{ width: 50, height: 100}}
                    alt="Pasta dish"/>
                </Card>       
            </div>
        </Container>
        </>
    );
}   
export default UserLogin;