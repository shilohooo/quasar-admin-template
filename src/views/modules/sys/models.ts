/**
 * User Model
 * @author shiloh
 * @date 2024/7/22 9:22
 */

/**
 * User Info
 * @author shiloh
 * @date 2024/7/22 9:22
 */
export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

/**
 * Address
 * @author shiloh
 * @date 2024/7/22 9:22
 */
export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

/**
 * Geo
 * @author shiloh
 * @date 2024/7/22 9:22
 */
export interface Geo {
  lat: string
  lng: string
}

/**
 * Company
 * @author shiloh
 * @date 2024/7/22 9:22
 */
export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
