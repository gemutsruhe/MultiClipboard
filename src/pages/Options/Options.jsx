import React from 'react';
import './Options.css';
import { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";

import { userStore } from '../Content/modules/zustand';

const Options = ({ title }) => {

  console.log(userStore())

  const isLogin = userStore((state) => state.isLogin);
  const userID = userStore((state) => state.id);
  const userPW = userStore((state) => state.pw);
  const setID = userStore((state) => state.setID);
  const setPW = userStore((state) => state.setPW);
  const initToken = userStore((state) => state.initToken);
  const getToken = userStore((state) => state.getToken);
  const errorMsg = userStore((state) => state.errorMsg);

  useEffect(() => {
    initToken();
  },[])

  return <div className="OptionsContainer">
  <Box
    sx={{
      boxSizing: "border-box",
      border: 1,
      minHeight: "500px",
      minWidth: "350px",
      display: "flex",
      justifyContent: "center",
    }}>
      <Stack sx ={{
        mt : "15px",
        width : "300px",
        display : "flex",
        alignItems : "center",
      }} spacing = {2}>
            <Typography
              variant = "h5"
              sx={{
                fontWeight : "bold"
              }}
            >
              설정
            </Typography>
        {
          !isLogin ?
          <>
          <TextField
              id="userID"
              name="userID"
              label="아이디"
              value={userID}
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
            <TextField
              id="userPW"
              name="userPW"
              label="비밀번호"
              value={userPW}
              onChange={(e) => {
                setPW(e.target.value);
              }}
            />
            <Typography
              sx={{
                color : "red"
              }}
            >
              {errorMsg}
            </Typography>
            <Stack direction ="row" spacing = {1}>           
             <Button variant = "outlined" onClick ={getToken}>
              로그인
            </Button>
            <Button variant = "contained">
              회원가입
            </Button></Stack>
          </>
          :
          <>
            <Button variant = "outlined">
              로그아웃
            </Button>
          </>
        }
            

      </Stack>
    </Box>
  </div>;
};

export default Options;
