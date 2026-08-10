import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Showdata = () => {
    const [allusers,setAllusers]=useState([]);
    const [form,setForm]=useState({movieName:'',theatre:'',showTime:'',seatNumber:''
        ,customerName:'',ticketPrice:'',bookingDate:'',status:''});

    const loadusers=async()=>{
        const {data}=await axios.get("http://localhost:8080/tickets")
        setAllusers(data);
    }

    useEffect(()=>{
        loadusers()
    },[])

     const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({...form,[name]:value})
     } 
     const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:8080/tickets/${id}`)
        loadusers();
     }  

     const handleSubmit= async(e)=>{
        e.preventDefault();
        if(form.id){
            await axios.put(`http://localhost:8080/tickets`);
        }else{
            await axios.post(`http://localhost:8080/tickets`,form)
        }
        loadusers();
        setForm({movieName:'',theatre:'',showTime:'',seatNumber:''
        ,customerName:'',ticketPrice:'',bookingDate:'',status:''});

        

     }
     const Edit=(user)=>{
        setForm(user);
     }


  return (
    <div>
        <center>
            <table border='2'>
                <thead>
                    <tr>
                        <th>movieName</th>
                        <th>theatre</th>
                        <th>showTime</th>
                        <th>seatNumber</th>
                        <th>customerName</th>
                        <th>ticketPrice</th>
                        <th>bookingDate</th>
                        <th>status</th>
                         <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {allusers.map((m)=>(
                        <tr key={m.id}>
                            <td>{m.movieName}</td>
                            <td>{m.theatre}</td>
                            <td>{m.showTime}</td>
                            <td>{m.seatNumber}</td>
                            
                            <td>{m.customerName}</td>
                            <td>{m.ticketPrice}</td>
                            <td>{m.bookingDate}</td>
                            <td>{m.status}</td>
                            <td>
                                <button onClick={()=>handleDelete(m.id)}>Delete</button>
                            
                            { "   "}
                                <button onClick={()=>Edit(m)}>Update</button>
                            </td>
                        </tr>
                    ))

                    }
                    

                </tbody>
            </table>
        </center>

        <form onSubmit={handleSubmit}>
           MovieName: <input type="text" name='movieName'  value={form.movieName} onChange={handleChange}/><br />
           theatre: <input type="text" name='theatre' value={form.theatre} onChange={handleChange} /><br />
           showTime: <input type="text" name='showTime' value={form.showTime} onChange={handleChange} /><br />
           seat Number: <input type="text" name='seatNumber' value={form.seatNumber} onChange={handleChange} /><br />
           customerName: <input type="text" name='customerName' value={form.customerName} onChange={handleChange} /><br />
           ticketPrice: <input type="text" name='ticketPrice' value={form.ticketPrice} onChange={handleChange} /><br />
           bookingDate: <input type="text" name='bookingDate' value={form.bookingDate} onChange={handleChange} /><br />
           status: <input type="text" name='status' value={form.status} onChange={handleChange} /><br />
           <button type='submit'>{Edit?"update":"Add"}</button>
           


        </form>



    </div>
  )
}

export default Showdata