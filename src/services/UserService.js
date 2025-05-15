import ApiService from './ApiService';

export default class UserService {
  static getUsers = async () => {
    return ApiService.get('/users');
  };

  static getUser = async (userId) => {
    return ApiService.get(`/users/${userId}`);
  };

  static searchUsers = async (searchTerm) => {
    return ApiService.get(`/users/search?query=${searchTerm}`);
  };

  static getRecommendedUsers = async () => {
    return ApiService.get('/profiles');
  };

  static updateProfile = async (userData) => {
    return ApiService.put('/profiles/update', userData);
  };
}
