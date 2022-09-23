import ApiService from './ApiService';

export default class AuthService {
  static login = (loginInfo) => ApiService.post('/auth/login', loginInfo);

  static userInfo = () => ApiService.get('/user_info');

  /**
   *
   * @param {string} userId
   * @param {string} token
   * @returns
   */
  static validateInviteToken = (userId, token) => ApiService.get(`/auth/validate-invite-token/${userId}/${token}`);

  /**
   *
   * @param {string} userId
   * @param {{
   *  token: string;
   *  firstName: string;
   *  lastName: string;
   *  password: string;
   *  passwordConfirm: string;
   * }} data
   * @returns
   */
  static acceptInvitation = async (userId, data) => ApiService.post(`/auth/${userId}/accept-invite`, data);
}
