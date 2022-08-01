using Microsoft.EntityFrameworkCore;
using Sso_Test_Sms.Models;
using Sso_Test_Sms.Services.Impelemtation;
using Sso_Test_Sms.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<SmsDbContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("Def"));
});
builder.Services.AddScoped<ISmsService, SmsService>();
builder.Services.AddScoped<IUserService, UserService>();
var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}


app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
