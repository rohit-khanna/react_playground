# AuthProvider demo

*This repo is bootstrapped using vite template: react-ts*and the Auth API is mocked using https://beeceptor.com/

## Introduction
It is a good practice to centralize the authorization information to make it easy for all the components to access it. One of the ways is to have it stored in a Store. [Redux/ recoil], or we can store it as a Context.
This demo is focussing on having an AuthContext and a related provider to facilitate the storing/sharing authorization details.

For the sake of demo, the `auth` information is assumed to be of below type:
```json
{
  "token":"some jwt string",
  "expires_at":12345679, // ms
  "username":"Mr Sample User"
}
```

## Application Design
We have the following components:

### `context/AuthContext.tsx`
Declares the React->Context and the context provider.

### `useAuth`
Wrapper Hook to use the AuthContext. This exported from `context/AuthContext.tsx`

### AuthProvider
The Provider component with some initial Value of Auth pre-set. This exported from `context/AuthContext.tsx`



## User Flow
1. User is on Landing Page and See the AuthContext isnt set.
2. They can login using Navbar->SignIn link
3. Once Signed-in- they can see the 3 components reflecting/using the context value.
4. User can "click" on Invoke button to check if the token is valid for consumption. This is a way to simulate actual API call. 
5. See `<ActionArea/>` for details. When this components calculates that token is expired , i,e, in real time an endpoint says its `401`, we reset the token in `AuthContext` and that change is reflected across the application.


### Packages used:
1. [Vite](https://vitejs.dev/guide/)
2. [Tanstack React-Query](https://tanstack.com/query/latest/)
3. [React](https://react.dev/learn)
4. [Axios](https://axios-http.com/)
5. [Date-Fns](https://date-fns.org/)
6. [API Mock- Beeceptor](https://beeceptor.com/)