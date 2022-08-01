using Microsoft.EntityFrameworkCore;
using Sso_Test_Sms.Models;
using Sso_Test_Sms.Services.Interfaces;

namespace Sso_Test_Sms.Services.Impelemtation
{
    public class UserService : IUserService
    {
        private readonly SmsDbContext _smsDbContext;
        private readonly ISmsService _smsService;
        public UserService(SmsDbContext smsDbContext , ISmsService smsService)
        {
            _smsDbContext = smsDbContext;
            _smsService = smsService;
        }

        public async Task<bool> ActivateMobile(ActivateMobileDTO activate)
        {
            var user = await _smsDbContext.users.FirstOrDefaultAsync(s => s.Mobile == activate.Mobile);

            if (user != null)
            {
                if (user.MobileActiveCode == activate.MobileActiveCode)
                {
                    user.IsMobileActive = true;
                    user.MobileActiveCode = new Random().Next(1000000, 999999999).ToString();
                    await _smsDbContext.SaveChangesAsync();
                    return true;
                }
            }
            return false;
        }

        public async Task<User> GetUserByMobile(string mobile)
        {
            return await _smsDbContext.users.SingleOrDefaultAsync(s => s.Mobile == mobile);
           // return await _userRepository.GetQuery().AsQueryable().SingleOrDefaultAsync(s => s.Mobile == mobile);

        }

        public async Task<LoginUserResult> GetUserForLogin(LoginUserDTO login)
        {
            var user = await _smsDbContext.users.SingleOrDefaultAsync(s => s.Mobile == login.Mobile);
          //  var user2 = await _userRepository.GetQuery().AsQueryable().SingleOrDefaultAsync(s => s.Mobile == login.Mobile);
            if (user == null) return LoginUserResult.NotFound;
            if (!user.IsMobileActive) return LoginUserResult.NotActivated;
            return LoginUserResult.Success;
        }

        public async Task<bool> IsUserExistsByMobileNumber(string mobile)
        {
            //return await _userRepository.GetQuery().AsQueryable().AnyAsync(s => s.Mobile == mobile);
            return await _smsDbContext.users.AnyAsync(s=>s.Mobile==mobile);

        }

        public Task<ForgotPasswordResult> RecoverUserPassword(ForgotPasswordDTO forgot)
        {
            throw new NotImplementedException();
        }

        public async Task<RegisterUserResult> RegisterUser(RegisterUserDTO register)
        {
            if(!await IsUserExistsByMobileNumber(register.Mobile))
            {
                var user = new User
                {
                    FirstName = register.FirstName,
                    LastName = register.LastName,
                    Mobile = register.Mobile,
                    MobileActiveCode = new Random().Next(1000000, 9999999).ToString(),
                   // EmailActiveCode = Guid.NewGuid().ToString("N")
                };
                _smsDbContext.Add(user);
            await     _smsDbContext.SaveChangesAsync();
           await     _smsService.SendVerificationSms(user.Mobile, user.MobileActiveCode);
                return RegisterUserResult.Success;
            }
            return RegisterUserResult.MobileExists;


            //if (!await IsUserExistsByMobileNumber(register.Mobile))
            //{
            //    var user = new User
            //    {
            //        FirstName = register.FirstName,
            //        LastName = register.LastName,
            //        Mobile = register.Mobile,
            //        MobileActiveCode = new Random().Next(10000, 999999).ToString(),
            //        EmailActiveCode = Guid.NewGuid().ToString("N")
            //    };

            //    await _userRepository.AddEntity(user);
            //    await _userRepository.SaveChanges();
            //    await _smsService.SendVerificationSms(user.Mobile, user.MobileActiveCode);
            //    return RegisterUserResult.Success;
            //}

            //return RegisterUserResult.MobileExists;
        }
    }
}
