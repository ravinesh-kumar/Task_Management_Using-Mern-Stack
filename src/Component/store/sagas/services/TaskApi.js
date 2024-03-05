export async function addTask(payload) {
  let response = await fetch("http://localhost:8080/api/task", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify( payload ),
  });
  return await response.json();
}
export async function getTask() {
  let response = await fetch("http://localhost:8080/api/task", {
    method: "get",
    headers: {
      "content-type": "application/json",
    },
  });
  let x = await response.json();

  return x;
}
export async function updateTask(payload) {
  console.log(`API update`, payload._id);
  console.log(`API update`,{...payload});
  let response = await fetch("http://localhost:8080/api/task/" + payload._id, {
    method: "put",
    headers: {
      "content-type": "application/json",
      
    },
    body:  JSON.stringify( payload ),
    
  });
  var a = response.json()
  console.log(`from api `, a);
  return await a
  // var data = response.json()
  // var data2 =response
  // console.log(`API RESPONSE`,data);
  // console.log(`API RESPONSE data2`,data2);

  // return await getTask(); 
  // console.log('====================================');
  // let x = await getTask();
  // let y = x.data;
  // y = await JSON.parse(y);
  // console.log('my YY', x);

  // console.log('====================================');
  // return x;
}
export async function deleteTask(payload) {
  let response = await fetch("http://localhost:8080/api/task/" + payload._id, {
    method: "delete",
    headers: {
      "content-type": "application/json",
       
    },
  });
  return await response.json();
}