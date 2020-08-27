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
                        Lots of Classes!
                    </h2>
                    <p>
                        When we say anytime and anywhere we mean it. So we have lots of instructors posting tons of classes, pick and choose your favorite ones and sign right up. Having lots of options to fit your schedule is exactly what we strive for and our istructors provide. So, try out yoga for the first time. Go for a nice stretching session in the park. Whatever you wanna try, where ever you wanna try it, you can look in our app and find a class to fit your needs.
                    </p>
                </div>
                <div className="mid-child">
                    <h2>
                        Fantastic Instructors!
                    </h2>
                    <p>
                        Well trained highly skilled instructors to help you reach your goals. Our instructors have felxible schedules that allow them to set up so many unique and effective classes. We have instructors that teach a myriad of different classes and come from a myriad of backgrounds. So, you can even follow your favorite instructors around and maybe even try out a new type of fitness in a brand new place.
                    </p>
                </div>
                <div>
                    <h2>
                        Go Everywhere!
                    </h2>
                    <p>
                        Stale old boring gym? Not in these parts. Not only does our app let you find a good workout when you don't want to or can't visit the gym, but you can also just search around and pick a workout based on new and interesting locations. You have all you need here to try something new somewhere new. The world is at your fingertips as well as the knowledge and experience of our amazing instructors. 
                    </p>
                </div>
            </section>
        </StyleExample>
     );
}
 
export default HomePage;