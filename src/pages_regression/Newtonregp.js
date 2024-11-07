import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Navbar from '../pages/Navbar';

import FromNewtonRegression from '../Components_regression/FromNewtonreg';


export default function Newtonregessionpages(){
		  return (
			<div>
				<Navbar />
				<div className='Bisectionpages container-xxl'>
					<div>
						<div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-50  p-3 shadow p-3 mb-5 bg-body rounded" >
						
						<center><h1>Linear Regression</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<FromNewtonRegression />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};