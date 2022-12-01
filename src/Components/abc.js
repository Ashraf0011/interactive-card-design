import styled from "styled-components";
import React, { useReducer, useState } from 'react';
import circle from '../images/icon-complete.svg'
import bgsmall from '../images/bg-main-mobile.png';
import bgls from '../images/bg-main-desktop.png';
import cfront from '../images/bg-card-front.png';
import cback from '../images/bg-card-back.png'
import logo from '../images/card-logo.svg'
import { device } from "./GlobalStyle";
import axios from "axios";


const Button = styled.button`
    font-family: "Space Grotesk";
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    
    width: 100%;
    height: 53px;
    
    border: 0;
    border-radius: 8px;
    background-color: hsla(278, 81%, 10%, 1);
    color: #f2f2f2;
`


const CardPage = styled.div`

    font-size: 12px;
    line-height: 22px;
    text-align: left;

    width: 100%;
    /* margin: 0 auto; */




    display: flex;
    flex-direction: column;
    position: relative;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1);
    
    .bg{
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        z-index: -2;
        transition: all 0.5s;
        }
    .top{
        position:relative ;
        margin: 16px;

        .cards{
            font-family: "Space Grotesk";
            color: hsla(278, 10%, 95%, 1);
            display: grid;
            grid-template-columns: repeat(12,30px);
            grid-template-rows: repeat(12, 22px);

            .pic_back{
                width:286px;
                height: 156px;
                border-radius: 8px;
                grid-area: 2/3/3/4; //fixed
            }
            .cvc{
                margin-left: 18px;
                grid-area: 5/10/6/12; //fixed
            }
            .pic_front{
                grid-area: 7/2/8/4 ;
                width:286px;
                height: 156px;
                border-radius: 8px;
            }
            .card_logo{
                width: 54px;
                height: 30px;
                grid-area: 8/3/8/4 ;
            }

            .cardnumber{
                    grid-column: 3/ span 9;
                    grid-row: 10/10;
                    font-size: 18px;

            }

            .cardname{
                grid-area: 11/3/12/span 6 ;
                font-size: 12px;
            }
            .expdate{
                grid-area: 11/9/11/span 2 ;
                font-size: 12px;
            } 
        }
    }

    .bottoms{
        position: relative;
        z-index: 2;
       
       .input_sections{
        width: 343px;
        height: 400px;
        margin: 40px 16px;
        /* background-color: #f2f2f2; */
        form{
            
            

            label{
                display: block;
                width:300px;
                height: 1.7rem;
                margin-top: 20px;
                /* background-color: antiquewhite; */
                color: hsl(45,60%,10%);
            }

            
             input {   //border
                display: block;
                width: 300px;
                height: 45px;
                padding: 0% 8px;
                border: 1px solid hsla(45,10%,10%,.1);
                border-radius: 8px;
                 z-index: 2;
                font-family: "Space Grotesk";
                font-size: 18px;
                font-weight: 500;
                line-height: 23px;
                letter-spacing: 2px;
                text-align: left;
                color: hsla(278, 81%, 18%, 1);

            }
             
             

            .lebels{
                display: inline;
                
            }

            .labelsShort > label {
                /* margin-right: 16px; */
                display: inline-block;
                width: 50%;    
            }

            .labelsShort .smallI{
                margin: 0 0 18px 4px;
                display: inline-block;
                width: 60px;
               height: 45px;
                padding: 0% 8px;
                border: 1px solid hsl(45,10%,10%,);
                border-radius: 8px;
                
                &:nth-child(5){
                    width: 90px;
                }
            }
            
        }

       }

    }

@media ${device.tablet}{
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    position: relative;
    
    
    .bg{
        position: absolute;
        top: 0px;
        left: 10%;
        transform: translateX(-50%);
        width: 600px;
        height: 100%;
        z-index: -2;
        transition: all 0.5s;
    }
    .top{
        .cards{
            width: 541px;
            height: 521px;

            margin-top: 187px ;
            margin-left: 164px;
            margin-bottom: 186px;

            display: grid;
            grid-template-columns: repeat(12,45px);
            grid-template-rows: repeat(12, 43px);

            .pic_back{
                width:447px;
                height: 245px;
                border-radius: 8px;
                grid-area:7/3/-1/-1 ; //fixed
            }
            .cvc{
                /* margin-left: 18px; */
                margin: 0;
                grid-area: 9/11/10/12; //fixed
                align-self: end;
            }
            .pic_front{
                grid-area: 1/1/span 3/span 3 ;
                width:447px;
                height: 245px;
                border-radius: 8px;
            }
            .card_logo{
                width: 87px;
                height: 47px;
                margin: 20px 25px;
                grid-area: 1/1/3/3 ;
            }

            .cardnumber{
                    grid-column: 2/ span 9;
                    grid-row: 4/10;
                    font-size: 28px;
            }

            .cardname{
                margin-top: 8px;
                grid-area: 5/2/12/span 6 ;
                font-size: 16px;
            }
            .expdate{
                 margin-top: 8px;
                 grid-area: 5/8/12/span 3 ;
                font-size: 12px;
            } 
        }

    }

.bottoms{
    position: relative;
      margin: 230px 100px;
    transition: all 0.5s;
       
       .input_sections{
        width: 343px;
        height: 400px;
        margin: 40px 16px;
        /* background-color: #f2f2f2; */
        
       }

    }





}


`



/**
 * This is the main function that calls all other card components 
 * and returns view for the card page. 
 * 
 * Axios call can be made in future version to view card holder data.
 * In this purpose it will take folowing prams and pass to the view if necessary.
 * 
 * @param { String } cardName - Card holder name.
 * @param { Number } cardNUM - Card NUmber.
 * @param { Number } cardEXP_MM - Card Expiry month.
 * @param { Number } cardEXP_YY - Card expiry year.
 * @returns  Card View.
 */


