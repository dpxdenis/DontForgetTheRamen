using DontForgetTheRamen.Domain;
using DontForgetTheRamen.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace DontForgetTheRamen.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingListItemController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<ShoppingListItem> Get()
        {
            return MockDataProvider.Instance.Items;
        }
    }
}
