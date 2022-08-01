namespace Sso_Test_Sms.Models
{
    public class User:BaseEntity
    {
     //   public string Email { get; set; }

       // public string EmailActiveCode { get; set; }

       // public bool IsEmailActive { get; set; }

        public string Mobile { get; set; }

        public string MobileActiveCode { get; set; }

        public bool IsMobileActive { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

    }
 
}
