import userModel from "../model/user.js"
import bcrypt from 'bcrypt'
class userController{
    static register_page=(req,res)=>{
        res.render('register')
    }
    static register_user=async(req,res)=>{
        const hashPassword=await bcrypt.hash(req.body.password,10)
        try{
            const createUser=new userModel({
                name:req.body.name,
                email:req.body.email,
                password:hashPassword,
            })
            await createUser.save()
            res.redirect('/login')
        }catch(err){
            console.log(err)
        }
    }
    static login_page=(req,res)=>{
        res.render('login')
    }
    static login_user = async (req, res) => {
        const {email,password}=req.body;
        try {
          const result=await userModel.findOne({ email: email });
          if (result) { 
            const isMatch=await bcrypt.compare(password, result.password);
            if (isMatch){
              return res.redirect('home'); 
            } else {
              return res.send("Password is not correct");
            }
          } else {
            return res.send("Given email is not registered"); 
          }
        } catch(err){
          console.error(err);
        }
      };
      
    static home_page=(req,res)=>{
        res.render('home')
    }
}

export default userController