using Microsoft.EntityFrameworkCore;

namespace Sso_Test_Sms.Models
{
    public class SmsDbContext:DbContext
    {
        public SmsDbContext(DbContextOptions<SmsDbContext> option) : base(option)
        {
        }

        public DbSet<User> users { get; set; }
    }
}
