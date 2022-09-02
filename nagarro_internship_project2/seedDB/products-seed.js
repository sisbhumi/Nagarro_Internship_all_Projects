const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------LongDresses-------------------------//
  const long_dresses_titles = [
    "Classic Blue LongDress",
    "Black Fjallraven Long Dress",
    "Brown and Green Leather Long Dress",
    "Grey Stylish Long Dress",
    "Elegant Black Long Dress",
    "Practical Blue Long Dress With Leather Jacket",
    "Soft Classic Biege Long Dress",
    "Practical Durable Long Dress",
    "Comfortable Long Dress"
  ];
  const long_dresses = [
    "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618333452884-5c8d211ed2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1602303894456-398ce544d90b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1616313253719-c46514cddee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618244965061-1d27b208d6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1551977105-71d5b47c25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  ];

  //--------------------Jackets
  const Jackets_titles = [
    "Stylish Pastel Pink Travel Jacket",
    "A Fahionable Jacket",
    "White and Black Jacket",
    "Rainbow Dotted Duffle Jacket",
    "Blue and Gray Classic Jackete",
    "A Set of Three Hard Durable Jacket",
    "Light Blue Jacket",
    "Black Leather Vintage Jacket",
    "Long Jacket",
    "Stylish Long Jacket"
  ];

  const jacket_imgs = [
    "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618333452884-5c8d211ed2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1617059322001-a61ce9551e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1582676698140-2fcf355933d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585229593056-ddd606c911de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1603217192766-e9db2d08a0fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1582749474001-14328121e605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1625795191138-8ffb8b9fd89e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  ];

  //--------------------pants----------------------//
  const pants_titles = [
    "Classic Red Printed  Pants",
    "Blue Damaged Durable Jeans",
    "Classic Blue Jeans",
    "Fancy Cheks Pants"
  ];

  const pants_imgs = [
    "https://images.pexels.com/photos/1075776/pexels-photo-1075776.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600"

  ];

  //--------------------Mini Bags
  const tops_titles = [
    "lassic party wear top",
    "Classic top",
    "Dail wear top",
    "Red Carra Shoulder Bag",
    "Sleeve Less Top",
    "Full Sleve Sweat Shirt",
    "Formal Shirt with dot print",
    "Formal Shirt",
    "Stunning Black Off Shoulder Top",
    "Eligant White Tees",
    "Pair of two tops",
    "Formal White Shirt"
  ];
  const tops_imgs = [
    "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1570915226741-cc7d678ad7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk1fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1596596866830-f01857e2ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA4fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588186941286-724357304676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA5fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1553533877-d0aadb41eb08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE1fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588187284031-cb3fa95ebb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM4fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1587754551134-74d789c4f22e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY3fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1617058717173-5b171b787725?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk5fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA3fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1511550521256-8526928a8af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE0fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1523944339743-0fe06f079939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzI1fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1587466317255-083616f2fcd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzUzfHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    
  ];

  //--------------------Saree----------------------------//

  const Saree_titles = [
    "Elegant Pink Silk Saree",
    "Ethnic Pink Saree",
    "South Indian Silk Saree",
    "Bridal Red Saree",
    "Ethnic White Saree",
    "Black Saree with patter print",
    "Party wear Saree With Blouse",
    "Golden Banarasi Saree",
    "Classic Printed Saree",
    "Set of Two Cotton Saree",
    "Eleant Blue Party wear  Saree",
  ];
  const Saree_imgs = [
    "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1616586169180-2671c5e1cbdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGluZGlhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1617633150878-7df1d12a9a57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGluZGlhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626193082209-e405220d147b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGluZGlhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1552109870-dfa8590de1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGluZGlhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1624044107982-645cba9edd6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGluZGlhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1613463376962-8a6452d716af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxpbmRpYW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7920055/pexels-photo-7920055.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2784078/pexels-photo-2784078.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  //-----------------------Kurtis
  const Kurtis_titles = [
    "Set of Tow Kurtis with banarasi Dupatta",
    "Classic Pink Embroidered Kurti with Pants",
    "Classic white EMriodered Dress",
    "Pink weeding wear",
    "Multicolor Kurti",
    "Long Golden Embriodered Gown",
    "Long Grey Gown",
    "Beautiul Gown",
    "Blue Shimeer Gown",
  ];
  const Kurtis_imgs = [
    "https://images.pexels.com/photos/7176428/pexels-photo-7176428.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9036914/pexels-photo-9036914.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1583391734039-1c611b6d9bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGluZGlhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1603124553040-b7b5d58375a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGluZGlhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1597983073750-16f5ded1321f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1610047592780-aa246f5635c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1616583936499-d4116e7e2e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1610048616025-11a3dcc9fd0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1610202631408-fa6ba0f39ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  ];

  //-----------------Partywear

  const Partywear_titles = [
    "Plain Red party wear",
    "Elegant Red Party wear",
    "Handmade Embroided White Party wear s",
    "Golden Party wear",
    "Blue Cotton Party wear",
    "Simple White Party wear",
    "Earth Positive Party wear",
    "Dark black Party wear",
    "Red Glittered Party wear",
    "Grey Wolf Party wear",
    "Yellow and Green Bold Party wear",
  ];
  const Partywear_imgs = [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbmluZyUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583039949284-ad687e198fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1613966795099-162cbc43bbc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1623609163859-ca93c959b98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1611320865443-383e06e70996?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1591085439840-23dbb7ff0609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1606815217429-fcf7b48d187e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1554787497-98caae0f95df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1619715613791-89d35b51ff81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/flagged/photo-1580141043903-ef7df571364b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(long_dresses_titles, long_dresses, "LongDresses");
  await seedProducts(pants_titles, pants_imgs, "Pants");
  await seedProducts(Jackets_titles, jacket_imgs, "Jacket");
  await seedProducts(tops_titles, tops_imgs, "Tops");
  await seedProducts(Saree_titles, Saree_imgs, "Saree");
  await seedProducts(Kurtis_titles, Kurtis_imgs, "Kurtis");
  await seedProducts(Partywear_titles, Partywear_imgs, "Partywear");

  await closeDB();
}

seedDB();
