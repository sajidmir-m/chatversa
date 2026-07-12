export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';

export const STORAGE_KEYS = {
  USERNAME: '@chat_username',
} as const;

export const SOCKET_EVENTS = {
  JOIN: 'join',
  SEND_MESSAGE: 'send-message',
  TYPING: 'typing',
  DISCONNECT: 'disconnect',
  RECEIVE_MESSAGE: 'receive-message',
  NOTIFICATION: 'notification',
  FRIEND_REQUEST: 'friend-request',
  FRIEND_REQUEST_ACCEPTED: 'friend-request-accepted',
  ONLINE_USERS: 'online-users',
  USER_JOINED: 'user-joined',
  USER_LEFT: 'user-left',
  ERROR: 'error',
} as const;

export const TYPING_DEBOUNCE_MS = 1500;
export const MESSAGE_MAX_LENGTH = 1000;
export const USERNAME_MIN_LENGTH = 2;
export const USERNAME_MAX_LENGTH = 30;
export const MAX_IMAGE_SIZE_MB = 10;
export const MAX_VIDEO_SIZE_MB = 50;
export const ACCEPTED_IMAGE_TYPES = 'image/jpeg,image/png,image/gif,image/webp';
export const ACCEPTED_VIDEO_TYPES = 'video/mp4,video/webm,video/quicktime';
