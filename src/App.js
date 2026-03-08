import Login from './login_page/Login';
import UserLogin from './login_page/UserLogin';
import AdminLogin from './login_page/AdminLogin';
import QuestionnaireOne from './questionnaire_page/QuestionnaireOne';
import QuestionnaireTwo from './questionnaire_page/QuestionnaireTwo';
import QuestionnaireThree from './questionnaire_page/QuestionnaireThree';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>        
        <Route path="/" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/questionnaire-one" element={<QuestionnaireOne />} />
        <Route path="/questionnaire-two" element={<QuestionnaireTwo />} />
        <Route path="/questionnaire-three" element={<QuestionnaireThree />} />
      </Routes>
    </div>
  );
}

export default App;
