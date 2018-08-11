const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');



// Connection string
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_v1"
});

// Connect to mysql

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'welcome' })
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});

app.get('/userList', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM user ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/userrole', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM user_role ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/rolemap1', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM user_role_mapping ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});

//SUMAN

 

app.post('/demoInsert', function (req, res) {
 
  let user_role_id = req.body.user_role_id;
  let role_code = req.body.role_code ;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description ;

  if (!user_role_id) {
      return res.status(400).send({ error:true, message: 'Please provide user_role_id' });
  }

  con.query("INSERT INTO user_role SET ? ", { user_role_id: user_role_id , role_code: role_code ,role_name: role_name ,role_description: role_description }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New role has been created successfully.' });
  });
});
app.put('/demoInsert', function (req, res) {
 
  let user_role_id = req.body.user_role_id;
  let role_code = req.body.role_code ;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description ;

  con.query("INSERT INTO user_role SET ? ", { user_role_id: user_role_id , role_code: role_code ,role_name: role_name ,role_description: role_description }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New role has been edited successfully.' });
  });
});



app.delete('/demoList', function(req, res){
  /*let user_role_id = req.body.user_role_id;
  let role_code = req.body.role_code ;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description ;*/
  

  con.query("DELETE FROM user_role WHERE user_role_id = ?",[req.params.user_role_id],{ user_role_id: user_role_id }, function (error, results, fields) {
    if (error) throw error;
    return res.send({ message: 'New role has been deleted successfully.' });
});
});
//SUMAN

