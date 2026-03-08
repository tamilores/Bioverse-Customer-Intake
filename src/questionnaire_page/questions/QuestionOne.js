import {Checkbox, FormGroup, FormControlLabel, Typography} from "@mui/material";

function QuestionOne(){
    return(
        <FormGroup>
            <Typography variant="h6">Why are you interested in this product? Select all that apply.</Typography>
            <FormControlLabel control={<Checkbox />} label="Improve blood pressure" />
            <FormControlLabel control={<Checkbox />} label="Reduce risk of future cardiac events" />
            <FormControlLabel control={<Checkbox />} label="Support lifestyle changes" />
            <FormControlLabel control={<Checkbox />} label="Longevity benefits" />        
        </FormGroup>
    );
}

export default QuestionOne;