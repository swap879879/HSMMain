using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HSMmain.Startup))]
namespace HSMmain
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
