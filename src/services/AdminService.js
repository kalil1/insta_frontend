import ApiService from './ApiService';

export default class AdminService {
  static getAdmins = async (filters) =>
    ApiService.get('/account/admins', filters);

  static createAdmin = ({
    name,
    phone,
    email,
    subdomain,
    noOfLocations: no_of_locations,
    noOfParkingLots: no_of_parking_lots,
    salesTaxRate: sales_tax_rate,
    address: { street, country, state, city, zip },
  }) => {
    const mappedData = {
      name,
      phone,
      email,
      subdomain,
      no_of_locations,
      no_of_parking_lots,
      sales_tax_rate,
      address: {
        street,
        country,
        state,
        city,
        zip,
      },
    };
    return ApiService.post('/user', mappedData);
  };

  static createIPCAdmin = ({ fname, lname, email }) => {
    const mappedData = {
      firstName: fname,
      lastName: lname,
      email,
    };
    return ApiService.post('/admin/admins', mappedData);
  };

  static getOperator = (operatorId) =>
    ApiService.get(`/user/${operatorId}`);

  static getOperatorId = (subdomain) =>
    ApiService.get(`/user/info/${subdomain}`);

  static getAccounts = () => ApiService.get('/user');

  static switchAccounts = (data) =>
    ApiService.post('/admin/switch-accounts', data);
}
