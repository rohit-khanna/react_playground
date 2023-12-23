export interface User {
    id: number,
    fullName: string,
    userName: string,
    email: string,
    address: Address,
    uniqueIdentityPhrase: string,
}

export interface Address {
    city: string,
    zipCode: string,
    streetAddress: string,
}