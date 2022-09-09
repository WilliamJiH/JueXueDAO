export class AppCustomError extends Error {
  statusCode: number = 400

  constructor(message?: string, statusCode?: number) {
    super(message)
    this.name = this.constructor.name
    this.statusCode = statusCode || this.statusCode
  }
}

/**
 * A serious problem that should not try to catch.
 */
export class ServerError extends AppCustomError {
  statusCode: number = 400
}
export class GatewayError extends ServerError {}
export class DatabaseError extends ServerError {}

export class NotImplementedError extends ServerError {
  constructor(
    message: string = 'Service Not Implemented',
    statusCode: number = 501
  ) {
    super(message, statusCode)
  }
}

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
export class FileNotUploadedException extends ServerException {}
export class UniquenessViolatedException extends ServerException {}
export class InvalidValueException extends ServerException {}

export class ResourceNotFoundException extends ServerException {
  constructor(message: string = 'Not Found', statusCode: number = 404) {
    super(message, statusCode)
  }
}

export class InvalidIdException extends ServerException {}
export class InvalidRequestException extends ServerException {}
