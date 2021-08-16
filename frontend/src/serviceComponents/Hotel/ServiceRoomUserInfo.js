
const ServiceRoomUserInfo = ({ uid, fname, lname, gender, email, phone, rid, rname, rprice })=>{
    return(
        <>

        <tr>
            <td>
                User Id : {uid}  <br /> <br />
                Name : {fname} {lname}  <br />  <br />
                Gender : {gender}  <br />  <br />
                Email : {email}  <br />  <br />
                Phone: {phone}  <br />  <br />
            
            </td>

            <td>
                Room Id : {rid}  <br />  <br />
                Room Name :  {rname}  <br />  <br />
                Room Price : {rprice}  <br />  <br />
                
            </td>
        </tr>

        </>
    );
}

export default ServiceRoomUserInfo;