const mongoose=require('mongoose');
const {Schema}=mongoose;
main().then(console.log("connection successfull"))
    .catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const orderSchema= new Schema({
    item:String,
    price:Number,
});

const customerSchema=new Schema({
    name:String,
    orders:[{
        type:Schema.Types.ObjectId,
        ref:'order'
    }]
});

const Order=mongoose.model("order",orderSchema);
const Customer=mongoose.model("customer",customerSchema);

const addCustomer=async()=>{
   let cust1=new Customer({name:'Rahul Kumar',});

   let order1=await Order.findOne({item:'chips'});
   let order2=await Order.findOne({item:'Chocolate'});
   
   cust1.orders.push(order1);
   cust1.orders.push(order2);

   let result= await cust1.save();
   console.log(result);
}

const findCustomer=async()=>{
    let res=await Customer.find().populate('orders');
    console.log(res);
}

const addOrders=async()=>{
    let res= await Order.insertMany([
            {
                item:'Samosa',
                price:12
            },
            {
                item:'chips',
                price:'10'
            },
            {
                item:'Chocolate',
                price:40,
            },],
        );
    console.log(res);
};

addOrders();
addCustomer();
findCustomer();