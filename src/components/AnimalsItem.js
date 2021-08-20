import { Link } from 'react-router-dom';

export const AnimalsItem = (item) =>{
    const linkId = `animal/animalCard/${item.item.id}`;
    
    return (
        <div className="col s12 m6">
          <div className="card red lighten-1">
            <div className="card-content white-text">
              <Link to={linkId} className='hover'>
                <span className="card-title white-text">{item.item.name}</span>
              </Link>
              <p>Порода: {item.item.spec_parent_name}</p>
              <p>Тип: {item.item.spec_name}</p>
            </div>
          </div>
        </div>
    );
}

