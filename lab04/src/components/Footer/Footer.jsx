function Footer(){


    return(

        <div className="w-full">
            <div className="grid grid-cols-12 gap-0 bg-black text-white">
                <div className="col-span-5 p-2">
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas officia ad repudiandae provident vero dolores tenetur harum facilis eaque aperiam, exercitationem reprehenderit nam deserunt earum quasi animi minus quaerat!.</p>
                    <div className="flex">
                     <input className="w-75 border-2 rounded-2 bg-gray-100 text-black" type="text" placeholder="Enter your email"/>
                    <button className="rounded-2 bg-danger">Send</button>
                    </div>
                    <br />
                    <br />
                    <ul className="flex">
                        <li className="relative bottom-1 ml-[-30px]" ><img className="w-10 h-10 rounded-full" src="./logo.png" alt="" /></li>
                        <li className="relative p-0 "><h3> Chefify</h3></li>
                        <li className="relative p-2 "><i> 2023 Chefify company</i></li>
                        <li className="relative p-2 "><i> terms of Servicel Priavcy Policy</i></li>
                    </ul>
                </div>
                <div className="col-span-4 p-2">
                <ul>
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
                <div className="col-span-3 p-2">
                    <ul>
                    <li><b>Recipes</b></li>
                    <li>What to cook this week</li>
                    <li>pasta</li>
                    <li>Dinner</li>
                    <br />
                    <br />
                    <li>headthy</li>
                    <li>vegetarian</li>
                    <li>vegan</li>
                    <li>christmas</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer;