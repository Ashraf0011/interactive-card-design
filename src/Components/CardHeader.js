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
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1);
    
    .danger{
        color: orangered;
    }

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


    .thanks{
        position:relative ;
        
        width: 375px;
        height: 400px;
        margin:  200px 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        img{ width:80px; height: 80px;}
        h1{margin: 16px 0; font-size:28px; line-height:36px; text-transform:uppercase}
        p{margin: 16px 0; font-size:18px; color: hsla(78, 31%, 10%, .5); }
        button{margin:20px 0;}
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

    // ─── Input Section ───────────────────────────────────────────────────────────
    let [showNameError, setNmE] = useState("");
    let [showNumberError, seteNbE] = useState("");
    let [showMonthError, seteMoE] = useState("");
    let [showYearError, seteYeE] = useState("");
    let [showCCVError, setCcvE] = useState("");




    let initialState = {
        cvc: "123",
        cardNumber: "1234567890123",
        cardName: "JANE APPLESEED",
        expMonth: "10",
        expYear: "24",
        mesg: ""
    }

    const ErorMessage = ({ message }) => {
        // console.log(message);
        return (
            <>
                {message}
            </>
        )
    }

    const cardnameEr = (value) => {
        let newvalue = value
        if (newvalue.match(/([0-9])/)) {
            const newLocal = "can not have digits";
            throw newLocal;
        } else {
            setNmE("");
            return value
        };
    }


    const reducer = (state, action) => {
        // console.log("prev", state);
        switch (action.type) {
            case "reset":
                return {
                    cvc: "123",
                    cardNumber: "1234567890123",
                    cardName: "JANE APPLESEED",
                    expMonth: "10",
                    expYear: "24",
                    mesg: ""
                }

            case 'updateName':
                // console.log("prev", state);
                try {
                    cardnameEr(action.payload)
                    let cardName = action.payload.toUpperCase();
                    let mesg = { ...state }
                    mesg = ""
                    // console.log("after", state);
                    return { ...state, cardName, mesg };
                } catch (error) {
                    setNmE(error);
                    // console.log(error);
                    let mesg = { ...state }
                    mesg = error;
                    return { ...state, mesg };
                };


            case 'updateCardNumber':
                try {
                    let newvalue = action.payload;
                    if (newvalue.match(/[a-z|A-Z\D\W/gi]/)) {
                        const newLocal = "Worng formate,  Only Numbers are allowed";
                        throw newLocal;
                    } else {
                        seteNbE("");
                    }
                    // console.log('dis num', action.payload);
                    let cardNumber = action.payload;
                    let mesg = { ...state }
                    mesg = ""
                    return { ...state, cardNumber, mesg };

                } catch (error) {
                    seteNbE(error);
                    let mesg = { ...state }
                    mesg = error;
                    return { ...state, mesg }
                }

            case 'updateMonth':
                try {
                    let newvalue = action.payload;
                    if (newvalue.match(/[a-z|A-Z\D\W/gi]/)) {
                        const newLocal = "Numbers Only"
                        throw newLocal
                    } else if (newvalue >= 13) {
                        const newLocal = "That's rude";
                        throw newLocal;
                    } else {
                        seteMoE("");
                    }
                    let expMonth = action.payload;
                    let mesg = { ...state }
                    mesg = "";
                    return { ...state, expMonth, mesg };

                } catch (error) {
                    seteMoE(error);
                    // console.log(error);
                    let mesg = { ...state }
                    mesg = error;
                    return { ...state, mesg }
                }

            case 'updateYear':
                try {
                    let newvalue = action.payload;
                    if (newvalue.match(/[a-z|A-Z\D\W/gi]/)) {
                        const newLocal = "Numbers Only";
                        throw newLocal
                    } else if (newvalue.length > 2) {
                        const newLocal = "only 2 digits";
                        throw newLocal;
                    } else if ((newvalue === Number("0") || (newvalue === "00")) && newvalue !== ("10" || "20" || "30" || "40" || "50" || "60" || "70" || "80" || "90") && (newvalue !== (Number("01") || Number("02") || Number("03") || Number("04") || Number("05") || Number("06") || Number("07") || Number("08") || Number("09")))) {
                        const newLocal = "last 2 digits of year";
                        throw newLocal;
                    } else {
                        seteYeE("");
                    }
                    let expYear = action.payload;
                    let mesg = { ...state }
                    mesg = "";
                    return { ...state, expYear, mesg };

                } catch (error) {
                    seteYeE(error);
                    // console.log(error);
                    let mesg = { ...state }
                    mesg = error;
                    return { ...state, mesg }
                }

            case 'updateCVC':
                try {
                    let newvalue = action.payload;
                    if (newvalue.match(/[a-z|A-Z\D\W/gi]/)) {
                        const newLocal = "Numbers Only";
                        throw newLocal
                    } else {
                        setCcvE("");
                    }
                    let cvc = action.payload;
                    let mesg = { ...state }
                    mesg = ''
                    return { ...state, cvc, mesg };
                } catch (error) {
                    setCcvE(error)
                    // console.log(error);
                    let mesg = { ...state }
                    mesg = error;
                    return { ...state, mesg }
                }

            default:
                return state;
        }
    }

    let [currentState, dispatch] = useReducer(reducer, initialState)

    let { cardName, cardNumber, expMonth, expYear, cvc } = { ...currentState };
    // console.log("current", currentState);




    // ─── Postdata ────────────────────────────────────────────────────────────────
    const [thanks, setThanks] = useState(false);

    const initAll = () => {
        dispatch({ type: "reset" });
        setThanks(false);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const CardDetails = {
            name: currentState.cardName,
            card_number: Number(currentState.cardNumber),
            exp_month: Number(currentState.expMonth),
            exp_year: Number(currentState.expYear),
            cvc: Number(currentState.cvc)
        }

        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        await axios.post('https://card-server.vercel.app/api/create', {
            name: currentState.cardName,
            card_number: Number(currentState.cardNumber),
            exp_month: Number(currentState.expMonth),
            exp_year: Number(currentState.expYear),
            cvc: Number(currentState.cvc)
        })
            .then(res => {
                setThanks(true);
                console.log("response", res.data);
            })
            .catch((e) => console.log(e))

        currentState = {
            cvc: "123",
            cardNumber: "1234567890123",
            cardName: "JANE APPLESEED",
            expMonth: "10",
            expYear: "24",
        };
        // console.log(currentState);

    }





    // ─── Top Card Mechanism ──────────────────────────────────────────────

    // const currentDate = new Date();
    // let untilY = [];
    // let untilM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    // for (let i = 0; i < 10; i++) {
    //     untilY.push(currentDate.getFullYear() + i);
    // }


    let n = cardNumber
    let newI = ""
    for (let i = 0; i < n.length; i++) {
        if (i % 4 === 0) {
            // concat will return value in a new variable.
            newI = newI.concat("  ");
        }
        newI = newI.concat(n[i]);
    }
    // console.log(newI);






    return (
        <CardPage className=".main">


            {/* ─── Card Preview Section Ui ───────────────────────────────── */}

            <img className="bg" src={widths < 768 ? bgsmall : bgls} alt="back-ground" />
            <div className="top">
                <div className="cards">
                    <img className="pic_back" src={cback} alt="card backside" />
                    <span className="cvc"> {cvc} </span>
                    <img className="pic_front" src={cfront} alt="card back" />
                    <img className="card_logo" src={logo} alt="card logo" />
                    <span className="cardnumber"> {newI} </span>
                    <span className="cardname" > {cardName} </span>
                    <span className="expdate"> {expMonth} / {expYear} </span>
                </div>
            </div>

            {/* /**
                * Thanks Function will greet if data has been saved to server.
                * @param { Array } data - it may take parameters later if needed.
                * @return Thank you view.
                */ }

            {thanks ? <>
                <div className="thanks" >
                    <img src={circle} alt='complete logo'></img>
                    <h1>Thank You!</h1>
                    <p>We've added your card details. </p>
                    <Button onClick={() => initAll()}> Continue </Button>
                </div>


            </> : <>


                {/* /**
                 * Bottoms Funciton will calculate and create view for the form submit area.
                 * It will validate all fields before sending to database. 
                 * it might talke some parameters in the futere. but not in this version.
                 * @param { String } cardName - Card holder name.
                 * @param { Number } cardNUM - Card NUmber.
                 * @param { Number } cardEXP_MM - Card Expiry month.
                 * @param { Number } cardEXP_YY - Card expiry year.
                 * @returns - Will return scucces or failure in console.log().
                 */}


                <div className="bottoms">
                    {/* Dispatchers will be called from here */}
                    <div className="input_sections">
                        <form onSubmit={handleSubmit} >
                            <div className="lables" >
                                <label htmlFor="name on card">CARDHOLDER NAME </label>
                                <input className="largeI" type="text" value={cardName} onChange={(e) => dispatch({ type: "updateName", payload: e.target.value })} name="Name On the card" id="cardNAME" required placeholder="e.g. Jane Appleseed" />

                                {showNameError ? <div className="danger"> <ErorMessage message={showNameError} />  </div> : <></>}
                            </div>
                            <div className="labes" >
                                <label htmlFor="card Number">CARD NUMBER</label>
                                <input className="largeI" name="card Number" value={cardNumber} onChange={(e) => dispatch({ type: "updateCardNumber", payload: e.target.value })} id="cardNUM" required placeholder="e.g. 1234 5678 91011 1213"></input>
                                {showNumberError ? <div className="danger"> <ErorMessage message={showNumberError} />  </div> : <></>}
                            </div>
                            <div className="labelsShort" >
                                <label htmlFor="expiry Month and Year">EXP.DATE(MM/YY) </label>
                                <label htmlFor="CVC">CVC </label>
                                <input className="smallI" name="Month" value={expMonth} onChange={(e) => dispatch({ type: "updateMonth", payload: e.target.value })} id="expM" required placeholder="MM"></input>
                                <input className="smallI" name="Year" value={expYear} onChange={(e) => dispatch({ type: "updateYear", payload: e.target.value })} id="expY" required placeholder="TT"></input>
                                {showMonthError ? <div className="danger"> <ErorMessage message={showMonthError} />  </div> : <></>}
                                {showYearError ? <div className="danger"> <ErorMessage message={showYearError} />  </div> : <></>}

                                <input className="smallI" name="CVC" value={currentState.cvc} onChange={(e) => dispatch({ type: "updateCVC", payload: e.target.value })} id="cardCVC" required placeholder="e.g. 123" ></input>
                                {showCCVError ? <div className="danger"> <ErorMessage message={showCCVError} /> </div> : <></>}
                            </div>
                            <Button> Confirm </Button>
                        </form>
                    </div>
                </div>



            </>}

        </CardPage>
    )
}



export default CardHeader