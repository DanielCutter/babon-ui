import axios from 'axios';

export class LoginService {
  public static async sendLoginRequest(): Promise<number> {
    const response = await axios.post(
      'https://run.mocky.io/v3/7b9c45e2-62c4-4862-b5a7-4bd0aab9f5d2',
      {},
    );
    return response.status;
  }

  public static async sendSignupRequest(): Promise<number> {
    const response = await axios.post(
      'https://run.mocky.io/v3/7b9c45e2-62c4-4862-b5a7-4bd0aab9f5d2',
      {},
    );
    return response.status;
  }
}

export default LoginService;
