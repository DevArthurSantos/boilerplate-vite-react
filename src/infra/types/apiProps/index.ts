import { CustomerOptions } from "@infra/enums/apiEnums"

export type userInfos = {
  token: string,
  requests: number,
  instances: []
}

export type CustomerProps = {
  customerIp?: string
  customerToken?: string
  option: CustomerOptions
}