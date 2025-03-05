function Footer(){


    return(

        <div className="container-fluid">
            <div className="row bg-black text-light">
                <div className="col-5">
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas officia ad repudiandae provident vero dolores tenetur harum facilis eaque aperiam, exercitationem reprehenderit nam deserunt earum quasi animi minus quaerat!.</p>
                    <div style={{display:'flex'}}>
                     <input className="form-control w-75" type="text" placeholder="Enter your email"/>
                    <button className="btn btn-danger">Send</button>
                    </div>
                    <br />
                    <br />
                    <ul style={{display:"flex",listStyle:'none',left:'-20px',position:'relative'}}>
                        <li style={{bottom:'15px',position:'relative'}}><img style={{borderRadius:'50%'}} src="./logo.png" alt="" /></li>
                        <li style={{padding:'0px'}}><h3> Chefify</h3></li>
                        <li style={{padding:'5px'}}><i> 2023 Chefify company</i></li>
                        <li style={{padding:'5px'}}><i> terms of Servicel Priavcy Policy</i></li>
                    </ul>
                </div>
                <div className="col-4">
                <ul  style={{listStyle:'none'}}>
                    <li><b>Lear More</b></li>
                    <li>Our cook</li>
                    <li>See our Features</li>
                    <li>FAQ</li>
                    <li><br /></li>
                    <li><br /></li>
                    <li><br /></li>
                    <li><b>Shop</b></li>
                    <li>Gift Sub Scription</li>
                    <li>Send Us Feedback</li>
                </ul>
                </div>
                <div className="col-3">
                    <ul style={{listStyle:'none'}}>
                    <li><b>Recipes</b></li>
                    <li>What to cook this week</li>
                    <li>pasta</li>
                    <li>Dinner</li>
                    <li>headthy</li>
                    <li>vegetarian</li>
                    <li>vegan</li>
                    <li>christmas</li>
                    <li>christmas</li>
                    <li>christmas</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer;