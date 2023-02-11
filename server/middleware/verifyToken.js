import jwt from "jsonwebtoken"
import  {createError}  from "../error.js"

export  const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token   //user or admin ke cookies main acess token present hoga
    
    console.log("token: ",token);
    if(!token){
        return next(createError(401 , "You are not authenticated"))
    }
    jwt.verify(token, process.env.JWT , (err , user)=>{
        if(err) 
        return next(createError(403 , "invalid token"))
        req.user = user ;   //inserted the user into req.user
        next();

    }) 
    
}

// import jwt from "jsonwebtoken"

// import { createError } from "../error.js"

// export  const verifyToken = (req,res,next)=>{
//     const token = req.cookies.access_token   //user or admin ke cookies main acess token present hoga
//     console.log("token: " , token);
//     if(!token){

//         return next(createError(401 , "You are not authenticated"))
//     }
//     jwt.verify(token, process.env.JWT , (err , user)=>{
//         if(err) 
//         return next(createError(403 , "invalid token"))
//         req.user = user ;   //inserted the user into req.user
//         next();

//     })
// }
// export  const checkUser = ( req,res,next)=>{
//      verifyToken(req,res, next,  ()=>{
//         if(req.user.id === req.params.id || req.user.isAdmin)  //this will check data from the login user
//         next()
//         else{
//             return next(createError(403 , "You are not authorized"))
//         }
//     })
// }

// //checking admin authentication :: remember this will check from the user-login data itself
// export  const checkAdmin = ( req,res,next)=>{
//      verifyToken(req,res, next,  ()=>{
//         if(req.user.isAdmin)  //this will check data from the login user
//         next()
//         else{
//             return next(createError(403 , "You are not authorized"))
//         }
//     })

  
    
// }
