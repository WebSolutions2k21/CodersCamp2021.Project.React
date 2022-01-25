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

export const App = () => {
  return (
    <Theme>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.login} element={<LoginPage />} />
        <Route path={paths.signUp} element={<SignupPage />} />
        <Route path={paths.aboutUs} element={<AboutUsPage />} />
        <Route path={paths.contact} element={<ContactPage />} />

        <Route path={paths.addPet} element={<UserAddPet />} />
        <Route path={paths.addVisit} element={<UserAddVisit />} />
        <Route path={paths.editProfile} element={<UserEditProfile />} />
        <Route path={paths.myPets} element={<UserMyPets />} />
        <Route path={paths.myVisits} element={<UserMyVisits />} />

        <Route path={paths.doctorCalender} element={<DoctorCalender />} />
        <Route path={paths.doctorVisit} element={<DoctorVisit />} />
      </Routes>
    </Theme>
  );
};
