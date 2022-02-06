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
  NotFound,
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

        <Route
          path={paths.addPet}
          element={
            <PrivateRoute>
              <UserAddPet />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.addVisit}
          element={
            <PrivateRoute>
              <UserAddVisit />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.editProfile}
          element={
            <PrivateRoute>
              <UserEditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.myPets}
          element={
            <PrivateRoute>
              <UserMyPets />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.myVisits}
          element={
            <PrivateRoute>
              <UserMyVisits />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.doctorCalender}
          element={
            <PrivateRoute>
              <DoctorCalender />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.doctorVisit}
          element={
            <PrivateRoute>
              <DoctorVisit />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Theme>
  );
};
