using Microsoft.AspNetCore.Mvc;
using Sso_Test_Sms.Models;
using Sso_Test_Sms.Services.Interfaces;

namespace Sso_Test_Sms.Controllers
{
    public class AccountController : Controller
    {
        private readonly IUserService _userService;
        public AccountController(IUserService userService)
        {
            _userService = userService;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("register")]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDTO register)
        {
            if (ModelState.IsValid)
            {
                var res = await _userService.RegisterUser(register);
                switch (res)
                {
                    case RegisterUserResult.MobileExists:
                        ModelState.AddModelError("Mobile", "تلفن همراه وارد شده تکراری می باشد");
                        break;
                    case RegisterUserResult.Success:
                        return RedirectToAction("ActivateMobile", "Account", new { mobile = register.Mobile });
                }
            }

            return View(register);
        }


        [HttpGet("login")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginUserDTO login)
        {
          
            if (ModelState.IsValid)
            {
                var res = await _userService.GetUserForLogin(login);
                switch (res)
                {
                    case LoginUserResult.NotFound:
                        break;
                    case LoginUserResult.NotActivated:
                        break;
                    case LoginUserResult.Success:

                        return Redirect("/");
                }
            }


            return View(login);
        }

        [HttpGet("activate-mobile/{mobile}")]
        public IActionResult ActivateMobile(string mobile)
        {
            var activateMobileDto = new ActivateMobileDTO { Mobile = mobile };
            return View(activateMobileDto);
        }

        [HttpPost("activate-mobile/{mobile}")]
        public async Task<IActionResult> ActivateMobile(ActivateMobileDTO activate)
        {

            if (ModelState.IsValid)
            {
                var res = await _userService.ActivateMobile(activate);
                if (res)
                {
                    return RedirectToAction("register");
                }
            }

            return View(activate);
        }
    }
}
