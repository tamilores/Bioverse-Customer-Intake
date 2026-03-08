import Footer from '../header_footer/Footer';
import Header from '../header_footer/Header';
import QuestionOne from './questions/QuestionOne';
import QuestionTwo from './questions/QuestionTwo';
import QuestionFour from './questions/QuestionFour';
import { Button } from '@mui/material';

function QuestionnaireOne(){
    return(
        <>
        <Header />

        <div>
            <QuestionOne />
        </div>

        <div>
            <QuestionTwo />
        </div>

        <div>
            <QuestionFour />
        </div>

        <Button variant="contained">Submit</Button>

        <Footer />
        </>
    );
}

export default QuestionnaireOne;