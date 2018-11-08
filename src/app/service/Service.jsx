import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as servicesActions from '../../store/services/actions';
import * as servicesSelectors from '../../store/services/reducer';
import NavigationBar from '../components/NavigationBar';
import StarRatings from "react-star-ratings";

class Service extends React.Component {
    componentDidMount() {
        let { serviceId } = this.props.match.params;
        this.props.dispatch(servicesActions.getService(serviceId));
    }

    componentWillUnmount() {
        this.props.dispatch(servicesActions.closeService());
    }

    renderService() {
        let { service } = this.props;

        return (
            <div className="box">
                <h1 className="title is-4 has-text-centered"> {service.name} </h1>
                <div className="has-text-centered">
                    <StarRatings
                        rating={service.mark}
                        starDimension="20px"
                        starSpacing="2px"
                        starEmptyColor='rgb(236, 236, 236)'
                        starRatedColor='hsl(141, 71%, 48%)'/>
                </div>
                <div className="has-text-centered">
                    { service.owner }
                    {' \xB7 '}
                    Price: { service.price } Milo
                </div>

                <section className="section">
                    <h2 className="title is-5"> Description </h2>
                    <div> { service.description } </div>
                </section>
            </div>
        );
    }

    render() {
        let renderedService = this.props.service
            ? this.renderService() : false;
        if (!this.props.serviceExist) {
            //
        }

        return (
            <main className="Service">
                <NavigationBar/>

                <section className="section">
                    <div className="container">
                        {renderedService}
                    </div>
                </section>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        serviceExist: servicesSelectors.isServiceExist(state),
        service: servicesSelectors.getService(state)
    };
}

export default connect(mapStateToProps)(Service);
