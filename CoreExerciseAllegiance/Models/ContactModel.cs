using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreExerciseAllegiance.Models
{
    public class ContactModel
    {
        public string salutation { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string addressLine1 { get; set; }
        public string addressLine2 { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zipCode { get; set; }
        public string emailAddress { get; set; }
        public string telePhoneNumber { get; set; }
    }
}
