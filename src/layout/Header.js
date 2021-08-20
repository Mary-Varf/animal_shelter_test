import { Link } from 'react-router-dom';

export const Header = () => {
    return (
      <header>
        <nav className='red lighten-1'>
            <div className="nav-wrapper">
                    <Link to='/animals' className="brand-logo left cursor">Приют №1</Link>
                <ul  className="right">
                    <li>
                        <Link to='/today' className='cursor' id='mob-dn'>Назначения на сегодня</Link>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    )
}


