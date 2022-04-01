var p_array = [];
function add() {
  var id = document.getElementById("pid").value;
  var name = document.getElementById("pname").value;
  var price = document.getElementById("pprice").value;
  //   console.log(" "+id)
  //   console.log(" "+name)
  //   console.log(" "+price)
  mytable =
    "<table border='1'><tr><th>Product ID</th><th>Product Name</th><th>Product Price</th></tr>";
 
  var product = {
    Product_ID: id,
    Product_Name: name,
    Product_price: price,
  };
  p_array.push(product);
  p_array.forEach((element) => {
    mytable +=
      "<tr><td>" +
      element.Product_ID +
      "</td><td>" +
      element.Product_Name +
      "</td><td>"+
      element.Product_price+"</td></tr>";
    //  console.log(" "+id );
    //  console.log(" "+name);
    //  console.log(" "+price);
  });
  mytable += "</table>";
  //   console.log(" "+mytable)

  document.getElementById("table").innerHTML = mytable;
  console.log(" " + mytable);
}
