export class AuthDataHolder {
  public static accessToken: string;
  public static tokenType: string;
  public static expiresIn: number;
  public static errorMessage: string;

  public static get isAuthenticated(): boolean {
    return  AuthDataHolder.accessToken && !AuthDataHolder.errorMessage;
  }
}
