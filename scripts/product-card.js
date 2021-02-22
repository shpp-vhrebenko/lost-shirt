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
  const tabsControlls = document.querySelectorAll(".description-tab__link");
  const tabs = document.querySelectorAll(".description-list__item");

  const productImg = document.querySelector(".product__img");

  const activeClassLinkTab = "description-tab__item--active";
  const activeClassTab = "description-list__item-type--active";
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

    tabsControlls.forEach(function(control) {      
      control.addEventListener("click", function(e) {
        e.preventDefault();   
        const tabId = control.getAttribute("data-tab");    
        const activeTab = document.querySelector(`.${tabId}`); 
        
        tabsControlls.forEach(function(link) {          
          link.closest(".description-tab__item").classList.remove(activeClassLinkTab);
        })
        control.closest(".description-tab__item").classList.add(activeClassLinkTab);    
        
        tabs.forEach(function(tab) {          
          tab.classList.remove(activeClassTab);
        })
        
        activeTab.classList.add(activeClassTab)
      })
    })

  })();