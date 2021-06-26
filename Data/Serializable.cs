using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json.Linq;

namespace scrabble.Data
{
    public abstract class Serializable
    {
        protected static JsonSerializer DefaultSerializer = new JsonSerializer
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
        };

        public JObject ToJson()
        {
            return JObject.FromObject(this, DefaultSerializer);
        }
    }
}