const CardHeader = ({ widths }) => {

    const currentDate = new Date();
    let untilY = [];
    let untilM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    for (let i = 0; i < 10; i++) {
        untilY.push(currentDate.getFullYear() + i);
    }

    let x = false;
    let n = "1111222233334444"
    let newI = ""
    for (let i = 0; i < n.length; i++) {
        if (i % 4 === 0) {
            // concat will return value in a new variable.
            newI = newI.concat("  ");
        }
        newI = newI.concat(n[i]);
    }
    console.log(newI);

    return (
        <CardPage className=".main">
            <img className="bg" src={widths < 768 ? bgsmall : bgls} alt="back-ground" />
            <div className="top">
                <div className="cards">
                    <img className="pic_back" src={cback} alt="card backside" />
                    <span className="cvc"> 123{ } </span>
                    <img className="pic_front" src={cfront} alt="card back" />
                    <img className="card_logo" src={logo} alt="card logo" />
                    <span className="cardnumber"> 0000 0000 0000 0000 { } </span>
                    <span className="cardname" > JANE APPLESEED { } </span>
                    <span className="expdate"> 11 { } / 24 { } </span>
                </div>
            </div>

            {x ? <Thanks /> : <Bottoms />}

        </CardPage>
    )
}






/**
 * Bottoms Funciton will calculate and create view for the form submit area.
 * It will validate all fields before sending to database. 
 * it might talke some parameters in the futere. but not in this version.
 * @param { String } cardName - Card holder name.
 * @param { Number } cardNUM - Card NUmber.
 * @param { Number } cardEXP_MM - Card Expiry month.
 * @param { Number } cardEXP_YY - Card expiry year.
 * @returns - Will return scucces or failure in console.log().
 */

const Bottoms = () => {

    let initialState = {
        cvc: "123",
        cardNumber: "1234567890123",
        cardName: "",
        expMonth: "10",
        expYear: "2000",
    }


    const reducer = (state, action) => {
        switch (action.type) {
            case 'save':
                return state;
            case 'updateName':
                return state;
            case 'updateCardNumber':
                return state;
            case 'updateMonth':
                return state;
            case 'updateYear':
                return state;
            case 'updateCVC':
                return state;
            default:
                return alert("something went wrong");
        }
    }

    let [currentState, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        const CardDetails = {
            name: currentState.cardName,
            card_number: currentState.cardNumber,
            exp_month: currentState.expMonth,
            exp_year: currentState.expYear,
            cvc: currentState.cvc
        }
        axios.post('http://localhost:5002/create/', CardDetails)
            .then(res => { console.log(res); })
            .catch((e) => console.log("post Errors:", e))

        currentState = initialState;
        console.log(currentState);
    }



    return (
        <div className="bottoms">
            {/* Dispatchers will be called from here */}
            <div className="input_sections">
                <form action="submit" method="post" >
                    <div className="lables" >
                        <label htmlFor="name on card">CARDHOLDER NAME </label>
                        <input className="largeI" type="text" value={currentState.cardName} onChange={(e) => dispatch({ type: "updateName", payload: e.target.value })} name="Name On the card" id="cardNAME" required placeholder="e.g. Jane Appleseed" ></input>
                    </div>
                    <div className="labes" >
                        <label htmlFor="card Number">CARD NUMBER</label>
                        <input className="largeI" name="card Number" value={currentState.cardNumber} onChange={(e) => dispatch({ type: "updateCardNumber", payload: e.target.value })} id="cardNUM" required placeholder="e.g. 1234 5678 91011 1213"></input>
                    </div>
                    <div className="labelsShort" >
                        <label htmlFor="expiry Month and Year">EXP.DATE(MM/YY) </label>
                        <label htmlFor="CVC">CVC </label>
                        <input className="smallI" name="Month" value={currentState.expMonth} onChange={(e) => dispatch({ type: "updateMonth", payload: e.target.value })} id="expM" required placeholder="MM"></input>
                        <input className="smallI" name="Year" value={currentState.expYear} onChange={(e) => dispatch({ type: "updateYear", payload: e.target.value })} id="expY" required placeholder="TT"></input>

                        <input className="smallI" name="CVC" value={currentState.cvc} onChange={(e) => dispatch({ type: "updateCVC", payload: e.target.value })} id="cardCVC" required placeholder="e.g. 123" ></input>
                        {/* <select name="MM" >
                                    <option value="">MM</option>
                                    {
                                        untilM.map((i) =>
                                            <option key={i * 3 + "i"} value={i}>{i}</option>
                                        )
                                    }
                                </select>
                                <select name="YY">
                                    <option value="">YY</option>
                                    {
                                        untilY.map((i) =>
                                            <option key={i * 2 + "i"} value={i}>{i}</option>
                                        )
                                    }
                                </select> */}
                    </div>
                    <Button onClick={() => handleSubmit} > Confirm </Button>
                </form>
            </div>
        </div>
    )
}











const Div = styled.div`
width: 375px;
height: 400px;
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
img{ width:80px; height: 80px;}
h1{margin: 16px 0; font-size:28px; line-height:36px; text-transform:uppercase}
p{margin: 16px 0; font-size:18px; color: hsla(78, 31%, 10%, .5); }
button{margin:20px 0;}
`

/**
 * Thanks Function will greet if data has been saved to server.
 * @param { Array } data - it may take parameters later if needed.
 * @return Thank you view.
 */
const Thanks = () => {
    return (
        <Div className="thanks" >
            <img src={circle} alt='complete logo'></img>
            <h1>Thank You!</h1>
            <p>We've added your card details. </p>
            <Button> Continue </Button>
        </Div>
    )
}


export default CardHeader