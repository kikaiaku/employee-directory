import React, { useContext } from "react";
import "../style/body.css";
import DataContext from "../utils/DataContext";

// const body = () => {
class body extends React.Component {
    componentDidMount() {
        const context = useContext(DataContext);

        function dateFormat(date) {
            const dateArray = date.split("-");
            const year = dateArray[0];
            const month = dateArray[1];
            const dayArray = dateArray[2].split("T");
            const day = dayArray[0];
            const formattedDate = [month, day, year].join("-");
            return formattedDate;
        }
    }
    render() {
        const context = useContext(DataContext);

        function dateFormat(date) {
            const dateArray = date.split("-");
            const year = dateArray[0];
            const month = dateArray[1];
            const dayArray = dateArray[2].split("T");
            const day = dayArray[0];
            const formattedDate = [month, day, year].join("-");
            return formattedDate;
        }
        return (
            <tbody>
                {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
                    context.developerState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
                        return (
                            <tr key={login.uuid}>
                                <td data-th="Image" className="align-middle">
                                    <img
                                        src={picture.medium}
                                        alt={"profile image for " + name.first + " " + name.last}
                                        className="img-responsive"
                                    />
                                </td>
                                <td data-th="Name" className="name-cell align-middle">
                                    {name.first} {name.last}
                                </td>
                                <td data-th="Phone" className="align-middle">
                                    {phone}
                                </td>
                                <td data-th="Email" className="align-middle">
                                    <a href={"mailto:" + email} target="__blank">
                                        {email}
                                    </a>
                                </td>
                                <td data-th="DOB" className="align-middle">
                                    {dateFormat(dob.date)}
                                </td>
                            </tr>
                        );
                    })
                ) : (
                        <></>
                    )}
            </tbody>
        );
    }
}


export default body;