app.get('/roleMap', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * FROM user_role_mapping ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/roleMapping', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * from user right join user_role_mapping on user.emp_id = user_role_mapping.emp_id inner join user_role on user_role.role_code = user_role_mapping.role_code";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/roleMapping1', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * from user right join user_role_mapping on user.emp_id = user_role_mapping.emp_id inner join user_role on user_role.role_code = user_role_mapping.role_code WHERE user_role.role_code='asso'";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/taskMembers', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * from task right join task_members on task.task_id = task_members.task_id INNER JOIN task_report ON task_members.emp_id=task_report.emp_id AND task_members.task_id=task_report.task_id ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});

app.delete('/userdel1/:id', function (req, res) {
 
  let id = req.params.id;
 
  con.query('DELETE FROM user WHERE user_id = ?',[id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.delete('/userdel2/:id', function (req, res) {
 
  let id = req.params.id;
 
  con.query('DELETE FROM user_role WHERE role_id = ?',[id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.delete('/userdel3/:id', function (req, res) {
 
  let id = req.params.id;
 
  con.query('DELETE FROM user_role_mapping WHERE role_code = ?',[id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.put('/editrole', function (req, res) {
 
  let user_id = req.body.user_id;
  let first_name = req.body.first_name;

  if (!user_id || !first_name) {
      return res.status(400).send({ error: task, message: 'Please provide role and emp_id' });
  }

  con.query("UPDATE user SET first_name = ? WHERE user_id = ?", [first_name, user_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.put('/updateuser', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let phone_no = req.body.phone_no;
  let Email = req.body.Email;
  let Gender = req.body.Gender;
  let modified_by = req.body.modified_by;

  

  con.query("UPDATE user SET first_name = ?,last_name = ? ,phone_no = ?, Email = ?,Gender = ?,modified_by=? WHERE emp_id = ?", [first_name,last_name,phone_no,Email,Gender,modified_by, emp_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.put('/updateuserr', function (req, res) {
 
  let role_id = req.body.role_id;
  let role_code = req.body.role_code;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description;
  let modified_by=req.body.modified_by;

  

  con.query("UPDATE user_role SET role_code = ?,role_name = ? ,role_description = ?,modified_by=? WHERE role_id = ?", [role_code,role_name,role_description,modified_by,role_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.post('/demoInsert', function (req, res) {
  //Make SQL statement:
  var sql = "INSERT INTO task (Title, Status) VALUES ?";
  //Make an array of values:
  var values = [
    ['Go to Movie', 'pending']
  ];
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data Inserted' });
  });
});

app.post('/adduser', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let phone_no = req.body.phone_no;
  let Email = req.body.Email;
  let Gender = req.body.Gender;
  let created_by = req.body.created_by
  

  if (!emp_id) {
      return res.status(400).send({ error:true, message: 'Please provide emp_id' });
  }

  con.query("INSERT INTO user SET ? ", { emp_id: emp_id ,first_name: first_name, last_name: last_name, phone_no: phone_no,Email:Email, Gender:Gender,created_by:created_by  }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});
app.post('/addrole', function (req, res) {
 
  let role_id = req.body.role_id;
  let role_code = req.body.role_code;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description;
  let created_by = req.body.created_by
  
  

  if (!role_id) {
      return res.status(400).send({ error:true, message: 'Please provide emp_id' });
  }

  con.query("INSERT INTO user_role SET ? ", { role_id: role_id ,role_code: role_code,role_name: role_name, role_description: role_description,created_by: created_by  }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});

app.put('/changepassword', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let password = req.body.password;
  let modified_by = req.body.modified_by;

  con.query("UPDATE user SET password = ?,modified_by = ? WHERE emp_id = ?", [password,modified_by,emp_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});

app.put('/tcapture', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let task_id = req.body.task_id;
  let month = req.body.month;
  let Value = req.body.Value

  con.query("UPDATE task_report SET month = ?,Value = ? WHERE emp_id = ? AND task_id = ?", [month,Value,emp_id,task_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});


app.put('/updateprofile', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let phone_no = req.body.phone_no;
  let Email = req.body.Email;
  let Gender = req.body.Gender;
  let modified_by = req.body.modified_by
  

  

  con.query("UPDATE user SET first_name = ?,last_name = ? ,phone_no = ?, Email = ?,Gender = ?,modified_by=? WHERE emp_id = ?", [first_name,last_name,phone_no,Email,Gender,modified_by, emp_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
//Sumantask
app.delete('/taskdel1/:id', function (req, res) {
 
  let id = req.params.id;
 
  con.query('DELETE FROM task WHERE task_id = ?',[id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been deleted successfully.' });
  });
});

app.get('/tasklist', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM task ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Task List success' });
  });
});

app.post('/entertask', function (req, res) {
 
  
  let task_name = req.body.task_name;
  let task_description = req.body.task_description;

  



  con.query("INSERT INTO task SET ? ", { task_name: task_name, task_description: task_description, 
     }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});
app.put('/updatetask', function (req, res) {
 
  let task_id = req.body.task_id;
  let task_name = req.body.task_name;
  let task_description = req.body.task_description;
  

  

  con.query("UPDATE task SET task_name = ? ,task_description = ? WHERE task_id = ?", [task_name,task_description,task_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.put('/updatemapping', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let role_code = req.body.role_code;
  

  

  con.query("UPDATE user_role_mapping SET role_code = ?  WHERE emp_id = ?", [role_code,emp_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.post('/assigntask', function (req, res) {
 
  let task_id = req.body.task_id;
  let emp_id = req.body.emp_id;
  
  
  

  

  con.query("INSERT INTO task_members SET ? ", { task_id: task_id ,emp_id: emp_id }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});

//Sumantask


app.get('/vtaskmem', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * from task_members right join user on task_members.emp_id = user.emp_id  ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});


app.get('/vtaskrep', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * from task_report left join task on task_report.task_id = task.task_id ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.post('/rolemapa', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let role_code = req.body.role_code ;
 
 

  con.query("INSERT INTO user_role_mapping SET ? ",{ emp_id: emp_id , role_code: role_code  }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New role has been created successfully.' });
  });
});
app.get('/taskcapture', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * FROM task INNER JOIN task_capture ON (task.task_id = task_capture.task_id) ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});

app.post('/ahy', function (req, res) {
 
  let parent_id = req.body.parent_id;
  let child_id = req.body.child_id ;
 
 

  con.query("INSERT INTO tag SET ? ",{ parent_id: parent_id , child_id: child_id  }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New role has been created successfully.' });
  });
});
app.put('/uhy', function (req, res) {
 
  let parent_id = req.body.parent_id;
  let child_id = req.body.child_id ;
  

  

  con.query("UPDATE tag SET parent_id = ?  WHERE child_id = ?", [parent_code,child_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.get('/ghy', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT c1.parent_id AS parent,c1.child_id as child1 ,c2.child_id as child2 ,c3.child_id as child3, c4.child_id as child4 FROM tag c1 LEFT JOIN tag c2 on (c2.parent_id=c1.child_id)LEFT JOIN tag c3 on (c3.parent_id= c2.child_id)LEFT JOIN tag c4 on (c4.parent_id = c3.child_id)LEFT JOIN tag c5 on (c5.parent_id = c4.child_id) LEFT JOIN tag c5 on (c5.parent_id = c4.child_id)  ";
  
   
 
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/tag', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM tag ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});