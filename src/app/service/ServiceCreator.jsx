import React from 'react';
import {Link} from 'react-router-dom';

export default class ServiceCreator extends React.Component {

    renderCategories() {
        let categories = [
            {
                "Graphics Design":
                    ["Logo Design", "Illustration", "Portraits & Caricatures", "Flyers & Brochures", "Web & Mobile Design", "Other"]
            },
            {
                "Writing Translation":
                    ["Resumes & Cover Letters", "Website Content", "Translation", "Press Releases", "Creative Writing", "Other"]
            },
            {
                "Music Audio":
                    ["Songwriters", "Producers & Composers", "Singers", "Sound Effects", "Mixing & Mastering", "Other"]
            },
            {
                "Programming Tech":
                    ["WordPress", "Web Programming", "Support & IT", "Data Analysis & Reports", "Databases", "QA", "User Testing", "Desktop Applications", "Mobile Apps & Web", "Other"]
            }];

        let result = [];
        categories.map((category) => {
            result.push(
                <option key={categories.indexOf(category)}>
                    {(Object.keys(category)[0]).replace(' ', ' & ')}
                </option>)
        });
        return result
    }

    renderSubcategories() {
        let categories = [
            {
                "Graphics Design":
                    ["Logo Design", "Illustration", "Portraits & Caricatures", "Flyers & Brochures", "Web & Mobile Design", "Other"]
            },
            {
                "Writing Translation":
                    ["Resumes & Cover Letters", "Website Content", "Translation", "Press Releases", "Creative Writing", "Other"]
            },
            {
                "Music Audio":
                    ["Songwriters", "Producers & Composers", "Singers", "Sound Effects", "Mixing & Mastering", "Other"]
            },
            {
                "Programming Tech":
                    ["WordPress", "Web Programming", "Support & IT", "Data Analysis & Reports", "Databases", "QA", "User Testing", "Desktop Applications", "Mobile Apps & Web", "Other"]
            }];


        let categoryField = document.getElementById("category").value;
        let result = [];
        categories.map((category) => {
            if ((Object.keys(category)[0]).replace(' ', ' & ') == categoryField) {
                category[(Object.keys(category)[0]).replace(' & ', ' ')].forEach(sub => {
                    result.push(
                        new Option(sub, sub));
                });
                {/*<option key={categories.indexOf(category)}>*/
                }
                {/*{category[(Object.keys(category)[0]).replace(' & ', ' ')]}*/
                }
                {/*</option>)*/
                }
            }
        });
        let subSelect = document.getElementById("subcategory");
        console.log(result);
        for (var i = 0; i < result.length; i++) {
            subSelect.options[i] = result[i];
        }
    }

    render() {
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
                                        <input className="input textarea" type="text"
                                               placeholder="Tell us some details."/>
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