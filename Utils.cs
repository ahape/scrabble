using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace scrabble
{
    public static class Utils
    {
        public static JsonSerializer DefaultSerializer = new JsonSerializer
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
        };
    }
}
