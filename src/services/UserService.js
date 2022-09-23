import ApiService from './ApiService';

export default class UserService {
  static getUsers = async (filters) => ApiService.get('/users', filters);

  static getUser = async (userId) => ApiService.get(`/users/${userId}`);

  static getUserRoles = async (userId) => ApiService.get(`/users/${userId}/roles`);

  static createUser = async (user) => ApiService.post('/registration', user);

  /**
   * Update the account level roles for a user
   *
   * @param {string} userId
   * @param {object{}} data
   * @returns
   */
  static updateAccountPassword = async (userId, data) => ApiService.patch(`/users/${userId}/update-password`, data);

  static updateAccountUser = async (userId, data) => ApiService.patch(`/users/${userId}`, data);
}
