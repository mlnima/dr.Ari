import React, {useEffect, useState, useContext} from 'react';
import './Contact.scss'
import {Translate} from "react-translated";

const Contact = props => {
    const [state, setState] = useState({});
    useEffect(() => {
    }, []);
    return (
        <div className='Contact'>
            <h3><Translate text='Reza Ari-Steinweg'/></h3>
            <div className="appointment">
                <Translate text='Termin buchen'/>
            </div>

            <p className='phone'><i className="fas fa-phone-alt"/> 030/322-30-94</p>
            <p className='fax'><i className="fas fa-fax"/> 030/321-53-14</p>

            <div className="addressInfo">
                <Translate text='Adresse'/>
            </div>

            <div className='address'>
                <p><i className="fas fa-thumbtack"/>Pestalozzistrasse 72 10G 10627 Berlin U7
                    Wilmesdorfer Str</p>
            </div>
            <div className="workingDays">
                <div className="workingDaysItem">
                    <div className="day"><Translate text='Montag'/></div>
                    <div className="morning">
                                                <span>
                               <Translate text='Morgen ab'/>
                        </span>8:00 <Translate text='bis'/> 12:00<Translate text='Uhr'/>
                    </div>
                    <div className="afternoon">
                                        <span>
                                       <Translate text='Nachmittag ab'/>15:00 <Translate text='bis'/> 18:00<Translate
                                            text='Uhr'/>
                        </span>
                    </div>


                </div>
                <div className="workingDaysItem">
                    <div className="day"><Translate text='Dienstag'/></div>
                    <div className="morning">
                                               <span>
                               <Translate text='Morgen ab'/>
                        </span>8:00 <Translate text='bis'/> 12:00<Translate text='Uhr'/>
                    </div>
                    <div className="afternoon">
                                      <span>
                                       <Translate text='Nachmittag ab'/>15:00 <Translate text='bis'/> 18:00<Translate
                                          text='Uhr'/>
                        </span>
                    </div>


                </div>
                <div className="workingDaysItem mittwoch">
                    <div className="day"><Translate text='Mittwoch'/></div>
                    <span><Translate text='Nach Vereinbarung'/></span></div>
                <div className="workingDaysItem">
                    <div className="day"><Translate text='Donnerstag'/></div>
                    <div className="morning">
                        <span>
                               <Translate text='Morgen ab'/>
                        </span>

                        8:00 <Translate text='bis'/> 12:00<Translate text='Uhr'/>
                    </div>
                    <div className="afternoon">
                        <span>
                                       <Translate text='Nachmittag ab'/>15:00 <Translate text='bis'/> 18:00<Translate
                            text='Uhr'/>
                        </span>

                    </div>


                </div>
                <div className="workingDaysItem">
                    <div className="day"><Translate text='Freitag'/></div>
                    <div className="morning">
                                               <span>
                               <Translate text='Morgen ab'/>
                        </span>8:00 <Translate text='bis'/> 12:00<Translate text='Uhr'/>
                    </div>
                </div>
            </div>
            <iframe className='googleMap'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4192729679703!2d13.30232571614595!3d52.50775097981195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850de500d766f%3A0x7ad691b651d9f896!2sPestalozzistra%C3%9Fe%2072%2C%2010627%20Berlin!5e0!3m2!1sen!2sde!4v1575997439769!5m2!1sen!2sde"
                    frameBorder="1" allowFullScreen=""/>
        </div>
    );
};
export default Contact;