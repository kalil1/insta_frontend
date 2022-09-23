import ApiService from './ApiService';

export default class EnumService {
  static getAccountRoles = () => ApiService.get('/enum/roles/account');
}
