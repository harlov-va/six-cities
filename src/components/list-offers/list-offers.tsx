import { PureComponent } from "react";
import React = require("react");
import { CardOffer } from "../card-offer/card-offer";
import {IProps} from '../app/app';
export class ListOffers extends PureComponent<IProps>{
    constructor(props) {
        super(props);
        this.state = {
            currentCard: null
        };
    }
    render() {
        const offers = this.props[`offers`];
        return <div className="cities__places-list places__list tabs__content">
            {offers.map((offer, index) => {                
                return <CardOffer key={`offer-${index}`} offer={offer} onCardFocus={() => {
                    this.setState(() => {                        
                        return {
                            currentCard: offer,
                        }
                    })                   
                }
                
                
            } />
                })}
        </div>;
    }
}