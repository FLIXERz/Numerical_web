import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Secantp from "./pages/Secantp"
import Class from "./pages/Class"
import Bisection from "./pages/Bisection"
import False from "./pages/False"
import Newtonx from "./pages/Newtonx"
// import  Navbar  from "./pages/Navbar"
// import Footer from "./pages/Footer"
import Gaussjd from "./pages_Linear/Gaussjd_p"
import CramerRulep from "./pages_Linear/Cramer_Rule_p"
import Onepointp from "./pages/Onepoint"
import GaussEM from "./pages_Linear/GaussEm"
import Matrixinversion from "./pages_Linear/Matrix_Inversion"
import LUDecomposition from './pages_Linear/LU_p';
import CholeskyDecomposition from './pages_Linear/CholeskyDecomposition';
import GaussSeidel from './pages_Linear/GaussSeidel';

import NewtonDividedDifferences from './pages_Inter/NewtonDividedDifferences_p';
import LagrangeInterpolation from './pages_Inter/LagrangeInterpolation_p';
import SplineLinear from './pages_Inter/SplineLinear';
import SplineQuadratic from './pages_Inter/SplineQuadratic';
import SplineCubic from './pages_Inter/SplineCubic';

import Newtonregessionpages from "./pages_regression/Newtonregp"
import PolynomialRegression from './pages_regression/PolynomialReg_p';
import MultipleLinearRegression from './pages_regression/MultipleLinearRegression';

import SingleTrapezoidal from './pages_Intergration/SingleTrapezoidal';
import CompositeTrapezoidal from './pages_Intergration/CompositeTrapezoidal';
import SimpsonsRule from './pages_Intergration/SimpsonsRule';
import CompositeSimpsonsRule from './pages_Intergration/CompositeSimpsonsRule';
import FirstDividedDifferences from './pages_Diff/FirstDividedDifferences';
import SecondDividedDifferences from './pages_Diff/SecondDividedDifferences';



export default function App() {
    return(
            <BrowserRouter>
                        
                            <Routes>
                                <Route path="/" element={<Home />} />

                                <Route path="/Bisection" element={<Bisection />} />

                                <Route path="/false" element={<False />} />

                                <Route path="/Newton" element={<Newtonx />} />

                                <Route path="/Secant" element={<Secantp />} />

                                <Route path="/Onepoint" element={<Onepointp />} />

                                <Route path="/Class" element={<Class />} />

                                <Route path="/Cramer" element={<CramerRulep />} />

                                <Route path="/Gaussjd" element={<Gaussjd />} />

                                <Route path="/GaussEM" element={<GaussEM />} />

                                <Route path="/Matrixinversion" element={<Matrixinversion />} />
                                
                                <Route path="/LUDecomposition" element={<LUDecomposition />} />
                                
                                <Route path="/CholeskyDecomposition" element={<CholeskyDecomposition />} />
                                
                                <Route path="/GaussSeidel" element={<GaussSeidel />} />

                                <Route path="/NewtonDividedDifferences" element={<NewtonDividedDifferences />} />

                                <Route path="/LagrangeInterpolation" element={<LagrangeInterpolation />} />
                                
                                <Route path="/SplineLinear" element={<SplineLinear />} />

                                <Route path="/SplineQuadratic" element={<SplineQuadratic />} />
                                
                                <Route path="/SplineCubic" element={<SplineCubic />} />

                                <Route path="/NewtonRegression" element={<Newtonregessionpages />} />
                                
                                <Route path="/PolynomialRegression" element={<PolynomialRegression />} />
                                
                                <Route path="/MultipleLinearRegression" element={<MultipleLinearRegression />} />
                                
                                <Route path="/SingleTrapezoidal" element={<SingleTrapezoidal />} />

                                <Route path="/CompositeTrapezoidal" element={<CompositeTrapezoidal />} />

                                <Route path="/SimpsonsRule" element={<SimpsonsRule />} />

                                <Route path="/CompositeSimpsonsRule" element={<CompositeSimpsonsRule />} />

                                <Route path="/FirstDividedDifferences" element={<FirstDividedDifferences />} />

                                <Route path="/SecondDividedDifferences" element={<SecondDividedDifferences />} />

                            </Routes>
                  
                  
            </BrowserRouter>
        
    )
}

