import { CustomerOptionsExample } from "@infra/enums/apiEnums"

export type userInfosExample = {
  token: string,
  requests: number,
  instances: []
}

export type CustomerPropsExample = {
  customerIp?: string
  customerToken?: string
  option: CustomerOptionsExample
}