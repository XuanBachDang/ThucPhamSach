using System.Web;
using System.Web.Mvc;

namespace thuc_pham_sach_hd
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
