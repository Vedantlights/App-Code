/**
 * API Configuration
 * 
 * For React Native, environment variables can be used with react-native-config.
 * Install: npm install react-native-config
 * Then use: import Config from 'react-native-config';
 * 
 * For now, production values are hardcoded. Update these for different environments.
 * 
 * Production values:
 * - API_BASE_URL: https://demo1.indiapropertys.com/backend/api
 * - UPLOAD_BASE_URL: https://demo1.indiapropertys.com/backend/uploads
 */
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
  REFRESH_TOKEN: '/auth/refresh-token.php', // Not implemented in backend yet
  VERIFY_EMAIL: '/auth/verify-email.php', // Email verification token endpoint
  DELETE_ACCOUNT: '/auth/delete-account.php', // User self-delete (not implemented in backend yet)
  
  // OTP (MSG91)
  OTP_SEND_SMS: '/otp/send-sms.php',
  OTP_VERIFY_SMS: '/otp/verify-sms.php',
  OTP_SEND_EMAIL: '/otp/send-email.php',
  OTP_VERIFY_EMAIL: '/otp/verify-email.php',
  OTP_RESEND_SMS: '/otp/resend-sms.php',
  // MSG91 v5 REST (backend proxy for mobile apps)
  MSG91_OTP_SEND: '/otp/msg91-send.php',
  MSG91_OTP_VERIFY: '/otp/msg91-verify.php',
  // MSG91 audit (SDK verification success → notify backend)
  OTP_VERIFY_MSG91_TOKEN: '/otp/verify-msg91-token.php',
  
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
  
  // Buyer Dashboard
  BUYER_PROPERTIES_LIST: '/buyer/properties/list.php',
  BUYER_PROPERTY_DETAILS: '/buyer/properties/details.php',
  BUYER_FAVORITES_LIST: '/buyer/favorites/list.php',
  BUYER_FAVORITES_TOGGLE: '/buyer/favorites/toggle.php',
  BUYER_INQUIRY_SEND: '/buyer/inquiries/send.php',
  BUYER_PROFILE_GET: '/buyer/profile/get.php',
  BUYER_PROFILE_UPDATE: '/buyer/profile/update.php',
  BUYER_INTERACTION_RECORD: '/buyer/interactions/record.php',
  BUYER_INTERACTION_CHECK: '/buyer/interactions/check.php',
  
  // Inquiries
  INQUIRY_SEND: '/inquiries/send.php',
  INQUIRY_INBOX: '/inquiries/inbox.php',
  INQUIRY_SENT: '/inquiries/sent.php',
  INQUIRY_MARK_READ: '/inquiries/mark-read.php',
  
  // Seller Dashboard
  SELLER_DASHBOARD_STATS: '/seller/dashboard/stats.php',
  SELLER_PROPERTIES_LIST: '/seller/properties/list.php',
  SELLER_PROPERTIES_ADD: '/seller/properties/add.php', // Add property endpoint (from guide)
  SELLER_PROPERTIES_UPDATE: '/seller/properties/update.php',
  SELLER_PROPERTIES_DELETE: '/seller/properties/delete.php',
  SELLER_INQUIRIES_LIST: '/seller/inquiries/list.php',
  SELLER_BUYERS_GET: '/seller/buyers/get.php', // Get buyer info by ID
  SELLER_PROFILE_GET: '/seller/profile/get.php',
  SELLER_PROFILE_UPDATE: '/seller/profile/update.php',
  SELLER_INQUIRY_UPDATE_STATUS: '/seller/inquiries/updateStatus.php',
  
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
  
  // Image Moderation (Google Vision API) — getCurrentUser(); backend checks property.user_id
  MODERATE_AND_UPLOAD: '/images/moderate-and-upload.php',
  // Video / property files — requireUserType(['seller','agent'])
  UPLOAD_PROPERTY_FILES: '/upload/property-files.php',
  
  // Admin Moderation Queue
  ADMIN_MODERATION_QUEUE: '/admin/moderation-queue/list.php',
  ADMIN_MODERATION_APPROVE: '/admin/moderation-queue/approve.php',
  ADMIN_MODERATION_REJECT: '/admin/moderation-queue/reject.php',
  
  // Inquiry Reply
  INQUIRY_REPLY: '/inquiries/reply.php',
  
  // Notifications (if implemented in backend)
  NOTIFICATIONS_LIST: '/notifications/list.php',
  NOTIFICATIONS_MARK_READ: '/notifications/mark-read.php',
  NOTIFICATIONS_DELETE: '/notifications/delete.php',
  NOTIFICATIONS_REGISTER_DEVICE: '/notifications/register-device.php',
};

export const apiConfig = {
  baseURL: API_CONFIG.API_BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
};

