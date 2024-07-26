import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  position: fixed;
  width: 100%;
  overflow: auto;
  padding-top: 3.5%;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-left: 4rem;
`;

const Img = styled.img`
  max-width: 40%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  margin-top: -10%;
`;

const Input = styled.input`
  border: none;
  border-radius: 65px;
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  box-shadow: var(--shadow-sm);
  padding: 1% 5%;
  padding-left: 3rem;
  width: 25%;
  margin-left: 21%;
`;

const Div = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 4%;
`;

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

const Div1 = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Heading1 = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  margin-top: -9%;
`;

const Label = styled.label`
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
  margin-left: 9%;
`;

const Input1 = styled.input`
  border: none;
  border-radius: 65px;
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  box-shadow: var(--shadow-sm);
  padding: 4% 5%;
  padding-left: 3rem;
  width: 90%;
  margin-bottom: 1rem;
  font-size: 1rem;
  margin-left: 5%;
  autocomplete: "off";
`;

const Input2 = styled.input`
  border: none;
  border-radius: 65px;
  background-color: var(--color-grey-200);
  color: var(--color-grey-900);
  box-shadow: var(--shadow-sm);
  padding: 4% 5%;
  padding-left: 3rem;
  width: 90%;
  margin-bottom: 1rem;
  font-size: 1rem;
  margin-left: 5%;
  autocomplete: "off";
`;

const ShowPass = styled.span`
  position: absolute;
  right: 1rem;
  top: 59%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: x-small;
  margin-right: 10%;
`;

const Span = styled.span`
  font-size: x-small;
`;

const ForgotPasswordLink = styled.a`
  display: block;
  text-align: right;
  margin-top: 1rem;
  font-size: x-small;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  margin-top: -8%;
  margin-right: 9%;
  margin-bottom: 7%;
`;

const Button1 = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-500);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin: 4px;
  margin-top: 15px;
  width: 26%;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const Button2 = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-500);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  margin: 4px;
  margin-left: 40%;
  margin-top: 15px;
  width: 26%;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

function Header() {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpen(true);
    handleClose();
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();

    navigate("/teachersdashboard");
  };

  const handleProfileClick = () => {
    navigate("/profile");
    handleClose();
  };

  return (
    <StyledHeader>
      <form>
        <SearchContainer>
          <SearchOutlinedIcon
            sx={{
              fontSize: 20,
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--color-grey-900)",
            }}
          />
          <Input
            type="text"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContainer>
      </form>
      <Div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle color="primary" sx={{ fontSize: 35 }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
          <MenuItem onClick={handleOpenModal}>Log In</MenuItem>
        </Menu>
        <Modal open={open} onClose={handleCloseModal}>
          <ModalBox>
            <Div1>
              <Img src="/schoolLogo.png" alt="School Logo" />
              <Heading1>Sign in to your account</Heading1>
            </Div1>
            <form onSubmit={handleSubmit}>
              <div>
                <Label>Username</Label>
                <Input1 type="email" placeholder="Username" required />
              </div>
              <div style={{ position: "relative" }}>
                <Label>Password</Label>
                <Input2
                  type={showPassword ? "text" : "password"}
                  id="dlabPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <ShowPass onClick={toggleShowPassword}>
                  {showPassword ? "Hide" : "Show"}
                </ShowPass>
              </div>
              <div>
                <Checkbox />
                <Span>Remember my preference</Span>
                <ForgotPasswordLink
                  href="/forgot"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </ForgotPasswordLink>
              </div>
              <Button1 type="submit">Log In</Button1>
              <Button2 onClick={handleCloseModal} variant="outlined">
                Cancel
              </Button2>
            </form>
          </ModalBox>
        </Modal>
      </Div>
    </StyledHeader>
  );
}

export default Header;
