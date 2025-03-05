import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <ul className="d-flex list-unstyled">
                        <li className="p-1">
                            <img src="/logo.png" alt="logo" style={{borderRadius: '50%'}} />
                        </li>
                        <li className="p-2 ">
                            <p style={{fontSize:'30px', fontWeight:'bold',color:'pink'}}>Chefify</p>
                        </li>
                        <li className="p-3">
                            <input 
                                type="text" 
                                placeholder="What would you like to cook" 
                                style={{borderRadius:'5px', width:'300px', height:'40px', backgroundColor:'white'}}
                            />
                        </li>
                    </ul>
                </div>
                <div className="col-6 ">
                    <ul className="d-flex list-unstyled">
                        <li style={{top:'13px',position:'relative'}} className="p-2">What to cook</li> 
                        <li style={{top:'13px',position:'relative'}} className="p-2">Recipes</li> 
                        <li style={{top:'13px',position:'relative'}} className="p-2">Ingredients</li> 
                        <li style={{top:'13px',position:'relative'}} className="p-2">Occasions</li> 
                        <li style={{top:'13px',position:'relative'}} className="p-2">About Us</li> 
                        <li style={{top:'13px',position:'relative'}} className=""><button className='btn-light rounded-2'>Your Relipe box</button></li> 
                        <li className=""><img src="/avater.png" alt="" style={{borderRadius:'50%'}}/></li> 
                    </ul>
                </div>
                <hr />
            </div>
            <div className="row">
                <div className="col-5">
                    <h2>Emma Gonzalez's Reccipe Box</h2>
                </div>
                <div className="col-7"></div>
            </div>
            <div className="row">
                <div className="col-2">
                    <img src="/anhto.png" alt="" />
                </div>
                <div className="col-10">
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi, placeat quisquam quae illum maiores odit voluptates suscipit consequatur dolorum eius tenetur natus explicabo maxime officia eveniet non perferendis similique!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eligendi alias eaque error cupiditate pariatur corporis vitae quis consequatur perspiciatis debitis aut quae nostrum amet illo, officiis repellat quasi atque.</p>
                    <ul style={{display:'flex',listStyle:'none',marginLeft:'-50px'}}>
                        <li style={{padding:'15px',color:'pink'}}><p>6.5K subscribes</p></li>
                        <li style={{padding:'10px'}}><button className='btn btn-danger'>Share</button></li>
                    </ul>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Header;
