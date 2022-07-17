import { Link } from 'react-router-dom';

import './Menu.css';
const Menu=()=>{
    
    return(<div className='root'>

                    <div className='logo'>
                        <Link to='/' className='link-logo'>
                            <div> Movies App </div>                
                        </Link>
                    </div>   
                    
                    <div className='nav'>
                                                
                            <Link to='/about' className='link'>
                                 Company info
                            </Link>
                                                                
                    </div>
                    <div className='nav'>
                            <Link to='/signin' className='link' >
                                Signin
                            </Link>
                    </div>
                    <div className='nav'>
                            <Link to='/signup' className='link' >
                                Signup
                            </Link>
                    </div>             
                
                   
                   
                    
                    
                    </div>

               )}
export default Menu;