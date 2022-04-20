import { React } from 'react';
import style from './Topbar.module.css'
import { NotificationsNone } from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import img1 from '../../assets/img1.jpg';
import { logout, reset } from '../../store/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from "../../assets/Logo1.png";

const Topbar = () => {
    const { user, isSuccess } = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const btnlogout=document.querySelector(".logout")

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/login");
        

    };

    return (<>
        <div className={style.topbar}>
            <div className={style.topbarWrapper}>
                <div className={style.topLeft}>
                    <span className={style.logo}>Life</span>
                </div>
                <div className={style.topRight}>
                    <span className='fa-solid  p-1 fa-user me-1'></span>
                    {!user || user==null? (
                        ""
                    ) : (
                        <>  <button className="btn   rounded-circle bg-white" onClick={onLogout}>
                            <i className="fa-solid  fa-arrow-right-from-bracket  "></i>
                        </button></>
                    )}
                </div>
            </div>
        </div>
    </>);

}

export default Topbar;

/*
    const user = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/login");
    };

    return (<>
        <div className={style.topbar}>
            <div className={style.topbarWrapper}>
                <div className={style.topLeft}>
                    <span className={style.logo}>Life</span>
                </div>
                <div className={style.topRight}>

                    <div className={style.topbarIconContainer}>
                        <SettingsIcon />
                    </div>
                    <img src='' alt="" className={style.avatar} />
                    {user ? (
                        <button className="btn logout-lg ms-2  d-md-none d-lg-block rounded-circle bg-white" onClick={onLogout}>
                            <i className="fa-solid fa-arrow-right-from-bracket  "></i>
                        </button>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    </>);

*/