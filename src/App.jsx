
// import {React , useState, useEffect} from 'react'
// import Navbar from './navbar';

// function App () {
//   const [data , setdata] = useState(10);

//   function addCounter() {
//     setdata(data + 1)
//   }
//   useEffect(() => {
//    alert("Hey welcome to my page");
//   }, [])
  
//   useEffect(() => {
//    alert("Hey welcome to my  new page");
//   }, [data])
  
//   return (
//   <>
//   < Navbar  color={"navy" + "blue"}/>

//   <h1>Hello world {data}</h1>
//   <h1>{data}</h1>
//   <button onClick={addCounter}>Add Counter</button>
//   </>
//   )
// }

// export default App






import {React , useState , useEffect} from 'react'



function App() {

  const [data , setdata] = useState(null);
   useEffect(() => {
    //  fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json)
    //   })
      
    //   .catch(err => console.log(err) )


      async  function getdata() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const res  = await response.json();
       setdata(res)
       console.log(res);
       
    }

   getdata()
   










   },[])


  
  
  
  return (
    <>
    <h1>Hello World</h1>
    <button >AddCounter</button>
   
    {/* {data ? data.map((item)=>{
        return <div key={item.id}>
          <h1>Name: {item.name}</h1>
          <h1>Email: {item.email}</h1>
          <hr />
        </div>
      }): <h1>Loading...</h1>}

   
   
  
   */}
  
   {
    data ? data.map ((item) =>{
      return <div key={item.id}>
        <h1>Name: {item.name}</h1>
        <h1>Email: {item.email}</h1>
      </div>
    }): <h1>Loading ....</h1>}
  
  





   

   </>
  )
}
export default App
























