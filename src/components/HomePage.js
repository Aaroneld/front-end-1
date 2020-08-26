import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// We can make adjustments to this as the project progresses, it can either link to several things or we can have a workout list preview or something here. I think it should probably just be a default landing page that links to the workout list and login and sign up pages

const StyleExample = styled.div`
    color: #999900;
    text-align: center;

    section{
        display: flex;
        justify-content: space-around;
        align-items: center;
        div{
            width: 30%;
            p{
                color: black;
            }
        }
        .mid-child{
            border-left: 2px solid #999900;
            border-right: 2px solid #999900;
            padding: 0 2%;
        }
    }

    .sign-log{
        display: flex;
        justify-content: center;
        a{
            margin: 0 2.5%;
        }
    }

    a{
        text-decoration: none;
        color: black;
        &:hover {
            color: #999900;
        }
    }
`

const HomePage = () => {
    return ( 
        <StyleExample>
            <h1>
               Fitness Anywhere Anytime
            </h1>
            
            <div className="sign-log">
                <Link to="/signup">
                    <h2>Sign Up!</h2>
                </Link>
                <Link to="/login">
                    <h2>Login!</h2>
                </Link>
                <Link to="/list">
                    <h2>Class List</h2>
                </Link>
                <Link to="/list-Instructor">
                    <h2>Instructors</h2>
                </Link>
            </div>
            <section>
                <div>
                    <h2>
                        Lots of Classes
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et, voluptatum, ex assumenda non delectus, consequatur accusantium explicabo incidunt unde ipsum animi blanditiis quis doloribus officiis atque? Repellendus minima harum sit, exercitationem pariatur, eaque, dolorum porro earum blanditiis vel repellat! Reiciendis neque recusandae totam expedita.</p>
                </div>
                <div className="mid-child">
                    <h2>
                        Placeholder - links could go here
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et, voluptatum, ex assumenda non delectus, consequatur accusantium explicabo incidunt unde ipsum animi blanditiis quis doloribus officiis atque? Repellendus minima harum sit, exercitationem pariatur, eaque, dolorum porro earum blanditiis vel repellat! Reiciendis neque recusandae totam expedita.</p>
                </div>
                <div>
                    <h2>
                        Placeholder - links could go here
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et, voluptatum, ex assumenda non delectus, consequatur accusantium explicabo incidunt unde ipsum animi blanditiis quis doloribus officiis atque? Repellendus minima harum sit, exercitationem pariatur, eaque, dolorum porro earum blanditiis vel repellat! Reiciendis neque recusandae totam expedita.</p>
                </div>
            </section>
        </StyleExample>
     );
}
 
export default HomePage;