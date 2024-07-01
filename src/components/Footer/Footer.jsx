import React from "react";
import { Link , NavLink} from 'react-router-dom'

function Footer() {
    return(
        <>
          <footer>
        <div className="foot">Created By <Link to="#">Awais Ali</Link> | <i className="fa-solid fa-copyright"></i> 2024 all rights are reserved</div>
    </footer>
        </>
    )
}

export default Footer ;