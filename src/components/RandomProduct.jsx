import { Link } from "react-router-dom"
export default function RandomProduct({title, description, where, className}) {
  
    return (
           <div className={`card bg-warning mx-auto ${className} mb-5`}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <Link to="/" className="btn btn-primary">
              Go {where}
            </Link>
          </div>
        </div>
    );
}

