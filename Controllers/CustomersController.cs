using BlueMoonAdmin.Data;
using BlueMoonAdmin.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlueMoonAdmin.Controllers
{
    public class CustomersController : Controller
    {
        private readonly ApplicationDbContext _db;

        public CustomersController(ApplicationDbContext db)
        {
            _db = db;
        }



        public IActionResult Index()
        {

            IEnumerable<Customers> objList = _db.Customers;
            return View(objList);
        }

        public IActionResult CreateCustomer()
        {

            IEnumerable<Customers> objList = _db.Customers;
            return View(objList);
        }

    }

}
