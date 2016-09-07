using System.Web.Mvc;

namespace AngularPlayground.Web.Areas.Fundamentals
{
    public class FundamentalsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Fundamentals";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Fundamentals_default",
                "Fundamentals/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}