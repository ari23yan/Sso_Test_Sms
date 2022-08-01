using System.ComponentModel.DataAnnotations;

namespace Sso_Test_Sms.Models
{
    public class ForgotPasswordDTO 
    {
        public string Mobile { get; set; }
    }

    public enum ForgotPasswordResult
    {
        Success,
        NotFound,
        Error
    }
}
