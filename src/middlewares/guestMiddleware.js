const guestMiddleware = (req, res, next) => {
    if(req.session.usuarioLogeado ==  undefined){
        next();
    }else{
        res.send("esta pagina es solo para invitados");
    }
}
module.exports = guestMiddleware;