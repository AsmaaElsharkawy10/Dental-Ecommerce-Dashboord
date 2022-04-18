import { useSelector, useDispatch } from "react-redux";
import { useEffect, useHistory } from 'react'
import { getCustomers, deleteCustomer, selectCustomer } from './../../store/user/userSlice';
import { useNavigate, NavLink } from "react-router-dom"
import style from './UserList.module.css';

const UserList = () => {
  const { customers, isLoading } = useSelector(state => state.users)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCustomers())
  }, [dispatch])

  const handleDelete = (_id) => {
    dispatch(deleteCustomer(_id))
  }

  const customersList = customers && customers.map((customer) => (<tr key={customer._id}>
    <td scope="row" className="text-center">{customer.fullName}</td>
    <td className="text-center">{customer.customerEmail}</td>
    <td className="text-center">{customer.customerPhone}</td>
    <td className="text-center">{customer.role}</td>
    <td className="text-center"><img src={customer.image} alt="image" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></td>
    <td><ul className='list-unstyled'>
      <li>Country : {customer.customerAddress.country}</li>
      <li>City : {customer.customerAddress.city}</li>
      <li>Street name : {customer.customerAddress.streetName}</li>
      <li> Building Number{customer.customerAddress.buildingNumber}</li>
      <li> Floor Number{customer.customerAddress.floorNumber}</li>
    </ul></td>
    <td><span className='fa-solid fa-trash' role="button" onClick={() => handleDelete(customer._id)}></span></td>
    <td><span className='fa-solid fa-pen-to-square' role="button" onClick={() => { navigate(`/users/${customer._id}`, { state: { customerData: customer } }) }} ></span></td>
  </tr>))
  return (<>
    <div className={style.userList}>
      {isLoading ? 'loading...' : <div className='container'><NavLink to="/users/add" className="btn btn-primary my-2">Add user</NavLink><table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Customer Role</th>
            <th>Customer image</th>
            <th>Customer Addresses</th>
          </tr>
        </thead>
        <tbody>{customersList}</tbody>
      </table>
      </div>
      }
    </div>
  </>);
}

export default UserList;