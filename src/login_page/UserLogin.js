import { Container, Typography, Card, CardMedia, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate } from "react-router-dom";


function UserLogin(){
    const navigate = useNavigate();
    return(
        <>
        <Container>
            <Typography variant="h3">What are you trying to achieve?</Typography>

            <div>
                <Card sx={{ width: 50, height: 100}}>
                    <div>
                        <IconButton onClick={() => navigate("/questionnaire-one")}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                    <Typography variant="subtitle2">Product 1</Typography>
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