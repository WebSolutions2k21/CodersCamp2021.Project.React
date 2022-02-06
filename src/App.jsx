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
import { PublicRoute } from './config/PublicRoute';

export const App = () => {
  return (
    <Theme>
      <Routes>
        <Route
          path={paths.home}
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path={paths.login}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={paths.signUp}
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
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
