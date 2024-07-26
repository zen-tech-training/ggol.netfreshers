function Shopping(productId,name,price){
    this.productId=productId;
    this.name=name;
    this.price=price;
    this.quantity=0;
}

var Shopping_Cart=(function(){
    var items=[];
    return {
        addItem:function(item){
            var flag=true;
            for(var i in items){
                if(items[i].productId===item.productId){
                    items[i].quantity++;
                    flag=false;
                }
            }
            if(flag){
            items.push(item);
            }
        },

        removeItem:function(id){
            for(var i in items){
                if(items[i].productId===id){
                    items.splice(i,1);
                }
            }
        },
        GetAllItems:function(){
            for(var i in items){
                console.log(items[i]);
            }
        },
        getTotalPrice:function(){
            var total=0;
            for(var i in items){
                total+=items[i].price;
            }
            console.log(total);
        }

    }
   
})();

var s1=new Shopping(1,"abc",500);
var s2=new Shopping(2,"bcd",400);

var s3=new Shopping(1,"abc",500);
var s4=new Shopping(2,"ghfh",400);

Shopping_Cart.addItem(s1);
// Shopping_Cart.GetAllItems();
Shopping_Cart.addItem(s2);
Shopping_Cart.GetAllItems();
// Shopping_Cart.addItem(s3);
// Shopping_Cart.addItem(s4);

Shopping_Cart.removeItem(s1);

// Shopping_Cart.getTotalPrice();
Shopping_Cart.GetAllItems();