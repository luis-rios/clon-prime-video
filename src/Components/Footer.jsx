import React from 'react';
import '../Styles/Footer.css';
import Logo from '../Img/video.jpg'

 export default function Footer(){
    return(
        <div className="menu_footer">
             <div className="contenedor">
            <di className="fila1" style={{backgroundImage:`url(${Logo})`}}>
                
            <div className="ccl">
              <p className="col-sm">
                &copy;  <a  href="#Informacion" >Clone Prime</a> | All ringht reserved | Clon video | Privacy            
                  </p>
            </div>

            </di>
        </div>
        </div>
       
    )
}
