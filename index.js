// import express from "express";
// import bodyParser from "body-parser";
// import StaticPath from "path";
// import mysql from "mysql";
// const __dirname = StaticPath.dirname(new URL(import.meta.url).pathname);
// const app = express();
// const urlencodedParser = bodyParser.urlencoded({extended:false})
// var dateObj =  new Date();
// var month = dateObj.getUTCMonth() + 1; //months from 1-12
// var day = dateObj.getUTCDate();
// var year = dateObj.getUTCFullYear();
// var date = day+"/"+month+"/"+year;
// var router = express.Router()
// import session from "express-session";
// //database 
// const port = 3333
// const connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : '',
// 	database : 'capta'
// });

// //--------------------------set methods
//  app.set('view engine', 'ejs');
// app.set('views',StaticPath.join(__dirname+'/views'));
// //--------------------------use methods
// // app.use(upload())
// app.use(express.static(StaticPath.join(__dirname+'/public')));

// app.use(session({
// 	secret: 'uiadadq313cda241df2r01849193',
// 	resave: true,
// 	saveUninitialized: true
// }));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// //------------------------get methods
// app.get('/', (req, res) => {
// 	const filepath = StaticPath.join(__dirname,'/views/index.html');
// 	res.sendFile(filepath);
// });

// app.get('/dashboard', (req, res) => {
// 	const filepath =  StaticPath.join(__dirname+'/views/dash.html');
// 	res.sendFile(filepath);
//   });

// app.get('/manage', (req, res) => {
	
// 	connection.query('SELECT COUNT(id) AS idcount from users Where role=1',(err2,total)=>
// 			{
// 				if (err2){throw err2}else{
// 					res.render(StaticPath.join(__dirname+'/dash/manage'),{count:total});
			
// 				}
// 			});
//   });
// app.get('/manage/manage-users', (req, res) => {
// 	connection.query('SELECT * FROM users',(err, rows)=> {
// 		if (err) {
// 			throw err
// 		} else {
			
// 				res.render(StaticPath.join(__dirname+'/manage/manage-user'),{data:rows});
// 			}
// 	});
//   });

// app.get('/manage/add-user', (req, res) => {
// 	res.sendFile(StaticPath.join(__dirname+'/views/manage/add-user.html'));
//   });
// //------------------------post methods
// //login 
// app.post('/',(req, res) =>{
// 	let email = req.body.email;
// 	let password = req.body.password;
// 	console.log(email,password);
// 	 if (email && password) {
// 		connection.query('SELECT * FROM users WHERE email = ? AND pass = ?', [email, password], (error, results, fields)=>{

// 			if (error) throw error;
// 			if (results.length > 0) {
// 				req.session.loggedin = true;
// 				req.session.email = email;
// 				res.redirect('/dashboard');
// 			} else {
// 				res.sendStatus('Invalid Email or Password');
// 			}			
// 			res.end();
// 		});
// 	} else {
// 		res.sendStatus('Please check all the input');
// 		res.end();
// 	}
// 	//res.json(req.body);
// });
// //-----------add user details 
// //helper 


// app.post('/manage/add-user',(req, res) =>{
// 	 let name = req.body.username
// 	 let email = req.body.email
// 	 let phone = req.body.phone
// 	 let addr = req.body.addr
// 	 let city = req.body.city
// 	 let country = req.body.country
// 	 let pincode= req.body.pincode
// 	 let bname= req.body.bname
// 	 let bcode = req.body.bcode
// 	 let anumber = req.body.anumber
// 	 let ifsc = req.body.ifsc
// 	 let role = req.body.role
// 	 //file upload 
// 	 var pan = req.body.pan
// 	 var panname= req.body.pan
// 	 var adhar = req.body.adhar 
// 	 var resume = req.body.resume
// 	 var photo = req.body.photo
// 	 var type=""
// 	 if(req=='1'){
// 		type="Manager"
// 	 }else{
// 		type="Trainer"
// 	 }
// 	 var defaultpass= "123456"
// 	 //validate and add to trainer 
// 	 if ( name && email) {
// 		connection.query('Insert Into users(name,email,phone,address,city,country,postcode,bname,bcode,ifsc,anumber,role,type,cdate,pass) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', 
// 		[name,email, phone,addr,city,country,pincode,bname,bcode,ifsc,anumber,role,type,date,defaultpass], (error, results, fields)=>{
// 			if (error) throw error;
// 				req.session.loggedin = true;
// 				req.session.email = email;
// 				res.render(StaticPath.join(__dirname+'/manage/add-user'),{message:'User Addedd Sucessfully'});
// 				res.end();
// 		});
// 	} else {
// 		res.render(StaticPath.join(__dirname+'/manage/add-user'),{message:'Please Enter Valid Details'});
// 		res.end();
// 	//	const token = localStorage.getItem('token');
// 	}


// 	// req.body.pan.mv('/uploads/pan'+panname,(err)=>{
// 	// 	if(err){console.log(err)}
// 	//abhi@gmail_logo.png
// 	// 	else{
// 	// 		console.log("uploaded");
// 	// 	}

// 	// });
// 	//res.json(req.body);
// });

// //----------------------helper functions 


// //end
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })

// // import express  from "express";
// // const app = express();
// // app.use('/',(req,res)=>{
// // 	res.json({message:"server"})
// // })
// // app.listen(3333,()=>{
// // 	console.log("port running")
// // })