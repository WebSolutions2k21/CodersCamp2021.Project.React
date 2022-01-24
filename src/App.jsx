import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  SignupPage,
  AboutUsPage,
  ContactPage,
  UserAddPet,
  UserAddVisit,
  UserEditProfile,
  UserMyPets,
  UserMyVisits,
  DoctorCalender,
  DoctorVisit,
} from './pages';
import Theme from './styles/themes/Theme';

export const App = () => {
  return (
    <Theme>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignupPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/Contact" element={<ContactPage />} />

        <Route path="/add-pet" element={<UserAddPet />} />
        <Route path="/add-visit" element={<UserAddVisit />} />
        <Route path="/edit-profile" element={<UserEditProfile />} />
        <Route path="/mypets" element={<UserMyPets />} />
        <Route path="/myvisits" element={<UserMyVisits />} />

        <Route path="/doctor-calender" element={<DoctorCalender />} />
        <Route path="/doctor-visit" element={<DoctorVisit />} />
      </Routes>
    </Theme>
  );
};
