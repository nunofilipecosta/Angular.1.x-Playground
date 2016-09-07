using System.Web.Mvc;

namespace AngularPlayground.Web.Areas.GetStarted.Controllers
{
    public class HomeController : Controller
    {
        // GET: GetStarted/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Routing()
        {
            return View();
        }
    }
}