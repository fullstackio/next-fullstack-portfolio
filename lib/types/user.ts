export enum AccountType {
  PREMIUM = "premium",
  FREE = "free",
  BASIC = "basic",
  BUSINESS = "business",
}

export enum AccountStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  BLOCKED = "blocked",
  SUSPENDED = "suspended",
  PENDING = "pending",
}

export enum AccountRole {
  USER = "user",
  ADMIN = "admin",
  SUPERADMIN = "superadmin",
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  userGender?: string;
  country?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  addressLine?: string;
  birthDate?: string;
  birthMonth?: string;
  birthYear?: string;
  role: AccountRole;
  status: AccountStatus;
  slugInfo: string;
  timeZone: string;
  accountType: AccountType;
  deviceInfo: object;
  otp?: number;
  otpExpires?: string;
  phone?: string;
  isActive: boolean;
  isDeleted: boolean;
  username: string;
  userId?: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
