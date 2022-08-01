namespace Sso_Test_Sms.Services.Interfaces
{
    public interface ISmsService
    {
        Task SendVerificationSms(string mobile, string activationCode);

    }
}
