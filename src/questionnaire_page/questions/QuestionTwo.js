import {FormGroup, Typography, TextField} from "@mui/material";


function QuestionTwo(){
    return(
        <FormGroup>
            <Typography variant="h6">Tell us anything else you’d like your provider to know when prescribing your medication.</Typography>
            <TextField id="outlined-basic" label="Answer Here" variant="outlined" />
        </FormGroup>
    );
}

export default QuestionTwo;
