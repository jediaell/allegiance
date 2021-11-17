using CoreExerciseAllegiance.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreExerciseAllegiance.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController: ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<ContactModel>> Get()
        {
            var rng = new Random();
            var contacts = Enumerable.Range(1, 5).Select(index => new ContactModel
            {
                salutation = "Mr",
                firstName = "Contact Number " + index,
                lastName = "Last Name Number " + index,
                addressLine1 = index.ToString() + index.ToString() + index.ToString(),
                addressLine2 = index.ToString() + index.ToString() + index.ToString() + "22222",
                city = "City Number " + index,
                state = "State Number " + index,
                zipCode = "123" + index       ,
                emailAddress = "contactnumber" + index +"@email.com",
                telePhoneNumber = "555555" + index
            }).ToArray();

            return await Task.FromResult(contacts);
        }
    }
}
