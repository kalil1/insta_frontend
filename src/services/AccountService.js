import ApiService from './ApiService';

export default class AccountService {
  static updateRoles = (adminId, { roles }) => ApiService.post(`/account/admins/${adminId}/roles`, { roles });

  static getAccount = async () => ApiService.get('/account');

  /**
   * Update the account level roles for a user
   *
   * @param {string} userId
   * @param {number[]} roles
   * @returns
   */
  static updateAccountUserRoles = async (userId, roles) => ApiService.post(`/account/admins/${userId}/roles`, { roles });
}
