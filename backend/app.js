const express=require(express);

const app=expres();

const adminRoutes = require('./AdminRoutes/admin');

app.use(adminRoutes);

app.listen(3000);



