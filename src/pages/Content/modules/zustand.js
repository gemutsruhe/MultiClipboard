import create from 'zustand';
import axios from 'axios';

/* global chrome */

export const useBoardStore = create((set, get, _state) => ({
  clipboard1: localStorage.getItem('c1') || '',
  clipboard2: '',
  clipboard3: '',
  clipboard4: '',
  clipboard5: '',

  initClipboards: async () => {
    chrome.storage.local.get('c1').then((res) => {
      console.log('isitworked?', res.c1);
      set({
        clipboard1: res.data,
      });
    });
  },

  fetchClipboards: async (parmas) => {},

  clearClipboards: () => {
    set({
      clipboard1: '',
      clipboard2: '',
      clipboard3: '',
      clipboard4: '',
      clipboard5: '',
    });
    // chrome.storage.local.set({ c1: '' });
    // chrome.storage.local.set({ c2: '' });
    // chrome.storage.local.set({ c3: '' });
    // chrome.storage.local.set({ c4: '' });
    // chrome.storage.local.set({ c5: '' });

    localStorage.setItem('c1', '');
  },

  setClipboard1: (content) => {
    set(() => ({
      clipboard1: content,
    }));
    localStorage.setItem('c1', content);
  },
  setClipboard2: async (content) => {
    set({
      clipboard2: content,
    });
    const clipboard = get().clipboard2;
    chrome.storage.local.set({ c2: clipboard });
  },
  setClipboard3: async (content) => {
    set({
      clipboard3: content,
    });
    const clipboard = get().clipboard3;
    chrome.storage.local.set({ c3: clipboard });
  },
  setClipboard4: async (content) => {
    set({
      clipboard4: content,
    });
    const clipboard = get().clipboard4;
    chrome.storage.local.set({ c4: clipboard });
  },
  setClipboard5: async (content) => {
    set({
      clipboard5: content,
    });
    const clipboard = get().clipboard5;
    chrome.storage.local.set({ c5: clipboard });
  },
}));

export const userStore = create((set, get, _state) => ({
  token: '',
  isLogin: false,
  id: '',
  pw: '',
  errorMsg: 'test',

  setID: (content) => {
    set({
      id: content,
    });
  },
  setPW: (content) => {
    set({
      pw: content,
    });
  },
  initToken: () => {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
    if (token !== null) {
      set({
        token: token,
        isLogin: true,
      });
    } else {
      console.log('로그인 X');
    }
  },
  getToken: async () => {
    const userData = {
      name: get().id,
      password: get().pw,
    };
    axios.post('http://3.38.34.133/user/token', userData).then((res) => {
      console.log(res);
      // set({
      //   token: res.data.token,
      //   isLogin : true,
      // });
      // localStorage.setItem('token', res.data.token);
    });
  },
}));
