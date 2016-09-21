using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularPlayground.Web.Areas.Fundamentals.Controllers
{
    public class HomeController : Controller
    {
        // GET: Fundamentals/Home
        public ActionResult Index()
        {
            return View();
        }
    }
}