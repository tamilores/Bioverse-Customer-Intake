import {Checkbox, FormGroup, FormControlLabel, Typography} from "@mui/material";

function QuestionFour(){
    return(
        <FormGroup>
            <Typography variant="h6">Which of the following have you tried in the past? Select all that apply.</Typography>
            <FormControlLabel control={<Checkbox />} label="Keto or low carb" />
            <FormControlLabel control={<Checkbox />} label="Plant-based" />
            <FormControlLabel control={<Checkbox />} label="Macro or calorie counting" />
            <FormControlLabel control={<Checkbox />} label="Weight Watchers" />
            <FormControlLabel control={<Checkbox />} label="Noom" />
            <FormControlLabel control={<Checkbox />} label="Calibrate" />
            <FormControlLabel control={<Checkbox />} label="Found" />
            <FormControlLabel control={<Checkbox />} label="Alpha" />
            <FormControlLabel control={<Checkbox />} label="Push Health" />
        </FormGroup>
    );
}

export default QuestionFour;