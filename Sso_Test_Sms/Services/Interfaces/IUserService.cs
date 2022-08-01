using Sso_Test_Sms.Models;

namespace Sso_Test_Sms.Services.Interfaces
{
    public interface  IUserService
    {
        Task<RegisterUserResult> RegisterUser(RegisterUserDTO register);
        Task<bool> IsUserExistsByMobileNumber(string mobile);
        Task<LoginUserResult> GetUserForLogin(LoginUserDTO login);
        Task<User> GetUserByMobile(string mobile);
        Task<ForgotPasswordResult> RecoverUserPassword(ForgotPasswordDTO forgot);
        Task<bool> ActivateMobile(ActivateMobileDTO activate);
    }
}
