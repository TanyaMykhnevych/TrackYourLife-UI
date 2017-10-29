export class AuthDataHolder {
  public static accessToken: string;
  public static tokenType: string;
  public static expiresIn: number;
  public static when: Date;

  public static errorMessage: string;

  public static get isAuthenticated(): boolean {
    // TODO: also check (when + expiresIn) < DateTime.Now
    return  AuthDataHolder.accessToken && !AuthDataHolder.errorMessage;
  }
}
