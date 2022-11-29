import create from 'zustand';
import axios from 'axios';

export const useBoardStore = create((set, get, _state) => ({
  clipboard1: '',
  clipboard2: '',
  clipboard3: '',
  clipboard4: '',
  clipboard5: '',

  initClipboards: async (params) => {
    const c1 = localStorage.getItem('c1');
    const c2 = localStorage.getItem('c2');
    const c3 = localStorage.getItem('c3');
    const c4 = localStorage.getItem('c4');
    const c5 = localStorage.getItem('c5');

    if (c1 !== undefined) {
      set({
        clipboard1: c1,
      });
    }
    if (c2 !== undefined) {
      set({
        clipboard2: c2,
      });
    }
    if (c3 !== undefined) {
      set({
        clipboard3: c3,
      });
    }
    if (c4 !== undefined) {
      set({
        clipboard4: c4,
      });
    }
    if (c5 !== undefined) {
      set({
        clipboard5: c5,
      });
    }
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
    localStorage.setItem('c1', '');
    localStorage.setItem('c2', '');
    localStorage.setItem('c3', '');
    localStorage.setItem('c4', '');
    localStorage.setItem('c5', '');
  },

  setClipboard1: async (content) => {
    set({
      clipboard1: content,
    });
    const clipboard = get().clipboard1;
    localStorage.setItem('c1', clipboard);
  },
  setClipboard2: async (content) => {
    set({
      clipboard2: content,
    });
    const clipboard = get().clipboard2;
    localStorage.setItem('c2', clipboard);
  },
  setClipboard3: async (content) => {
    set({
      clipboard3: content,
    });
    const clipboard = get().clipboard3;
    localStorage.setItem('c3', clipboard);
  },
  setClipboard4: async (content) => {
    set({
      clipboard4: content,
    });
    const clipboard = get().clipboard4;
    localStorage.setItem('c4', clipboard);
  },
  setClipboard5: async (content) => {
    set({
      clipboard5: content,
    });
    const clipboard = get().clipboard5;
    localStorage.setItem('c5', clipboard);
  },
}));
