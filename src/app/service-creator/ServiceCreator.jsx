import React from 'react';
import NavigationBar from "../components/NavigationBar";
import { Link } from 'react-router-dom';

export default class ServiceCreator extends React.Component {


    getCategories() {
        return ["Category 1", "Category 2"]
    }

    getSubCategories(category) {
        return ["Subcategory 1", "Subcategory 2"]
    }

    render() {
        return (
            <main className="ServiceCreator">
                <NavigationBar/>

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
                                        <input className="input" type="text" placeholder="e.g Appartment Cleaning"/>
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
                                        <input className="input" type="text" placeholder="Tell us some details."/>
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
                                    <p className="control is-expanded">
                                        <div className="select is-rounded">
                                            <select>
                                                {/*TODO: real categories and subcategories*/}
                                                <option>Category #1</option>
                                                <option>Category #2</option>
                                            </select>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Subcategory</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded">
                                        <div className="select is-rounded">
                                            <select>
                                                <option>Subcategory #1</option>
                                                <option>Subcategory #2</option>
                                            </select>
                                        </div>
                                    </p>
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
                                        <input className="input is-rounded" type="number" min="1" max="5"/>
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
                            <div className="field-label">
                                <Link className="button is-danger has-text-white"
                                      to={"/profile/" + this.props.match.params.userId}>
                                    Cancel
                                </Link>
                            </div>

                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        {/*TODO: on submit create a new service on server*/}
                                        <Link className="button is-success has-text-white"
                                              to={"/post"}>
                                            Post
                                        </Link>
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