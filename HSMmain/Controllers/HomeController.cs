using HSMmain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HSMmain.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Login(CommonModel cm)
        {
            if (cm.Username != "")
            {
                if (cm.Username == "Swap" && cm.Password=="1995")
                {
                    return View("~/Views/Home/HomePageContainer.cshtml");
                }
                else
                {
                    return View("~/Views/Home/Login.cshtml");
                }
            }

            return View();
        }
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult HomePageContainer()
        {
            return View();
        }



        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}