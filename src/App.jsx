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
import { paths } from './config/paths';
import { PrivateRoute } from './config/PrivateRoute';

export const App = () => {
  return (
    <Theme>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.login} element={<LoginPage />} />
        <Route path={paths.signUp} element={<SignupPage />} />
        <Route path={paths.aboutUs} element={<AboutUsPage />} />
        <Route path={paths.contact} element={<ContactPage />} />

        <PrivateRoute path={paths.addPet} element={<UserAddPet />} />
        <PrivateRoute path={paths.addVisit} element={<UserAddVisit />} />
        <PrivateRoute path={paths.editProfile} element={<UserEditProfile />} />
        <PrivateRoute path={paths.myPets} element={<UserMyPets />} />
        <PrivateRoute path={paths.myVisits} element={<UserMyVisits />} />

        <Route path={paths.doctorCalender} element={<DoctorCalender />} />
        <Route path={paths.doctorVisit} element={<DoctorVisit />} />
      </Routes>
    </Theme>
  );
};
