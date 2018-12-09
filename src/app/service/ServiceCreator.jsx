import React from 'react';
import {connect} from 'react-redux';

import * as authSelectors from '../../store/auth/reducer';
import * as userActions from '../../store/user/actions';

const categories = [
    {
        "Graphics Design":
            ["Logo Design", "Illustration", "Portraits & Caricatures", "Flyers & Brochures", "Web & Mobile Design", "Other"]
    }, {
        "Writing Translation":
            ["Resumes & Cover Letters", "Website Content", "Translation", "Press Releases", "Creative Writing", "Other"]
    }, {
        "Music Audio":
            ["Songwriters", "Producers & Composers", "Singers", "Sound Effects", "Mixing & Mastering", "Other"]
    }, {
        "Programming Tech":
            ["WordPress", "Web Programming", "Support & IT", "Data Analysis & Reports", "Databases", "QA", "User Testing", "Desktop Applications", "Mobile Apps & Web", "Other"]
    }
];

class ServiceCreator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            category: '',
            price: 1
        };

        this.onChange = this.onChange.bind(this);
        this.onPostService = this.onPostService.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onPostService() {
        let service = {
            name: this.state.name,
            description: this.state.description,
            category: "Graphics_Design/Logo_Design",
            price: this.state.price,
            user_id: this.props.curUserId
        };

        this.props.dispatch(userActions.addService(service)).then(() => {
            this.props.history.push('/profile')
        }).catch(() => {
            this.props.history.push('/profile')
        })
    }

    renderCategories() {
        return categories.map((category, i) =>
                <option key={i}>
                    {(Object.keys(category)[0]).replace(' ', ' & ')}
                </option>
        );
    }

    renderSubcategories() {
        let categoryField = document.getElementById("category").value;
        let result = [];
        categories.map((category) => {
            if ((Object.keys(category)[0]).replace(' ', ' & ') === categoryField) {
                category[(Object.keys(category)[0]).replace(' & ', ' ')].forEach(sub => {
                    result.push(new Option(sub, sub));
                });
            }
        });
        let subSelect = document.getElementById("subcategory");
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            subSelect.options[i] = result[i];
        }
    }

    render() {
        let {history} = this.props;

        return (
            <main className="ServiceCreator">
                <section className="section">
                    <div className="container box has-background-white">

                        <p className="title is-4 has-text-centered">New Service</p>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Title</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-normal">
                                        <input className="input"
                                               type="text" name="name"
                                               placeholder="e.g Appartment Cleaning"
                                               value={this.state.name}
                                               onChange={this.onChange}/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Description</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded">
                                        <textarea className="textarea"
                                                  type="text" name="description"
                                                  placeholder="Tell us some details."
                                                  value={this.state.description}
                                                  onChange={this.onChange}/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Category</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control select is-rounded">
                                        <select id="category" onChange={this.renderSubcategories}>
                                            <option disabled selected>Select Category..</option>
                                            {this.renderCategories()}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Subcategory</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control select is-rounded">
                                        <select id="subcategory">
                                            <option disabled>Select Category First..</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Price</label>
                            </div>
                            <div className="field-body">
                                <div className="field has-addons">
                                    <p className="control">
                                        <input className="input is-rounded"
                                               type="number" name="price"
                                               min="1" max="20"
                                               value={this.state.price}
                                               onChange={this.onChange}/>
                                    </p>
                                    <p className="control">
                                        <a className="button is-static is-rounded">
                                            Milo
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label"/>
                            <div className="field-body">
                                <div className="field is-grouped">
                                    <div className="control">
                                        <a className="button is-success" onClick={this.onPostService}> Post </a>
                                    </div>
                                    <div className="control">
                                        <a className="button" onClick={history.goBack}> Cancel </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        curUserId: authSelectors.getUserId(state)
    };
}

export default connect(mapStateToProps)(ServiceCreator);
