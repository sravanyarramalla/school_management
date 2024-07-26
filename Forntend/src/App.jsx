import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./Pages/Dashboard";
import TeachersDashboard from "./features/Dashboard/TeachersDashboard";
import StudentsDashboard from "./features/Dashboard/StudentsDashboard";

import Teachers from "./Pages/Teachers";
import AllTeachers from "./features/Teachers/AllTeachers";
import AddTeachers from "./features/Teachers/AddTeachers";
import EditTeachers from "./features/Teachers/EditTeachers";
import TeachersProfile from "./features/Teachers/TeachersProfile";

import Students from "./Pages/Students";
import AllStudents from "./features/Students/AllStudents";
import AddStudents from "./features/Students/AddStudents";
import EditStudents from "./features/Students/EditStudents";
import StudentsProfile from "./features/Students/StudentsProfile";

import Library from "./Pages/Library";
import AllLibrary from "./features/Library/AllLibrary";
import AddLibrary from "./features/Library/AddLibrary";
import EditLibrary from "./features/Library/EditLibrary";

import Department from "./Pages/Department";
import AllDepartment from "./features/Department/AllDepartment";
import AddDepartment from "./features/Department/AddDepartment";
import EditDepartment from "./features/Department/EditDepartment";

import Staff from "./Pages/Staff";
import AllStaff from "./features/Staff/AllStaff";
import AddStaff from "./features/Staff/AddStaff";
import EditStaff from "./features/Staff/EditStaff";
import StaffProfile from "./features/Staff/StaffProfile";
import ListView from "./features/Teachers/TeachersListView";

import HoliDays from "./Pages/HoliDays";
import AllHolidays from "./features/Holidays/AllHolidays";
import AddHolidays from "./features/Holidays/AddHolidays";
import EditHolidays from "./features/Holidays/EditHolidays";

import Fees from "./Pages/Fees";
import AllFees from "./features/Fees/AllFees";
import AddFees from "./features/Fees/AddFees";
import EditFees from "./features/Fees/EditFees";

import GridView from "./features/Students/StudentsGridView";
import Forgot from "./features/Header/Forgot";
import Profile from "./features/Header/Profile";

import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Ui/AppLayout";
import StudentsListView from "./features/Students/StudentsListView";
import TeachersListView from "./features/Teachers/TeachersListView";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Navigate replace to="teachersdashboard" />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="teachersdashboard" element={<TeachersDashboard />} />
            <Route path="studentsdashboard" element={<StudentsDashboard />} />

            <Route path="teachers" element={<Teachers />} />
            <Route path="allteachers" element={<AllTeachers />} />
            <Route path="addteachers" element={<AddTeachers />} />
            <Route path="editteachers/:id" element={<AddTeachers />} />
            <Route path="editteachers" element={<EditTeachers />} />
            <Route path="teachersprofile" element={<TeachersProfile />} />
            <Route path="studentslistview" element={<TeachersListView />} />

            <Route path="students" element={<Students />} />
            <Route path="allstudents" element={<AllStudents />} />
            <Route path="addstudents" element={<AddStudents />} />
            <Route path="editstudents/:id" element={<AddStudents />} />
            <Route path="editstudents" element={<EditStudents />} />
            <Route path="studentsprofile" element={<StudentsProfile />} />
            <Route path="studentslistview" element={<StudentsListView />} />

            <Route path="library" element={<Library />} />
            <Route path="alllibrary" element={<AllLibrary />} />
            <Route path="addlibrary" element={<AddLibrary />} />
            <Route path="editlibrary/:id" element={<AddLibrary />} />
            <Route path="editlibrary" element={<EditLibrary />} />

            <Route path="department" element={<Department />} />
            <Route path="alldepartment" element={<AllDepartment />} />
            <Route path="adddepartment" element={<AddDepartment />} />
            <Route path="editdepartment/:id" element={<AddDepartment />} />
            <Route path="editdepartment" element={<EditDepartment />} />
            <Route path="listview" element={<ListView />} />

            <Route path="staff" element={<Staff />} />
            <Route path="allstaff" element={<AllStaff />} />
            <Route path="addstaff" element={<AddStaff />} />
            <Route path="editstaff/:id" element={<AddStaff />} />
            <Route path="editstaff" element={<EditStaff />} />
            <Route path="staffprofile" element={<StaffProfile />} />
            <Route path="listview" element={<ListView />} />

            <Route path="holidays" element={<HoliDays />} />
            <Route path="allholidays" element={<AllHolidays />} />
            <Route path="addholidays" element={<AddHolidays />} />
            <Route path="editholidays/:id" element={<AddHolidays />} />
            <Route path="editholidays" element={<EditHolidays />} />

            <Route path="gridview" element={<GridView />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="profile" element={<Profile />} />

            <Route path="fees" element={<Fees />} />
            <Route path="allfees" element={<AllFees />} />
            <Route path="addfees" element={<AddFees />} />
            <Route path="editfees/:id" element={<AddFees />} />
            <Route path="editfees" element={<EditFees />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
