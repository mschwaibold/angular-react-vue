using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
        private static readonly List<MovieModel> Movies = new List<MovieModel>
        {
            new MovieModel
            {
                Created = new DateTime(2020,1,3).ToUniversalTime(),
                Id = 1,
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY209_CR0,0,140,209_AL_.jpg",
                Rating = 5,
                Review = "A lot of wasted potential. Visually as good as expected. It feels good to know that it's finally over.",
                Title = "Star Wars: Episode IX - The Rise of Skywalker",
                Updated = null,
            },
            new MovieModel
            {
                Created = new DateTime(2020,1,6).ToUniversalTime(),
                Id = 2,
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_UY209_CR0,0,140,209_AL_.jpg",
                Rating = 9,
                Review = "Very entertaining. Great cast. And that house is really special. My House, My Rules, My Coffee!!",
                Title = "Knives Out",
                Updated = null,
            }
        };

        private readonly ILogger<MoviesController> _logger;

        public MoviesController(ILogger<MoviesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<MovieModel> Get()
        {
            return Movies.OrderBy(m => m.Created);
        }
        
        [HttpGet]
        [Authorize]
        [Route("{id}")]
        public MovieModel Get(int id)
        {            
            return Movies.First(m => m.Id == id);
        }

        [HttpPost]
        [Authorize]
        public void Post(MovieModel model)
        {
            model.Id = Movies.Max(m => m.Id) + 1;
            Movies.Add(model);
        }

        [HttpPut]
        [Authorize]
        public void Put(MovieModel model)
        {
            var target = Movies.First(m => m.Id == model.Id);
            Movies.Remove(target);
            Movies.Add(model);
        }

        [HttpDelete]
        [Authorize]
        [Route("{id}")]
        public void Delete(int id)
        {
            var deleteMe = Movies.First(m => m.Id == id);
            Movies.Remove(deleteMe);
        }
    }
}
