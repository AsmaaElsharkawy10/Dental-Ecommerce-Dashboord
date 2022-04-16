import {React,useState,useEffect} from 'react'
import {useLocation,useNavigate } from 'react-router-dom'
import {useDispatch  } from 'react-redux';
import { editCustomer ,getCustomers } from './../../store/user/userSlice';

function UserEdit() {
const location = useLocation()
const customerInfo = location.state.customerData
const id = customerInfo._id
console.log(id)

const [fullName,setName] = useState(customerInfo.fullName)
const [image,setFile] = useState(customerInfo.image)
const [customerPhone,setPhone] = useState(customerInfo.customerPhone)
const [role,setRole] = useState(customerInfo.role)


const dispatch = useDispatch()
const navigate =useNavigate()

const handleSubmit = (e)=>{
e.preventDefault()
 const formData = new FormData();
 formData.append('fullName',fullName)
 formData.append('image',image)
 formData.append('customerPhone',customerPhone)
 formData.append('role', role)

 dispatch(editCustomer({formData:formData,id:id}))

 navigate("/users")
}

  return (
    <div className='container'>
      <form className='row' onSubmit={(e)=>handleSubmit(e)} encType="multipart/form-data">
        <div className='col-md-4 d-flex me-4 mb-1'>
        <span className='fa-solid border p-2 rounded-circle fa-user me-1'></span><input className='form-control col-md-6' value={fullName} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
        <span className='fa-solid fa-phone border p-2 rounded-circle  me-1'></span><input className='form-control col-md-6' disabled value={`Email : ${customerInfo.customerEmail}`}/>
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
        <span className='fa-solid fa-image border p-2 rounded-circle  me-1'></span><img src={image} style={{width:"50px",height:"50px"}}/><input type="file" className='ms-1' onChange={(e)=>setFile(e.target.files[0])}/>
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
        <span className='fa-solid fa-unlock-keyhole border p-2 rounded-circle me-1'></span><input className='form-control col-md-6' value={customerPhone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
        <span className='fa-solid fa-unlock-keyhole border p-2 rounded-circle me-1'></span><input className='form-control col-md-6' disabled placeholder= {`Customer Role is ${customerInfo.role}`} />
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
        <span className='fa-solid fa-user border p-2 rounded-circle me-1'></span>
        <select className='form-select col-md-6' onChange={(e)=>setRole(e.target.value)}>
        <option value="Doctor">Doctor</option>
        <option value="Merchant">Merchant</option>
        </select>
        </div>
        <div className='col-md-4 d-flex me-4 mb-1'>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UserEdit