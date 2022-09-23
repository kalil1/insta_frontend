import ApiService from './ApiService';

export default class DashboardService {
  static getDashboardStats = () => {
    ApiService.get(`/dash_stats`);
  };
}
