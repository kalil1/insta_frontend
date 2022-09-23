import ApiService from './ApiService';

export default class RateService {
  static createRates = ({
    rateName, 
    purchase, 
    price,
    parkingSession, 
    availableForPurchase,
    availableType,
    recurring,
    event,
    accessLevel,
    rateType,
    validBetween,
    validFor,
    validUntil,
    durationOfRate,
    locationId,
  }) => {
    const mappedData = {
      rate_name: rateName,
      purchase,
      price,
      parking_session: parkingSession,
      available_for_purchase: availableForPurchase,
      available_type: availableType,
      recurring,
      event,
      access_level: accessLevel,
      rate_type: rateType,
      valid_between: validBetween,
      valid_for: validFor,
      valid_until: validUntil,
      duration_of_rate: durationOfRate,
      location_id: locationId,
    };
    return ApiService.post('/rates', mappedData);
  };

  static getRates = (filters) => ApiService.get('/rates', filters);

}