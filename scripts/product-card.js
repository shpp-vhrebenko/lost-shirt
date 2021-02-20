(function() {
  const colors = {
    black: "07",
    white: "08",
    green: "09",
    blue: "10",
    red: "11"
  };
  const controllsColor = document.querySelectorAll(".filter-color__link");
  const controllsSize = document.querySelectorAll(".filter-size__link");
  const productImg = document.querySelector(".product__img");
  const activeClassColor = "filter-color__item--type-select";  
  const activeClassSize = "filter-size__item--type-select";

    controllsColor.forEach(function(control) {      
      control.addEventListener("click", function(e) {
        e.preventDefault();         
        const colorName = control.getAttribute("data-color");        
        controllsColor.forEach(function(link) {
          link.closest(".filter-color__item").classList.remove(activeClassColor);
        })
        control.closest(".filter-color__item").classList.add(activeClassColor); 
        productImg.setAttribute("src", "./images/tshirts/tshirt_" + colors[colorName] + ".png");       
      })
    })

    controllsSize.forEach(function(control) {      
      control.addEventListener("click", function(e) {
        e.preventDefault();               
        controllsSize.forEach(function(link) {
          link.closest(".filter-size__item").classList.remove(activeClassSize);
        })
        control.closest(".filter-size__item").classList.add(activeClassSize);           
      })
    })

  })();