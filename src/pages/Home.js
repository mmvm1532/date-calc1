import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Home({ isAuth }) {
  // Please design a page that asks the user to enter the time and date and calculate the time difference from the data & time entered to right now. 
  // For example, if the user enters May 11, 2022, 9 pm, and now is June 1, 2022, 10 pm. The output would be -21 days and 1 hour.

    //useEffect to move to login page from home if sign out
    let navigate = useNavigate()
    useEffect(() => {
      if(!isAuth) navigate('/login');
  })
  
    //getting time now 
    //setting some empty date
    let setD = Date()
    //getting time from input in jsx
    const [tm, setTime] = useState(setD)
    //transforming input into machine ms
    let msEnd = Date.parse(tm)
    //getting the machine ms from the moment of rn
    let msStart = Date.now()
    
    // main calculation of the difference between now and assigned time
    let msDiff = msEnd - msStart
    //hidden boolean value for return later
    let future = msDiff > 0
    //absolute value to get rid of zeros
    msDiff = Math.abs(msDiff)
    
    //Seconds = msDiff/1000
    let seconds = Math.round(msDiff/1000)
    let displaySeconds = Math.floor(seconds % 60)
    //Min = Seconds/60
    let minutes = Math.floor(seconds / 60)
    let displayMinutes = Math.floor(minutes % 60)
    //Hours = Min/60
    let hours = Math.floor(minutes/60)
    let displayHours = Math.floor(hours % 24)
    //Days = Hours/24
    let days = Math.floor(hours/24)
    
    //initializing timeLeft with the seconds prop-erties
    const [timeLeft, setTimeLeft] = useState(seconds)

    //re-rendering with 1s interval 
    useEffect(() =>{

      const intervalID = setInterval(() => {
        setTimeLeft(timeLeft - 1)
       
      }, 1000)
      // clearing cache?
      return () => clearInterval(intervalID)
      //update timeLeft so the cycle goes on
    }, [timeLeft])
  

    function Check(days) {
      //function that checks whether difference is negative or positive to display right message
    
      //polishing display format depending on Zeros
      let textSeconds = displaySeconds? ` and ${displaySeconds} seconds`: ''
      let textMinutes = displayMinutes? ` ${displayMinutes} minutes `: ''
      let textHours = displayHours? ` ${displayHours} hours `: ''
      let textDays = days? `${days} days `: ''

      //polishing if 1 hour 1 minute 1 day and 1 second
      if (days === 1) {
        textDays =  days? `${days} day `: ''
      }
      if (displayHours === 1) {
        textHours = displayHours? ` ${displayHours} hour `: ''
      }
      if (displayMinutes === 1) {
        textMinutes = displayMinutes? ` ${displayMinutes} minute `: ''
      }
      
      if (displayHours === 0 && displayMinutes === 0 && days === 0) {
        if (displaySeconds === 1) {
          textSeconds = displaySeconds? ` ${displaySeconds} second`: ''}
        else {
          textSeconds = displaySeconds? ` ${displaySeconds} seconds`: ''
      }
    } 

      //returning labels with formatted text on display
      return(future ? 
        
        <label className='output-container'>Will occur in {textDays} {textHours} {textMinutes} {textSeconds}</label>
        : 
        <label className='output-container'>Occured {textDays} {textHours} {textMinutes} {textSeconds} ago</label>
      )
    }
    
    
    
  return (
    <form>
  <div className='root'>

    <label className='header'>Choose a Date and Time</label>
    <input type="datetime-local" className='input-container' 
            onChange={(event) => setTime(event.target.value)}
           required/>
    <span ></span>
  </div> {Check(days)}
  <input type="hidden" id="timezone" name="timezone" value="-04:00"/>
</form>
)}



export default Home