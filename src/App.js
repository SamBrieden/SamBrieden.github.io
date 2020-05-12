import React from 'react'
import './styles.css'
import WelcomeCard from './WelcomeCard.js'
import Card from './Card.js'
import Portfolio from './portfolio.json'
import { Switch, Route, Link } from 'react-router-dom'
import MantisDemo from './mantis_demo/index.js'
import TowerOfHanoi from './tower-of-hanoi/index.js'


export default function () {

    const mappedCards = Portfolio.map((card, i) => <Card key={i} category={card.category} subHeader={card.subHeader} contentOne={card.contentOne} contentTwo={card.contentTwo} backgroundColor={ (i + 1) % 2 ? '#f7f7f7' : 'white'}/>)

    return (
        <div className="portfolio-container">
            <Switch>
                <Route path='/mantis'>
                    <>
                    <div className="screen">
                        <MantisDemo />
                    </div>
                    <h4 className="error">
                        This demo requires a wider screen. <Link to="/"> Return Home</Link>
                    </h4>
                    <Link to='/' className='return'>Home</Link>
                    </>
                </Route>
                <Route path='/tower_of_hanoi'>
                    <>
                    <div className="">
                        <TowerOfHanoi />
                    </div>
                    <Link to='/' className='return'>Home</Link>
                    </>
                </Route>
                <Route path='/'>
                    <WelcomeCard />
                    { mappedCards }
                </Route>
            </Switch>
        </div>
    )
}