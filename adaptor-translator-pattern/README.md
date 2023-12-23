# Adaptor Design Pattern

It is one of the Structural Design Pattern.



## Description

Adapter is a Structural Design Pattern that allows incompatible interfaces between classes to work together without modifying their source code. 

It acts as a bridge between two interfaces, making them compatible so that they can collaborate and interact seamlessly. This pattern is useful when integrating existing or third-party code into an application without modifying the existing codebase. 

Additionally, it promotes code reusability by allowing objects to work together even if they were not designed to do so initially. Of course, the interfaces should refer to similar concepts; otherwise, it is almost impossible to “adapt” them.


## Problem Statement:
There is a common REST endpoint which caters to multiple consumers and we need to consume the content by "adapting" it to our data structure or "translating" to our entities.

### The structure of data returned from common API:
*https://jsonplaceholder.typicode.com/users*

```json
  [
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-lal-net",
      "bs": "harness "
    }
  },
  ]
```
### The Data structure needed by FE component
`types/user.ts`

```typescript
interface User {
    id: number,
    fullName: string,
    userName: string,
    email: string,
    address: Address,
    uniqueIdentityPhrase: string,
}

interface Address {
    city: string,
    zipCode: string,
    streetAddress: string,
}
```
## Implementation
We are implementing it using a `transform()`  which is part of the `IAdaptor`. Every entityAdaptor should implemente this interface.
The Data is fetched using `useQuery`- so we can use this `adaptor.transform()` to transform the results before sending them to UI component. 

`useUserList()` has two hooks which allow us to either:
- save original API data in cache but only return transformed data to UI, `useUserList()` or
- transform the APi data and save this new data in cache. `useUserListWithTransformPersist()`


### Adaptor Class
```typescript
export interface IAdaptor<Input, Output> {
    /**
     * transform data from Input to Output.
     * @param data 
     */
    tranform(data: Input): Output;
}
```

### UserListAdaptor
```typescript
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
```

### useUserListWithTransformPersist
```typescript
export const useUserListWithTransformPersist = (props: IProps) => {
  const { adaptor } = props;

  const fetchUsers = async (): Promise<User[]> => {
    return adaptor.tranform(await fetchUsersFromAPI());
  };
  return useQuery<User[]>({
    queryKey: ["userListTransformPersist"],
    queryFn: fetchUsers,
  });
};
```

## Pros and Cons
### 👍 Pros
1. `Single Responsibility Principle (SRP)`: The interface or data conversion code can be separated from the application’s primary business logic.
2. `Open/Closed Principle (OCP)`: New types of adapters can be introduced into the program without breaking the existing client code, as long as they work with the adapters through the `IAdaptor`` interface.
3. Code Reuse

### 👎 Cons
The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.


## Steps to Run
1. `yarn` or `npm install`
2. `yarn dev` or `npm run dev`
3. App should be available at `http://localhost:5173/`

## References
- https://refactoring.guru/design-patterns/adapter
- [Relation Between Other Patterns](https://refactoring.guru/design-patterns/adapter#:~:text=Relations%20with%20Other%20Patterns)

#### Notes:
This project is bootstrapped using:
`yarn create vite adaptor-translator-pattern --template react-ts`
