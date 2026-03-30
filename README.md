## API Endpoints

- **RegisterUser**: Allows a new user to register an account.
- **LoginUser**: Authenticates a user and issues a JWT.
- **Profile**: Retrieves the authenticated user's profile information.
- **Courses**: Provides course listing, creation, update, and removal.

## Modules

- **Auth**: Handles authentication, token issuance, and profile retrieval.
- **User**: Manages user data and roles.
- **Course**: Manages course creation, reading, updating, and deletion.

## Database Collections

- **User**: Stores user credentials, profile, and roles.
- **Course**: Stores course information and metadata.

## Key Features

- **JWT Authentication**: Secure token-based user authentication.
- **AuthGuard Authorization**: Ensures endpoints are accessible only to authenticated users.
- **RBAC (Role-Based Access Control)**: Fine-grained access using custom RoleGuard and decorator.
- **MongoDB Integration**: Persistence layer supported by MongoDB.
- **Mongoose ODM**: Schema-driven MongoDB modeling.
- **Exception Handling**: Robust error management practices.

## Advantages

- **Well-Architected Structure**: Maintains clear module separation and scalable code organization.
- **Extensible Security**: RBAC and guards make it easy to add or adjust permissions as the app grows.

## Potential Drawbacks

- **Learning Curve**: Initial setup requires understanding of decorators, guards, and NestJS patterns.
- **Decorator Usage**: Frequent decorators may obscure underlying logic for beginners.
