import React, {useState, useEffect} from "react";
import Axios from "axios";


function Login() {
    
    const [movieName, setMovieName] = useState('')
    const [review, setReview] = useState('')
    const [movieReviewList, setReviewList] = useState([])


        
    useEffect(() =>{
        Axios.get('http://localhost:3001/api/get').then((response) =>{
            setReviewList(response.data)
        })
    }, [])

    

    const submitReview = () =>{
        Axios.post("http://localhost:3001/api/insert", {

            movieName: movieName,
            movieReview: review,

        })

        setReviewList([
            ...movieReviewList, 
            {movieName: movieName, movieReview: review},
        ]);
    }; 
    

    return (
        <div className="container login">
            
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 mb-5">
                    <div className="card shadow">         
                        <div className="card-body">
                            <center><h5>Login</h5></center>
                            <div className="form-group">
                                <label className="mb-1">Username</label>
                                <input type="text" name ="movieName" className="form-control" onChange ={(e) => {
                                    setMovieName(e.target.value);
                                }}/>
                            </div>
                            <div className="form-group">
                                <label className="mb-1">Password</label>
                                <input type="text" name="review" className="form-control" onChange={(e) =>{
                                    setReview(e.target.value);
                                }}/>
                            </div>
                            <div className="form-group">                                        
                                <button onClick={submitReview} className="btn btn-primary mt-2" >Sign In</button>
                                <button className="btn btn-primary mt-2 mx-2" >Sign Up</button>
                            </div>
                            <div>{movieReviewList.map((val) =>{
                                return <h4>Movie Name: {val.movieName} | Movie Review: {val.movieReview}</h4>
                            })}
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="col-md-3"></div>
            </div>
                         
        </div>
    )
}

export default Login