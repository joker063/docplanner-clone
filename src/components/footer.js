import React from "react"

const countries=["Poland","Turkey","Spain","Italy","Czech Republic","Mexico","Colombia","Brazil","Argentine","Chile."]

const Footer = () => {
    return (
        <footer>
            <p class="foot">
                We are leaders in 10 countries: 
                {countries.map((el,i)=>i!==countries.length-1 ? el+", ": " and "+el)}
                    
                <br /><br />
                <span className="paye">This site uses</span> cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br /><br />
                www.docplanner.com © 2019
</p>
        </footer>
    )
}


export default Footer