$(document).ready(function() {
    function AnItemList() {
      this.itemsAvailable = [];
    };
  
    AnItemList.prototype.add = function(itmObj) {
      return this.itemsAvailable.push(itmObj);
    };
  
    AnItemList.prototype.remove = function(index) {
      this.itemsAvailable.splice(index, 1);
    };
    
    function InventoryApp() {
      this.itemsAvailable1 = new AnItemList();
    };
  
    InventoryApp.prototype.addItem = function(itmObj) {
      this.itemsAvailable1.add(itmObj);
    };
  
    InventoryApp.prototype.removeItem = function(index) {
      this.itemsAvailable1.remove(index);
    };
    
    function Product(desc, qty) {
      this.itDescription = desc;
      this.qty = qty;
  
      return this;
    };
     
    function itemRender(itObj, length) {
      var template = "<tr> \
                      <td>" + length + "</td> \
                      <td>" + itObj.itDescription + "</td> \
                      <td>" + itObj.qty + "</td> \
                      </tr>";
  
      return template;
    };
    
    function addBtn(itDesc, qty) {
        return new Product(itDesc, qty);
      }
      
    var inventoryView = (function() {
       
      function privateAdder(container, appended) {
        $(container).append(appended);
      }
  
      return {
        adder: privateAdder
      };
    })();
    
    var inventoryController = (function() {
      var newInv = new InventoryApp();
      newInv.addItem(addBtn('laptop', 3));
      newInv.addItem(addBtn('keyboard', 2));
      newInv.addItem(addBtn('Erg. keyboard', 2));
      newInv.addItem(addBtn('mouse', 5));
      
      var itemCollection = newInv.itemsAvailable1.itemsAvailable;
  
      function readArray() {
        itemCollection.forEach(function(item, index) {
          //console.log(itemCollection);
          var $whereToAppend = $('table tbody:last-child');
          var forItemID = index + 1;     
          inventoryView.adder($whereToAppend, itemRender(item, forItemID));
        });
      }
      readArray();
   
      var $addBtn = $('#add');
      var $remBtn = $('#remBtn');
      var $btnOK = $('#btnOK');
      var $btnRemOK = $('#btnRemOK');    
      var $btnSection = $('#btnSection');
      var $capturer = $('#capturer');
      var $remover = $('#remover');
      var $tableAndBtnSection = $('table, #btnSection');
  
      $addBtn.on('click', function() {
        $capturer.fadeIn(1000);
        $tableAndBtnSection.hide();
      });
  
      $btnOK.on('click', function() {
        var inpDescVal = $('#itDescription').val();
        var inpQtyVal = $('#qty').val();
  
        if (inpDescVal) {
          $('table tbody').find("tr").remove();
          newInv.addItem(addBtn(inpDescVal,inpQtyVal ));
          readArray();
          $capturer.hide();
          $tableAndBtnSection.fadeIn();
        } else {
          alert("No info captured, please verify inputs");
        }
      });
      
      $remBtn.on('click', function() {
        $remover.fadeIn(1000);
        $tableAndBtnSection.hide();
      });
      
      $btnRemOK.on('click', function() {
        var inpId = $('#id').val();
     
        if (inpId) {
          var limit = itemCollection.length;
          console.log(limit);
          if (itemCollection.length > 0 && inpId <= limit){
          newInv.removeItem(inpId - 1);
          $('table tbody').find("tr").remove();
          readArray();
          $remover.hide();
          $tableAndBtnSection.slideDown();
          }
          else{
            alert('No Item to remove at this id')
          }
        } else {
          alert("No info captured, please verify inputs");
        }
      });
      
      $btnBack.on('click', function() {
          $capturer.hide();
          $remover.hide();
          $tableAndBtnSection.fadeIn(); 
      });

    })();
  
  }); 