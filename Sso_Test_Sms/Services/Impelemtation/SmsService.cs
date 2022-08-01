using Sso_Test_Sms.Services.Interfaces;

namespace Sso_Test_Sms.Services.Impelemtation
{
    public class SmsService:ISmsService
    {
        private string apiKey = "6C434B6A77416E36414978516C58673477794A72796D523463374235322F596A4B4659537A4E33617473773D";

        public async Task SendVerificationSms(string mobile, string activationCode)
        {
            Kavenegar.KavenegarApi api = new Kavenegar.KavenegarApi(apiKey);
            await api.VerifyLookup(mobile, activationCode, "SsoTest", Kavenegar.Core.Models.Enums.VerifyLookupType.Sms);
        }
    }
}
