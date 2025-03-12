import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <div className="w-full">
            <div className="grid grid-cols-12 gap-0 shadow-md">  
                <div className="col-span-6">
                    <ul className="flex">
                        <li className="p-2">
                            <img className='rounded-full' src="/logo.png" alt="logo" />
                        </li>
                        <li className="p-3">
                            <p className='text-4xl font-bold text-red-300'>Chefify</p>
                        </li>
                        <li className="p-3">
                            <input 
                                type="text" 
                                placeholder="What would you like to cook" 
                              
                                className='border-1 rounded-2 w-110 h-75'
                            />
                        </li>
                    </ul>
                </div>
                <div className="col-span-6">
                    <ul className="flex">
                        <li className="p-2 top-7 relative">What to cook</li> 
                        <li className="p-2 top-7 relative">Recipes</li> 
                        <li className="p-2 top-7 relative">Ingredients</li> 
                        <li className="p-2 top-7 relative">Occasions</li> 
                        <li className="p-2 top-7 relative">About Us</li> 
                        <li className="top-6 relative"><button className='btn-light rounded-2'>Your Relipe box</button></li> 
                        <li className="p-2 top-2 relative"><img src="/avater.png" alt="" style={{borderRadius:'50%'}}/></li> 
                    </ul>
                </div>
            </div>
            <br />
            <div className="grid grid-cols-12 gap-0">
                <div className="col-span-5">
                    <h2 className='font-sans ml-5'>Emma Gonzalez's Reccipe Box</h2>
                </div>
                <div className="col-span-5">
                    <div className='flex'>
                    <h1 className='ml-[-140px]'>Salad(32)</h1>
                    </div>
                </div>
                <div className='col-span-2'>
                <select className='w-75 h-75 border-1 rounded-2'>
                    <option value="1">A-Z</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="3">3</option>
                    </select>
                </div>
            </div>
         
            <br />
        </div>
    );
}

export default Header;
