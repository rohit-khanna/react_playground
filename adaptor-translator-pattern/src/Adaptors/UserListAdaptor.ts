import { User as DbUser } from "../hooks/api/dbTypes/User";
import { User } from "../types/user";
import { IAdaptor } from "./IAdaptor";

export class UserListAdaptor implements IAdaptor<DbUser[], User[]> {

    tranform(data: DbUser[]): User[] {
        return data.map((dbUser) => {
            const { bs, catchPhrase, name } = dbUser.company;
            return {
                id: dbUser.id,
                fullName: dbUser.name,
                userName: dbUser.username,
                email: dbUser.email,
                address: {
                    city: dbUser.address.city,
                    zipCode: dbUser.address.zipcode,
                    streetAddress: dbUser.address.street,
                },
                uniqueIdentityPhrase: `${name} ${catchPhrase} ${bs}`,
            }
        })
    }
}