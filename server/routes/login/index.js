const db = require("../../services/connections/connect")

const login = async(req,res)=>{
    const {username,password} = req.body
    try{
    const user = await db.one('SELECT * FROM users where username=${username} and password=${password}',{username,password})
        if(user){
          req.session.userId = user.id;
            res.status(200).send({
                  status:true,
                  message:"successful"
            })
        }
    }catch(err){
        console.log('errlogin', err)
    }
    return
}

const signup = async (req, res) => {
    const {username,password} = req.body
    try {
      await db.none('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password] )
      res.send({
        status: true,
        message: "successful"
      })
    } catch (err) {
      console.log('errsignup', err)
      res.status(500).send({
        status: false,
        message: "error"
      })
    }
}

      const logout = (req, res) => {
         req.session.destroy((err) => {
          if (err) {
          console.log('Error destroying session:', err);
          res.status(500).send({
            status: false,
            message: 'Error destroying session',
               });
          } else {
          res.status(200).send({
           status: true,
           message: 'Session destroyed',
            });
             }
          });
       };


module.exports = { login, signup, logout };