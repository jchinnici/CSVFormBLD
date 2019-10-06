using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSVFormBLDSite.Entities
{
    public class Form
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public Form()
        {
            fields = new HashSet<Field>();
            results = new HashSet<Results>();
        }
        public virtual ICollection<Field> fields { get; set; }

        public virtual ICollection<Results> results { get; set; }


    }
}
