import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import { IoLibraryOutline } from "react-icons/io5";
import { LiaBuilding } from "react-icons/lia";
import { GoGift } from "react-icons/go";
import { MdAttachMoney } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  color: var(--color-grey-600);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 1.4rem;
  transition: all 0.3s;

  &:hover,
  &:active,
  &:active:link,
  &:active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-5m);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &:active:link,
  &:active:visited svg {
    color: var(--color-brand-600);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-5m);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg {
    color: var(--color-brand-600);
  }
`;

const DropdownContent = styled.ul`
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${DropdownContainer}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.li`
  &:hover {
    background-color: #f1f1f1;
  }
`;

function MainNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <NavList>
        <li>
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <HiOutlineHome />
              <span>Dashboard</span>
            </DropdownButton>
            <DropdownContent>
              <DropdownItem>
                <StyledLink to="/teachersdashboard">
                  <span>Teachers</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/studentsdashboard">
                  <span>Students</span>
                </StyledLink>
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </li>

        <li>
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <FiUser />
              <span>Teachers</span>
            </DropdownButton>
            <DropdownContent>
              <DropdownItem>
                <StyledLink to="/allteachers">
                  <span>All Teachers</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/addteachers">
                  <span>Add Teachers</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/editteachers">
                  <span>Edit Teachers</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/teachersprofile">
                  <span>Teachers Profile</span>
                </StyledLink>
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </li>

        <li>
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <HiOutlineUserGroup />
              <span>Students</span>
            </DropdownButton>
            <DropdownContent>
              <DropdownItem>
                <StyledLink to="/allstudents">
                  <span>All Students</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/addstudents">
                  <span>Add Students</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/editstudents">
                  <span>Edit Students</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/studentsprofile">
                  <span>Students Profile</span>
                </StyledLink>
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </li>

        <li>
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <IoLibraryOutline />
              <span>Library</span>
            </DropdownButton>
            <DropdownContent>
              <DropdownItem>
                <StyledLink to="/alllibrary">
                  <span>All Library</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/addlibrary">
                  <span>Add Library</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/editlibrary">
                  <span>Edit Library</span>
                </StyledLink>
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </li>

        <li>
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <LiaBuilding />
              <span>Department</span>
            </DropdownButton>
            <DropdownContent>
              <DropdownItem>
                <StyledLink to="/alldepartment">
                  <span>All Department</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/adddepartment">
                  <span>Add Department</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/editdepartment">
                  <span>Edit Department</span>
                </StyledLink>
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </li>

        <li>
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <HiOutlineUserGroup />
              <span>Staff</span>
            </DropdownButton>
            <DropdownContent>
              <DropdownItem>
                <StyledLink to="/allstaff">
                  <span>All Staff</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/addstaff">
                  <span>Add Staff</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/editstaff">
                  <span>Edit Staff</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/staffprofile">
                  <span>Staff Profile</span>
                </StyledLink>
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </li>

        <li>
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <GoGift />
              <span>HoliDays</span>
            </DropdownButton>
            <DropdownContent>
              <DropdownItem>
                <StyledLink to="/allholidays">
                  <span>All HoliDays</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/addholidays">
                  <span>Add HoliDays</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/editholidays">
                  <span>Edit Holidays</span>
                </StyledLink>
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </li>

        <li>
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <MdAttachMoney />
              <span>Fees</span>
            </DropdownButton>
            <DropdownContent>
              <DropdownItem>
                <StyledLink to="/allfees">
                  <span>All Fees</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/addfees">
                  <span>Add Fees</span>
                </StyledLink>
              </DropdownItem>
              <DropdownItem>
                <StyledLink to="/editfees">
                  <span>Edit Fees</span>
                </StyledLink>
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
