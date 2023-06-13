let ctrl = {};
ctrl.post = (req, res)=>{
    res.send('Solicitud Post')
}
ctrl.put = (req, res)=>{
   res.send('Solicitud Put')
}
ctrl.deletetp = (req, res)=>{
   res.send('Solicitud Delete')
}
ctrl.get = (req, res)=>{
   res.send('Solicitud Get')
}

module.exports = ctrl;