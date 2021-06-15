import axios from 'axios';

export class LoginService {
  public static async sendLoginRequest(): Promise<void> {
    const response = await axios.post(
      'URL HERE',
      {},
    );
    return response.data;
  }
}

export default LoginService;
