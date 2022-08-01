using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sso_Test_Sms.Models
{
    public class RegisterUserDTO
    {
        
        public string Mobile { get; set; }

     
        public string FirstName { get; set; }

        
        public string LastName { get; set; }

        public string Password { get; set; }

      
        public string ConfirmPassword { get; set; }
    }

    public enum RegisterUserResult
    {
        Success,
        MobileExists
    }
}
