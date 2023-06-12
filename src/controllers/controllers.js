let ctrl = {
    
}
ctrl.post = (req, res)=>{
    res.send('post')
}
ctrl.put = (req, res)=>{
   res.send('put')
}
ctrl.delete = (req, res)=>{
   res.send('delete')
}
ctrl.get = (req, res)=>{
   res.send('get')
}

module.exports = ctrl;