const mongoose=require('mongoose');

const {Schema}=mongoose;

main().then(console.log("connection successfull"))
    .catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const userSchema= new Schema({
    username:String,
    email:String,
});

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});

const User=mongoose.model("User",userSchema);
const Post=mongoose.model('Post',postSchema);

const addData=async()=>{
    let user1=new User({
        username:'RahulKumar',
        email:'rahulkumar@email.com'
    });

    let user2=new User({
        username:'AkashKashyap',
        email:'akashkashyap@email.com'
    });

    let post1=new Post({
        content:"Hello World",
        likes:7
    });

    let post2=new Post({
        content:"Bye Bye",
        likes:10
    });
    let post3=new Post({
        content:"the World is Mine",
        likes:13
    });

    let post4=new Post({
        content:"Im invincible",
        likes:18
    });

    post1.user=user1;
    post2.user=user1;

    post3.user=user2;
    post4.user=user2;

    await user1.save();
    await user2.save();

    await post1.save();
    await post2.save();
    await post3.save();
    await post4.save();
}

const find=async()=>{
    let res=await Post.find().populate("user","username",);
    console.log(res);
}

// addData();
find();