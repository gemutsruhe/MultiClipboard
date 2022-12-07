import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import './Popup.css';

import { useBoardStore } from '../Content/modules/zustand';

const Popup = () => {
  const clipboard1 = useBoardStore((state) => state.clipboard1);
  const clipboard2 = useBoardStore((state) => state.clipboard2);
  const clipboard3 = useBoardStore((state) => state.clipboard3);
  const clipboard4 = useBoardStore((state) => state.clipboard4);
  const clipboard5 = useBoardStore((state) => state.clipboard5);

  // const initClipboards = useBoardStore((state) => state.initClipboards);
  const clearClipboards = useBoardStore((state) => state.clearClipboards);
  const setClipboard1 = useBoardStore((state) => state.setClipboard1);
  const setClipboard2 = useBoardStore((state) => state.setClipboard2);
  const setClipboard3 = useBoardStore((state) => state.setClipboard3);
  const setClipboard4 = useBoardStore((state) => state.setClipboard4);
  const setClipboard5 = useBoardStore((state) => state.setClipboard5);

  const storage = useBoardStore((state) => state.storage);

  useEffect(() => { }, [clipboard1]);

  return (
    <div className="App">
      <Box
        sx={{
          boxSizing: 'border-box',
          border: 1,
          minHeight: '500px',
          minWidth: '350px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack
          spacing={2}
          sx={{
            width: '300px',
            mt: '16px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
            }}
          >
            멀티클립보드
          </Typography>
          <TextField
            id="c1"
            name="c1"
            label="클립보드 1"
            value={clipboard1}
            onChange={(e) => {
              setClipboard1(e.target.value);
            }}
          />
          {/* <TextField
            id="c2"
            name="c2"
            label="클립보드 2"
            value={clipboard2}
            onChange={(e) => {
              setClipboard2(e.target.value);
            }}
          />
          <TextField
            id="c3"
            name="c3"
            label="클립보드 3"
            value={clipboard3}
            onChange={(e) => {
              setClipboard3(e.target.value);
            }}
          />
          <TextField
            id="c4"
            name="c4"
            label="클립보드 4"
            value={clipboard4}
            onChange={(e) => {
              setClipboard4(e.target.value);
            }}
          />
          <TextField
            id="c5"
            name="c5"
            label="클립보드 5"
            value={clipboard5}
            onChange={(e) => {
              setClipboard5(e.target.value);
            }}
          /> */}
          <Button
            variant="contained"
            sx={{ width: '100px', height: '30px' }}
            onClick={clearClipboards}
          >
            초기화
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Popup;
