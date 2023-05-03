import { CustomerOptions } from "@infra/enums/apiEnums";
import { CustomerProps, userInfos } from "@infra/types/apiProps";
import axiosInstance from "./axiosInstance"

class Api {
  private readonly API_URL = "https://localhost:3000/api/v1";
  private readonly API_CUSTOMER_URL = `${this.API_URL}/customer`;

  private async callApi<T>(url: string): Promise<T> {
    const response = await axiosInstance.get<T>(url);
    return response.data;
  }

  async getCustomer({ customerToken, customerIp, option }: CustomerProps): Promise<userInfos> {
    let apiUrl: string;

    if (option === CustomerOptions.new) {
      apiUrl = `${this.API_CUSTOMER_URL}/new/${customerIp}`;
    } else if (option === CustomerOptions.my) {
      apiUrl = `${this.API_CUSTOMER_URL}/my/${customerToken}`;
    } else {
      throw new Error('Invalid getCustomer option');
    }

    return this.callApi<userInfos>(apiUrl);
  }
}

export default new Api();
