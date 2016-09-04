using System.Web.Mvc;

namespace AngularPlayground.Web.Areas.GetStarted
{
    public class GetStartedAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GetStarted";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GetStarted_default",
                "GetStarted/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}