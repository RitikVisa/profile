import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Car() {

    const [cars, setCars] = useState([])
    const [carObj, setCarObj] = useState({ _id: "", name: "", rating: "", color: "", price: "" })
    const [btn, setBtn] = useState('Save')
    const url = 'https://carapiserivice.onrender.com/api/car'
    useEffect(() => {
        getCars()
    }, [])

    function editData(el) {
        setCarObj({ _id: el._id, name: el.name, rating: el.rating, color: el.color, price: el.price })
        setBtn('Update')
    }

    // Cls 
    function cls() {
        setCarObj({ _id: "", name: "", rating: "", color: "", price: "" })
        setBtn('Save')
    }

    // Handle Change Event
    function handleChange(e) {
        setCarObj({ ...carObj, [e.target.name]: e.target.value })
    }

    // handleSubmit event
    function handleSubmit(e) {
        e.preventDefault()
        if (carObj._id) {
            putCar()
        } else {
            postCar()
        }
        
        cls()
    }

    // Delete Logic
    async function deleteCar(id) {
        try {
            const {data} = await axios.delete(url + `/${id}`)
            console.log("Deleted Data : ",data);
            getCars()
        } catch (error) {
            console.log(error.message);
        }
    }

    // Put Logic
    async function putCar() {
        try {
            const { data } = await axios.put(url + `/${carObj._id}`, carObj)
            console.log("Updated Data : ", data);
            getCars()
        } catch (error) {
            console.log(error.message);
        }
    }

    // Post logic
    async function postCar() {
        try {
            const { data } = await axios.post(url, { name: carObj.name, rating: carObj.rating, color: carObj.color, price: carObj.price })
            console.log("Saved Data", data);
            getCars()
        } catch (error) {
            console.log(error.message);
        }
    }

    // Get logic
    async function getCars() {
        try {
            const { data } = await axios.get(url)
            setCars(data.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} type="text" name='name' placeholder='Enter Car Name' className='form-control' value={carObj.name} />
                        <input onChange={handleChange} type="text" name='rating' placeholder='Enter Car Rating' className="form-control my-2" value={carObj.rating} />
                        <input onChange={handleChange} type="text" name='color' placeholder='Enter Car color' className="form-control my-2" value={carObj.color} />
                        <input onChange={handleChange} type="text" name='price' placeholder='Enter Car Price' className="form-control ny-2" value={carObj.price} />
                        <input onChange={handleChange} type="submit" value={btn} className="btn btn-primary" />
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>color</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map(el => (
                                <tr key={el._id}>
                                    <td>{el.name}</td>
                                    <td>{el.rating}</td>
                                    <td>{el.color}</td>
                                    <td>{el.price}</td>
                                    <td><button onClick={() => { editData(el) }} className="btn btn-dark">Edit</button></td>
                                    <td><button onClick={()=>{deleteCar(el._id)}} className="btn btn-danger">Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Car