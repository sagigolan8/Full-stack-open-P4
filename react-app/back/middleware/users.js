exports.userValidate = (req,res,next)=>{
    const { username,password} = req.body
    if(!username || !password)
    {
        res.status(403).send('username and password required!!!!')
        return
    }
    if(username.length < 3 ){
        res.status(400).send('username must be at least 3 characters')
        return
    }
    if(password.length < 3 ){
        res.status(401).send('password must be at least 3 characters')
        return
    }
    next()
}