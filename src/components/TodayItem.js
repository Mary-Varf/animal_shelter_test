import { Link } from 'react-router-dom';

export const TodayItem = (item) =>{
    const linkId = `animal/animalCard/${item.item.animal.id}`;
    
    return (
        <div className="col s12 m2">
          <div className="card red lighten-1 j-c">
            <div className="card-content white-text valign  right">
              <Link to={linkId}>
                <span className="card-title white-text">{item.item.animal.name}</span>
              </Link>
              <p>Порода: {item.item.animal.spec_name}</p>
            </div>
            <div className="card-content white-text left align-right">

              <b><p>Назначение: {item.item.my_type}</p></b>
              <p>Препараты: </p>
              <p>Название: {item.item.drugs[0].drug_name}</p>
              <p>Доза: {item.item.drugs[0].drug_dosage} {item.item.drugs[0].form_of_drug}</p>
            </div>
          </div>
        </div>
    );
}

