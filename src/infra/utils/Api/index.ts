import { CustomerOptionsExample } from "@infra/enums/apiEnums";
import { CustomerPropsExample, userInfosExample } from "@infra/types/apiProps";
import axiosInstance from "./axiosInstance"

class Api {
  private readonly API_URL = "https://localhost:3000/api/v1";
  private readonly API_CUSTOMER_URL = `${this.API_URL}/customer`;

  private async callApi<T>(url: string): Promise<T> {
    const response = await axiosInstance.get<T>(url);
    return response.data;
  }

  async getCustomer({ customerToken, customerIp, option }: CustomerPropsExample): Promise<userInfosExample> {
    let apiUrl: string;

    if (option === CustomerOptionsExample.new) {
      apiUrl = `${this.API_CUSTOMER_URL}/new/${customerIp}`;
    } else if (option === CustomerOptionsExample.my) {
      apiUrl = `${this.API_CUSTOMER_URL}/my/${customerToken}`;
    } else {
      throw new Error('Invalid getCustomer option');
    }

    return this.callApi<userInfosExample>(apiUrl);
  }
}

export default new Api();
