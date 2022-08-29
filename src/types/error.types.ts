export class AppCustomError extends Error {
  statusCode: number

  constructor(message: string, statusCode = 200) {
    super(message)
    this.name = this.constructor.name
    this.statusCode = statusCode
  }
}

/**
 * A serious problem that should not try to catch.
 */
export class ServerError extends AppCustomError {}
export class GatewayError extends ServerError {}
export class DatabaseError extends ServerError {}

/**
 * A condition that might want to catch.
 */
export class ServerException extends AppCustomError {}

/****  Authentication Errors  ****/
export class AuthenticationException extends ServerException {}
export class UnauthorizedException extends AuthenticationException {}
export class TokenExpiredException extends AuthenticationException {}
export class NoPermissionException extends AuthenticationException {}

/****  Resource Errors  ****/
export class RequirementUnfulfilledException extends ServerException {}
export class UniquenessViolatedException extends ServerException {}
export class InvalidValueException extends ServerException {}
export class ResourceNotFoundException extends ServerException {}
export class InvalidIdException extends ServerException {}
