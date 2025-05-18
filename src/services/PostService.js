import ApiService from './ApiService';

export default class PostService {
  static createPosts = ({
    name,
    operatorId,
    bio,
    address: { street, country, state, city, zip, latitude, longitude },
  }) => {
    const mappedData = {
      name,
      operator_id: operatorId,
      bio,
      address: {
        street,
        country,
        state,
        city,
        zip,
        latitude,
        longitude,
      },
    };
    return ApiService.post('/posts', mappedData);
  };

  static getPosts = async (postId) =>
    ApiService.get(`/ `);

  // static getOPost = async (operatorId) =>
  //   ApiService.get(`/operators/${operatorId}`);

  static getPostAssets = async (postId, filters = {}) =>
    ApiService.get(`/posts/${postId}/assets`, filters);

  static getPostAsset = async (postId, assetId) =>
    ApiService.get(`/posts/${postId}/assets/${assetId}`);

  /**
   * Update a project
   *
   * @param {string} postId
   * @param {{
   *  name?: string;
   *  description?: string;
   *  isVisible?: boolean;
   *  isOpen?: boolean;
   *  isZoomEnalbed?: boolean;
   *  isCopyAllowed?: boolean;
   *  thumbnailAssetId?: string;
   *  thumbnailType?: string;
   * }} data
   * @returns
   */
  static updatePost = async (postId, data) =>
    ApiService.patch(`/post/${postId}`, data);

  /**
   * Update the project roles for a user or team
   * @param {string} postId
   * @param {string} userTeamId Can be either a user id or a team id
   * @param {number[]} roles
   * @returns
   */
  static updateUserOrTeamRoles = async (postId, userTeamId, roles) =>
    ApiService.post(`/post/${postId}/roles/${userTeamId}`, { roles });

  static findSearch = (findSearch) =>
    ApiService.get('/find_post', findSearch);
}
