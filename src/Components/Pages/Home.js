import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <table className="co">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Address 1</th>
                            <th>Address 2</th>
                            <th>Website</th>
                            <th>Phone</th>
                            <th>Primary contact</th>
                            <th>Additional contacts</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                        <td>Feedstore BBQ & More</td> 
                        <td>530 S White Chapel Blvd, Southlake, TX 76092</td>
                        <td>N/A</td>
                        <td><a href="https://www.feedstorebbq.com/">feedstorebbq.com</a></td>
                        <td><a href="tel:8174881445">817-488-1445</a></td>
                        <td>BBQ Guy</td>
                        <td>
                            <select>
                                <option>Raymond Jenkins</option>
                                <option>BBQ Guy</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                        <td>FarsideDev</td> 
                        <td>1901 Central Dr #309, Bedford, TX, 76021</td>
                        <td>N/A</td>
                        <td><a href="https://www.farsidedev.com/">farsidedev.com</a></td>
                        <td><a href="tel:8174024151">817-402-4151</a></td>
                        <td>Raymond Jenkins</td>
                        <td>
                            <select>
                                <option>Trey Waller</option>
                                <option>David Newman</option>
                                <option>Raymond Jenkins</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                        <td>FarsideDev</td> 
                        <td>1901 Central Dr #309, Bedford, TX, 76021</td>
                        <td>N/A</td>
                        <td><a href="https://www.farsidedev.com/">farsidedev.com</a></td>
                        <td><a href="tel:8174024151">817-402-4151</a></td>
                        <td>Raymond Jenkins</td>
                        <td>
                            <select>
                                <option>Trey Waller</option>
                                <option>David Newman</option>
                                <option>Raymond Jenkins</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                        <td>FarsideDev</td> 
                        <td>1901 Central Dr #309, Bedford, TX, 76021</td>
                        <td>N/A</td>
                        <td><a href="https://www.farsidedev.com/">farsidedev.com</a></td>
                        <td><a href="tel:8174024151">817-402-4151</a></td>
                        <td>Raymond Jenkins</td>
                        <td>
                            <select>
                                <option>Trey Waller</option>
                                <option>David Newman</option>
                                <option>Raymond Jenkins</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                        <td>FarsideDev</td> 
                        <td>1901 Central Dr #309, Bedford, TX, 76021</td>
                        <td>N/A</td>
                        <td><a href="https://www.farsidedev.com/">farsidedev.com</a></td>
                        <td><a href="tel:8174024151">817-402-4151</a></td>
                        <td>Raymond Jenkins</td>
                        <td>
                            <select>
                                <option>Trey Waller</option>
                                <option>David Newman</option>
                                <option>Raymond Jenkins</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                        <td>FarsideDev</td> 
                        <td>1901 Central Dr #309, Bedford, TX, 76021</td>
                        <td>N/A</td>
                        <td><a href="https://www.farsidedev.com/">farsidedev.com</a></td>
                        <td><a href="tel:8174024151">817-402-4151</a></td>
                        <td>Raymond Jenkins</td>
                        <td>
                            <select>
                                <option>Trey Waller</option>
                                <option>David Newman</option>
                                <option>Raymond Jenkins</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                        <td>FarsideDev</td> 
                        <td>1901 Central Dr #309, Bedford, TX, 76021</td>
                        <td>N/A</td>
                        <td><a href="https://www.farsidedev.com/">farsidedev.com</a></td>
                        <td><a href="tel:8174024151">817-402-4151</a></td>
                        <td>Raymond Jenkins</td>
                        <td>
                            <select>
                                <option>Trey Waller</option>
                                <option>David Newman</option>
                                <option>Raymond Jenkins</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>

                    <div className="add-client-btn">
                        <img src="https://img.icons8.com/material-outlined/24/000000/add.png"/>
                        <span>Add client</span>
                    </div>
                </table>
            </div>
        )
    }
}
