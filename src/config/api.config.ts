export const API_CONFIG = {
  BASE_URL: 'https://demo1.indiapropertys.com/backend',
  API_BASE_URL: 'https://demo1.indiapropertys.com/backend/api',
  UPLOAD_BASE_URL: 'https://demo1.indiapropertys.com/backend/uploads',
  UPLOAD_URL: 'https://demo1.indiapropertys.com/backend/uploads',
  MAPBOX_TOKEN: 'pk.eyJ1Ijoic3VkaGFrYXJwb3VsIiwiYSI6ImNtaXp0ZmFrNTAxaTQzZHNiODNrYndsdTAifQ.YTMezksySLU7ZpcYkvXyqg',
  TIMEOUT: 30000,
};

export const API_ENDPOINTS = {
  // Auth
  REGISTER: '/auth/register.php',
  LOGIN: '/auth/login.php',
  VERIFY_OTP: '/auth/verify-otp.php',
  RESEND_OTP: '/auth/resend-otp.php',
  FORGOT_PASSWORD: '/auth/forgot-password.php',
  RESET_PASSWORD: '/auth/reset-password.php',
  
  // OTP (MSG91)
  OTP_SEND_SMS: '/otp/send-sms.php',
  OTP_VERIFY_SMS: '/otp/verify-sms.php',
  OTP_SEND_EMAIL: '/otp/send-email.php',
  OTP_VERIFY_EMAIL: '/otp/verify-email.php',
  OTP_RESEND_SMS: '/otp/resend-sms.php',
  
  // User
  USER_PROFILE: '/user/profile.php',
  UPDATE_PROFILE: '/user/update-profile.php',
  UPLOAD_PICTURE: '/user/upload-profile-picture.php',
  UPLOAD_PROFILE_IMAGE: '/upload/profile-image.php', // New endpoint as per guide
  CHANGE_PASSWORD: '/user/change-password.php',
  
  // Properties (Buyer endpoints)
  PROPERTIES_LIST: '/buyer/properties/list.php',
  PROPERTY_DETAILS: '/buyer/properties/details.php',
  PROPERTY_SEARCH: '/properties/search.php',
  PROPERTY_CREATE: '/properties/create.php',
  PROPERTY_UPDATE: '/properties/update.php',
  PROPERTY_DELETE: '/properties/delete.php',
  MY_PROPERTIES: '/properties/my-properties.php',
  UPLOAD_IMAGES: '/properties/upload-images.php',
  
  // Favorites
  FAVORITES_LIST: '/favorites/list.php',
  FAVORITE_ADD: '/favorites/add.php',
  FAVORITE_REMOVE: '/favorites/remove.php',
  FAVORITE_CHECK: '/favorites/check.php',
  
  // Inquiries
  INQUIRY_SEND: '/inquiries/send.php',
  INQUIRY_INBOX: '/inquiries/inbox.php',
  INQUIRY_SENT: '/inquiries/sent.php',
  INQUIRY_MARK_READ: '/inquiries/mark-read.php',
  
  // Others
  CITIES_LIST: '/cities/list.php',
  PROPERTY_TYPES: '/property-types/list.php',
  AMENITIES_LIST: '/amenities/list.php',
  
  // Location & Map
  LOCATION_SEARCH: '/locations/search.php',
  LOCATION_NEARBY: '/locations/nearby.php',
  LOCATION_AUTOCOMPLETE: '/locations/autocomplete.php',
  STATES_LIST: '/states/list.php',
  FACING_LIST: '/facing/list.php',
  
  // Chat (MirrorFly/Firebase)
  CHAT_INIT_CONVERSATION: '/chat/init-conversation.php',
  CHAT_CREATE_ROOM: '/chat/create-room.php',
  CHAT_CONVERSATIONS: '/chat/conversations.php',
  CHAT_MESSAGES: '/chat/messages.php',
  CHAT_SEND_MESSAGE: '/chat/send-message.php',
  
  // Moderation (Google Vision)
  MODERATION_CHECK_IMAGE: '/moderation/check-image.php',
  MODERATION_PENDING_IMAGES: '/moderation/pending-images.php',
  MODERATION_UPDATE_STATUS: '/moderation/update-status.php',
  MODERATION_UPLOAD: '/images/moderate-and-upload.php',
  
  // Inquiry Reply
  INQUIRY_REPLY: '/inquiries/reply.php',
};

export const apiConfig = {
  baseURL: API_CONFIG.API_BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
};

