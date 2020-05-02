using System;

namespace API.Models
{
    public class MovieModel
    {
        public int Id { get; set; }

        public DateTime Created { get; set; }

        public string ImageUrl { get; set; }

        public int? Rating { get; set; }

        public string Review { get; set; }

        public string Title { get; set; }

        public DateTime? Updated { get; set; }
    }
}
