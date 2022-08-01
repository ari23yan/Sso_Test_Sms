using System.ComponentModel.DataAnnotations;

namespace Sso_Test_Sms.Models
{
    public class LoginUserDTO
    {

        public string Mobile { get; set; }

        
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }

    public enum LoginUserResult
    {
        Success,
        NotFound,
        NotActivated
    }
}
